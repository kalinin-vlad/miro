import { QueryClientProvider } from '@tanstack/react-query'

import { queryClient } from '@/shared/api/query-client'

import type { PropsWithChildren } from 'react'

export const Providers: React.FC<PropsWithChildren> = ({ children }) => (
  <QueryClientProvider
    client={queryClient}
    children={children}
  />
)
