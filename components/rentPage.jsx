import FilterCard from "./filterCard";
import RentCard from "./rentCard";

export default function RentPageLayout( props ) {
    return (
        <>
        <div className="flex flex-row justify-center">
                <FilterCard></FilterCard>
        </div>
        
            <div className="flex flex-wrap gap-6 justify-center">
                <RentCard></RentCard>
                <RentCard></RentCard>
                <RentCard></RentCard>
                <RentCard></RentCard>
                <RentCard></RentCard>
                <RentCard></RentCard>
                <RentCard></RentCard>
            </div>
        </>
    )
}