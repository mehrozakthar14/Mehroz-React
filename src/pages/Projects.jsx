import React from 'react';
import { Helmet } from 'react-helmet';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Chip,
  Link
} from '@mui/material';

import SchoolIcon from '@mui/icons-material/School';
import LanguageIcon from '@mui/icons-material/Language';
import AndroidIcon from '@mui/icons-material/Android';
import SecurityIcon from '@mui/icons-material/Security';
import ArticleIcon from '@mui/icons-material/Article';
import StorageIcon from '@mui/icons-material/Storage';
import GroupIcon from '@mui/icons-material/Group';

import styles from '../styles/Projects.module.css';

const TechStack = ({ tech }) => (
  <Box className={styles.tech}>
    {tech.map((t, i) => (
      <Chip key={i} label={t} size="small" style={{color:'rgb(66, 201, 255)'}} />
    ))}
  </Box>
);

function Projects() {
  const projects = [
    
    {
      title: "My Native place",
      description: "A simple web page using multipage concepts",
      tech: ['HTML','CSS','JavaScript'],
      link: "https://mehrozakthar14.github.io/native/",
      icon: <LanguageIcon className={styles.icon} />,
      color: styles.green
    },
    {
     title: "Portfolio",
      description: "This is my first project- My first Portfolio website ",
      tech: ['HTML','CSS','JavaScript'],
      link: "https://mehroz-portfolio.web.app",
      icon: <LanguageIcon className={styles.icon} />,
      color: styles.green
    }
    
  ];

  // Create meta description from projects
  const metaDescription = `Professional projects by Mehroz Akthar including ${projects.slice(0, 3).map(p => p.title).join(', ')} and more. Explore enterprise solutions, AI systems, and research publications.`;

  return (
    <>
      <Helmet>
        <title>Projects by Mehroz Akthar,AI Systems</title>
        <meta 
          name="description" 
          content={metaDescription}
        />
        <meta 
          name="keywords" 
          content="Mehroz Akthar projects, web development projects, AI systems, React projects, enterprise solutions, library management system, signature verification, research publications"
        />
        
       
        {/* Additional meta tags */}
        <meta name="author" content="Mehroz Akthar"/>
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        
        {/* Structured Data for Projects/Portfolio */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Projects Portfolio - Mehroz Akthar",
            "description": "Collection of professional projects and contributions by Mehroz Akthar",
            "url": "https://mehrozakthar.projects",
            "numberOfItems": projects.length,
            "itemListElement": projects.map((project, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "item": {
                "@type": "CreativeWork",
                "name": project.title,
                "description": project.description,
                "url": project.link || "https://mehrozakthar.projects",
                "keywords": project.tech.join(", "),
                "author": {
                  "@type": "Person",
                  "name": "Mehroz Akthar"}
              }
            }))
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
                "item": "https://mehrozakthar.com"
              }
            ]
          })}
        </script>
      </Helmet>

      <Box className={styles.container}>
        <Typography variant="h3" className={styles.title}>
          Work & Contributions
        </Typography>

        <Typography className={styles.subtitle}>
          Professional systems, enterprise platforms, and research work
        </Typography>

        <Box className={styles.cards}>
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className={`${styles.card} ${project.color}`}
              itemScope
              itemType="https://schema.org/CreativeWork"
            >
              <CardContent>
                {project.icon}
                <Typography 
                  className={styles.cardTitle}
                  itemProp="name"
                >
                  {project.title}
                </Typography>
                <Typography 
                  className={styles.text}
                  itemProp="description"
                >
                  {project.description}
                </Typography>
                <Box itemProp="keywords" style={{ display: 'none' }}>
                  {project.tech.join(', ')}
                </Box>
                <TechStack tech={project.tech} />
                {project.link && (
                  <Link 
                    href={project.link} 
                    target="_blank"
                    rel="noopener noreferrer"
                    itemProp="url"
                    aria-label={`Visit ${project.title}`}
                  >
                    {project.title.includes('Native place') ? 'Visit Platform' :  
                    project.title.includes('PORTFOLIO') ? 'View Publication' :
                     'View Project'}
                  </Link>
                )}
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>
    </>
  );
}

export default Projects;