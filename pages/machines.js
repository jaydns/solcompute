import DeviceCard from "@/components/deviceCard";
import FilterCard from "@/components/filterCard";
import { CircularProgress } from "@nextui-org/react";
import { Inter } from "next/font/google";
import Head from "next/head";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function ClientsPage() {
  const [machineRawData, setData] = useState(null)
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/rentedMachines')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  }, [])

  return (
    <>
      <Head>
        <title>Machines | SolCompute</title>
      </Head>
      <div className="flex flex-row justify-center">
        <FilterCard></FilterCard>
      </div>
      <div className="flex flex-wrap gap-6 justify-center">
        {isLoading && <CircularProgress size="lg" aria-label="Loading..." />}
        {machineRawData?.data?.map((machine) => (
          <DeviceCard
            key={machine.id}
            id={machine.id}
            operatingSystem={machine.operatingSystem}
            cpu={machine.cpu}
            gpu={machine.gpu}
            ram={machine.ramGbs}
            downloadSpeed={machine.downloadSpeedMbps}
            uploadSpeed={machine.uploadSpeedMbps}
            costLamports={machine.costLamports}
          />
        ))}
      </div>
    </>
  );
}
