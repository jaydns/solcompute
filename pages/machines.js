import DeviceCard from "@/components/deviceCard";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function ClientsPage() {
  return (
    <>
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
