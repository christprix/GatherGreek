"use client";

import { verifyTicket } from "@/app/actions";
import { useState, useTransition } from "react";
import { Scanner, useDevices } from "@yudiel/react-qr-scanner";

export default function QrScannerComponent() {
  const [scannedData, setScannedData] = useState<string | null>(null);
  const [qrCode, setQrCode] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();
  const devices = useDevices();
  const [selectedDevice, setSelectedDevice] = useState(null);

  const handleScan = (detectedCodes: any) => {
    console.log(typeof detectedCodes);
    detectedCodes.forEach((code: any) => {
      setQrCode(code.rawValue);
      setScannedData(code.rawValue);
      setMessage("Verifying ticket...");

      startTransition(async () => {
        const result = await verifyTicket(scannedData as string);

        if (result.success) {
          setMessage(`✅ Verified! ${result.name} - ${result.event}`);
        } else {
          setMessage(`❌ ${result.message}`);
        }
      });
    });
  };

  return (
    <div className="relative z-0 w-full flex flex-col justify-center items-center">
      <div className="z-10">
        <h2 className="text-xl font-bold mb-2">Scan a Ticket</h2>
      </div>
      <select
        className="m-4 p-3"
        onChange={(e) => setSelectedDevice(e.target.value as any)}
      >
        <option value="">Select a camera</option>
        {devices.map((device) => (
          <option key={device.deviceId} value={device.deviceId}>
            {device.label || `Camera ${device.deviceId}`}
          </option>
        ))}
      </select>
      <div className=" z-0 w-80 h-80 rounded-xl overflow-hidden border-4 border-blue-500">
        <Scanner
          onScan={handleScan}
          onError={(error: any) => console.error(error?.message || error)}
          constraints={{
            facingMode: "environment",
            ...(selectedDevice ? { deviceId: selectedDevice } : {}),
          }}
        />
      </div>
      {isPending ? (
        <p className="text-gray-600 font-medium animate-pulse">Checking...</p>
      ) : (
        message && (
          <div>
            <p className="text-center text-sm">{message}</p>
          </div>
        )
      )}
    </div>
  );
}
