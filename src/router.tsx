import { createBrowserRouter } from 'react-router-dom'
import App from './routes/root'
import SignUp from './routes/sign-up'
import SignIn from './routes/sign-in'

export const router = createBrowserRouter([
   {
      path: '/',
      element: <App />,
      children: [],
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
   },
])
