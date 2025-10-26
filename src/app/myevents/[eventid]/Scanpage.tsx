import QrScannerComponent from "@/components/QrScanner";

export default function ScanPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <QrScannerComponent />
    </main>
  );
}
