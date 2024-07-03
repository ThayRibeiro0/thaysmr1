import SoftSkills from './SoftSkills';
import HardSkills from './HardSkills';
import SkillsIcons from './SkillsIcons';
import './skills.css'; // Importa o arquivo CSS

export default function SkillsPage() {
  return (
    <div className="outer-box">
      <div className="left-box">
        <SoftSkills />
        <HardSkills />
      </div>
      <div className="right-box">
        <SkillsIcons />
      </div>
    </div>
  );
}
