'use client'
import { PropsWithChildren, use } from 'react'
import { useAtomValue, useAtom } from 'jotai'
// import { useConnect as useConnectWallet, Connector, useAccount } from "wagmi";
import Button from '@/components/Button'
import { accountAtom, useConnect } from '@/services/account'
import { pushAccountAtom, initializePushAtom } from '@/services/push'

const AuthCon: React.FC<PropsWithChildren> = ({ children, ...props }) => {
  const account = useAtomValue(accountAtom)
  const { connect } = useConnect()
  if (account) return <>{children}</>
  return (
    <Button onClick={connect} {...props}>
      Connect
    </Button>
  )
}

export default AuthCon

export const PushAuthCon: React.FC<PropsWithChildren> = ({
  children,
  ...props
}) => {
  const pushAccount = useAtomValue(pushAccountAtom)
  const [, initializePush] = useAtom(initializePushAtom)
  if (pushAccount) return <>{children}</>
  return (
    <Button onClick={initializePush} {...props}>
      Connect Push
    </Button>
  )
}
