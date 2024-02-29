import React from "react";
import Link from "next/link";
import Container from "./Container";
import Image from "next/image";
import { buttonVariants } from "./ui/Button";
import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs/server";
import { ArrowRight } from "lucide-react";

const Navbar = () => {
  const user = true;
  return (
    <nav className="sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
      <Container className="flex h-14 items-center justify-between border-zinc-200">
        <Link href="/" className="flex z-40 font-semibold">
          {/* <Image
            src="thumbnail.png"
            alt="Project Image"
            width={500}
            height={500}
          /> */}
          InfluenceAI
        </Link>

        {/* <MobileNav isAuth={!!user} /> */}

        {/* Mobile Navbar */}
        <div className="hidden items-center space-x-4 sm:flex">
          {user ? (
            <>
              <Link
                href="/pricing"
                className={buttonVariants({
                  variant: "ghost",
                  size: "sm",
                })}
              >
                Pricing
              </Link>

              <LoginLink
                className={buttonVariants({
                  variant: "ghost",
                  size: "sm",
                })}
              >
                Login
              </LoginLink>

              <RegisterLink
                className={
                  buttonVariants({
                    variant: "ghost",
                    size: "sm",
                  }
                )}
              >
                Get Started
                <ArrowRight className="ml-1.5 h-5 w-5 " />
              </RegisterLink>
            </>
          ) : (
            <>
              <Link
                href="/dashboard"
                className={buttonVariants({
                  variant: "ghost",
                  size: "sm",
                })}
              >
                Dashboard
              </Link>
              {/* <UserAccountNav
                  name={
                    !user.given_name || !user.family_name
                      ? 'Your Account'
                      : `${user.given_name} ${user.family_name}`
                  }
                  email={user.email ?? ''}
                  imageUrl={user.picture ?? ''}
                /> */}
            </>
          )}
        </div>
      </Container>
      <div></div>
    </nav>
  );
};

export default Navbar;
