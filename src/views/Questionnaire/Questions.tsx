//Vendors
import { Box, Container } from '@mui/system';

//Api
import { GET_QUESTIONS } from 'api/requests/Questions';

const Questions = () => {
  const response = GET_QUESTIONS();

  console.log({ response });
  return (
    <Container>
      <Box></Box>
    </Container>
  );
};

export default Questions;
