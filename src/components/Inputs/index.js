import * as React from 'react';

import TextField from '@mui/material/TextField';

export default function Input({ error, label, type, value, name, onChange, onBlur }) {
  return (
    <TextField id={error ? "outlined-error-helper-text": "outlined-basic"}
      name={name}
      error={error}
      onBlur={onBlur}
      onChange={onChange}
      value={value}
      type={type}
      label={label}
      helperText={error}
      variant="outlined" />
  );
}