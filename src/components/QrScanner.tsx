"use client";

import { verifyTicket } from "@/app/actions";
import { useState, useTransition } from "react";
import { Scanner } from "@yudiel/react-qr-scanner";

export default function QrScannerComponent() {
  const [scannedData, setScannedData] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const handleScan = (detectedCodes: any) => {
    console.log(typeof detectedCodes);
    setScannedData(detectedCodes);
    setMessage("Verifying ticket...");

    startTransition(async () => {
      const result = await verifyTicket(scannedData as string);

      if (result.success) {
        setMessage(`✅ Verified! ${result.name} - ${result.event}`);
      } else {
        setMessage(`❌ ${result.message}`);
      }
    });
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <h2 className="text-2xl font-bold">Scan Ticket QR Code</h2>
      <div className="relative w-80 h-80 rounded-xl overflow-hidden border-4 border-blue-500">
        <Scanner
          onScan={handleScan}
          onError={(error: any) => console.error(error?.message || error)}
          constraints={{ facingMode: "environment" }}
        />
      </div>

      {isPending ? (
        <p className="text-gray-600 font-medium animate-pulse">Checking...</p>
      ) : (
        message && <p className="text-center text-sm">{message}</p>
      )}
    </div>
  );
}
