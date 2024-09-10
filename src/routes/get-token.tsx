import { useLoaderData } from 'react-router-dom'

export async function getTokenLoader() {
   const data = null,
      error = null

   return { data, error }
}

export default function GetToken() {
   const { data, error } = useLoaderData() as Awaited<
      ReturnType<typeof getTokenLoader>
   >
   return <h1>Loading...</h1>
}
