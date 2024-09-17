import { createBrowserRouter } from 'react-router-dom'
import App, { rootLoader } from './routes/root'
import SignIn, { signInLoader } from './routes/sign-in'
import Register, { registerLoader } from './routes/register'

export const router = createBrowserRouter([
   {
      path: '/',
      element: <App />,
      loader: rootLoader,
      children: [
         {
            path: 'register',
            element: <Register />,
            loader: registerLoader,
            children: [],
         },
      ],
   },
   {
      path: '/sign-in',
      element: <SignIn />,
      children: [],
      loader: signInLoader,
   },
])
