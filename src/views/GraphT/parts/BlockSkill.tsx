//vendors
import { Typography } from '@mui/material';

type Props = {
  name: string;
};

export const BlockSkill = ({ name }: Props) => {
  return (
    <div className="w-32 h-24 my-1 bg-blue flex justify-center items-center">
      <Typography className="text-white" align="center">
        {name}
      </Typography>
    </div>
  );
};
