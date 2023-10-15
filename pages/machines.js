import DeviceCard from "@/components/deviceCard";
import FilterCard from "@/components/filterCard";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function ClientsPage() {
  return (
    <>
      <Head>
        <title>Machines | SolCompute</title>
      </Head>
      <div className="flex flex-row justify-center">
        <FilterCard></FilterCard>
      </div>
      <div className="flex flex-wrap gap-6 justify-center">
        <DeviceCard></DeviceCard>
        <DeviceCard></DeviceCard>
        <DeviceCard></DeviceCard>
        <DeviceCard></DeviceCard>
        <DeviceCard></DeviceCard>
        <DeviceCard></DeviceCard>
        <DeviceCard></DeviceCard>
      </div>
    </>
  );
}
