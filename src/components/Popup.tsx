import React from 'react';

import MuiAlert, { AlertProps } from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert ref={ref} variant="filled" {...props} />;
});

const Popup: React.FC<{
  open: boolean,
  onClose: ()=>void
}> = ({open, onClose}) => {
  return (
    <Snackbar
      open={open}
      autoHideDuration={2000}
      onClose={() => onClose()}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
    >
      <Alert onClose={() => onClose()} severity="error">
        New error message!
      </Alert>
    </Snackbar>
  )
}

export default Popup
