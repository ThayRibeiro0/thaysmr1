import Typography from '@mui/material/Typography';
import { Memory } from '@mui/icons-material';
import { styled } from '@mui/material/styles';

const hardSkills = [
  "• Programming",
  "• Languages",
  "• Security Standards",
  "• Algorithms",
  "• Web Design and more"
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

export default function HardSkills() {
  return (
    <>
      <IconTitle variant="h4">
        <Memory /> <h1> Hard <span> Skills </span></h1>
      </IconTitle>
      <StyledTypography variant="body1" paragraph>
        <ul>
          {hardSkills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </StyledTypography>
    </>
  );
}
