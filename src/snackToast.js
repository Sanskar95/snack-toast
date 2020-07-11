import React from 'react'
import { render } from 'react-dom'
import { ERROR, INFO, SUCCESS, WARNING } from './constants'
import CustomSnackbar from './CustomSnackbar'

const getToastsContainer = () => {
  const toastsContainer = document.querySelectorAll(
    '[snack-toasts-container]'
  )
  if (!toastsContainer?.[0]) {
    const containerElement = document.createElement('div')
    containerElement.setAttribute(
      'style',
      'position:absolute; top:24px; right:24px; z-index:2300'
    )
    containerElement.setAttribute('snack-toasts-container', '1')
    return containerElement
  }
  //Return the already existing toasts container DOM
  return toastsContainer[0]
}

const show = (variant, message, showDismissButton, autoHideDuration) => {
  const toastContainer = getToastsContainer()
  const toastChildren = document.querySelectorAll('[snack-toast-index]')
  const lastNode = toastChildren?.[0]

  const containerDomNode = document.createElement('div')
  containerDomNode.setAttribute(
    'snack-toast-index',
    'toast-'.concat(toastChildren.length.toString())
  )

  if (lastNode) {
    //Attach the new toast before the last one
    toastContainer.insertBefore(containerDomNode, lastNode)
  } else {
    toastContainer.appendChild(containerDomNode)
    //Append the toasts conatiner to document body if no toasts exists
    document.body.appendChild(toastContainer)
  }

  render(
    <CustomSnackbar
      type={variant}
      message={message}
      dismissButton={showDismissButton}
      autoHideDuration={autoHideDuration}
    />,
    containerDomNode
  )
}

export const snackToast = {
  success: ({ message, showDismissButton, autoHideDuration }) => {
    show(SUCCESS, message, showDismissButton, autoHideDuration)
  },
  error: ({ message, showDismissButton, autoHideDuration }) => {
    show(ERROR, message, showDismissButton, autoHideDuration)
  },

  info: ({ message, showDismissButton, autoHideDuration }) => {
    show(INFO, message, showDismissButton, autoHideDuration)
  },
  warning: ({ message, showDismissButton, autoHideDuration }) => {
    show(WARNING, message, showDismissButton, autoHideDuration)
  },
}

export default snackToast
