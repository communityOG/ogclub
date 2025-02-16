import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-black py-10">
      <div className="max-w-3xl mx-auto bg-black p-8 rounded shadow-md font-OssemRegular text-white">
        <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-sm mb-8">Effective Date: 23 March 2023</p>

        <p className="mb-4">
          At OG Club DAO, we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and share your information when you interact with our services, events, and marketing activities.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-2">1. Information We Collect</h2>
        <p className="mb-2">
          We may collect the following types of information when you interact with our organization:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>
            <strong>Personal Information:</strong> This includes details like your name, email address, phone number, and any other information you provide during event registration or marketing activities.
          </li>
          <li>
            <strong>Contact Information:</strong> We collect your contact details to communicate with you regarding event updates, promotions, and other related information.
          </li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-2">2. How We Use Your Information</h2>
        <p className="mb-2">
          We use the information we collect for the following purposes:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>To provide and manage event registrations</li>
          <li>To send you updates, reminders, and marketing materials related to events</li>
          <li>To improve our services and customize your experience with us</li>
          <li>To respond to your inquiries and feedback</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-2">3. Third-Party Sharing</h2>
        <p className="mb-2">
          We may share your information with trusted third-party vendors and partners who assist us in delivering our services. These partners may include:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>Event hosting platforms or ticketing services</li>
          <li>Marketing and communication service providers</li>
          <li>Analytics services to help us improve our events and campaigns</li>
        </ul>
        <p className="mb-4">
          We ensure that any third parties who handle your data are compliant with industry standards and protect your information in a similar manner to our own practices.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-2">4. Data Retention</h2>
        <p className="mb-4">
          We retain your information for as long as necessary to fulfill the purposes outlined in this Privacy Policy or as required by law. You can contact us at any time to request the deletion of your personal data.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-2">5. Your Rights</h2>
        <p className="mb-2">You have the right to:</p>
        <ul className="list-disc list-inside mb-4">
          <li>Access the personal information we hold about you</li>
          <li>Request corrections or updates to your information</li>
          <li>Request the deletion of your information</li>
          <li>Opt-out of marketing communications at any time by clicking the unsubscribe link in our emails or contacting us directly</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-2">6. Security</h2>
        <p className="mb-4">
          We take the security of your personal information seriously and implement reasonable measures to protect it from unauthorized access, alteration, or destruction.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-2">7. Changes to This Privacy Policy</h2>
        <p className="mb-4">
          We may update this Privacy Policy from time to time. Any changes will be posted on this page with the updated effective date.
        </p>

        <p>
          If you have any questions about this Privacy Policy or how we handle your personal information, please contact us at{' '}
          <a href="mailto:community@ogclubdao.com" className="text-white underline">
            community@ogclubdao.com
          </a>
        </p>
      </div>
    </div>
  );
}
