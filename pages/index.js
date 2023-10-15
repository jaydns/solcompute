import { Button, CardHeader, Card, Divider, CardBody } from "@nextui-org/react";
import { Inter } from "next/font/google";
import Image from "next/image";
import bg from "../public/backgroundblur.png";
import { useRouter } from "next/router";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Home | SolCompute</title>
      </Head>
      <div
        style={{
          backgroundImage: `url(${bg.src}) `,
          height: "100vh",
          width: "100%",
        }}
        className="flex flex-row justify-center h-screen"
      >
        <div className="flex flex-col max-w-5xl justify-center text-center gap-2 mb-auto mt-24">
          <h1 className="font-semibold text-6xl bg-gradient-to-r from-violet-600 to-cyan-400 bg-clip-text text-transparent">
            Decentralized
          </h1>
          <h1 className="font-semibold text-6xl">Computing.</h1>
          <p className="text-center max-w-md mx-auto mt-4 text-default-800">
            Powered by the Solana blockchain, which means that it is
            confidential and secure. Users can be confident that their data and
            transactions are safe.
          </p>
          <div className="flex flex-row justify-center gap-4">
            <Button
              className="w-24 mx-auto mt-8"
              onClick={() => router.push("/signup")}
              variant="shadow"
              color="success"
            >
              Get Started
            </Button>
          </div>
          <div className="flex flex-row gap-4 mt-8">
            <Card className="max-w-md max-h-64">
              <CardHeader>
                <h1>Passive Income.</h1>
              </CardHeader>
              <Divider></Divider>
              <CardBody>
                <p>
                  Users can earn passive income by renting out their computing
                  power to others. This is a great way to make extra money
                  without having to do anything extra.
                </p>
              </CardBody>
            </Card>
            <Card className="max-w-md max-h-64 ">
              <CardHeader>
                <h1>Support large projects</h1>
              </CardHeader>
              <Divider></Divider>
              <CardBody>
                <p>
                  Empower your team with scalable, efficient, and transparent
                  computing power. <br /> <br /> Access a global network of
                  computing resources to support your most ambitious projects.
                </p>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
