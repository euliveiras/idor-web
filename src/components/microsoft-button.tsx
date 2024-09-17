import { Button, Props } from './custom-button'

export function MicrosoftButton(props: Props) {
   return (
      <Button variant="iconButton" {...props}>
         <img src="assets/microsoft-logo.svg" />
         <p className="font-medium">microsoft</p>
      </Button>
   )
}
