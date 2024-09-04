import { createBrowserRouter } from 'react-router-dom'
import App from './routes/root'
import SignUp from './routes/sign-up'

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
])
