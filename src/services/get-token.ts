import { getConfig } from '../configs/api'

export async function getToken(token: string) {
   try {
      const { baseUrl } = getConfig()
      const params = new URLSearchParams({ code: token })
      const res = await fetch(baseUrl + params)

      if (res.status >= 200 && res.status < 300) {
         return { data: await res.json() }
      }

      return { error: await res.json() }
   } catch (err) {
      return { error: String(err) }
   }
}
