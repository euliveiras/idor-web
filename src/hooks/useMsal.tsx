import { Msal } from '../configs/ms-identity'

export function useMsal() {
   async function signIn() {
      return Msal.signIn()
   }

   async function acquireToken() {
      return Msal.acquireToken()
   }

   return { acquireToken, signIn }
}
