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
                    <Image src="/Solana_logo.png" width={50} height={50} alt="idk" className="font-bold mr-2"></Image>
                    <p>SolanaCompute</p>
                </NavbarBrand>
                <NavbarContent justify="center">
                    <NavbarItem isActive={pathname === "/rent"}>
                        <Link href="/rent">
                            Rent
                        </Link>
                    </NavbarItem>
                    <NavbarItem isActive={pathname === "/machines"}>
                        <Link href="/machines">
                            Machines
                        </Link>
                    </NavbarItem>
                    <NavbarItem isActive={pathname === "/billing"}>
                        <Link href="/billing">
                            Billing
                        </Link>
                    </NavbarItem>
                </NavbarContent>
                <NavbarContent justify="end">
                    <NavbarItem>
                        <Button onClick={() => router.push("/signup")} as={Link} color="primary" variant="flat">
                            Sign up
                        </Button>
                    </NavbarItem>
                    <NavbarItem>
                        <Button onClick={() => router.push("/login")} as={Link} color="primary" href="#" variant="flat">
                            Login
                        </Button>
                    </NavbarItem>
                </NavbarContent>
            </Navbar>
        </>
        
        
    )
}