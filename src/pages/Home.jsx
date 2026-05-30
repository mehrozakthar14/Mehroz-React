import React, { useEffect, useState } from 'react';
import { Box, Typography, Button, Paper } from '@mui/material';
import MehrozImage from "../assets/logo.png";
import styles from '../styles/Home.module.css';

/* Professional Roles */
const roles = [
  'Software Developer',
  'Engineer'
];

function Home() {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const currentIndex = loopNum % roles.length;
    const fullText = roles[currentIndex];

    const handleTyping = () => {
      setDisplayText(prev =>
        isDeleting
          ? fullText.substring(0, prev.length - 1)
          : fullText.substring(0, prev.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 150);

      if (!isDeleting && displayText === fullText) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setLoopNum(prev => prev + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, loopNum, typingSpeed]);

  return (
    <Box id={styles.homeSection} className={styles.homeContainer}>
      <Box id={styles.homeWrapper} className={styles.contentWrapper}>

        {/* LEFT CONTENT */}
        <Box id={styles.homeTextSection} className={styles.textSection}>
          <Typography
            id={styles.greetingText}
            variant="h5"
            className={styles.greeting}
          >
            Hello, I'm
          </Typography>

          <Typography
            id={styles.nameText}
            variant="h2"
            className={styles.name}
          >
            Mehroz Akthar
          </Typography>

          <Typography
            id={styles.roleText}
            variant="h4"
            className={styles.role}
          >
            <span id={styles.highlightText} className={styles.highlight}>
              {displayText}
            </span>
          </Typography>

          <Typography
            id={styles.descriptionText}
            variant="body1"
            className={styles.description}
          >
            I am a  software developer, serving as an intern at
            <strong> AediaX Tech Private Limited</strong>.
            I focus on building scalable software systems, enterprise platforms,
            and modern web applications that bridge innovation with real-world impact.
          </Typography>

          <Button
            id={styles.moreButtonId}
            variant="contained"
            href="/about"
            className={styles.moreButton}
          >
            More About Me
          </Button>
        </Box>

        {/* RIGHT CONTENT */}
        <Box id={styles.homeImageSection} className={styles.imageSection}>
          <Paper
            elevation={10}
            id={styles.imagePaper}
            className={styles.imageContainer}
          >
            <img
              id={styles.profileImg}
              src={MehrozImage}
              alt="Mehroz Akthar"
              className={styles.profileImage}
            />
          </Paper>
        </Box>

      </Box>
    </Box>
  );
}

export default Home;
