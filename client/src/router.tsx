import LoginView from '@/views/auth/LoginView'
import RegisterView from '@/views/auth/RegisterView'
import AuthLayout from '@/views/layouts/AuthLayout'
import { BrowserRouter, Route, Routes } from 'react-router'

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/auth/login" element={<LoginView />} />
          <Route path="/auth/register" element={<RegisterView />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
