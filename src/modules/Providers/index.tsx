'use client'
import { ReactNode, useEffect } from 'react'
import { Provider as JotaiProvider, useAtomValue, useSetAtom } from 'jotai'
import { Env } from '@pushprotocol/restapi'
import { createSocketConnection, EVENTS } from '@pushprotocol/socket'
import { pushAddressAtom, pushMessagesAtom } from '@/services/push'
import {
  LivepeerConfig,
  createReactClient,
  studioProvider,
} from '@livepeer/react'

//TODO: temp
const client = createReactClient({
  provider: studioProvider({
    // apiKey: process.env.NEXT_PUBLIC_LIVEPEER_API_KEY ?? '809fd029-93bb-4650-a123-e61e5757155c',
    apiKey: '809fd029-93bb-4650-a123-e61e5757155c',
  }),
})

const Providers: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <JotaiProvider>
      <LivepeerConfig client={client}>
        <PushProvider>{children}</PushProvider>
      </LivepeerConfig>
    </JotaiProvider>
  )
}

export default Providers

export const PushProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const pushAddress = useAtomValue(pushAddressAtom)
  const setPushMessages = useSetAtom(pushMessagesAtom)

  useEffect(() => {
    if (!pushAddress) return
    const pushSDKSocket = createSocketConnection({
      user: pushAddress,
      socketType: 'chat',
      socketOptions: { autoConnect: true, reconnectionAttempts: 3 },
      // env: 'staging' as Env,
      env: 'prod' as Env,
    })
    if (!pushSDKSocket) return
    // TODO:
    pushSDKSocket.on(EVENTS.CHAT_RECEIVED_MESSAGE, (message) => {
      setPushMessages((messages) => [...messages, message.messageObj.content])
    })
    return () => {
      pushSDKSocket.disconnect()
    }
  }, [pushAddress])

  return <>{children}</>
}
