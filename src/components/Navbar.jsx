"use client";
import { signOut, useSession } from "@/lib/auth-client";
import { LogoMermaid } from "@gravity-ui/icons";
import { Button, Link } from "@heroui/react";

const Navbar = () => {
  const { data, isPending } = useSession();
  if (isPending) {
    return <div>Loading.........</div>;
  }
  // console.log("session data in Navbar", data);
  const user = data?.user;

  return (
    <>
      <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
        <header className="flex h-16 items-center justify-between px-6">
          <div className="flex items-center gap-3">
            <LogoMermaid />
            <div className="text-blue-700 font-semibold italic">
              Mer
              <span className="font-extrabold font-stretch-extra-condensed text-cyan-600">
                M
              </span>
              aid
            </div>
          </div>
          <ul className="flex items-center gap-4">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
          </ul>
          <div>
            {user ? (
              <>
                <p>Welcome!</p>
                <Button onClick={() => signOut()}>Sign Out</Button>
              </>
            ) : (
              <>
                <Link href="/auth/signin">
                  <Button>Sign In</Button>
                </Link>
              </>
            )}
          </div>
        </header>
      </nav>
    </>
  );
};

export default Navbar;
