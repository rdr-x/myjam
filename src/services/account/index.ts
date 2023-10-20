import { useCallback } from 'react'
import { atom, useAtomValue, useSetAtom, useAtom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'

import {
  ComethWallet,
  ConnectAdaptor,
  SupportedNetworks,
} from '@cometh/connect-sdk'

const walletAdaptor = new ConnectAdaptor({
  chainId: SupportedNetworks.MUMBAI,
  apiKey: process.env.NEXT_PUBLIC_COMETH_API!,
})

const wallet = new ComethWallet({
  authAdapter: walletAdaptor,
  apiKey: process.env.NEXT_PUBLIC_COMETH_API!,
  rpcUrl: process.env.NEXT_PUBLIC_RPC_URL,
})

export const walletAtom = atom(wallet)
export const accountAtom = atom<string | null>(null)
export const walletAddressAtom = atomWithStorage<string | null>(
  'walletAddress',
  null
)

//TODO: rewrite with writeonly-atom
export const useConnect = () => {
  const [wallet, setWallet] = useAtom(walletAtom)
  const walletAddress = useAtomValue(walletAddressAtom)
  const setAccount = useSetAtom(accountAtom)

  const connect = useCallback(async () => {
    try {
      if (typeof window === 'undefined') return
      if (walletAddress) {
        await wallet.connect(walletAddress)
        setAccount(walletAddress)
        return
      }
      await wallet.connect()
      const generatedAddress = wallet.getAddress()
      setWallet(wallet)
      setAccount(generatedAddress)
    } catch (err) {
      throw err
    }
  }, [wallet, walletAddress])

  return { connect }
}

// export const asyncAccountsAtom = atom(
//   null,
//   // async (get, set, type: "initial" | "connect") => {
//   async (get, set) => {
//     if (typeof window === "undefined") return;
//     if (!window.ethereum) {
//       throw new Error("Please install MetaMask");
//     }
//     // if (type === "initial") {
//     //   const accounts = await window.ethereum.request({
//     //     method: "eth_accounts",
//     //   });
//     //   set(pushUserAtom, accounts);
//     //   const network = window.ethereum.networkVersion;
//     //   set(networkAtom, network);
//     //   return;
//     // }
//     // if (type === "connect") {
//     const accounts = await window.ethereum.request({
//       method: "eth_requestAccounts",
//     });
//     set(pushUserAtom, accounts);
//     // const network = window.ethereum.networkVersion;
//     // if (network !== "11155111") {
//     //   await window.ethereum.request({
//     //     method: "wallet_switchEthereumChain",
//     //     params: [{ chainId: "0xaa36a7" }],
//     //   });
//     // }
//     // set(networkAtom, "11155111");
//     // }
//   }
// );
