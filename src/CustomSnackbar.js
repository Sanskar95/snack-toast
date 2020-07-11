import React, { forwardRef, useEffect } from 'react'
import Snackbar from '@material-ui/core/Snackbar'
import Slide from '@material-ui/core/Slide'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import WarningIcon from '@material-ui/icons/Warning'
import ErrorIcon from '@material-ui/icons/Error'
import InfoIcon from '@material-ui/icons/Info'
import Alert from '@material-ui/lab/Alert'
import { Button } from '@material-ui/core'

const TransitionRight = (props) => {
  return <Slide {...props} direction="left" />
}

const iconStyles = {
  color: 'white',
  paddingLeft: '7px',
  marginTop: '40px',
}

const styles = {
  success: {
    backgroundColor: '#008300',
    icon: <CheckCircleIcon style={iconStyles} />,
  },
  error: {
    backgroundColor: '#CC0000',
    icon: <WarningIcon style={iconStyles} />,
  },
  warning: {
    backgroundColor: '#ff9800',
    icon: <ErrorIcon style={iconStyles} />,
  },
  info: { backgroundColor: '#2196f3', icon: <InfoIcon style={iconStyles} /> },
}

const getAutoHideDuration = (dismissButton, autoHideDuration) => {
  if (
    autoHideDuration === undefined || // no duration defined
    (autoHideDuration === null && !dismissButton) || // duration was chosen as null but no dismissButton is shown
    (autoHideDuration !== null && autoHideDuration < 1000) // or it's extremely short
  ) {
    return 3200
  }

  return autoHideDuration
}

const CustomSnackbar = forwardRef((props, ref) => {
  const [open, setOpen] = React.useState(false)
  const { type, message, dismissButton, autoHideDuration } = props

  useEffect(() => {
    setOpen(true)
  }, [])

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }
    setOpen(false)
  }

  return (
    <div>
      <Snackbar
        style={{ position: 'unset', paddingTop: '8px' }}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={open}
        onClose={handleClose}
        autoHideDuration={getAutoHideDuration(dismissButton, autoHideDuration)}
        TransitionComponent={TransitionRight}
      >
        <Alert variant="filled" severity={type} style={styles[`${type}`]}>
          {message}

          {dismissButton && (
            <Button
              onClick={handleClose}
              color="primary"
              style={{ display: 'block', marginLeft: '176px', color: 'white' }}
            >
              DISMISS
            </Button>
          )}
        </Alert>
      </Snackbar>
    </div>
  )
})
export default CustomSnackbar
