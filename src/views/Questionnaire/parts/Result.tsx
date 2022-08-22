//Vendors
import { Typography } from '@mui/material';

type Props = { totalAnswersCorrect: number; totalQuestions: number };

export const Result = ({ totalAnswersCorrect, totalQuestions }: Props) => {
  return (
    <Typography>
      Su total de preguntas correctas fue{' '}
      {`${totalAnswersCorrect} de ${totalQuestions}`}
    </Typography>
  );
};
