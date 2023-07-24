import emailjs from "@emailjs/browser";
import { APIReturn } from "../../types";

const serviceId = "service_kw1c01o";
const templateId = "default_template_id";

export async function emailMessage(name: string, email: string, subject: string, message: string): Promise<APIReturn> {
  try {
    await emailjs.send(serviceId, templateId, {
      name: name,
      email: email,
      subject: subject,
      message: message
    });
  } catch {
    return { response: 401 };
  } finally {
    return { response: 200 };
  }
}
