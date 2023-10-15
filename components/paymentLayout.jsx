import { Button, Card, CardBody, CardFooter, CardHeader, Divider, Image } from "@nextui-org/react";
import SolanaWallet from "./paymentWallet";
import { useState } from "react";

export default function PaymentCards(props) {
    const [showAddress, setShowAddress] = useState(false);

    const toggleShowAddress = () => setShowAddress(!showAddress);
    return (
        <>
            <Card className="max-w-xl min-w-[28rem] min-h-[16rem] max-h-64 place-self-center">
                <CardHeader>
                    <div>
                        <p className="font-bold">Usage</p>
                    </div>
                </CardHeader>
                <Divider></Divider>
                <CardBody>
                    <div>
                        <p>Balance Due: 0.00 SOL</p>
                    </div>
                </CardBody>
                <Divider></Divider>
                <CardFooter>
                    <Button color="success" className="mx-auto">Pay Now</Button>
                </CardFooter>
            </Card>
            <Card className="max-w-xl min-w-[20rem]">
                <CardHeader className="flex flex-row gap-4">
                    <div>
                        <p className="font-bold">Solana Wallet</p>
                    </div>
                </CardHeader>
                <Divider></Divider>
                <CardBody className="flex flex-row justify-center">
                    <Image src="/testQR.png" width={240} height={240} alt="Wallet QR"></Image>
                </CardBody>
                <Divider></Divider>
                <CardFooter className="flex flex-row gap-2 justify-between">
                    <p>5VVMbS17ZQ3RNRwsHxbbzQUEY3Q8ys9USBXpNf38EjKH</p>
                </CardFooter>
            </Card>
        </>
    )
}