import { Button, Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link"
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";

export default function AppNavbar() {
    const router = useRouter()
    const pathname = usePathname()
    return (
        <>
            <Navbar className="mb-6 data-[active=true]:after:color">
                <NavbarBrand>
                    <Image src="/solcompute.png" width={50} height={50} alt="idk" className="font-bold mr-2"></Image>
                    <p>SolanaCompute</p>
                </NavbarBrand>
                <NavbarContent justify="center">
                    <NavbarItem isActive={pathname === "/rent"}>
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
                    </NavbarItem>
                </NavbarContent>
                <NavbarContent justify="end">
                    <NavbarItem>
                        <Button onClick={() => router.push("/signup")} color={pathname === "/signup" ? "primary" : "default"} variant="flat">
                            Sign up
                        </Button>
                    </NavbarItem>
                    <NavbarItem>
                        <Button onClick={() => router.push("/login")} color={pathname === "/login" ? "primary" : "default"} href="#" variant="flat">
                            Login
                        </Button>
                    </NavbarItem>
                </NavbarContent>
            </Navbar>
        </>
        
        
    )
}