import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import { styled } from '@mui/material/styles';

import Download from '../../image/download.jpg';
import Android from '../../image/Android.png';
import Github from '../../image/GitHub.png';
import PHP from '../../image/PHP.png';
import Python from '../../image/Python.png';
import Raspberry_Pi from '../../image/Raspberry_Pi_Logo.jpg';
import C from '../../image/c.png';
import Css from '../../image/css.png';
import Express from '../../image/express.png';
import Handlebars from '../../image/handlebars.png';
import Java from '../../image/java.png';
import Javascript from '../../image/javascript.jpeg';
import Portugol from '../../image/Portugol.jpeg';
import Logic from '../../image/programming logic.png';
import ReactImg from '../../image/react.jpeg';
import Sql from '../../image/sql.jpeg';
import Three from '../../image/three.png';
import VSCODE from '../../image/vs.jpeg';
import Web from '../../image/web sistem projects.png';
import Others from '../../image/others.jpg';

const skills = [
  { src: Download, title: "Download" },
  { src: Android, title: "Android" },
  { src: Github, title: "GitHub" },
  { src: PHP, title: "PHP" },
  { src: Python, title: "Python" },
  { src: Raspberry_Pi, title: "Raspberry Pi" },
  { src: C, title: "C" },
  { src: Css, title: "CSS" },
  { src: Express, title: "Express" },
  { src: Handlebars, title: "Handlebars" },
  { src: Java, title: "Java" },
  { src: Javascript, title: "JavaScript" },
  { src: Portugol, title: "Portugol" },
  { src: Logic, title: "Programming Logic" },
  { src: ReactImg, title: "React" },
  { src: Sql, title: "SQL" },
  { src: Three, title: "Three.js" },
  { src: VSCODE, title: "Visual Studio Code" },
  { src: Web, title: "Web Projects" },
  { src: Others, title: "Others" },
];

const SkillCard = styled(Card)(({ theme }) => ({
  boxShadow: theme.shadows[5],
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(1),
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  transition: 'transform 0.3s, box-shadow 0.3s',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: theme.shadows[10],
  },
}));

export default function SkillsIcons() {
  return (
    <Grid container spacing={2} justifyContent="center">
      {skills.map((skill, index) => (
        <Grid item xs={6} sm={3} md={2} lg={2} key={index} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <SkillCard>
            <img
              src={skill.src}
              alt={skill.title}
              style={{ width: '100px', height: '100px', objectFit: 'contain' }}
            />
          </SkillCard>
        </Grid>
      ))}
    </Grid>
  );
}
