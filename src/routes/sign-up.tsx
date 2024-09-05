import { Header } from '../components/header'
import { Title } from '../components/title'

export default function SignUp() {
   return (
      <div className="flex h-screen w-screen flex-col gap-12">
         <Header className="flex-initial" />
         <main className="flex w-full flex-1 flex-col items-center gap-4">
            <Title title="Cadastro" />
            <div className="flex h-full max-h-80 w-full max-w-xs flex-col items-center pt-12 shadow shadow-slate-300">
               <p className="text-xl font-semibold">Entrar com</p>
            </div>
         </main>
      </div>
   )
}
