//Vendors
import { Paper, Typography } from '@mui/material';
import { Box, Container } from '@mui/system';

type Props = {
  title: string;
  children: JSX.Element;
};

export const AuthContainer = ({ title, children }: Props) => {
  return (
    <Container>
      <Box className="mx-auto max-w-4xl min-h-screen flex items-center">
        <Paper className="p-5 w-full h-full" elevation={8}>
          <section className="grid h-full">
            <Typography
              // align="center"
              className="font-bold font-lato title-create-account"
              variant="h4"
            >
              {title}
            </Typography>

            {children}
          </section>
        </Paper>
      </Box>
    </Container>
  );
};
