import { Button, Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link"
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";
import { User } from "@nextui-org/react";
import useUser from "@/lib/useUser";

export default function AppNavbar() {
    const router = useRouter()
    const pathname = usePathname()
    const { data, mutateUser } = useUser();
    const user = data?.user;

    return (
        <>
            <Navbar className={(pathname === "/" ? "absolute" : "mb-6")}>
                <NavbarBrand>
                    <Image onClick={() => router.push("/")} src="/solcompute_nobg.png" width={50} height={50} alt="idk" className="font-bold mr-2 hover:cursor-pointer"></Image>
                    <Link className={(pathname === "/" ? "text-primary hover:cursor-pointer font-bold" : "text-foreground hover:cursor-pointer")} href="/">SolCompute</Link>
                </NavbarBrand>
                {user?.isLoggedIn && (<>
                    <NavbarContent justify="center">
                        {user.type === "CONSUMER" && (<><NavbarItem isActive={pathname === "/rent"}>
                            <Link href="/rent" className={(pathname === "/rent") ? "text-primary" : "text-foreground"}>
                                Rent
                            </Link>
                        </NavbarItem>
                            <NavbarItem isActive={pathname === "/machines"}>
                                <Link href="/machines" className={(pathname === "/machines") ? "text-primary" : "text-foreground"}>
                                    Machines
                                </Link>
                            </NavbarItem>
                            <NavbarItem isActive={pathname === "/billing"}>
                                <Link href="/billing" className={(pathname === "/billing") ? "text-primary" : "text-foreground"}>
                                    Billing
                                </Link>
                            </NavbarItem></>)}
                        {user.type === "HOST" && (<>
                            <NavbarItem isActive={pathname === "/host"}>
                                <Link href="/host" className={(pathname === "/host") ? "text-primary" : "text-foreground"}>
                                    Machines
                                </Link>
                            </NavbarItem></>)}
                    </NavbarContent></>)}
                <NavbarContent justify="end">
                    {!user?.isLoggedIn && (<><NavbarItem>
                        <Button onClick={() => router.push("/signup")} color={pathname === "/signup" ? "primary" : "default"} variant="flat">
                            Sign up
                        </Button>
                    </NavbarItem>
                        <NavbarItem>
                            <Button onClick={() => router.push("/login")} color={pathname === "/login" ? "primary" : "default"} href="#" variant="flat">
                                Login
                            </Button>
                        </NavbarItem></>)}
                    {user?.isLoggedIn && (<><NavbarItem>
                        <User
                            name={user.email}
                        />
                    </NavbarItem></>)}
                </NavbarContent>
            </Navbar>
        </>


    )
}