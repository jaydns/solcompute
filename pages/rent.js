import RentPageLayout from "@/components/rentPage";
import Head from "next/head";

export default function RentPage(props) {
  return (
    <>
      <Head>
        <title>Rent | SolCompute</title>
      </Head>
      <RentPageLayout></RentPageLayout>
    </>
  );
}
