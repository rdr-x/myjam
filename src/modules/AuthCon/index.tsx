"use client";
import { PropsWithChildren } from "react";
import { useAtomValue } from "jotai";
import Button from "@/components/Button";
import { accountAtom, useConnect } from "@/services/account";

const AuthCon: React.FC<PropsWithChildren> = ({ children, ...props }) => {
  const account = useAtomValue(accountAtom);
  const { connect } = useConnect();
  if (account) return <>{children}</>;
  return (
    <Button onClick={connect} {...props}>
      Connect
    </Button>
  );
};

export default AuthCon;
