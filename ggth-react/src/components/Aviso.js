import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

export default function SimpleSnackbar({snack, setSnack}) {

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setSnack({open:false, variant: '', message:''});
  };

  const action = (
    <>
      <Button color="secondary" size="small" onClick={handleClose}>
        Cerrar
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  );

  return (
    <div>
      <Snackbar
        open={snack.open}
        autoHideDuration={6000}
        onClose={handleClose}
        message={snack.message}
        action={action}
        variant = {snack.variant}
      />
    </div>
  );
}