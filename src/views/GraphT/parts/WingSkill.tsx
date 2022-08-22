//vendors
import { Typography } from '@mui/material';

//Components
import { BlockSkill } from './BlockSkill';

type Props = {
  name: string;
  skills?: { skillName: string; percent: number }[];
};

export const WingSkill = ({ name, skills }: Props) => (
  <div>
    <div className="w-32 h-24 bg-blue flex justify-center items-center mr-1">
      <Typography className="text-white" align="center">
        {name}
      </Typography>
    </div>
    {skills &&
      skills.map(({ skillName, percent }, index) => (
        <BlockSkill name={skillName} percent={percent} key={index} />
      ))}
  </div>
);
