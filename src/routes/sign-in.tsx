import { redirect } from 'react-router-dom'
import { Header } from '../components/header'
import { Title } from '../components/title'
import { useMsal } from '../hooks/useMsal'
import { Msal } from '../configs/ms-identity'
import { MicrosoftButton } from '../components/microsoft-button'

export async function signInLoader() {
   const token = await Msal.acquireToken()

   if (!token) return null

	return redirect("/register")
}

export default function SignIn() {
   const { signIn } = useMsal()

   return (
      <div className="flex h-screen w-screen flex-col gap-12">
         <Header className="flex-initial" />
         <main className="flex w-full flex-1 flex-col items-center gap-4">
            <Title title="Login" />
            <div className="flex h-full max-h-80 w-full max-w-[280px] flex-col items-center py-12 shadow shadow-slate-300">
               <div className="flex flex-col items-center gap-2">
                  <p className="text-lg font-semibold">Entrar com</p>
                  <MicrosoftButton onClick={signIn}>click</MicrosoftButton>
               </div>
            </div>
         </main>
      </div>
   )
}
