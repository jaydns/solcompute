import ExpandedPageLayout from "@/components/expandedPageLayout";
import { CircularProgress } from "@nextui-org/react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function ExpandedPage() {
  const [machine, setData] = useState(null)
  const [isLoading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    fetch('/api/machines')
      .then((res) => res.json())
      .then((data) => {
        setData(data.data.find((machine) => machine.id == router.query.id))
        setLoading(false)
      })
  }, [])

  return (
    <>
      <Head>
        <title>Machine Information | SolCompute</title>
      </Head>
      {isLoading && <CircularProgress size="lg" aria-label="Loading..." />}
      {machine && <ExpandedPageLayout
        key={machine.id}
        id={machine.id}
        operatingSystem={machine.operatingSystem}
        cpu={machine.cpu}
        gpu={machine.gpu}
        ramGbs={machine.ramGbs}
        downloadSpeed={machine.downloadSpeedMbps}
        uploadSpeed={machine.uploadSpeedMbps}
        costLamports={machine.costLamports}
      ></ExpandedPageLayout>};
    </>
  );
}
