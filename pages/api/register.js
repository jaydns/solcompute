import { prisma } from "@/prisma";
import * as argon2 from "argon2";
import { withIronSessionApiRoute } from "iron-session/next";

export default withIronSessionApiRoute(
    async function loginRoute(req, res) {
        if (req.method === 'POST') {
            const data = JSON.parse(req.body);

            const user = await prisma.user.create({
                data: {
                    email: data.email,
                    password: await argon2.hash(data.password),
                    type: data.type.toUpperCase(),
                },
            });

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