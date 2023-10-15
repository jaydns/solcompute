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

export default function HostPage() {
  return (
    <>
      <div className="flex flex-col">
        <Card className="max-w-lg mx-auto my-2">
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
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <DeviceCard></DeviceCard>
          <DeviceCard></DeviceCard>
          <DeviceCard></DeviceCard>
          <DeviceCard></DeviceCard>
          <DeviceCard></DeviceCard>
        </div>
      </div>
    </>
  );
}
