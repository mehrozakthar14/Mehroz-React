import React from 'react';
import { Box, Typography, Link, Tooltip } from '@mui/material';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';       
import GitHubIcon from '@mui/icons-material/GitHub';                

import styles from '../styles/Footer.module.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <Box
      component="footer"
      className={styles.footer}
      style={{ background: 'rgb(3, 11, 30)' }}
    >
      {/* Top Section */}
      <Box className={styles.topFooter}>

        {/* Navigation */}
        <Box className={styles.navLinks}>
          {navLinks.map((link) => (
            <Link key={link.name} href={link.path} className={styles.navLink}>
              {link.name}
            </Link>
          ))}
        </Box>

        {/* Social & Professional Icons */}
        <Box className={styles.socialLinks}>

          <Tooltip title="LinkedIn">
            <Link href="https://www.linkedin.com/in/mehroz-akthar-a7a994383" target="_blank" className={styles.socialLink}>
              <LinkedInIcon />
            </Link>
          </Tooltip>

          <Tooltip title="Email">
            <Link href="mailto:mehrozakthar@gmail.com" className={styles.socialLink}>
              <EmailIcon />
            </Link>
          </Tooltip>

          <Tooltip title="Phone / WhatsApp">
            <Link href="tel:+91 8658250315" className={styles.socialLink}>
              <PhoneIcon />
            </Link>
          </Tooltip>


          <Tooltip title="GitHub">
            <Link href="https://github.com/mehrozakthar14" target="_blank" className={styles.socialLink}>
              <GitHubIcon />
            </Link>
          </Tooltip>

          

        </Box>
      </Box>

      {/* Divider */}
      <Box className={styles.divider}></Box>

      {/* Copyright */}
      <Typography variant="body2" className={styles.text}>
        © {currentYear} <strong>Mehroz Akthar</strong> ·Full Stack Developer , AediaX Tech Private Limited
      </Typography>
    </Box>
  );
}

export default Footer;
