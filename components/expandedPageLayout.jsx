import { Card, CardBody, CardHeader, Divider, CardFooter, Image, Button } from "@nextui-org/react";
import { MdArrowUpward, MdArrowDownward } from "react-icons/md";



export default function ExpandedPageLayout({
    id,
    operatingSystem = "Unknown OS",
    state = "Unknown State",
    costLamports,
    gpu = "Unknown GPU",
    cpu = "Unknown CPU",
    ram,
    uptime = "Unknown Uptime",
    uploadSpeed,
    downloadSpeed,
}) {
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
                            <p>Operating System: {operatingSystem}</p>
                            {cpu && <p>CPU: {cpu}</p>}
                            {gpu && <p>GPU: {gpu}</p>}
                            {ram && <p>RAM: {ram} GB</p>}
                            <div>
                                <MdArrowUpward className="inline-block mb-1"></MdArrowUpward>
                                {uploadSpeed && <p className="inline-block">{uploadSpeed} Mbps</p>}
                            </div>
                            <div>
                                <MdArrowDownward className="inline-block mb-1"></MdArrowDownward>
                                {downloadSpeed && <p className="inline-block">{downloadSpeed} Mbps</p>}
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
                    <CardBody>
                        <p>Type: Wired</p>
                        <p>Download: 100 Mbps</p>
                        <p>Upload: 100 Mbps</p>
                        <p>Data transferred: 21.05 GB</p>
                    </CardBody>
                </Card>

                <Card className="min-w-[28rem]">
                    <CardHeader>
                        <p className="font-bold">Storage Information</p>
                    </CardHeader>
                    <Divider></Divider>
                    <CardBody>
                        <p>Total: 2.5 TB</p>
                        <p>Used: 1.6 TB</p>
                        <p>Available: 0.9 TB</p>
                        <p>Read speed: 50 MB/s</p>
                        <p>Write speed: 200 MB/s</p>
                    </CardBody>
                </Card>

                <Card className="min-w-[28rem]">
                    <CardHeader>
                        <p className="font-bold">Memory Information</p>
                    </CardHeader>
                    <Divider></Divider>
                    <CardBody>
                        <p>Total: 16 GB</p>
                        <p>Speed: 2400 MHz</p>
                        <p>In use: 8.3 GB</p>
                        <p>Available: 7.7 GB</p>
                        <p>Cached: 3 GB</p>
                    </CardBody>
                </Card>

                <Card className="min-w-[28rem]">
                    <CardHeader>
                        <p className="font-bold">CPU Information</p>
                    </CardHeader>
                    <Divider></Divider>
                    <CardBody>
                        <p>AMD EPYC</p>
                        <p>Utilization: 1%</p>
                        <p>Speed: 4.04 GHz</p>
                        <p>Cores: 16</p>
                        <p>Threads: 32</p>
                    </CardBody>
                </Card>

                <Card className="min-w-[28rem]">
                    <CardHeader>
                        <p className="font-bold">GPU Information</p>
                    </CardHeader>
                    <Divider></Divider>
                    <CardBody>
                        <p>NVIDIA GeForce RTX 4090</p>
                        <p>Utilization: 1%</p>
                        <p>GPU Memory: 16 GB</p>
                    </CardBody>
                </Card>

                <Card className="min-w-[28rem]">
                    <CardHeader>
                        <p className="font-bold">Renting</p>
                    </CardHeader>
                    <Divider></Divider>
                    <CardBody>
                        <p>{costLamports / 1000000000} SOL/hr</p>
                    </CardBody>
                    <Divider></Divider>
                    <CardFooter>
                        <Button variant="solid" color="primary" className="mx-auto" >Rent</Button>
                    </CardFooter>
                </Card>
            </div>
        </>
    )
}