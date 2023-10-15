import { prisma } from "@/prisma"
import { withIronSessionApiRoute } from "iron-session/next";

export default async function handler(req, res) {
    if (req.method !== "GET") {
        res.status(405).json({ message: "Method not allowed" })
        return
    }

    const machineData = await prisma.machine.findMany();

    res.status(200).json({ message: "Success", data: machineData })
};