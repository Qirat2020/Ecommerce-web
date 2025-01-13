import React from "react";

export default function Features() {
  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {/* Naturally Derived */}
          <div className="flex flex-col items-center">
            <div className="text-4xl mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-12 h-12"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5V5.25c0-1.246-1.254-2.25-2.5-2.25S10 4.004 10 5.25v5.25m5 0v3.375c0 2.898-2.276 5.25-5.25 5.25-2.974 0-5.25-2.352-5.25-5.25V10.5m5 0a.75.75 0 01.75-.75h2.5a.75.75 0 01.75.75v.75H15m-5 0v-.75a.75.75 0 00-.75-.75h-2.5a.75.75 0 00-.75.75v.75h4z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold">NATURALLY DERIVED</h3>
            <p className="text-gray-600">Natural and organic beauty product</p>
          </div>

          {/* Free Shipping */}
          <div className="flex flex-col items-center">
            <div className="text-4xl mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-12 h-12"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 15.75V18a2.25 2.25 0 002.25 2.25h6a2.25 2.25 0 002.25-2.25v-2.25m-10.5 0H3.75a.75.75 0 01-.75-.75v-7.5a.75.75 0 01.75-.75h16.5a.75.75 0 01.75.75v7.5a.75.75 0 01-.75.75h-2.25m-10.5 0h10.5m-10.5 0v2.25m10.5-2.25v2.25m-7.5 0h3"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold">FREE SHIPPING</h3>
            <p className="text-gray-600">
              Free shipping on all orders over $99
            </p>
          </div>

          {/* Secure Payment */}
          <div className="flex flex-col items-center">
            <div className="text-4xl mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-12 h-12"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 10.5V6.75A3.75 3.75 0 0012.75 3H11.25A3.75 3.75 0 007.5 6.75v3.75m-3.75 9.75a3.75 3.75 0 003.75 3.75h9a3.75 3.75 0 003.75-3.75V11.25a.75.75 0 00-.75-.75h-15a.75.75 0 00-.75.75v9z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold">SECURE PAYMENT</h3>
            <p className="text-gray-600">
              Fully protected when paying online
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
