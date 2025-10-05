export default function Successful() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 px-4">
      <div className="max-w-lg w-full bg-white shadow-xl rounded-2xl p-8 text-center">
        <div className="flex justify-center mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-20 w-20 text-green-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        <h1 className="text-3xl font-bold text-gray-900 mb-3">
          🎉 Thank You for Your Purchase!
        </h1>

        <p className="text-lg text-gray-700 mb-6">
          Your ticket purchase was successful. A confirmation email with your
          ticket details has been sent to the email address you provided.
        </p>

        <div className="border-t border-gray-200 my-6" />

        <p className="text-sm text-gray-500 mb-8">
          Please check your inbox (and your spam folder, just in case). You’ll
          need your ticket to enter the event — bring it digitally or printed.
        </p>

        <a
          href="/"
          className="inline-block px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow hover:bg-indigo-700 transition-colors"
        >
          Back to Home
        </a>
      </div>
    </div>
  );
}
