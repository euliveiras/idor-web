import * as _Msal from '@azure/msal-browser' // if using CDN, 'Msal' will be available in global scope
// Configuration object constructed.
const config = {
   auth: {
      clientId: import.meta.env.VITE_MSAL_CLIENT_ID,
      redirectUri: import.meta.env.VITE_MSAL_REDIRECT_URI,
      postLogoutRedirectUri: import.meta.env.VITE_MSAL_LOGOUT_URI,
   },
}

const scopes = import.meta.env.VITE_MSAL_SCOPES.split(';')

// create PublicClientApplication instance
export class Msal {
   static initialized = false
   static client = new _Msal.PublicClientApplication(config)

   static async initialize() {
      if (!Msal.initialized) {
         await Msal.client.initialize()
         Msal.initialized = true
      }
   }

   static async handleRedirect() {
      await this.initialize()
      return this.client.handleRedirectPromise()
   }

   static async signIn() {
      await Msal.client.initialize()
      return Msal.client.loginRedirect({ scopes })
   }

   static async acquireToken(): Promise<_Msal.AuthenticationResult | void> {
      let accessTokenRequest = {} as {
         scopes: string[]
         account: _Msal.AccountInfo
      }

      try {
         await Msal.client.initialize()
         const data = await this.handleRedirect()

         if (data === null) {
            const account = Msal.client.getAllAccounts()[0]

            if (!account) {
               return
               //return this.client.acquireTokenRedirect(accessTokenRequest)
            }

            accessTokenRequest = {
               scopes,
               account: account,
            }

            return Msal.client.acquireTokenSilent(accessTokenRequest)
         }

         return data
      } catch (error) {
         return
      }
   }
}
