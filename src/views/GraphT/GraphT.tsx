//Vendors
import { Box, Container } from '@mui/system';

//Components
import { WingSkill } from './parts/WingSkill';

import { GRAPH_T } from 'mocks/db/questions/quizJS';

const GraphT = () => {
  return (
    <Container>
      <Box className="mx-auto max-w-2xl min-h-screen flex items-center flex-col">
        <div className="flex w-full justify-center">
          {GRAPH_T.wings.map(({ nameWings, skills }) => (
            <WingSkill name={nameWings} skills={skills} />
          ))}
        </div>
      </Box>
    </Container>
  );
};

export default GraphT;
