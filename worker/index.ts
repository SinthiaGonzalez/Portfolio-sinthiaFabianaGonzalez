// Worker de Cloudflare del portfolio.
// - POST /api/contacto: recibe el formulario de Contacto y lo reenvía por email a Sinthia
//   con Cloudflare Email Routing (binding SEND_EMAIL). "Responder" contesta al visitante.
// - Todo lo demás: la web estática que genera Astro en dist/ (binding ASSETS).
import { EmailMessage } from 'cloudflare:email';
import { createMimeMessage, Mailbox } from 'mimetext';

interface Env {
  ASSETS: { fetch: (req: Request) => Promise<Response> };
  SEND_EMAIL: { send: (msg: EmailMessage) => Promise<void> };
  LIMITE_CONTACTO?: { limit: (o: { key: string }) => Promise<{ success: boolean }> };
}

const REMITENTE = 'contacto@sinthiagonzalez.com'; // dirección del dominio (Email Routing)
const DESTINO = 'gonzalez.sinthia@icloud.com'; // email verificado de Sinthia
const ORIGENES = ['https://sinthiagonzalez.com', 'https://www.sinthiagonzalez.com', 'http://localhost:8787', 'http://127.0.0.1:8787'];

const json = (data: unknown, status = 200) =>
  new Response(JSON.stringify(data), { status, headers: { 'content-type': 'application/json; charset=utf-8' } });

const limpiar = (v: unknown, max: number) => String(v ?? '').replace(/\r/g, '').trim().slice(0, max);
const aBase64 = (texto: string) => {
  let bin = '';
  for (const byte of new TextEncoder().encode(texto)) bin += String.fromCharCode(byte);
  return btoa(bin);
};
const emailValido = (e: string) => /^[^\s@<>"]+@[^\s@<>"]+\.[^\s@<>"]{2,}$/.test(e);

async function contacto(request: Request, env: Env): Promise<Response> {
  if (request.method !== 'POST') return json({ ok: false, error: 'Método no permitido' }, 405);

  // Solo se acepta desde la propia web
  const origen = request.headers.get('origin') ?? '';
  if (origen && !ORIGENES.includes(origen)) return json({ ok: false, error: 'Origen no permitido' }, 403);

  // Límite de envíos por visitante (protección contra spam)
  const ip = request.headers.get('cf-connecting-ip') ?? 'desconocida';
  if (env.LIMITE_CONTACTO) {
    const { success } = await env.LIMITE_CONTACTO.limit({ key: ip });
    if (!success) return json({ ok: false, error: 'Has enviado varios mensajes seguidos. Espera un minuto e inténtalo de nuevo.' }, 429);
  }

  let datos: Record<string, unknown>;
  try {
    datos = await request.json();
  } catch {
    return json({ ok: false, error: 'Datos no válidos' }, 400);
  }

  // Campo trampa: las personas no lo ven; si viene relleno es un bot
  if (limpiar(datos.web, 200)) return json({ ok: true });

  const nombre = limpiar(datos.name, 100);
  const email = limpiar(datos.email, 200);
  const asunto = limpiar(datos.subject, 150);
  const mensaje = limpiar(datos.message, 5000);

  if (!nombre || !emailValido(email) || mensaje.length < 5) {
    return json({ ok: false, error: 'Revisa tu nombre, tu e-mail y el mensaje.' }, 400);
  }

  try {
    const msg = createMimeMessage();
    msg.setSender({ name: 'Portfolio · Contacto', addr: REMITENTE });
    msg.setRecipient(DESTINO);
    // "Responder" contesta directamente al visitante
    msg.setHeader('Reply-To', new Mailbox({ name: nombre.replace(/[<>"]/g, ''), addr: email }));
    msg.setSubject(`Portfolio: ${asunto || `mensaje de ${nombre}`}`);
    const cuerpo = `Nuevo mensaje desde sinthiagonzalez.com\n\nNombre: ${nombre}\nE-mail: ${email}\nAsunto: ${asunto || '(sin asunto)'}\n\n${mensaje}\n\n—\nResponde a este correo para contestar directamente a ${nombre}.`;
    // En base64 para que tildes, eñes y emojis lleguen bien a cualquier programa de correo
    msg.addMessage({ contentType: 'text/plain', charset: 'UTF-8', encoding: 'base64', data: aBase64(cuerpo) });
    await env.SEND_EMAIL.send(new EmailMessage(REMITENTE, DESTINO, msg.asRaw()));
    return json({ ok: true });
  } catch (e) {
    console.error('Error enviando el email de contacto', e);
    return json({ ok: false, error: 'No se ha podido enviar ahora mismo.' }, 502);
  }
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    if (url.pathname === '/api/contacto') return contacto(request, env);
    return env.ASSETS.fetch(request);
  },
};
