import { Button, Card, CardBody, CardFooter, CardHeader, Divider, Image } from "@nextui-org/react";
import SolanaWallet from "./paymentWallet";

export default function PaymentCards( props ) {
    return (
        <>
        <Card className="max-w-xl min-w-[28rem]">
            <CardHeader>
                <div>
                    <p className="font-bold">Usage</p>
                </div>
            </CardHeader>
            <Divider></Divider>
            <CardBody>
                <div>
                    <p>Balance Due: $534.32</p>
                </div>
            </CardBody>
            <Divider></Divider>
            <CardFooter>
                <Button color="success" className="mx-auto">Pay Now</Button>
            </CardFooter>

        </Card>
        <Card className="max-w-xl min-w-[28rem]">
            <CardHeader className="flex flex-row gap-4">
            <div>
                <p className="font-bold">Payment Methods</p>
            </div>
            </CardHeader>
            <Divider></Divider>
            <CardBody className="flex flex-col gap-6">
                <SolanaWallet address="3n2C45yBiNapKh6EdDekesZccAFdwTatu46Eyw1UnKx2"></SolanaWallet>
                <SolanaWallet></SolanaWallet>
                <SolanaWallet></SolanaWallet>
            </CardBody>
            <Divider></Divider>
            <CardFooter>
                <Button className="mx-auto">Add</Button>
            </CardFooter>
        </Card>
        </>
    )
}