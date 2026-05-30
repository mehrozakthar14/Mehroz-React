import React from 'react';
import { Box, Typography, Card, CardContent, Link } from '@mui/material';
import { Helmet } from 'react-helmet';
import styles from '../styles/About.module.css';

function About() {
  return (
    <>
      {/* ===== SEO META TAGS ===== */}
      <Helmet>
        <title>About Mehroz Akthar | full-stack software developer – AediaX Tech Private Limited</title>

        <meta
          name="description"
          content="Learn about Mehroz Akthar, full-stack software developer of AediaX Tech Private Limited. An Indian full-stack software developer and entrepreneur building AI-driven enterprise and academic management systems."
        />

        <meta
          name="keywords"
          content="Mehroz Akthar, AediaX Tech, Full Stack Developer"
        />

        <meta name="author" content="AediaX Tech Private Limited" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph (Social Sharing) */}
        <meta property="og:title" content="About Mehroz Akthar | AediaX Tech" />
        <meta
          property="og:description"
          content="full-stack software developer intern at AediaX Tech Private Limited, building AI-powered software, enterprise platforms, and scalable digital systems."
        />
        

      </Helmet>

      {/* ===== PAGE CONTENT ===== */}
     <Box id={styles.aboutSection} className={styles.aboutContainer}>

      <Typography id={styles.aboutTitle} variant="h2" className={styles.title}>
        About Mehroz Akthar
      </Typography>

      <Typography id={styles.aboutSubtitle} variant="h5" className={styles.subtitle}>
        full-stack software developer intern , AediaX Tech Private Limited
      </Typography>

      {/* Biography */}
      <Typography id={styles.bioPara1} className={styles.bio}>
        Mehroz Akthar (born 14th February 2006) is an Indian full-stack software developer,
        Sambalpur, Odisha (768001). 
      </Typography>

      

      <Typography id={styles.bioPara3} className={styles.bio}>
        She is currently pursuing a Bachelor in Information Science and Telecommunication 
         (2024–2027).
      </Typography>

      {/* Cards */}
      <Box id={styles.cardsWrapper} className={styles.cardContainer}>

        {/* Professional Role */}
        <Card id={styles.professionalRoleCard} className={styles.card}>
          <CardContent>
            <Typography id={styles.professionalRoleTitle} variant="h6" className={styles.cardTitle}>
              Professional Role
            </Typography>

            <Typography id={styles.professionalRoleText} className={styles.cardText}>
              Mehroz Akthar serves as the full-stack software developer intern at AediaX Tech
              Private Limited.
            </Typography>

          </CardContent>
        </Card>

        {/* Academic Background */}
        <Card id={styles.academicCard} className={styles.card}>
          <CardContent>
            <Typography id={styles.academicTitle} variant="h6" className={styles.cardTitle}>
              Academic Background
            </Typography>

            <Typography id={styles.academicText} className={styles.cardText}>
              Mehroz is a BSc. student in Information Science and Telecommunication
              (2024–2027). Her academic journey reflects a balance between theoretical
              foundations and real-world application, with strong emphasis on software
              development principles and emerging technologies.
            </Typography>
          </CardContent>
        </Card>

      </Box>
    </Box>
       </>
  );
}

export default About;
