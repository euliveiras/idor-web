type Props = {
   className?: string
}

export function Header({ className }: Props) {
   return (
      <header
         className={`w-full border-b-2 border-gray-200 p-4 ${className ? className : ''}`}
      >
         <img
            src="assets/img-idor-azul.png"
            alt="idor logo"
            className="h-20 w-24"
         />
      </header>
   )
}
