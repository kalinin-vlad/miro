import { ROUTES } from '@/shared/model/routes'
import AuthLayout from './auth-layout'
import { Link } from '@tanstack/react-router'

const RegisterPage = () => {
  return (
    <AuthLayout
      form={<form></form>}
      title="Регистрация"
      description="Введите email и пароль для регистрации"
      footerContent={
        <>
          Уже есть аккаунт?
          <Link to={ROUTES.LOGIN}>Войти</Link>
        </>
      }
    />
  )
}

export default RegisterPage
