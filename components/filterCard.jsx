import { Card, CardBody, CardHeader, Divider, Select, SelectItem } from "@nextui-org/react";
import { ram as ramAmounts } from "@/filters/filters";

export default function FilterCard( props ) {
    return (
        <>
            <Card className="max-w-lg min-w-[32rem] m-4">
                <CardHeader>
                    <p className="font-bold">Filters</p>
                </CardHeader>
                <Divider></Divider>
                <CardBody>
                    <div className="grid grid-cols-3 grid-flow-row gap-2">
                        <Select size="sm" label="Location" placeholder="Any"></Select>
                        <Select size="sm" label="Operating System" placeholder="Any"></Select>
                        <Select size="sm" label="Price" placeholder="Any"></Select>
                        <Select size="sm" label="GPU" placeholder="Any"></Select>
                        <Select size="sm" label="CPU" placeholder="Any"></Select>
                        <Select size="sm" label="Memory" placeholder="Any">
                        {ramAmounts.map((ram) => (
                                <SelectItem key={ram.value} value={ram.value}>
                                    {ram.label}
                                </SelectItem>
                            ))}
                        </Select>

                    </div>
                </CardBody>
            </Card>
        </>
    )
}