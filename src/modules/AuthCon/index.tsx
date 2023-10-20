'use client'
import { PropsWithChildren, useCallback } from 'react'
import { useAtomValue, useAtom } from 'jotai'
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
    <Button fullWidth onClick={initializePush} {...props}>
      Connect Push
    </Button>
  )
}

export const PermissionAuthCon: React.FC<
  PropsWithChildren & { chatid: string }
> = ({ children, chatid, ...props }) => {
  const permissed = useAtomValue(permissionAtom)
  const [, checkPermission] = useAtom(checkPermissionAtom)
  const handleJoin = useCallback(async () => {
    try {
      const res = await checkPermission(chatid)
    } catch (err) {
      console.log(err)
    }
  }, [])
  if (permissed) return <>{children}</>
  return (
    <Button fullWidth onClick={() => checkPermission(chatid)} {...props}>
      Join the Chat
    </Button>
  )
}
