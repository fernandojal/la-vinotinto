import React from 'react'
//Vendors
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { Typography, InputLabel, MenuItem} from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import { LoadingButton } from '@mui/lab';
import { Stack } from '@mui/system';

//Components
import { TextInput } from 'components/from/TextInput';

//Types
import { User } from 'types/app';

import $ from 'jquery'


export const CreateAccountForm = () => {
  const { handleSubmit, control } = useForm<User>();
  const onSubmit = handleSubmit(({ email }) => {
    console.log({ email });
  });

  return (
    <form onSubmit={onSubmit} className="mt-4 py-4 ">
      <Stack spacing={4}>
        <TextInput
          label="Primer Nombre"
          name="name"
          control={control}
          rules={{ required: true }}
        />
        <TextInput
          label="Primer Apellido"
          name="lastName"
          control={control}
          rules={{ required: true }}
        />
        <TextInput
          label="Nombre en Acrópolis"
          name="nickname"
          control={control}
          rules={{ required: true }}
        />
        <Typography className='span-nicknme'>
          Este podría ser tu nombre o un apodo; como quieras que la gente se refiera a ti en Acrópolis
        </Typography>
        <TextInput
          label="SAP"
          name="sap"
          control={control}
          rules={{ required: true, maxLength:5}}
        />
        <TextInput
          label="Carnet"
          name="carnet"
          control={control}
          rules={{ required: true, maxLength:7}}
        />
        <InputLabel id="demo-simple-select-label">Cargo</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Cargo"
            displayEmpty={true}
          >
            <MenuItem value={'Developer'}>Desarrollador</MenuItem>
            <MenuItem value={'Diseñador'}>Diseñador</MenuItem>
            <MenuItem value={'QA'}>QA</MenuItem>
          </Select>
        <InputLabel id="demo-simple-select-label">Empresa</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Empresa"
          >
            <MenuItem value={'MBU'}>MBU</MenuItem>
            <MenuItem value={'MSI'}>MSI</MenuItem>
            <MenuItem value={'Zinli'}>Zinli</MenuItem>
            <MenuItem value={'M'}>M</MenuItem>
          </Select>
        <TextInput
          label="Correo electrónico"
          name="email"
          type="email"
          control={control}
          rules={{ required: true, minLength: 3, maxLength: 40 }}
        />
        {/* <TextInput
          label="Profesión"
          name="rol"
          control={control}
          rules={{ required: true }}
        /> */}

        <LoadingButton type="submit" variant="contained" id='button-submit-account'>
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
