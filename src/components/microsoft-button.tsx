import { Link, Props } from './custom-link'

export function MicrosoftButton(props: Props) {
   return (
      <Link variant="iconButton" {...props}>
         <img src="assets/microsoft-logo.svg" />
         <p className="font-medium">microsoft</p>
      </Link>
   )
}
