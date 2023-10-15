import PaymentCards from "@/components/paymentLayout";
import Head from "next/head";

export default function PaymentsPage() {
  return (
    <>
      <Head>
        <title>Billing | SolCompute</title>
      </Head>
      <div className="flex flex-row gap-12 justify-center">
        <PaymentCards address="3n2C45yBiNapKh6EdDekesZccAFdwTatu46Eyw1UnKx2"></PaymentCards>
      </div>
    </>
  );
}
