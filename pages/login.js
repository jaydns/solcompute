import Head from "next/head";
import { Button, Card, CardBody, CardFooter, CardHeader, Divider, Input, toggle } from "@nextui-org/react";
import Link from "next/link"
import { useState } from "react";
import { useRouter } from "next/router";
import { useSWRConfig } from 'swr'
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai"

export default function LoginPage(props) {
  const [isVisible, setIsVisible] = useState(false);

  const router = useRouter();
  const { mutate } = useSWRConfig()

  async function onSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget)

    const res = await fetch("/api/login", {
      method: "POST", body: JSON.stringify({
        email: formData.get("email"),
        password: formData.get("password"),
      })
    });

    if (!res.ok) return;

    mutate("/api/user");

    const data = await res.json();

    if (data.type === "HOST") {
      router.push("/host");
    } else {
      router.push("/rent");
    }
  }

  const toggleVisibility = () => setIsVisible(!isVisible)

  return (
    <>
      <Head>
        <title>Login | SolCompute</title>
      </Head>
      <div className="flex flex-row justify-center">
        <Card className="max-w-lg min-w-[28rem]">
          <form onSubmit={onSubmit}><CardHeader>
            <p className="mx-auto text-lg">Login</p>
          </CardHeader>
            <Divider></Divider>
            <CardBody className="flex flex-col gap-4">
              <Input name="email" color="default" variant="bordered" label="Email"></Input>
              <Input name="password" color="default" variant="bordered" label="Password" type={isVisible ? "text" : "password"} endContent={
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
              <Button type="submit" className="mx-auto" color="primary">Confirm</Button>
              <Link color="foreground" href="/signup">Don&apos;t have an account?</Link>
            </CardFooter></form>
        </Card>
      </div>
    </>
  );
}
