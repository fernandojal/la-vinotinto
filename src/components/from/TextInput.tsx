// Vendors
import { TextField } from '@mui/material';
import { HTMLInputTypeAttribute } from 'react';
import {
  Controller,
  FieldValues,
  useController,
  UseControllerProps,
} from 'react-hook-form';

interface TextInputProps<T> extends UseControllerProps<T> {
  label: string;
  helperText?: string | undefined;
  size?: 'small' | 'medium';
  InputProps?: any;
  multiline?: boolean;
  type?: HTMLInputTypeAttribute;
}

export const TextInput = <T extends FieldValues>(props: TextInputProps<T>) => {
  const { field, fieldState } = useController<T>(props);

  return (
    <>
      <Controller
        name={field.name}
        control={props.control}
        render={({ field: { onChange, value } }) => (
          <TextField
            label={props.label}
            variant="outlined"
            type={props.type ?? 'text'}
            onChange={onChange}
            value={value || ''}
            helperText={props.helperText || ''}
            error={fieldState.error ? true : false}
            size={props.size}
            sx={{ borderColor: 'white' }}
            rows={4}
            multiline={props.multiline || false}
          />
        )}
      />
    </>
  );
};
