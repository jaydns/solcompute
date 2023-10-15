import FilterCard from "./filterCard";
import DeviceCard from "./deviceCard";
import { CircularProgress } from "@nextui-org/react";
import { useEffect, useState } from "react";

export default function RentPageLayout(props) {
    const [machineRawData, setData] = useState(null)
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        fetch('/api/machines')
            .then((res) => res.json())
            .then((data) => {
                setData(data)
                setLoading(false)
            })
    }, [])

    return (
        <>
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
                        ramGbs={machine.ramGbs}
                        downloadSpeed={machine.downloadSpeedMbps}
                        uploadSpeed={machine.uploadSpeedMbps}
                        costLamports={machine.costLamports}
                    />
                ))}
            </div>
        </>
    )
}