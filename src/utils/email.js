import { createTransport } from 'nodemailer';
import { EMAIL } from '../config/constants.js';

const smtpConfig = {
  host: EMAIL.HOST,
  port: EMAIL.PORT,
  secure: EMAIL.SECURE,
  auth: {
    user: EMAIL.AUTH_USER,
    pass: EMAIL.AUTH_PASS,
  },
};

const transporter = createTransport(smtpConfig);

export default function sendEmail(subject, message) {
  transporter.sendMail({
    from: `"JAWSTRENGTH.COM" <contactjawstrength@gmail.com>`,
    to: 'contactjawstrength@gmail.com',
    // subject: `${req.body.name} - ${req.body.email}`,
    // html: `<pre> ${JSON.stringify(req.body, null, '  ')} </pre>`,
    subject: subject,
    html: message,
  });
}
