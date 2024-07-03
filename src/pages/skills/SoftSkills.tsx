import React from 'react';
import Typography from '@mui/material/Typography';
import { WorkOutline } from '@mui/icons-material';
import { styled } from '@mui/material/styles';

const softSkills = [
  "• Problem Solving",
  "• Negotiation",
  "• Communication",
  "• Creativity",
  "• Leadership",
  "• Organizational",
  "• Adaptability",
  "• Responsibility",
  "• Time Management",
  "• Hard Work",
  "• Collaboration",
  "• Teaching, Supervision & Managing"
];

const IconTitle = styled(Typography)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: theme.spacing(2),
  fontSize: '2rem',
  fontWeight: 'bold',
  textAlign: 'center',
  '& svg': {
    marginRight: theme.spacing(1),
    fontSize: '2rem',
    color: theme.palette.primary.main,
  },
  '& h1': {
    fontSize: '2.5rem',
    margin: 0,
  },
  '& span': {
    color: 'tomato',
    fontWeight: 'bold',
  }
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  fontSize: '1.2rem',
  lineHeight: '1.5',
  marginBottom: theme.spacing(2),
  textAlign: 'center',
  '& ul': {
    paddingLeft: theme.spacing(2),
  },
  '& li': {
    marginBottom: theme.spacing(1),
  }
}));

export default function SoftSkills() {
  return (
    <>
      <IconTitle variant="h4">
        <WorkOutline /> <h1> Soft <span> Skills </span></h1>
      </IconTitle>
      <StyledTypography variant="body1" paragraph>
        <ul>
          {softSkills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </StyledTypography>
    </>
  );
}
