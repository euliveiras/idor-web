import { createBrowserRouter } from 'react-router-dom'
import App, { rootLoader } from './routes/root'
import SignUp from './routes/sign-up'
import SignIn, { signInLoader } from './routes/sign-in'
import GetToken, { getTokenLoader } from './routes/get-token'

export const router = createBrowserRouter([
   {
      path: '/',
      element: <App />,
      children: [],
      loader: rootLoader,
   },
   {
      path: '/sign-up',
      element: <SignUp />,
      children: [],
   },
   {
      path: '/sign-in',
      element: <SignIn />,
      children: [],
      loader: signInLoader,
   },
   {
      path: '/get-token',
      element: <GetToken />,
      children: [],
      loader: getTokenLoader,
   },
])
