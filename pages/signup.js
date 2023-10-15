import SignUpCard from "@/components/signupCard";
import Head from "next/head";

export default function SignUpPage(props) {
  return (
    <>
      <Head>
        <title>Create an Account | SolCompute</title>
      </Head>
      <div className="flex flex-row justify-center">
        <SignUpCard></SignUpCard>
      </div>
    </>
  );
}
