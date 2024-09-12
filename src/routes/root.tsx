import {redirect} from 'react-router-dom'
import { Msal } from '../configs/ms-identity'

export async function rootLoader() {
   const token = await Msal.acquireToken()

	if(!token) throw redirect("/sign-in")

	return redirect("/home")
}

export default function Root() {
   return null
}
