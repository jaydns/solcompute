import AppNavbar from "@/components/appNavbar";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <AppNavbar />
    </>
  );
}
