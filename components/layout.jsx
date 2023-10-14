import Image from "next/image"
import { MdAccountCircle, MdDns, MdDevices, MdPayments, MdSettings } from "react-icons/md"


export default function Layout() {
    return (
        <>
            <div className="h-screen w-screen">
                <div className="inline-flex flex-col gap-y-4 bg-gray-900 w-24 h-screen">
                    <div className="inline-flex w-screen">
                        <Image src="/placeholder.jpg" width={96} height={60}></Image>
                        <h1>hello</h1>
                </div>
                <div>
                </div>
                    <div className="w-full h-16 hover:bg-gray-950 hover:cursor-pointer">
                        <MdAccountCircle className="h-full w-12 m-auto"></MdAccountCircle>
                    </div>
                    <div className="w-full h-16 hover:bg-gray-950 hover:cursor-pointer">
                        <MdDns className="h-full w-12 m-auto"></MdDns>
                    </div>
                    <div className="w-full h-16 hover:bg-gray-950 hover:cursor-pointer">
                        <MdDevices className="h-full w-12 m-auto"></MdDevices>
                    </div>
                    <div className="w-full h-16 hover:bg-gray-950 hover:cursor-pointer mb-auto">
                        <MdPayments className=" h-full w-12 m-auto"></MdPayments>
                    </div>
                    <div className="w-full h-16 hover:bg-gray-950 hover:cursor-pointer">
                        <MdSettings className="h-full w-12 m-auto"></MdSettings>
                    </div>
                </div>
            </div>
        </>
    )
}