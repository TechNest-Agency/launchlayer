import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaGavel, FaUserCheck, FaBan, FaCopyright, FaMoneyCheckAlt, FaUndo, FaLock, FaClock, FaTimesCircle, FaTools, FaFolderOpen, FaBalanceScale, FaSyncAlt, FaEnvelope, FaPhone, FaGlobe, FaCheckCircle } from 'react-icons/fa';

const sectionIconClass = 'mr-3 text-primary-600 text-2xl';

const Terms = () => (
  <>
    <Helmet>
      <title>🧾 Terms & Conditions – LaunchLayer</title>
      <meta name="description" content="Read LaunchLayer's Terms and Conditions. Understand your rights and responsibilities when using our website and services." />
      <link rel="canonical" href="https://launchlayer.com/terms" />
    </Helmet>
    <main className="pt-16 md:pt-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 min-h-screen">
      {/* Sticky/Floating Header */}
      <div className="sticky top-0 z-30 bg-white/80 backdrop-blur shadow-md py-6 mb-8 border-b border-gray-100">
        <div className="container-custom max-w-3xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 px-4">
          <div className="flex items-center gap-3">
            <FaGavel className="text-4xl text-secondary-400" />
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Terms & Conditions</h1>
          </div>
          <div className="flex flex-col md:flex-row gap-2 md:gap-4 text-gray-600 text-sm md:text-base">
            <span><FaCheckCircle className="inline mr-1 text-green-400" /> Effective: June 21, 2025</span>
            <span><FaSyncAlt className="inline mr-1 text-blue-400" /> Updated: June 21, 2025</span>
          </div>
        </div>
      </div>
      <section className="py-10 px-2">
        <div className="container-custom max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12 space-y-10 border border-gray-100">
          {/* 1. Introduction */}
          <div>
            <div className="flex items-center mb-2">
              <span className="bg-primary-100 text-primary-700 rounded-full px-3 py-1 font-bold mr-3">1</span>
              <h2 className="text-2xl font-semibold text-gray-900 flex items-center"><FaUserCheck className={sectionIconClass} /> Introduction</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">Welcome to LaunchLayer (“Company”, “we”, “us”, or “our”). These Terms and Conditions (“Terms”) govern your use of our website located at <a href="https://launchlayer.com" className="text-primary-600 underline">https://launchlayer.com</a> and all related services, tools, and products offered by us (collectively, the “Service”).<br/><br/>By accessing or using any part of our Service, you agree to be bound by these Terms. If you do not agree to all the Terms, you may not access the Service.</p>
          </div>
          <hr className="my-4 border-gray-200" />
          {/* 2. Services We Provide */}
          <div>
            <div className="flex items-center mb-2">
              <span className="bg-primary-100 text-primary-700 rounded-full px-3 py-1 font-bold mr-3">2</span>
              <h2 className="text-2xl font-semibold text-gray-900 flex items-center"><FaTools className={sectionIconClass} /> Services We Provide</h2>
            </div>
            <ul className="list-disc list-inside text-gray-700 ml-4 mb-2">
              <li>Web & SaaS Development (MERN Stack)</li>
              <li>UI/UX Design & Wireframing (Figma-based)</li>
              <li>Flippa-ready SaaS Product Development</li>
              <li>Digital Marketing & Cold Outreach</li>
              <li>Custom Productized Service Packages</li>
              <li>Technical Maintenance & Support</li>
            </ul>
            <p className="text-gray-700">Each project is governed by a separate written or digital agreement specifying the scope, timeline, deliverables, and payment terms.</p>
          </div>
          <hr className="my-4 border-gray-200" />
          {/* 3. Client Responsibilities */}
          <div>
            <div className="flex items-center mb-2">
              <span className="bg-primary-100 text-primary-700 rounded-full px-3 py-1 font-bold mr-3">3</span>
              <h2 className="text-2xl font-semibold text-gray-900 flex items-center"><FaUserCheck className={sectionIconClass} /> Client Responsibilities</h2>
            </div>
            <ul className="list-disc list-inside text-gray-700 ml-4 mb-2">
              <li>Provide complete and accurate requirements.</li>
              <li>Respond to communication in a timely manner.</li>
              <li>Supply required content (e.g. branding, copy, credentials).</li>
              <li>Approve/reject milestones within agreed timeframes.</li>
            </ul>
            <p className="text-gray-700">LaunchLayer is not liable for delays caused by the client's failure to meet these responsibilities.</p>
          </div>
          <hr className="my-4 border-gray-200" />
          {/* 4. Intellectual Property */}
          <div>
            <div className="flex items-center mb-2">
              <span className="bg-primary-100 text-primary-700 rounded-full px-3 py-1 font-bold mr-3">4</span>
              <h2 className="text-2xl font-semibold text-gray-900 flex items-center"><FaCopyright className={sectionIconClass} /> Intellectual Property</h2>
            </div>
            <ul className="list-disc list-inside text-gray-700 ml-4 mb-2">
              <li>All work delivered to clients becomes their intellectual property upon final payment, unless otherwise agreed in writing.</li>
              <li>LaunchLayer retains the right to showcase completed work in our portfolio and marketing materials.</li>
              <li>Any licensed third-party assets (e.g. stock photos, fonts, plugins) remain the property of their respective owners and are subject to their own license terms.</li>
            </ul>
          </div>
          <hr className="my-4 border-gray-200" />
          {/* 5. Payment Terms */}
          <div>
            <div className="flex items-center mb-2">
              <span className="bg-primary-100 text-primary-700 rounded-full px-3 py-1 font-bold mr-3">5</span>
              <h2 className="text-2xl font-semibold text-gray-900 flex items-center"><FaMoneyCheckAlt className={sectionIconClass} /> Payment Terms</h2>
            </div>
            <ul className="list-disc list-inside text-gray-700 ml-4 mb-2">
              <li>We accept payments via bank transfer, Payoneer, and international payment gateways.</li>
              <li>Projects are typically billed in milestones: 50% upfront, 50% upon completion.</li>
              <li>For SaaS products or templates, payment is required in full before delivery.</li>
              <li>Late payments may incur a 5% penalty per week and/or service suspension.</li>
            </ul>
          </div>
          <hr className="my-4 border-gray-200" />
          {/* 6. Refund Policy */}
          <div>
            <div className="flex items-center mb-2">
              <span className="bg-primary-100 text-primary-700 rounded-full px-3 py-1 font-bold mr-3">6</span>
              <h2 className="text-2xl font-semibold text-gray-900 flex items-center"><FaUndo className={sectionIconClass} /> Refund Policy</h2>
            </div>
            <ul className="list-disc list-inside text-gray-700 ml-4 mb-2">
              <li>No refunds are issued once a project has started.</li>
              <li>If you cancel before work begins, a partial refund (up to 80%) may be considered.</li>
              <li>For monthly services (e.g. maintenance, SEO), cancellation must be made at least 7 days prior to the next billing cycle.</li>
            </ul>
          </div>
          <hr className="my-4 border-gray-200" />
          {/* 7. Confidentiality */}
          <div>
            <div className="flex items-center mb-2">
              <span className="bg-primary-100 text-primary-700 rounded-full px-3 py-1 font-bold mr-3">7</span>
              <h2 className="text-2xl font-semibold text-gray-900 flex items-center"><FaLock className={sectionIconClass} /> Confidentiality</h2>
            </div>
            <ul className="list-disc list-inside text-gray-700 ml-4 mb-2">
              <li>All sensitive information shared with LaunchLayer (e.g. logins, financials) will be kept secure and not disclosed to third parties.</li>
              <li>NDAs can be signed upon request for enterprise clients.</li>
            </ul>
          </div>
          <hr className="my-4 border-gray-200" />
          {/* 8. Timelines & Revisions */}
          <div>
            <div className="flex items-center mb-2">
              <span className="bg-primary-100 text-primary-700 rounded-full px-3 py-1 font-bold mr-3">8</span>
              <h2 className="text-2xl font-semibold text-gray-900 flex items-center"><FaClock className={sectionIconClass} /> Timelines & Revisions</h2>
            </div>
            <ul className="list-disc list-inside text-gray-700 ml-4 mb-2">
              <li>Project timelines are estimated based on scope and client cooperation.</li>
              <li>Each deliverable includes up to 2 rounds of revisions unless otherwise stated.</li>
              <li>Additional revisions or scope changes will incur extra charges.</li>
            </ul>
          </div>
          <hr className="my-4 border-gray-200" />
          {/* 9. Termination */}
          <div>
            <div className="flex items-center mb-2">
              <span className="bg-primary-100 text-primary-700 rounded-full px-3 py-1 font-bold mr-3">9</span>
              <h2 className="text-2xl font-semibold text-gray-900 flex items-center"><FaTimesCircle className={sectionIconClass} /> Termination</h2>
            </div>
            <ul className="list-disc list-inside text-gray-700 ml-4 mb-2">
              <li>LaunchLayer reserves the right to terminate any ongoing service if the client violates any terms of this agreement or is abusive, unresponsive, or fails to pay.</li>
              <li>Clients may terminate a service with written notice, and will be billed for all work completed up to that point.</li>
            </ul>
          </div>
          <hr className="my-4 border-gray-200" />
          {/* 10. Limitation of Liability */}
          <div>
            <div className="flex items-center mb-2">
              <span className="bg-primary-100 text-primary-700 rounded-full px-3 py-1 font-bold mr-3">10</span>
              <h2 className="text-2xl font-semibold text-gray-900 flex items-center"><FaBalanceScale className={sectionIconClass} /> Limitation of Liability</h2>
            </div>
            <ul className="list-disc list-inside text-gray-700 ml-4 mb-2">
              <li>We are not liable for damages arising from the use or inability to use our services.</li>
              <li>Delays caused by third-party tools or platforms (e.g. hosting, APIs, software bugs).</li>
              <li>Loss of data due to client-side issues or failure to follow best practices.</li>
              <li>Maximum liability is limited to the amount paid by the client for the specific service.</li>
            </ul>
          </div>
          <hr className="my-4 border-gray-200" />
          {/* 11. Third-Party Tools & Platforms */}
          <div>
            <div className="flex items-center mb-2">
              <span className="bg-primary-100 text-primary-700 rounded-full px-3 py-1 font-bold mr-3">11</span>
              <h2 className="text-2xl font-semibold text-gray-900 flex items-center"><FaTools className={sectionIconClass} /> Third-Party Tools & Platforms</h2>
            </div>
            <ul className="list-disc list-inside text-gray-700 ml-4 mb-2">
              <li>LaunchLayer often integrates third-party tools (e.g. Vercel, Stripe, Firebase, Google Analytics). We are not responsible for changes to third-party terms or services, or outages/issues related to those platforms.</li>
            </ul>
          </div>
          <hr className="my-4 border-gray-200" />
          {/* 12. Portfolio Rights */}
          <div>
            <div className="flex items-center mb-2">
              <span className="bg-primary-100 text-primary-700 rounded-full px-3 py-1 font-bold mr-3">12</span>
              <h2 className="text-2xl font-semibold text-gray-900 flex items-center"><FaFolderOpen className={sectionIconClass} /> Portfolio Rights</h2>
            </div>
            <ul className="list-disc list-inside text-gray-700 ml-4 mb-2">
              <li>By working with LaunchLayer, you grant us permission to feature screenshots and summaries of the final product in our portfolio.</li>
              <li>Mention the client/project name unless explicitly asked not to.</li>
            </ul>
          </div>
          <hr className="my-4 border-gray-200" />
          {/* 13. Governing Law */}
          <div>
            <div className="flex items-center mb-2">
              <span className="bg-primary-100 text-primary-700 rounded-full px-3 py-1 font-bold mr-3">13</span>
              <h2 className="text-2xl font-semibold text-gray-900 flex items-center"><FaBalanceScale className={sectionIconClass} /> Governing Law</h2>
            </div>
            <p className="text-gray-700">These Terms shall be governed and interpreted in accordance with the laws of Bangladesh, without regard to conflict of law provisions.</p>
          </div>
          <hr className="my-4 border-gray-200" />
          {/* 14. Updates to These Terms */}
          <div>
            <div className="flex items-center mb-2">
              <span className="bg-primary-100 text-primary-700 rounded-full px-3 py-1 font-bold mr-3">14</span>
              <h2 className="text-2xl font-semibold text-gray-900 flex items-center"><FaSyncAlt className={sectionIconClass} /> Updates to These Terms</h2>
            </div>
            <p className="text-gray-700">We may revise these Terms at any time. The latest version will always be available on our website. Continued use of our services implies agreement to the updated Terms.</p>
          </div>
          {/* 15. Contact Us */}
          <div className="mt-10 p-6 bg-primary-50 rounded-lg border-l-4 border-primary-600 flex items-center">
            <FaEnvelope className="text-primary-600 text-2xl mr-4" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">15. Contact Us</h3>
              <p className="text-gray-700 mb-1">For any questions about these Terms, please contact:</p>
              <div className="flex flex-col gap-1">
                <span><FaEnvelope className="inline mr-1 text-primary-600" /> Email: <a href="mailto:info@launchlayer.agency" className="text-primary-600 underline font-medium">info@launchlayer.agency</a></span>
                <span><FaPhone className="inline mr-1 text-primary-600" /> Phone: +880-132-2695162</span>
                <span><FaGlobe className="inline mr-1 text-primary-600" /> Website: <a href="https://launchlayer.agency" className="text-primary-600 underline font-medium">https://launchlayer.agency</a></span>
              </div>
            </div>
          </div>
          <p className="text-gray-700 text-center mt-8">By using our services, you agree to these Terms and Conditions. Thank you for choosing LaunchLayer. <span className="inline-block">🚀</span></p>
        </div>
      </section>
    </main>
  </>
);

export default Terms; 