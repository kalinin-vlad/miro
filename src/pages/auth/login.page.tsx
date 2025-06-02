import { Link } from '@tanstack/react-router'
import { ROUTES } from '@/shared/model/routes'
import AuthLayout from './auth-layout'
import LoginForm from './login-form'

const LoginPage = () => {
  return (
    <AuthLayout
      form={<LoginForm />}
      title="Вход в систему"
      description="Введите ваш email и пароль для входа в систему"
      footerContent={
        <>
          Нет аккаунта?
          <Link to={ROUTES.REGISTER}>Зарегистрироватся</Link>
        </>
      }
    />
  )
}

export default LoginPage
