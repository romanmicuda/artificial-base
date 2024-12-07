import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-blue-900 text-white font-sans">
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-6">Privacy Policy for Counter App</h1>
        <p className="text-lg mb-4">
          <strong>Effective Date:</strong> 7th December 2024
        </p>

        <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
        <p className="text-lg mb-8">
          The <span className="font-semibold">Counter App</span> prioritizes your privacy. This document outlines how your data is handled while using the app.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Data Collection and Usage</h2>
        <ul className="list-disc list-inside text-lg mb-8">
          <li>The app <strong>does not collect, store, or share</strong> any personal data.</li>
          <li>All counting actions are processed <strong>locally</strong> on your device.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">Permissions</h2>
        <p className="text-lg mb-8">
          The app does not request or use any special permissions.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Third-Party Services</h2>
        <p className="text-lg mb-8">
          The app does not integrate any third-party tools, analytics, or advertising services.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Target Audience</h2>
        <p className="text-lg mb-8">
          The app is suitable for all ages and does not include content or features targeted at children under 13.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Security</h2>
        <p className="text-lg mb-8">
          Since no data is collected or shared, there is no risk of data misuse or breaches.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Changes to This Policy</h2>
        <p className="text-lg mb-8">
          Any updates to this privacy policy will be posted here with a revised &quot;Effective Date.&quot;
        </p>

        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <p className="text-lg">
          If you have any questions or concerns about this privacy policy, contact us at:
          <br />
          <a 
            href="mailto:roman.micuda.programtor@gmail.com" 
            className="text-blue-400 hover:underline">
            roman.micuda.programtor@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
