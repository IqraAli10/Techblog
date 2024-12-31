import emailjs from '@emailjs/browser';

const EMAILJS_SERVICE_ID = 'service_jqolcee';
const EMAILJS_CONTACT_TEMPLATE_ID = 'template_a6bo7vp';
const EMAILJS_NEWSLETTER_TEMPLATE_ID = 'template_newsletter';
const EMAILJS_PUBLIC_KEY = 'Jq0x8n8p5vcQn1m0_';
const ADMIN_EMAIL = 'aiqra9786@gmail.com';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface NewsletterData {
  email: string;
}

export async function sendContactEmail(data: ContactFormData) {
  try {
    await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_CONTACT_TEMPLATE_ID,
      {
        to_email: ADMIN_EMAIL,
        from_name: data.name,
        from_email: data.email,
        subject: data.subject,
        message: data.message,
      },
      EMAILJS_PUBLIC_KEY
    );
    return true;
  } catch (error) {
    console.error('Error sending contact email:', error);
    return false;
  }
}

export async function subscribeToNewsletter(data: NewsletterData) {
  try {
    await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_NEWSLETTER_TEMPLATE_ID,
      {
        to_email: ADMIN_EMAIL,
        subscriber_email: data.email,
        subject: 'New Newsletter Subscription',
        message: `New subscriber: ${data.email}`,
      },
      EMAILJS_PUBLIC_KEY
    );
    return true;
  } catch (error) {
    console.error('Error subscribing to newsletter:', error);
    return false;
  }
}