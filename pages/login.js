import LoginCard from "@/components/loginCard";
import Head from "next/head";

export default function SignUpPage(props) {
  return (
    <>
      <Head>
        <title>Login | SolCompute</title>
      </Head>
      <div className="flex flex-row justify-center">
        <LoginCard></LoginCard>
      </div>
    </>
  );
}
