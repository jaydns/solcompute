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
          <p className="text-center max-w-xl mx-auto mt-4 text-default-800">
            Unlock the power of collective computing. We bridge the gap between unused computational resources and those in need. Rent out your idle compute power or tap into a vast network of GPUs to train your AIs, or CPUs to run your simulations and other CPU bound tasks.<br />All backed by Solana.
          </p>
          <div className="flex flex-row justify-center gap-4">
            <Button
              className="w-48 h-12 mx-auto mt-8"
              onClick={() => router.push("/signup")}
              variant="shadow"
              color="success"
            >
              Get Started
            </Button>
          </div>
          <div className="flex flex-row gap-4 mt-8">
            <Card isBlurred={true} className="max-w-md max-h-64">
              <CardHeader>
                <h1>Cost Savings</h1>
              </CardHeader>
              <CardBody>
                <p>
                  Access unmatched rates by tapping into underutilized resources. Your wallet will thank you.
                </p>
              </CardBody>
            </Card>
            <Card isBlurred={true} className="max-w-md max-h-64 outline-8">
              <CardHeader>
                <h1>Truly Decentralized</h1>
              </CardHeader>
              <CardBody>
                <p>
                  Dive into a network that&apos;s resilient and scalable, far beyond centralized systems.
                </p>
              </CardBody>
            </Card>
            <Card isBlurred={true} className="max-w-md max-h-64 ">
              <CardHeader>
                <h1>Always Accessible</h1>
              </CardHeader>

              <CardBody>
                <p>
                  From top-tier researchers to budding enthusiasts, there&apos;s space for everyone.
                </p>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
