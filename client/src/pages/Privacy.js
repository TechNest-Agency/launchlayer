import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaUserShield, FaLock, FaInfoCircle, FaEnvelope, FaCheckCircle } from 'react-icons/fa';

const Privacy = () => (
  <>
    <Helmet>
      <title>Privacy Policy - LaunchLayer</title>
      <meta name="description" content="Read LaunchLayer's privacy policy to learn how we protect your data and privacy." />
      <link rel="canonical" href="https://launchlayer.com/privacy" />
    </Helmet>
    <main className="pt-16 md:pt-20">
      <section className="section-padding gradient-bg text-white">
        <div className="container-custom text-center max-w-2xl mx-auto">
          <FaUserShield className="mx-auto text-5xl mb-4 text-secondary-300" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-lg text-gray-200 mb-2">Your privacy matters to us. Learn how LaunchLayer collects, uses, and protects your information.</p>
        </div>
      </section>
      <section className="section-padding bg-white">
        <div className="container-custom max-w-3xl mx-auto">
          <div className="mb-8 p-6 bg-primary-50 rounded-lg border-l-4 border-primary-600">
            <FaInfoCircle className="inline-block text-primary-600 mr-2 text-xl align-middle" />
            <span className="text-gray-700 text-base align-middle">This policy explains what data we collect, why we collect it, and how you can control your information.</span>
          </div>
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-2 flex items-center"><FaLock className="mr-2 text-primary-600" /> Information We Collect</h2>
          <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
            <li>Personal information you provide via forms (name, email, etc.)</li>
            <li>Usage data (pages visited, browser type, etc.)</li>
            <li>Cookies and similar tracking technologies</li>
          </ul>
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-2 flex items-center"><FaCheckCircle className="mr-2 text-primary-600" /> How We Use Your Information</h2>
          <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
            <li>To respond to your inquiries and provide services</li>
            <li>To improve our website and services</li>
            <li>To send updates and marketing communications (you can opt out anytime)</li>
          </ul>
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-2 flex items-center"><FaLock className="mr-2 text-primary-600" /> Data Security</h2>
          <p className="text-gray-700 mb-4">We use industry-standard security measures to protect your data from unauthorized access, disclosure, or destruction. Your trust is our priority.</p>
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-2 flex items-center"><FaUserShield className="mr-2 text-primary-600" /> Your Rights</h2>
          <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
            <li>Request access, correction, or deletion of your data</li>
            <li>Opt out of marketing emails at any time</li>
            <li>Contact us for any privacy-related concerns</li>
          </ul>
          <div className="mt-10 p-6 bg-primary-50 rounded-lg border-l-4 border-primary-600 flex items-center">
            <FaEnvelope className="text-primary-600 text-2xl mr-4" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">Contact Us</h3>
              <p className="text-gray-700 mb-1">If you have any questions about this policy, contact us at</p>
              <a href="mailto:hello@launchlayer.com" className="text-primary-600 underline font-medium">hello@launchlayer.com</a>
            </div>
          </div>
          <p className="text-gray-500 text-sm mt-8">Last updated: June 2024</p>
        </div>
      </section>
    </main>
  </>
);

export default Privacy; 