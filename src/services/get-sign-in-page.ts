import { getConfig } from '../configs/api'

export async function getSignInPage(): Promise<{
   error?: string
   data: { link: string }
}> {
   try {
      const { baseUrl } = getConfig()
      const url = new URL(baseUrl + '/auth/sign-in')
      const headers = new Headers({ 'Content-type': 'application/json' })

      const res = await fetch(url, { headers })

      if (res.status >= 200 && res.status < 300) {
         return { data: await res.json() }
      }

      return { error: await res.json(), data: { link: '' } }
   } catch (err) {
      return { error: String(err), data: { link: '' } }
   }
}
