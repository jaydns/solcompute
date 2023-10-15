import { Button, Card, CardBody, CardFooter, CardHeader, Divider, Input, toggle } from "@nextui-org/react";
import Link from "next/link"
import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible} from "react-icons/ai"

export default function LoginCard( props ) {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => setIsVisible(!isVisible)
    return (
        <>
            <Card className="max-w-lg min-w-[28rem]">
                <CardHeader>
                    <p className="mx-auto text-lg">Login</p>
                </CardHeader>
                <Divider></Divider>
                <CardBody className="flex flex-col gap-4">
                    <Input color="default" variant="bordered" label="Email"></Input>
                    <Input color="default" variant="bordered" label="Password" type={isVisible ? "text" : "password"} endContent={
                        <button className="focus:outline-none text-2xl mt-auto" type="button" onClick={toggleVisibility}>
                            {isVisible ? (
                                <AiFillEye className=""></AiFillEye>
                            ) : (
                                <AiFillEyeInvisible className="text-default"></AiFillEyeInvisible>
                            )}
                        </button>
                    }></Input>
                </CardBody>
                <Divider></Divider>
                <CardFooter className="flex flex-col gap-y-2">
                    <Button className="mx-auto" color="primary">Confirm</Button>
                    <Link color="foreground" href="/signup">Don't have an account?</Link>
                </CardFooter>
            </Card>
        </>
    )
}