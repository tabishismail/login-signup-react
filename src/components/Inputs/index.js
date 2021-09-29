import * as React from 'react';

import TextField from '@mui/material/TextField';

export default function Input({Label,type}) {
  return (
      <TextField id="outlined-basic" type={type} label={Label} variant="outlined" />
  );
}