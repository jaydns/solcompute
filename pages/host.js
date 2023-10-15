import CardBodyHost from "@/components/cardBodyHosts";
import DeviceCard from "@/components/deviceCard";
import {
  Card,
  CardBody,
  Divider,
  CardHeader,
  CardFooter,
  Button,
  Code,
} from "@nextui-org/react";
import Head from "next/head";

export default function HostPage() {
  return (
    <>
      <Head>
        <title>Hosts | SolCompute</title>
      </Head>
      <div className="flex flex-row justify-center gap-8">
        <Card className="max-w-lg">
          <CardHeader>
            <p className="font-bold">Create Machine</p>
          </CardHeader>
          <Divider></Divider>
          <CardBody>
            <p>1. Install docker and docker compose on your distro</p>
            <p>2. Download the client binary below</p>
            <p>
              3. Run the client with <Code>--key</Code>
            </p>
          </CardBody>
          <Divider></Divider>
          <CardFooter>
            <Button variant="bordered" color="secondary" className="mx-auto">
              Client
            </Button>
          </CardFooter>
        </Card>
        <div>
          <Card className="max-w-lg max-h-[28rem] min-w-[28rem]">
            <CardHeader>
              <p className="font-bold">Hosts</p>
            </CardHeader>
            <Divider></Divider>
            <div className="overflow-auto">
              <CardBodyHost></CardBodyHost>
              <CardBodyHost></CardBodyHost>
              <CardBodyHost></CardBodyHost>
              <CardBodyHost></CardBodyHost>
              <CardBodyHost></CardBodyHost>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}
