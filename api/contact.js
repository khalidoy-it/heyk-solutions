// Serverless function for handling contact form submissions
// This can be deployed to Vercel, Netlify, or AWS Lambda

export default async function handler(req, res) {
    // Set CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const { name, email, message } = req.body;

        // Validation
        if (!name || !email || !message) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({ error: 'Invalid email address' });
        }

        // Here you can integrate with email service:
        // - SendGrid
        // - Mailgun
        // - AWS SES
        // - Resend
        // - Nodemailer with SMTP

        // Example: Using Resend (recommended for simple deployments)
        /*
        const { Resend } = require('resend');
        const resend = new Resend(process.env.RESEND_API_KEY);
        
        await resend.emails.send({
            from: 'website@heyk-solutions.com',
            to: 'hello@heyk-solutions.com',
            subject: `New Contact Form Submission from ${name}`,
            html: `
                <h2>New Contact Form Submission</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong></p>
                <p>${message.replace(/\n/g, '<br>')}</p>
            `,
        });
        */

        // For now, return success (you need to add actual email service)
        return res.status(200).json({ 
            success: true, 
            message: 'Message received successfully' 
        });

    } catch (error) {
        console.error('Error processing contact form:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
}
