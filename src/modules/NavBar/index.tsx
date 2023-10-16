"use client";
import React, { useState, useEffect, type ComponentProps } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import cx from "clsx";
import { HomeIcon, MicIcon, VoiceIcon } from "@/components/Icons";
import AuthCon from "@/modules/AuthCon";
import AddressBoard from "../AddrBoard";
import Mobile from "./Mobile";
import "./index.css";

//TODO: conditinal rendering should be doen in NavLink instead of icon itself
const NavLink: React.FC<ComponentProps<typeof Link> & { curPath: boolean }> = ({
  href,
  children,
  curPath,
}) => (
  <li
    className={cx(
      "navbar-link relative flex items-center w-[48px] h-[48px] rounded-[24px] overflow-hidden",
      curPath ? "bg-[#ffffff]" : "bg-[rgba(255,255,255,0.12)]"
    )}
  >
    <Link
      className="flex items-center justify-center w-full h-full text-#147240 decoration-none"
      href={href}
    >
      {children}
    </Link>
  </li>
);

const Navbar: React.FC = () => {
  const curPath = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [curPath]);

  return (
    <header className="fixed left-0 top-0 flex flex-row justify-between w-full h-[80px] bg-transparent z-1000">
      <Mobile
        open={isMobileMenuOpen}
        curPath={curPath === "/" ? "home" : curPath}
      />
      <nav
        className={cx(
          "max-w-[1920px] mx-auto flex justify-end items-center w-full h-[80px] px-[32px]"
        )}
      >
        {/* <Link
          href="/"
          className="mr-auto sm:mr-[40px] flex flex-row items-center decoration-none"
        >
          <div className="text-[32px] font-bold text-[#ffffff]">MyJam</div>
        </Link> */}
        <ul className="navbar-linkArea mr-auto display-none hidden sm:visible sm:flex items-center justify-end gap-x-[12px] w-full h-full text-[16px] font-semibold">
          <NavLink href="/" curPath={curPath === "/" || curPath === "/home"}>
            <HomeIcon curPath={curPath === "/" || curPath === "/home"} />
          </NavLink>
          <NavLink href="/create" curPath={curPath === "/create"}>
            <MicIcon curPath={curPath === "/create"} />
          </NavLink>
          <NavLink href="/view" curPath={curPath === "/view"}>
            <VoiceIcon curPath={curPath === "/view"} />
          </NavLink>
        </ul>
        <div className="ml-[12px] flex flex-row justify-between items-center gap-x-[8px]">
          <AuthCon>
            <AddressBoard />
          </AuthCon>
          <label
            className="burger-container ml-[20px] sm:hidden"
            htmlFor="burger-check"
          >
            <input
              className="burger-check"
              id="burger-check"
              type="checkbox"
              checked={isMobileMenuOpen}
              onChange={(e) => setIsMobileMenuOpen(e.target.checked)}
            />
            <span className="burger" />
          </label>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
