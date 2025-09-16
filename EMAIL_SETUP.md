# Email Setup Guide for Contact Form

This guide will help you set up email functionality for your portfolio contact form using Nodemailer.

## Prerequisites

- Node.js/Bun installed
- An email account (Gmail recommended for simplicity)

## Setup Instructions

### 1. Create Environment Variables

1. Copy the example environment file:
   ```bash
   cp .env.example .env.local
   ```

2. Open `.env.local` and update the email credentials:
   ```env
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   ```

### 2. Gmail Setup (Recommended)

For Gmail, you need to use an App Password instead of your regular password:

1. **Enable 2-Factor Authentication**:
   - Go to your Google Account settings
   - Navigate to Security → 2-Step Verification
   - Follow the setup process

2. **Generate App Password**:
   - In Google Account settings, go to Security
   - Under "2-Step Verification", click "App passwords"
   - Select "Mail" and your device
   - Copy the generated 16-character password
   - Use this password in your `.env.local` file

### 3. Alternative Email Services

#### Outlook/Hotmail
```env
EMAIL_USER=your-email@outlook.com
EMAIL_PASS=your-password
```

#### Yahoo
```env
EMAIL_USER=your-email@yahoo.com
EMAIL_PASS=your-app-password
```

#### Custom SMTP
If you have a custom email server, you can modify the transporter configuration in `/src/app/api/contact/route.ts`:

```typescript
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: parseInt(process.env.EMAIL_PORT || '587'),
  secure: process.env.EMAIL_SECURE === 'true',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});
```

And add these to your `.env.local`:
```env
EMAIL_HOST=smtp.yourdomain.com
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USER=your-email@yourdomain.com
EMAIL_PASS=your-password
```

## Testing

1. Start your development server:
   ```bash
   bun dev
   ```

2. Navigate to your contact page
3. Fill out the contact form
4. Submit the form
5. Check your email inbox for the message

## Features

- ✅ Form validation (client-side and server-side)
- ✅ Email format validation
- ✅ Loading states and user feedback
- ✅ Error handling
- ✅ Responsive design
- ✅ Professional email template
- ✅ Reply-to functionality (you can reply directly to the sender)

## Troubleshooting

### Common Issues

1. **"Invalid login" error**:
   - Make sure you're using an App Password for Gmail
   - Check that 2FA is enabled
   - Verify your email credentials

2. **"Connection timeout" error**:
   - Check your internet connection
   - Verify SMTP settings for custom servers
   - Try a different email service

3. **Form not submitting**:
   - Check browser console for errors
   - Verify API route is accessible at `/api/contact`
   - Check server logs for errors

### Debug Mode

To see detailed error logs, check your terminal/console when running the development server.

## Security Notes

- Never commit your `.env.local` file to version control
- Use App Passwords instead of regular passwords
- Consider implementing rate limiting for production use
- Add CAPTCHA for additional spam protection if needed

## Production Deployment

When deploying to production:

1. Set environment variables in your hosting platform
2. Use a dedicated email service like SendGrid, Mailgun, or AWS SES for better deliverability
3. Consider implementing rate limiting and spam protection
4. Monitor email delivery rates and bounce rates
