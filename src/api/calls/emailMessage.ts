import emailjs from "@emailjs/browser";
import { APIReturn } from "@/types";

const serviceId = process.env.EMAILJS_SERVICE_ID as string;
const templateId = process.env.EMAILJS_TEMPLATE_ID as string;

export async function emailMessage(name: string, email: string, subject: string, message: string): Promise<APIReturn> {
  try {
    await emailjs.send(serviceId, templateId, {
      name: name,
      email: email,
      subject: subject,
      message: message
    });
    return { error: false };
  } catch {
    return { error: true };
  }
}
