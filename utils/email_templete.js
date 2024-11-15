 export const Verification_Email_Template =(firstName,verificationToken)=>{
   return `
   <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Verify Your Email Address</title>
  <style>
    /* Add your company's branding styles here */
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      background-color: #f4f4f4;
      padding: 20px;
    }
    .header {
      background-color: #007bff;
      color: #fff;
      padding: 20px;
      text-align: center;
    }
    .content {
      padding: 20px;
    }
    .button {
      display: inline-block;
      background-color: #007bff;
      color: #fff;
      text-decoration: none;
      padding: 10px 20px;
      border-radius: 5px;
      margin-top: 20px;
    }
    .footer {
      text-align: center;
      color: #999;
      font-size: 14px;
      padding-top: 20px;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <img src="your-logo.png" alt="RentLink" height="40">
    </div>
    <div class="content">
      <h2>Hello, ${firstName}</h2>
      <p>Thank you for registering with <b>RentLink</b>. To complete your registration, please verify your email address by clicking the button below:</p>
      <center>
        <a href="${process.env.CLIENT_URL}/verify-email/${verificationToken}" class="button">Verify Email Address</a>
      </center>
      <p>If the button doesn't work, you can also click on this link: <a href="${process.env.CLIENT_URL}/verify-email/${verificationToken}">${process.env.CLIENT_URL}/verify-email/${verificationToken}</a></p>
      <p>This verification link will expire in 1 hour.</p>
      <p>If you didn't create an account, you can safely ignore this email.</p>
    </div>
    <div class="footer">
      <p>&copy; ${new Date().getFullYear()} RentLink. All rights reserved. | <a href="/privacy-policy">Privacy Policy</a> | <a href="/unsubscribe">Unsubscribe</a></p>
    </div>
  </div>
</body>
</html>
` ;
};