import { HttpResponse } from 'msw'

import type { ApiSchemas } from '../../schema'

import { http } from '../http'

const mockUsers: ApiSchemas['User'][] = [
  {
    email: 'admin@gmail.com',
    id: '1',
  },
]

const userPassword = new Map<string, string>()
userPassword.set('admin@gmail.com', '123456')

const mockToken = new Map<string, string>()

export const authHandlers = [
  http.post('/auth/login', async ({ request }) => {
    const { email, password } = await request.json()

    const user = mockUsers.find((user) => user.email === email)
    const storedPassword = userPassword.get(email)

    if (!user || !storedPassword || storedPassword !== password) {
      return HttpResponse.json(
        {
          message: 'Неверный email или пароль',
          code: 'INVALID_CREDENTIALS',
        },
        { status: 401 }
      )
    }

    const token = `mock-token-${Date.now()}`

    return HttpResponse.json(
      {
        accessToken: token,
        user,
      },
      { status: 200 }
    )
  }),

  http.post('/auth/register', async ({ request }) => {
    const { email, password } = await request.json()

    if (mockUsers.some((user) => user.email === email)) {
      return HttpResponse.json(
        {
          message: 'Пользователь существует',
          code: 'USER_EXISTS',
        },
        {
          status: 400,
        }
      )
    }

    const newUser: ApiSchemas['User'] = {
      id: String(mockUsers.length + 1),
      email,
    }

    const token = `mock-token-${new Date()}`
    mockUsers.push(newUser)
    userPassword.set(email, password)
    mockToken.set(email, token)

    return HttpResponse.json(
      {
        accessToken: token,
        user: newUser,
      },
      { status: 201 }
    )
  }),
]
