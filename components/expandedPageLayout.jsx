import { Card, CardBody, CardHeader, Divider, CardFooter, Image } from "@nextui-org/react";
import { MdArrowUpward, MdArrowDownward } from "react-icons/md";


export default function ExpandedPageLayout( props ) {
    return (
        <>
        <div className="flex flex-wrap gap-12 justify-center m-4">
        <Card className="max-w-[28rem]">
            <CardHeader>
                <p className="font-bold">System Overview</p>
            </CardHeader>
            <Divider></Divider>
            <CardBody className="flex flex-row">
                <div>
                <p>Operating System: Ubuntu 23.04 LTS</p>
                <p>CPU: AMD Epyc</p>
                <p>GPU: RTX 4090</p>
                <p>RAM: 16 GB</p>
                <p>CPU: AMD Epyc</p>
                <div>
                    <MdArrowUpward className="inline-block mb-1"></MdArrowUpward>
                    <p className="inline-block">100 Mbps</p>
                    </div>
                    <div>
                    <MdArrowDownward className="inline-block mb-1"></MdArrowDownward>
                    <p className="inline-block">100 Mbps</p>
                </div>
                </div>
                <div className="place-self-end ml-auto">
                    <Image src="/Ubuntu.png" width={100} height={100} alt="Ubuntu Logo"></Image>
                </div>
            </CardBody>
            <Divider></Divider>
            <CardFooter>
                <p>Uptime: 10:42:54</p>
            </CardFooter>
        </Card>

        <Card className="min-w-[28rem]">
            <CardHeader>
                <p className="font-bold">Network Information</p>
            </CardHeader>
            <Divider></Divider>
        </Card>

        <Card className="min-w-[28rem]">
            <CardHeader>
                <p className="font-bold">CPU Information</p>
            </CardHeader>
            <Divider></Divider>
        </Card>

        <Card className="min-w-[28rem]">
            <CardHeader>
                <p className="font-bold">GPU Information</p>
            </CardHeader>
            <Divider></Divider>
        </Card>

        <Card className="min-w-[28rem]">
            <CardHeader>
                <p className="font-bold">Renting</p>
            </CardHeader>
            <Divider></Divider>
        </Card>
        </div>
        </>
    )
}