import { ButtonHTMLAttributes } from 'react'

const styles = {
   iconButton:
      'bg-neutral flex items-center justify-center gap-2 rounded border-2 border-zinc-600 px-6 py-1 hover:bg-slate-50 active:bg-slate-100 ',
   link: 'underline text-primary hover:text-linkHover active:text-linkActive visited:text-linkVisited',
   button:
      'bg-buttonPrimaryBg text-white flex items-center justify-center gap-2 rounded border-2 border-buttonPrimaryBg px-6 py-1 hover:bg-buttonPrimaryBgHover active:bg-buttonPrimaryBgActive',
}

export type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
   variant?: keyof typeof styles
}

export function Button({ variant, className, ...props }: Props) {
   return (
      <button
         className={`${styles[variant ?? 'button']} ${className}`}
         {...props}
      ></button>
   )
}
