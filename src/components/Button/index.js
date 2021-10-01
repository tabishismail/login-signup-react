import Button from '@mui/material/Button';

export default function BasicButtons({type, fullWidth,children}) {
    return (
        <Button fullWidth={fullWidth} type={type} variant="contained">{children}</Button>
    );
}