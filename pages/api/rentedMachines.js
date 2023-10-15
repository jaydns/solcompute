import { prisma } from "@/prisma"
import { withIronSessionApiRoute } from "iron-session/next";

export default withIronSessionApiRoute(async function handler(req, res) {
    if (req.method !== "GET") {
        res.status(405).json({ message: "Method not allowed" })
        return
    }

    if (!req.session?.user?.id) {
        res.status(401).json({ message: "Unauthorized" })
        return
    }

    const machineData = await prisma.machine.findMany({
        where: {
            renterId: req.session.user.id,
        },
    });

    res.status(200).json({ message: "Success", data: machineData })
}, {
    cookieName: "solcompute_session",
    password: process.env.SESSION_PASSWORD,
    cookieOptions: {
        secure: process.env.NODE_ENV === "production",
    },
},);