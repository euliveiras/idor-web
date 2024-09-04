type Props = {
   title: string
   className?: string
}

export function Title({ title, className }: Props) {
   return (
      <h1
         className={`text-3xl font-black text-primary ${className ? className : ''}`}
      >
         {title}
      </h1>
   )
}
