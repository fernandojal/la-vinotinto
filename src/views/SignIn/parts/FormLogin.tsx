//Vendors
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';

import { LoadingButton } from '@mui/lab';
import { Stack } from '@mui/system';

//Components
import { TextInput } from 'components/from/TextInput';

type Form = {
  email: string;
  password: string;
};

export const FormLogin = () => {
  const { handleSubmit, control } = useForm<Form>();
  const onSubmit = handleSubmit(({ email }) => {
    console.log({ email });
  });

  return (
    <form onSubmit={onSubmit} className="mt-4 py-4 ">
      <Stack spacing={4}>
        <TextInput
          label="Correo"
          name="email"
          type="email"
          control={control}
          rules={{ required: true, minLength: 3, maxLength: 20 }}
        />

        <TextInput
          label="Contraseña"
          name="password"
          type="password"
          control={control}
          rules={{ required: true }}
        />

        <LoadingButton type="submit" variant="contained">
          Iniciar Sesión
        </LoadingButton>
      </Stack>
      <div className="mt-4">
        <Typography align="center" variant="body2">
          ¿No tienes una cuenta? <Link to="/crear-cuenta">Regístrate</Link>
        </Typography>
      </div>
    </form>
  );
};
