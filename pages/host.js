import CardBodyHost from "@/components/cardBodyHosts";
import DeviceCard from "@/components/deviceCard";
import useUser from "@/lib/useUser";
import {
  Card,
  CardBody,
  Divider,
  CardHeader,
  CardFooter,
  Button,
  Code,
  CircularProgress,
} from "@nextui-org/react";
import Head from "next/head";
import { useEffect, useState } from "react";

export default function HostPage() {
  const { data, mutateUser } = useUser();

  const [machineRawData, setData] = useState(null)
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/userMachines')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  }, [])

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
            <p>1. Ensure Docker and Docker Compose are installed.</p>
            <p>2. Download the client binary below</p>
            <p>
              3. When prompted, enter the key <Code>{data?.user?.id}</Code> to connect your account to the machine.
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
              {isLoading && <CircularProgress size="lg" aria-label="Loading..." />}
              {machineRawData?.data?.map((machine) => (
                <DeviceCard
                  key={machine.id}
                  id={machine.id}
                  operatingSystem={machine.operatingSystem}
                  cpu={machine.cpu}
                  gpu={machine.gpu}
                  ramGbs={machine.ramGbs}
                  downloadSpeed={machine.downloadSpeedMbps}
                  uploadSpeed={machine.uploadSpeedMbps}
                  costLamports={machine.costLamports}
                />
              ))}
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}
