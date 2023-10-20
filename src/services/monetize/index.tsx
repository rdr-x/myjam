import { useCallback } from 'react'
import { useAtomValue } from 'jotai'
import { ContractFactory, ethers } from 'ethers'
import { ComethProvider } from '@cometh/connect-sdk'
import Abi from '@/utils/contract/abi.json'
import { erc20Bytecodes } from '@/utils/contract/bytecode'
import { walletAtom, walletAddressAtom } from '../account'

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
