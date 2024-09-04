import { createBrowserRouter } from 'react-router-dom'
import App from './routes/root'

export const router = createBrowserRouter([
   {
      path: '/',
      element: <App />,
      children: [],
   },
   {
      path: '/sign-up',
      element: <App />,
      children: [],
   },
])
