import { Link } from '../components/custom-link'
import { Header } from '../components/header'
import { MicrosoftButton } from '../components/microsoft-button'
import { Title } from '../components/title'

export default function SignUp() {
   return (
      <div className="flex h-screen w-screen flex-col gap-12">
         <Header className="flex-initial" />
         <main className="flex w-full flex-1 flex-col items-center gap-4">
            <Title title="Cadastro" />
            <div className="flex h-full max-h-80 w-full max-w-xs flex-col items-center py-12 shadow shadow-slate-300">
               <div className="flex flex-col gap-2">
                  <p className="text-lg font-semibold">Se cadastrar com</p>
                  <MicrosoftButton />
               </div>

               <div className="mt-auto flex flex-col items-center">
                  <p>já tem conta?</p>
                  <Link to="/sign-in">entrar</Link>
               </div>
            </div>
         </main>
      </div>
   )
}
