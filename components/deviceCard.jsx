import { Card, CardBody, CardFooter, CardHeader, Divider, Button } from "@nextui-org/react";
import { useRouter } from "next/router"
import { MdArrowUpward, MdArrowDownward } from "react-icons/md";
import Image from "next/image";
import ReactCountryFlag from "react-country-flag";

export default function DeviceCard(props) {
    const router = useRouter()

    function onClick() {
        router.push(`/machines/${props.id}`)
    }

    return (
        <>
            <Card isPressable onClick={onClick} className="transition ease-in-out delay-75 min-w-[28rem] max-h-64 hover:cursor-pointer hover:scale-[1.02] hover:-translate-y-2">
                <CardHeader className="flex flex-row gap-3">
                    <Image src="/Ubuntu.png" width={40} height={40} alt="Server Image"></Image>
                    <div className="flex flex-col">
                        <p className="text-md w-fit">{props.operatingSystem}</p>
                        <p className="text-sm w-fit">{props.state}</p>
                    </div>
                    <div className="ml-auto">
                        <p className="">{props.costLamports / 1000000000} SOL/hr</p>

                    </div>
                </CardHeader>
                <Divider></Divider>
                <CardBody className="flex flex-row">
                    <div className="grow">
                        <p>GPU: {props.gpu}</p>
                        <p>CPU: {props.cpu}</p>
                        <p>RAM: {props.ram} GB</p>
                    </div>
                    <div>
                        <div>
                            <MdArrowUpward className="inline-block mb-1"></MdArrowUpward>
                            <p className="inline-block">{props.uploadSpeed} Mbps</p>
                        </div>
                        <div>
                            <MdArrowDownward className="inline-block mb-1"></MdArrowDownward>
                            <p className="inline-block">{props.downloadSpeed} Mbps</p>
                        </div>
                    </div>
                </CardBody>
                <Divider></Divider>
                <CardFooter className="flex flex-row justify-between gap-3">
                    <div className="flex flex-row gap-3">
                        {/* its 4 am */}
                        {/* mfw */}
                        <p>USA</p>
                        <ReactCountryFlag countryCode="US" className="m-auto"></ReactCountryFlag>
                    </div>
                </CardFooter>
            </Card>
        </>
    )
}