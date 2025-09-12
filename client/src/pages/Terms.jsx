import React from 'react'

const Terms = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 text-gray-800 leading-relaxed dark:text-white">
      <h1 className="text-3xl font-bold mb-6 text-indigo-600">Terms & Conditions</h1>
      <p className="mb-4">
        These Terms & Conditions govern your use of our platform. By accessing
        or using our services, you agree to comply with these terms.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">1. Acceptance of Terms</h2>
      <p className="mb-4">
        By registering or using our services, you acknowledge that you have
        read and understood these terms. If you do not agree, please do not
        use our services.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">2. User Responsibilities</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>You must provide accurate and up-to-date information.</li>
        <li>You are responsible for maintaining the confidentiality of your account.</li>
        <li>You must not misuse or attempt to hack the platform.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">3. Intellectual Property</h2>
      <p className="mb-4">
        All content, logos, and trademarks displayed on our platform are the
        property of the company. Unauthorized use, reproduction, or distribution
        is strictly prohibited.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">4. Limitation of Liability</h2>
      <p className="mb-4">
        We are not responsible for any damages arising from your use of the
        platform, including data loss, unauthorized access, or downtime.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">5. Termination</h2>
      <p className="mb-4">
        We reserve the right to suspend or terminate your account if you
        violate these terms or engage in harmful activities.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">6. Governing Law</h2>
      <p className="mb-4">
        These terms are governed by the laws of your jurisdiction. Any disputes
        will be resolved in the appropriate courts.
      </p>

      <p className="mt-10 text-gray-600 dark:text-white">
        For any concerns regarding these Terms & Conditions, contact us at{" "}
        <span className="text-indigo-600">legal@example.com</span>.
      </p>
    </div>
  );
};

export default Terms;


