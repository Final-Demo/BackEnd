export const Verification_Email_Template = (firstName, verificationToken) => {
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

export const resetPasswordTemplate = (firstName, resetPasswordToken) => {
    return `
  <!DOCTYPE html>
    <html lang="en">
    <head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Reset Your Password</title>
  <style>
    body {
      font-family: 'Arial', sans-serif;
      margin: 0;
      padding: 0;
      background-color: #f9f9f9;
      color: #333;
      line-height: 1.6;
    }

    .container {
      max-width: 600px;
      margin: 20px auto;
      background-color: #ffffff;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      overflow: hidden;
    }

    .header {
      background-color: #007bff;
      color: #ffffff;
      padding: 20px;
      text-align: center;
    }

    .header img {
      height: 40px;
      margin-bottom: 10px;
    }

    .header h1 {
      margin: 0;
      font-size: 24px;
    }

    .content {
      padding: 20px;
      text-align: left;
    }

    .content h2 {
      font-size: 22px;
      margin: 0 0 15px;
      color: #007bff;
    }

    .content p {
      margin: 10px 0;
      font-size: 16px;
    }

    .button {
      display: inline-block;
      background-color: #007bff;
      color: #ffffff;
      text-decoration: none;
      padding: 12px 25px;
      border-radius: 5px;
      font-size: 16px;
      margin-top: 20px;
      text-align: center;
    }

    .button:hover {
      background-color: #0056b3;
    }

    .copy-link {
      display: block;
      margin-top: 20px;
      font-size: 14px;
      color: #007bff;
      text-decoration: underline;
      word-wrap: break-word;
    }

    .footer {
      text-align: center;
      font-size: 14px;
      color: #999;
      padding: 15px;
      background-color: #f4f4f4;
      border-top: 1px solid #eaeaea;
    }

    .footer a {
      color: #007bff;
      text-decoration: none;
    }

    .footer a:hover {
      text-decoration: underline;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Reset Your Password</h1>
    </div>
    <div class="content">
      <h2>Hello, ${firstName}</h2>
      <p>We received a request to reset your password. Click the button below to set a new password:</p>
      <center>
        <a href="${process.env.CLIENT_URL}/reset-password/${resetPasswordToken}" class="button">Reset Password</a>
      </center>
      <p>If the button above doesn't work, copy and paste this link into your browser:</p>
      <a href="${process.env.CLIENT_URL}/reset-password/${resetPasswordToken}" class="copy-link">${process.env.CLIENT_URL}/reset-password/${resetPasswordToken}</a>
      <p>This link will expire in 1 hour for your security.</p>
      <p>If you didn't request a password reset, please ignore this email. Your account remains secure.</p>
    </div>
    <div class="footer">
      <p>&copy; ${new Date().getFullYear()} RentLink. All rights reserved. | <a href="/privacy-policy">Privacy Policy</a> | <a href="/unsubscribe">Unsubscribe</a></p>
    </div>
  </div>
</body>
</html>
  `;
}

export const resetsuccessTemplate = (firstName) => {
    return `
    <!DOCTYPE html>
      <html>
      <head>
        <style>
          body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: #f4f4f7;
            color: #333333;
            margin: 0;
            padding: 0;
            line-height: 1.6;
          }
          .container {
            max-width: 600px;
            margin: 30px auto;
            background: #ffffff;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            overflow: hidden;
            padding: 20px 30px;
          }
          .header {
            text-align: center;
            padding: 20px 0;
          }
          .header img {
            width: 120px;
          }
          .header h1 {
            color: #4CAF50;
            font-size: 24px;
            margin: 10px 0;
          }
          .content {
            margin: 20px 0;
            font-size: 16px;
          }
          .content p {
            margin: 15px 0;
          }
          .content a {
            color: #4CAF50;
            text-decoration: none;
          }
          .footer {
            text-align: center;
            margin-top: 20px;
            font-size: 14px;
            color: #666666;
          }
          .footer a {
            color: #4CAF50;
            text-decoration: none;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Password Reset Confirmation</h1>
          </div>
          <div class="content">
            <p>Hi ${firstName},</p>
            <p>Your password has been reset successfully. You can now log in to your account using your new password.</p>
            <p>If you didn’t request this change, please contact our support team immediately to secure your account.</p>
            <p>To log in, visit: <a href="https://yourapp.com/login" target="_blank">https://yourapp.com/login</a></p>
            <p>Thank you for trusting us to keep your information secure.</p>
          </div>
          <div class="footer">
            <p>If you have any questions, feel free to <a href="mailto:support@yourapp.com">contact us</a>.</p>
            <p>&copy; ${new Date().getFullYear()} Your App. All Rights Reserved.</p>
          </div>
        </div>
      </body>
      </html>
      `
}