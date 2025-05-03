import { Button } from "@/components/ui/button";
import { isAuthenticated, signOut } from "@/lib/actions/auth.action";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

const RootLayout = async ({ children }: { children: ReactNode }) => {
  const isUserAuthenticated = await isAuthenticated();

  if (!isUserAuthenticated) redirect("/sign-in");

  const handleLogout = async () => {
    "use server";
    await signOut();
    redirect("/sign-in");
  };

  return (
    <div className="root-layout">
      <nav className="flex items-center justify-between w-full">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.svg" alt="logo" width={38} height={32} />
          <h2 className="text-primary-100">PrepWise</h2>
        </Link>

        <div className="flex gap-4">
          {isUserAuthenticated ? (
            <form action={handleLogout}>
              <Button type="submit" className="btn-primary">
                Sign Out
              </Button>
            </form>
          ) : (
            <Link href="/sign-in">
              <Button className="btn-secondary">Sign In</Button>
            </Link>
          )}
        </div>
      </nav>
      {children}
    </div>
  );
};

export default RootLayout;
