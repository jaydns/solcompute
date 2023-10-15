import { CardBody, CardFooter, Divider, Image } from "@nextui-org/react";

export default function CardBodyHost() {
    return (
        <>
        <CardBody>
            <div className="flex flex-row gap-3">
                <Image src="/Ubuntu.png" width={40} height={40} alt="Ubuntu Server"></Image>
                <div className="flex flex-col">
                    <p className="text-md">Ubuntu Server</p>
                    <p className="text-sm">Running</p>
                </div>
                <div className="ml-auto">
                    <p className="text-md">CPU: AMD EPYC</p>
                    <p className="text-md">GPU: RTX 4090</p>
                </div>
            </div>
            <CardFooter>
                <p>IP: 123.123.32.12</p>
            </CardFooter>
        </CardBody>
        <Divider></Divider>
        </>
    )
}