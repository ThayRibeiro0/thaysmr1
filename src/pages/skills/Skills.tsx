import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import SoftSkills from './SoftSkills';
import HardSkills from './HardSkills';
import SkillsIcons from './SkillsIcons';

export default function SkillsPage() {
  return (
    <Box sx={{ display: 'flex', margin: 10, flexDirection: { xs: 'column', md: 'row' }, padding: 4, gap: 4 }}>
      <Box sx={{ flex: 1, paddingRight: { xs: 0, md: 4 }, textAlign: 'center' }}>
        <SoftSkills />
        <HardSkills />
      </Box>
      <Box sx={{ flex: 5, marginTop: { xs: 4, md: 0 } }}>
        <SkillsIcons />
      </Box>
    </Box>
  );
}
