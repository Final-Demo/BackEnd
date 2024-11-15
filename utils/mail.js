import { createTransport } from "nodemailer";

     export   const sendEmail = createTransport({
           host: "smtp.gmail.com",
           port: 465,
           auth: {
               user: "quaicoephilip14@gmail.com",
               pass: process.env.SMTP_PASS
           }
       })