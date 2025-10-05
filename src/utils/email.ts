import type { EmailNotification } from "./types";

export async function notifyEmail(email: EmailNotification): Promise<boolean> {
  const response = await fetch('https://email-api-alpha-six.vercel.app/data', {
    method: 'POST',
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify(email),
  })
  return response.ok;
}