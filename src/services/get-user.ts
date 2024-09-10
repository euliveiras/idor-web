import { getConfig } from '../configs/api'

export async function getUser() {
   try {
      const { baseUrl } = getConfig()
		const url = new URL(baseUrl + "/auth/get-user")

      const res = await fetch(url)

      if (res.status >= 200 && res.status < 300) {
         return { data: await res.json() }
      }

      return { error: await res.json() }
   } catch (err) {
      return { error: String(err) }
   }
}
