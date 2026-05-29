import React from 'react';
import { Helmet } from 'react-helmet';
import { Box, Typography, Card, CardContent, Chip } from '@mui/material';

import WebIcon from '@mui/icons-material/Language';
import MobileIcon from '@mui/icons-material/Smartphone';
import CloudIcon from '@mui/icons-material/Cloud';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SecurityIcon from '@mui/icons-material/Security';
import SchoolIcon from '@mui/icons-material/School';

import styles from '../styles/Services.module.css';

const Tech = ({ items }) => (
  <Box className={styles.tech}>
    {items.map((item, i) => (
      <Chip 
        key={i} 
        label={item} 
        size="small" 
        style={{color:'rgb(66, 201, 255)'}} 
        aria-label={`Technology: ${item}`}
      />
    ))}
  </Box>
);

function Services() {
  const services = [
    {
      title: "Web Application Development",
      description: "Design and development of responsive, SEO-optimized, and high-performance web applications for enterprises and institutions.",
      tech: ['React', 'HTML', 'CSS', 'JavaScript', 'TypeScript', 'Sitemap'],
      icon: <WebIcon className={styles.icon} />,
      color: styles.blue,
      category: "Web Development"
    }
  
  ];

  // Create meta description from services
  const metaDescription = `Professional services by Tanmay Sahu including ${services.map(s => s.category).join(', ')}. Offering enterprise-grade solutions in web, mobile, AI, and security.`;

  // Create keywords from all tech stacks
  const allKeywords = Array.from(new Set(services.flatMap(s => s.tech))).join(', ');

  return (
    <>
      <Helmet>
        <title>Services | Tanmay Sahu - Web, Mobile, AI & Security Solutions</title>
        <meta 
          name="description" 
          content={metaDescription}
        />
        <meta 
          name="keywords" 
          content={`Tanmay Sahu services, ${allKeywords}, web development, mobile app development, AI solutions, cybersecurity, training, mentorship`}
        />
        
        
        {/* Additional meta tags */}
        <meta name="author" content="Tanmay Sahu" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="subject" content="Web Development, Mobile Development, AI Solutions" />
        <meta name="classification" content="Technology Services" />
        
        {/* Structured Data for Services */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Tanmay Sahu Development Services",
            "description": "Professional web, mobile, AI, and security development services",
            "url": "https://tanmaysahu.com/services",
            "provider": {
              "@type": "Person",
              "name": "Tanmay Sahu",
              "jobTitle": "Web Developer & AI Engineer",
              "email": "tanmay03062005@gmail.com",
              "url": "https://tanmaysahu.com"
            },
            "areaServed": {
              "@type": "Country",
              "name": "India"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Development Services",
              "itemListElement": services.map((service, index) => ({
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": service.title,
                  "description": service.description,
                  "category": service.category,
                  "serviceType": service.tech.join(", "),
                  "provider": {
                    "@type": "Person",
                    "name": "Tanmay Sahu"
                  }
                },
                "position": index + 1
              }))
            }
          })}
        </script>
        
        {/* Breadcrumb Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://tanmaysahu.com"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Services",
                "item": "https://tanmaysahu.com/services"
              }
            ]
          })}
        </script>
      </Helmet>

      <Box className={styles.container}>
        <Typography variant="h3" className={styles.title}>
          Services
        </Typography>

        <Typography className={styles.subtitle}>
          Building scalable, secure, and intelligent digital solutions
        </Typography>

        <Box className={styles.cards}>
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`${styles.card} ${service.color}`}
              itemScope
              itemType="https://schema.org/Service"
              aria-labelledby={`service-title-${index}`}
            >
              <CardContent>
                <div aria-hidden="true">
                  {service.icon}
                </div>
                <Typography 
                  id={`service-title-${index}`}
                  className={styles.cardTitle}
                  itemProp="name"
                >
                  {service.title}
                </Typography>
                <Typography 
                  className={styles.text}
                  itemProp="description"
                >
                  {service.description}
                </Typography>
                <Box 
                  itemProp="serviceType" 
                  style={{ display: 'none' }}
                >
                  {service.tech.join(', ')}
                </Box>
                <Box 
                  itemProp="category" 
                  style={{ display: 'none' }}
                >
                  {service.category}
                </Box>
                <Tech items={service.tech} />
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>
    </>
  );
}

export default Services;