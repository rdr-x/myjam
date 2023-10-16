"use client";
import { PropsWithChildren } from "react";
import { useAtomValue } from "jotai";
import { accountAtom, useConnect } from "@/services/account";

const AuthCon: React.FC<PropsWithChildren> = ({ children, ...props }) => {
  const account = useAtomValue(accountAtom);
  const { connect } = useConnect();
  if (account) return <>{children}</>;
  return (
    <div>
      <button onClick={connect}>Connect</button>
    </div>
  );
};

export default AuthCon;
