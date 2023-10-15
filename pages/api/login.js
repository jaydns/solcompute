import { prisma } from "@/prisma";
import * as argon2 from "argon2";
import { withIronSessionApiRoute } from "iron-session/next";

export default withIronSessionApiRoute(
    async function loginRoute(req, res) {
        if (req.method === 'POST') {
            const data = JSON.parse(req.body);

            const user = await prisma.user.findFirst({
                where: {
                    email: data.email,
                },
            });

            if (!user) {
                res.status(401).send({ ok: false });
                return;
            }

            req.session.user = {
                isLoggedIn: true,
                id: user.id,
                email: user.email,
                type: user.type,
            };

            await req.session.save();

            res.send({ ok: true });
        }
    },
    {
        cookieName: "solcompute_session",
        password: process.env.SESSION_PASSWORD,
        cookieOptions: {
            secure: process.env.NODE_ENV === "production",
        },
    },
);