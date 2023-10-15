import PaymentCards from "@/components/paymentLayout";
import Head from "next/head";

export default function PaymentsPage() {
  return (
    <>
      <Head>
        <title>Billing | SolCompute</title>
      </Head>
      <div className="flex flex-row gap-12 justify-center">
        <PaymentCards address="5VVMbS17ZQ3RNRwsHxbbzQUEY3Q8ys9USBXpNf38EjKH"></PaymentCards>
      </div>
    </>
  );
}
