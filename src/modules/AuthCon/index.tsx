'use client'
import { PropsWithChildren, useCallback } from 'react'
import { useAtomValue, useAtom } from 'jotai'
import Button from '@/components/Button'
import { accountAtom, useConnect } from '@/services/account'
import {
  pushAddressAtom,
  initializePushAtom,
  checkPermissionAtom,
  permissionAtom,
} from '@/services/push'
import { useMintTokens } from '@/services/monetize'

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
  const pushAccount = useAtomValue(pushAddressAtom)
  const [, initializePush] = useAtom(initializePushAtom)
  if (pushAccount) return <>{children}</>
  return (
    <Button fullWidth onClick={initializePush} {...props}>
      Connect Push
    </Button>
  )
}

export const PermissionAuthCon: React.FC<
  PropsWithChildren & { chatid: string; contractAddr: string | null }
> = ({ children, chatid, contractAddr, ...props }) => {
  const permissed = useAtomValue(permissionAtom)
  const [, checkPermission] = useAtom(checkPermissionAtom)
  const { mint } = useMintTokens()
  const handleJoin = useCallback(async () => {
    try {
      const res = await checkPermission(chatid)
      if (res || !contractAddr) return
      await mint(contractAddr)
      await checkPermission(chatid)
    } catch (err) {
      console.log(err)
    }
  }, [contractAddr, checkPermission])
  if (permissed) return <>{children}</>
  return (
    <Button fullWidth onClick={handleJoin} {...props}>
      Join the Chat
    </Button>
  )
}
