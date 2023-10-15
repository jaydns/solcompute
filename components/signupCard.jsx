import { Button, Card, CardBody, CardFooter, CardHeader, Divider, Input, RadioGroup, Radio } from "@nextui-org/react";
import { useState } from "react";
import Link from "next/link"
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai"
import { useRouter } from "next/router";

export default function SignUpCard(props) {
    const [isVisible, setIsVisible] = useState(false);
    const router = useRouter();

    async function onSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget)

        await fetch("/api/register", {
            method: "POST", body: JSON.stringify({
                email: formData.get("email"),
                password: formData.get("password"),
                type: formData.get("type")
            })
        });

        router.push("/machines");
    }

    const toggleVisibility = () => setIsVisible(!isVisible)
    return (
        <>
            <Card className="max-w-lg min-w-[28rem]">
                <form onSubmit={onSubmit}>
                    <CardHeader>
                        <p className="mx-auto text-lg">Sign Up</p>
                    </CardHeader>
                    <Divider></Divider>
                    <CardBody className="flex flex-col gap-4">
                        <Input type="text" name="email" color="default" variant="bordered" label="Email"></Input>
                        <Input name="password" color="default" variant="bordered" label="Create a password" type={isVisible ? "text" : "password"} endContent={
                            <button className="focus:outline-none text-2xl mt-auto" type="button" onClick={toggleVisibility}>
                                {isVisible ? (
                                    <AiFillEye className=""></AiFillEye>
                                ) : (
                                    <AiFillEyeInvisible className="text-default"></AiFillEyeInvisible>
                                )}
                            </button>
                        }></Input>
                        <RadioGroup type="radio" name="type" label="What are you using this account for?">
                            <Radio value="host">Hosting</Radio>
                            <Radio value="consumer">Renting</Radio>
                        </RadioGroup>
                    </CardBody>
                    <Divider></Divider>
                    <CardFooter className="flex flex-col gap-y-2">
                        <Button type="submit" className="mx-auto" color="primary">Confirm</Button>
                        <Link color="foreground" href="/login">Already have an account?</Link>
                    </CardFooter>
                </form>
            </Card>
        </>
    )
}