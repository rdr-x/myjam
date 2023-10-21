import { useCallback } from 'react'
import { useAtomValue, atom } from 'jotai'
import { ContractFactory, ethers } from 'ethers'
import { ComethProvider } from '@cometh/connect-sdk'
import Abi from '@/utils/contract/abi.json'
import { erc20Bytecodes } from '@/utils/contract/bytecode'
import { walletAtom, walletAddressAtom } from '../account'

export const recieverAddressAtom = atom<string | null>(null)

export const useCreateReciever = () => {
  const wallet = useAtomValue(walletAtom)
  const walletAddress = useAtomValue(walletAddressAtom)

  const createReciever = useCallback(async () => {
    try {
      if (typeof window === 'undefined') return
      if (!wallet) throw new Error('Wallet not found')
      // const provider = new ComethProvider(wallet)
      // const signer = provider.getSigner()
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const signer = provider.getSigner()
      const recieverContract = await new ContractFactory(
        Abi,
        erc20Bytecodes,
        signer
      )
      const reciever = await recieverContract.deploy(walletAddress)
      // await reciever.deployTransaction.wait()
      const tx = await reciever.deployed()
      return tx.address
    } catch (err) {
      throw err
    }
  }, [wallet, walletAddress])

  return { createReciever }
}

export const useMintTokens = () => {
  const mint = useCallback(
    async (recieverAddress: string) => {
      try {
        if (typeof window === 'undefined') return
        if (!window.ethereum) throw new Error('Wallet not found')
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const signer = provider.getSigner()
        const recieverContract = new ethers.Contract(
          recieverAddress,
          Abi,
          signer
        )
        const tx = await recieverContract.mint({
          value: ethers.utils.parseEther('0.01'),
        })
        await tx.wait()
        return tx.hash
      } catch (err) {
        throw err
      }
    },
    [window]
  )

  return { mint }
}

export const useDonate = () => {
  const wallet = useAtomValue(walletAtom)
  const donate = useCallback(
    async (recieverAddress: string) => {
      try {
        if (typeof window === 'undefined') return
        if (!wallet) throw new Error('Wallet not found')
        const provider = new ComethProvider(wallet)
        const signer = provider.getSigner()
        const tx = await signer.sendTransaction({
          to: recieverAddress,
          value: ethers.utils.parseEther('0.01'),
          // gasLimit: 100000000,
        })
        await tx.wait()
        alert(`donation success hash: ${tx.hash}`)
        return tx.hash
      } catch (err) {
        throw err
      }
    },
    [wallet]
  )

  return { donate }
}
