import { Card, CardBody, CardFooter, CardHeader, Divider } from "@nextui-org/react";
import { MdArrowUpward, MdArrowDownward } from "react-icons/md";
import Image from "next/image";
import ReactCountryFlag from "react-country-flag";

export default function RentCard(props) {
    return (
        <>
            <Card className="transition ease-in-out delay-75 max-w-lg max-h-64 min-w-[28rem] hover:cursor-pointer hover:scale-[1.02] hover:-translate-y-2">
                <CardHeader className="flex flex-row gap-3">
                    <Image src="/Ubuntu.png" width={40} height={40} alt="Server Image"></Image>
                    <div className="flex flex-col grow">
                        <p className="text-md">Ubuntu Server</p>
                        <p className="text-sm">Running</p>
                    </div>
                    <div>
                        <p className="">$0.018/hr</p>
                    </div>
                </CardHeader>
                <Divider></Divider>
                <CardBody className="flex flex-row">
                    <div className="grow">
                        <p>GPU: RTX 4090</p>
                        <p>CPU: AMD EPYC™ 9654P</p>
                        <p>RAM: 16 GB</p>
                    </div>
                    <div>
                        <p>Uptime: 10:32:53</p>
                        <div>
                            <MdArrowUpward className="inline-block mb-1"></MdArrowUpward>
                            <p className="inline-block">100 Mbps</p>
                        </div>
                        <div>
                            <MdArrowDownward className="inline-block mb-1"></MdArrowDownward>
                            <p className="inline-block">100 Mbps</p>
                        </div>
                    </div>
                </CardBody>
                <Divider></Divider>
                <CardFooter className="flex flex-row gap-3">
                    <p className="grow">TFLOPS: 90.8</p>
                    <div className="flex flex-row gap-3">
                        <p>MI, US</p>
                        <ReactCountryFlag countryCode="US" className="m-auto"></ReactCountryFlag>
                    </div>
                </CardFooter>
            </Card>
        </>
    )
}