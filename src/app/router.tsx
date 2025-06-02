import { lazy } from 'react'
import {
  createRootRoute,
  createRoute,
  createRouter,
  redirect,
} from '@tanstack/react-router'

import { ROUTES } from '@/shared/model/routes'

import App from './App'
import { Providers } from './providers'
import LoginPage from '@/pages/auth/login.page'
import RegisterPage from '@/pages/auth/register.page'

const rootRoute = createRootRoute({
  component: () => (
    <Providers>
      <App />
    </Providers>
  ),
})

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: ROUTES.HOME,
  loader: () => redirect({ to: ROUTES.BOARDS }),
})

const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: ROUTES.LOGIN,
  component: LoginPage,
})

const registerRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: ROUTES.REGISTER,
  component: RegisterPage,
})

const boardsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: ROUTES.BOARDS,
  component: lazy(() => import('@/pages/boards/boards')),
})

const boardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: ROUTES.BOARD,
  component: lazy(() => import('@/pages/board/board')),
})

const router = createRouter({
  routeTree: rootRoute.addChildren([
    indexRoute,
    loginRoute,
    registerRoute,
    boardsRoute.addChildren([boardRoute]),
  ]),
})

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

export default router
