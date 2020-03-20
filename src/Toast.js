import React, { Fragment, useEffect, useRef } from 'react'
import SimpleSnackbar from './SimpleSnackbar'

const Toast = ({ variant, message, showDismissButton }) => {
  const childRef = useRef()
  useEffect(() => {
    childRef.current.handleClick()
  }, [])

  return (
    <Fragment>
      <SimpleSnackbar
        ref={childRef}
        type={variant}
        message={message}
        dismissButton={showDismissButton}
      />
    </Fragment>
  )
}

export default Toast