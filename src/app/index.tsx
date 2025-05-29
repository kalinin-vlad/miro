import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from '@tanstack/react-router'

import router from './router'

const enableMocking = async () => {
  if (process.env.NODE_ENV === 'production') {
    return
  }

  const { worker } = await import('@/shared/api/mocks/browser')

  return worker.start()
}

enableMocking().then(() =>
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  )
)
