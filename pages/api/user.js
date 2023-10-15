import { withIronSessionApiRoute } from "iron-session/next";

export default withIronSessionApiRoute(
    function userRoute(req, res) {
        res.send({ user: req.session.user });
    },
    {
        cookieName: "solcompute_session",
        password: process.env.SESSION_PASSWORD,
        cookieOptions: {
            secure: process.env.NODE_ENV === "production",
        },
    },
);