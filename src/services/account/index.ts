import { useCallback } from "react";
import { atom, useAtom, useAtomValue } from "jotai";
import { atomWithStorage } from "jotai/utils";

import {
  ComethWallet,
  ConnectAdaptor,
  SupportedNetworks,
} from "@cometh/connect-sdk";

const walletAdaptor = new ConnectAdaptor({
  chainId: SupportedNetworks.MUMBAI,
  apiKey: process.env.NEXT_PUBLIC_COMETH_API!,
});

const wallet = new ComethWallet({
  authAdapter: walletAdaptor,
  apiKey: process.env.NEXT_PUBLIC_COMETH_API!,
  rpcUrl: process.env.NEXT_PUBLIC_RPC_URL,
});

export const walletAtom = atom(wallet);
export const accountAtom = atom<string | null>(null);
export const walletAddressAtom = atomWithStorage<string | null>(
  "walletAddress",
  null
);

export const useConnect = () => {
  const wallet = useAtomValue(walletAtom);
  const walletAddress = useAtomValue(walletAddressAtom);
  const [account, setAccount] = useAtom(accountAtom);

  const connect = useCallback(async () => {
    try {
      if (typeof window === "undefined") return;
      if (walletAddress) {
        await wallet.connect(walletAddress);
        setAccount(walletAddress);
        return;
      }
      await wallet.connect();
      const generatedAddress = await wallet.getAddress();
      setAccount(generatedAddress);
    } catch (err) {
      throw err;
    }
  }, [wallet, walletAddress]);

  return { connect };
};
