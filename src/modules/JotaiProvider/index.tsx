'use client'
import { ReactNode, useEffect } from 'react'
import { Provider, useAtomValue } from 'jotai'
import { Env } from '@pushprotocol/restapi'
import { createSocketConnection, EVENTS } from '@pushprotocol/socket'
import { pushAddressAtom } from '@/services/push'

const JotaiProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Provider>
      {/* <WagmiConfig config={config}> */}
      <PushProvider>{children}</PushProvider>
      {/* </WagmiConfig> */}
    </Provider>
  )
}

export default JotaiProvider

export const PushProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const pushAddress = useAtomValue(pushAddressAtom)
  useEffect(() => {
    if (!pushAddress) return
    const pushSDKSocket = createSocketConnection({
      user: pushAddress,
      socketType: 'chat',
      socketOptions: { autoConnect: true, reconnectionAttempts: 3 },
      env: 'staging' as Env,
    })
    if (!pushSDKSocket) return
    pushSDKSocket.on(EVENTS.CHAT_RECEIVED_MESSAGE, (message) => {
      console.log('message recieved', message)
    })
    return () => {
      pushSDKSocket.disconnect()
    }
  }, [pushAddress])

  return <>{children}</>
}
