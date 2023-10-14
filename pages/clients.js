import AppNavbar from "@/components/appNavbar";
import ClientCard from "@/components/clientCard";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function ClientsPage() {
  return (
    <>
      <AppNavbar />
      <div className="flex mt-12 flex-wrap gap-6 justify-center">
        <ClientCard></ClientCard>
        <ClientCard></ClientCard>
        <ClientCard></ClientCard>
        <ClientCard></ClientCard>
        <ClientCard></ClientCard>
        <ClientCard></ClientCard>
        <ClientCard></ClientCard>
      </div>
    </>
  );
}
