import { AuthenticationResult } from '@azure/msal-browser'

export async function getMsUser(data: AuthenticationResult) {
   const headers = new Headers()
   const bearer = 'Bearer ' + data.accessToken

   headers.append('Authorization', bearer)

   const options = {
      method: 'GET',
      headers: headers,
   }
   const graphEndpoint = import.meta.env.VITE_MSAL_GRAPH_ENDPOINT

   try {
      const res = await fetch(graphEndpoint, options)

      if (res.status >= 200 && res.status < 300) {
         const json = await res.json()
         return { user: { name: json.displayName, email: json.mail } }
      }

      return { error: await res.json() }
   } catch (err) {
      return { error: String(err) }
   }
}
