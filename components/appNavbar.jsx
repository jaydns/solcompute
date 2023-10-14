import { Button, Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react";
import Image from "next/image";
import { Link } from "@nextui-org/react";

export default function AppNavbar() {
    return (
        <>
            <Navbar>
                <NavbarBrand>
                    <Image src="/Solana_logo.png" width={50} height={50} alt="idk" className="font-bold mr-2"></Image>
                    <p>SolanaCompute</p>
                </NavbarBrand>
                <NavbarContent justify="center">
                    <NavbarItem>
                        <Link href="#test" color="foreground">
                            Rent
                        </Link>
                    </NavbarItem>
                    <NavbarItem isActive>
                        <Link href="#test">
                            Clients
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link href="#test" color="foreground">
                            Payments
                        </Link>
                    </NavbarItem>
                </NavbarContent>
                <NavbarContent justify="end">
                    <NavbarItem>
                        <Button as={Link} color="primary" href="#" variant="flat">
                            Sign up
                        </Button>
                    </NavbarItem>
                    <NavbarItem>
                        <Button as={Link} color="primary" href="#" variant="flat">
                            Login
                        </Button>
                    </NavbarItem>
                </NavbarContent>
            </Navbar>
        </>
        
        
    )
}