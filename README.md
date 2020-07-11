
## Simple Toast Notification

This component is used to generate alerts after an action, for example successful rest call.

## Using the Component

To be able to use the component, follow the steps below:

- Install simple-toast-notification in your application, this will install the latest release:
`npm i simple-toast-notification@latest --save`

- Import the component:
`import { snackToast } from 'simple-toast-notification'`

## API
 There are 4 methods under the datalabToast API.
 1) success
 2) error
 3) warning
 4) info
 
 Every method flavour accepts an object having following fields.
 
 1)message - The message string to be displayed on the toast.
 
 2)showDismissButton - Its a flag that determines whether to show the manual dismiss button on the toast.
 
 3)autoHideDuration: Time in ms after that the toast goes away, the default is 3200 ms
     
     
     
## Example
      snackToast.success({
                    message: 'This is a success message',
                    showDismissButton: false,
                    autoHideDuration: 50000
                  })
