import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Box, Typography, TextField, Button, Link } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import styles from '../styles/Contact.module.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const mailto = `mailto:aktharmehroz@gmail.com?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    )}`;

    window.location.href = mailto;
  };

  return (
    <>
      <Helmet>
        <title>Contact Mehroz Akthar | Full Stack Developer</title>
        <meta 
          name="description" 
          content="Get in touch with Mehroz Akthar for , projects, or discussions about web development." 
        />
        <meta 
          name="keywords" 
          content="Mehroz Akthar contact, web developer contact,technology discussion" 
        />
        
       
        
        
        
        {/* Additional meta tags */}
        <meta name="author" content="Mehroz Akthar" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        
        {/* Structured Data for Contact Page */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "ContactPage",
              "name": "Contact Mehroz Akthar",
              "description": "Contact page for Mehroz Akthar - Full Stack Developer",
              "url": "https://aktharmehroz.com/contact",
              "author": {
                "@type": "Person",
                "name": "Mehroz Akthar",
                "jobTitle": "Full Stack Developer",
                "email": "/aktharmehroz@gmail.com",
                "url": "https:///aktharmehroz.com"
              },
              "contactPoint": [
                {
                  "@type": "ContactPoint",
                  "email": "/aktharmehroz@gmail.com",
                  "contactType": "personal",
                  "availableLanguage": "English"
                },
                {
                  "@type": "ContactPoint",
                  "email": "/aktharmehroz@aediax.com",
                  "contactType": "work",
                  "availableLanguage": "English"
                },
                {
                  "@type": "ContactPoint",
                  "telephone": "+91 8658250315",
                  "contactType": "customer service",
                  "contactOption": "TollFree",
                  "areaServed": "IN",
                  "availableLanguage": "English"
                }
              ]
            }
          `}
        </script>
      </Helmet>

      <Box className={styles.contactContainer}>
        <Typography variant="h2" className={styles.title}>
          Contact
        </Typography>

        <Typography className={styles.subtitle}>
          Let’s discuss ideas, technology, and collaboration.
        </Typography>

        {/* Contact Details */}
        <Box className={styles.contactInfo}>
          <Typography>
            <EmailIcon fontSize="small" />{' '}
            <strong>Personal:</strong> aktharmehroz@gmail.com
          </Typography>

          <Typography>
            <EmailIcon fontSize="small" />{' '}
            <strong>Official:</strong> aktharmehroz@aediax.com
          </Typography>

          <Typography>
            <WhatsAppIcon fontSize="small" />{' '}
            <Link
              href="https://wa.me/91 8658250315"
              target="_blank"
              underline="none"
              aria-label="Contact via WhatsApp"
            >
              +91 8658250315 (WhatsApp)
            </Link>
          </Typography>
        </Box>

        {/* Form */}
        <Box className={styles.formWrapper}>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className={styles.input}
              aria-label="Your Name"
            />

            <TextField
              fullWidth
              label="Email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              className={styles.input}
              aria-label="Your Email"
            />

            <TextField
              fullWidth
              label="Subject"
              name="subject"
              required
              value={formData.subject}
              onChange={handleChange}
              className={styles.input}
              aria-label="Message Subject"
            />

            <TextField
              fullWidth
              label="Message"
              name="message"
              multiline
              rows={4}
              required
              value={formData.message}
              onChange={handleChange}
              className={styles.input}
              aria-label="Your Message"
            />

            <Button type="submit" className={styles.submitButton}>
              Send Message
            </Button>
          </form>
        </Box>
      </Box>
    </>
  );
}

export default Contact;