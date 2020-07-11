import React from 'react'
import Toast from './Toast'
import { render } from 'react-dom'
import { ERROR, INFO, SUCCESS, WARNING } from './constant'

function show(variant, message, dismissButtonFlag) {
  let children = document.body.childNodes
  let lastNode = null

  for (let i = 0; i < children.length; i++) {
    if (children[i].id === 'toast') {
      lastNode = children[i]
      break
    }
  }

  if (lastNode) {
    let containerDomNode = document.createElement('div')
    containerDomNode.setAttribute('id', 'toast')
    document.body.insertBefore(containerDomNode, lastNode)
    render(
      <Toast
        variant={variant}
        message={message}
        showDismissButton={dismissButtonFlag}
      />,
      containerDomNode
    )
  } else {
    let containerDomNode = document.createElement('div')
    containerDomNode.setAttribute('id', 'toast')
    document.body.appendChild(containerDomNode)
    render(
      <Toast
        variant={variant}
        message={message}
        showDismissButton={dismissButtonFlag}
      />,
      containerDomNode
    )
  }
}

export const apexToast = {
  success: (message, flag) => {
    show(SUCCESS, message, flag)
  },
  error: (message, flag) => {
    show(ERROR, message, flag)
  },

  info: (message, flag) => {
    show(INFO, message, flag)
  },
  warning: (message, flag) => {
    show(WARNING, message, flag)
  },
}