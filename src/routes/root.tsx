import { Outlet, redirect } from 'react-router-dom'
import { Msal } from '../configs/ms-identity'

export async function rootLoader() {
   const token = await Msal.acquireToken()

   if (!token) throw redirect('/sign-in')

   // const { data } = await getUser()

   return null
}

export default function Root() {
   return <Outlet />
}
