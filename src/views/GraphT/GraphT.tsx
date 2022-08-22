//Vendors
import { Box, Container } from '@mui/system';

//Components
import { WingSkill } from './parts/WingSkill';

const GraphT = () => {
  return (
    <Container>
      <Box className="mx-auto max-w-2xl min-h-screen flex items-center flex-col">
        <div className="flex w-full justify-center">
          <WingSkill name="Design UI" />
          <WingSkill
            name="Front End"
            skills={[{ skillName: 'javascript' }, { skillName: 'css' }]}
          />
          <WingSkill name="Back End" />
        </div>
      </Box>
    </Container>
  );
};

export default GraphT;
