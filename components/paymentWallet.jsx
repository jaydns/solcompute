import { Button, Image } from "@nextui-org/react";
import { useState } from "react";

export default function SolanaWallet( props ) {
    const [showAddress, setShowAddress] = useState(false);

    const toggleShowAddress = () => setShowAddress(!showAddress);
    return (
        <div>
        </div>
    )
}