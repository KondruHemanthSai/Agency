/**
 * FormSubmit Configuration
 * 
 * FormSubmit is a FREE form service - no signup, no API keys needed!
 * It automatically sends emails and supports autoresponders.
 * 
 * Setup (super simple):
 * 1. Just add your email address below
 * 2. That's it! FormSubmit handles everything.
 */

export const emailConfig = {
  // Your email address (where you want to receive form submissions)
  ownerEmail: import.meta.env.VITE_OWNER_EMAIL || 'your-email@gmail.com',
  
  // Get FormSubmit API URL (constructs endpoint with email)
  getApiUrl: () => {
    return `https://formsubmit.co/ajax/${emailConfig.ownerEmail}`;
  },
  
  // Automated message to send to users
  // YOU CAN CUSTOMIZE THIS MESSAGE
  automatedMessage: `Thank you for contacting Buildoholics!

We've received your message and will get back to you within 24 hours on business days.

Best regards,
The Buildoholics Team`,
  
  // Subject for the email you receive
  emailSubject: 'New Contact Form Submission - Buildoholics',
};

