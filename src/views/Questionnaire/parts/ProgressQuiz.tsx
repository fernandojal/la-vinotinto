//Vendors
import styled from '@emotion/styled';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
}));

type Props = {
  currentQuestion: number;
  totalQuestions: number;
};

export const ProgressQuiz = ({ currentQuestion, totalQuestions }: Props) => {
  const hundredPercent = 100;
  const percentComplete = (currentQuestion * hundredPercent) / totalQuestions;

  return (
    <div>
      <Typography>{`${currentQuestion}/${totalQuestions}`}</Typography>

      <BorderLinearProgress variant="determinate" value={percentComplete} />
    </div>
  );
};
