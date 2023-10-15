import { prisma } from "@/prisma"
import { withIronSessionApiRoute } from "iron-session/next";

export default withIronSessionApiRoute(async function handler(req, res) {
    if (req.method !== "POST") {
        res.status(405).json({ message: "Method not allowed" })
        return
    }

    const data = req.body;

    if (!req.session?.user?.id) {
        res.status(401).json({ message: "Unauthorized" })
        return
    }

    const machine = await prisma.machine.update({
        where: {
            id: data.id
        },
        data: {
            renterId: req.session.user.id
        }
    });

    res.status(200).json({ message: "Success", data: machine })
}, {
    cookieName: "solcompute_session",
    password: process.env.SESSION_PASSWORD,
    cookieOptions: {
        secure: process.env.NODE_ENV === "production",
    },
},);