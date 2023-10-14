import FilterCard from "./filterCard";
import DeviceCard from "./deviceCard";

export default function RentPageLayout( props ) {
    return (
        <>
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
    )
}