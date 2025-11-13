import QrScannerComponent from "@/components/QrScanner";

export default function ScanPage({ eventid }: any) {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50 z-0">
      <QrScannerComponent eventid={eventid as string} />
    </main>
  );
}
