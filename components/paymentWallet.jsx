import { Button, Image } from "@nextui-org/react";
import { useState } from "react";

export default function SolanaWallet( props ) {
    const [showAddress, setShowAddress] = useState(false);

    const toggleShowAddress = () => setShowAddress(!showAddress);
    return (
        <div className="flex flex-row gap-2">
                    <Image src="/testQR.png" width={60} alt="Wallet QR"></Image>
                    <div>
                        <p>Solana Wallet</p>
                        <p onClick={toggleShowAddress} className="text-sm hover:cursor-pointer text-default-500">{showAddress ? (
                            props.address
                        ) : (
                            "Show Address"
                        )}</p>
                    </div>
                    <Button color="danger" className="ml-auto">Remove</Button>
        </div>
    )
}