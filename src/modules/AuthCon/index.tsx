'use client'
import { PropsWithChildren } from 'react'
import { useAtomValue, useAtom } from 'jotai'
// import { useConnect as useConnectWallet, Connector, useAccount } from "wagmi";
import Button from '@/components/Button'
import { accountAtom, useConnect } from '@/services/account'
import {
  pushAccountAtom,
  initializePushAtom,
  checkPermissionAtom,
  permissionAtom,
} from '@/services/push'

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

export const PermissionAuthCon: React.FC<PropsWithChildren> = ({
  children,
  ...props
}) => {
  const permissed = useAtomValue(permissionAtom)
  const [, checkPermission] = useAtom(checkPermissionAtom)
  if (permissed) return <>{children}</>
  return (
    <Button
      onClick={() =>
        checkPermission(
          '9c950af0651a8533c0ce7fdd06362864d1fef7f6ede459e1283d5f30091ba609'
        )
      }
      {...props}
    >
      Connect Push
    </Button>
  )
}
