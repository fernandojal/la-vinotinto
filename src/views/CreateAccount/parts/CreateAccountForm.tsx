//Vendors
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';

import { LoadingButton } from '@mui/lab';
import { Stack } from '@mui/system';

//Components
import { TextInput } from 'components/from/TextInput';

//Types
import { User } from 'types/app';

export const CreateAccountForm = () => {
  const { handleSubmit, control } = useForm<User>();
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
          label="Nombre"
          name="name"
          control={control}
          rules={{ required: true }}
        />

        <TextInput
          label="Apellido"
          name="lastName"
          control={control}
          rules={{ required: true }}
        />

        <TextInput
          label="Profesión"
          name="rol"
          control={control}
          rules={{ required: true }}
        />

        <LoadingButton type="submit" variant="contained">
          Crear cuenta
        </LoadingButton>
      </Stack>
      <div className="mt-4">
        <Typography align="center" variant="body2">
          ¿Ya tienes una cuenta? <Link to="/iniciar-sesion">Inicia Sesión</Link>
        </Typography>
      </div>
    </form>
  );
};
