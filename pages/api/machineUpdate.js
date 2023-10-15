import { prisma } from "@/prisma"

export default async function handler(req, res) {
    if (req.method !== "PUT") {
        res.status(405).json({ message: "Method not allowed" })
        return
    }

    const data = JSON.parse(req.body);

    const machineData = await prisma.machine.update({
        where: {
            id: data.id
        },
        data: {
            costLamports: data.costLamports,
            cpu: data.cpu,
            gpu: data.gpu,
            downloadSpeedMbps: data.downloadSpeedMbps,
            uploadSpeedMbps: data.uploadSpeedMbps,
            location: data.location,
            onTime: new Date(data.onTime),
            operatingSystem: data.operatingSystem,
            ramGbs: data.ramGbs,
        }
    });

    res.status(200).json({ message: "Success", data: machineData })
}