//vendors
import { Typography } from '@mui/material';

//Utils
import { getColorSkill } from 'utils/questions';

type Props = {
  name: string;
  percent: number;
};

export const BlockSkill = ({ name, percent }: Props) => {
  const bgColor = `bg-${getColorSkill(percent)}`;

  console.log(bgColor);

  return (
    <div
      className={`w-32 h-24 my-1 ${bgColor} flex justify-center items-center`}
    >
      <Typography className="text-white" align="center">
        {name}
      </Typography>
    </div>
  );
};
