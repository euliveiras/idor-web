import { redirect, useLoaderData } from 'react-router-dom'
import { Msal } from '../configs/ms-identity'
import { getMsUser } from '../services/get-ms-user'
import { Header } from '../components/header'
import { Title } from '../components/title'
import { Button } from '../components/custom-button'

function Field({ label, data }: { label: string; data: string }) {
   return (
      <div className="flex w-full flex-col">
         <p className="font-semibold text-primary">{label}</p>
         <p>{data}</p>
      </div>
   )
}

export async function registerLoader() {
   const data = await Msal.acquireToken()

   if (!data) throw redirect('/sign-in')

   const res = await getMsUser(data)

   return res
}

export default function Register() {
   const data = useLoaderData() as Awaited<ReturnType<typeof registerLoader>>

   if (data.error) {
      return (
         <div className="flex h-screen w-screen flex-col gap-12">
            <p>Algo deu errado!</p>
            <p>{JSON.stringify(data.error)}</p>
         </div>
      )
   }

   if (!data.user) {
      return (
         <div className="flex h-screen w-screen flex-col gap-12">
            <p>Algo deu errado!</p>
            <p>{JSON.stringify(data.error)}</p>
         </div>
      )
   }

   return (
      <div className="flex h-screen w-screen flex-col gap-12">
         <Header className="flex-initial" />
         <main className="flex w-full flex-1 flex-col items-center gap-4">
            <Title title="Cadastro" />
            <div className="flex h-full max-h-80 w-full max-w-[280px] flex-col items-center py-12 shadow shadow-slate-300">
               <div className="flex flex-col items-center gap-2">
                  <Field data={data.user.email} label="email" />
                  <Field data={data.user.name} label="nome completo" />
               </div>
               <Button className="mt-auto">Cadastrar</Button>
            </div>
         </main>
      </div>
   )
}
