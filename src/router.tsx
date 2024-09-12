import { createBrowserRouter } from 'react-router-dom'
import App, { rootLoader } from './routes/root'
import SignIn, { signInLoader } from './routes/sign-in'

export const router = createBrowserRouter([
   {
      path: '/',
      element: <App />,
      children: [],
      loader: rootLoader,
   },
   {
      path: '/sign-in',
      element: <SignIn />,
      children: [],
      loader: signInLoader,
   },
])
