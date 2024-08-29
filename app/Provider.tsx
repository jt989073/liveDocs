'use client'
import Loader from '@/components/Loader'
import {ClientSideSuspense, LiveblocksProvider} from '@liveblocks/react/suspense'
import { ReactNode } from 'react'

const Provider = ({children}: {children: ReactNode}) => {
  return (
    <LiveblocksProvider publicApiKey={"/api/liveblocks-auth"}>
      <ClientSideSuspense fallback={<div><Loader /></div>}>
        {children}
      </ClientSideSuspense>
  </LiveblocksProvider>
  )
}

export default Provider