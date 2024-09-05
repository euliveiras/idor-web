import { LinkProps, Link as LinkRouter } from 'react-router-dom'

const styles = {
   iconButton:
      'bg-neutral flex items-center justify-center gap-2 rounded border-2 border-gray-300 px-6 py-1 hover:bg-slate-50 active:bg-slate-100 ',
   link: 'underline text-primary hover:text-linkHover active:text-linkActive visited:text-linkVisited',
}

type Props = LinkProps & {
   variant?: keyof typeof styles
}

export function Link({ variant, className, ...props }: Props) {
   return (
      <LinkRouter
         className={`cursor-pointer ${styles[variant ?? 'link']} ${className}`}
         {...props}
      ></LinkRouter>
   )
}
