//Vendors
import { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { Stack, Button, Typography } from '@mui/material';

// Components
import { TextInput } from 'components/from/TextInput';

// Types
import { User } from 'types/app';

// Utils
import { formHandlerErrorMenssage, errorMessages } from 'utils/form';

export const AccountForm = () => {
  const { push } = useHistory();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<User>();

  const onSumbit = handleSubmit((data) => {
    console.log(data);
  });

  const createdSuccess = useCallback(() => {
    push('iniciar-sesion');
  }, [push]);

  return (
    <form onSubmit={onSumbit}>
      <Stack spacing={2}>
        <TextInput
          name="name"
          label="Nombre"
          control={control}
          rules={{ required: true }}
        />

        <Button type="submit" variant="contained">
          Crear Cuenta
        </Button>
      </Stack>
    </form>
  );
};
