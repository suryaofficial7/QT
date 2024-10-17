import React from 'react';
import Navbar from '../../Components/Compo/HomepageNav'; // Assuming you have a Navbar component
import Footer from "../../Components/Compo/Footer"

const TermsAndConditions = () => {
  return (
    <div className="bg-[#F5F7F8] text-[#45474B] min-h-screen">
      {/* Navbar */}
      <Navbar />

   

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 text-justify py-8">
      <h1 className="text-3xl font-bold  mb-0 text-center theme-text-green">Terms and Conditions for QuickTrack</h1>
      <p className="text-sm text-center text-gray-400 mt-1 mb-4">
            Please read these terms and conditions carefully before using our services.
          </p>
      <p className="mb-4">
        Welcome to <span className="font-semibold">QuickTrack</span>, a comprehensive web application designed for managing income, expenses, employee salary data, and generating advanced data analytics, such as charts and graphs, for multiple businesses and offices. By accessing and using QuickTrack, you agree to abide by the following terms and conditions:
      </p>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">1. Data Usage & Responsibility</h2>
        <p className="mb-2 text-sm">
          QuickTrack allows you to manage sensitive financial and operational data, including but not limited to income reports, expenses, employee salary details, and business performance metrics. You are solely responsible for the accuracy, completeness, and legality of the data you input. Any manipulation or falsification of this data for unlawful purposes is strictly prohibited and will result in immediate suspension of your account.
        </p>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">2. Data Security & Privacy</h2>
        <p className="mb-2 text-sm">
          At QuickTrack, we prioritize the security of your sensitive data. We implement industry-standard security measures, including encryption and secure access protocols, to protect your information from unauthorized access. However, we cannot guarantee complete immunity against external cyber threats. It is your responsibility to maintain the confidentiality of your login credentials and take appropriate measures to protect your account from unauthorized access. QuickTrack is not liable for breaches or losses resulting from negligence on your part.
        </p>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">3. Multiple Business and Office Management</h2>
        <p className="mb-2 text-sm">
          QuickTrack is designed to handle the operational data of multiple businesses and office locations within a single platform. You are permitted to use the app for managing multiple entities, provided that the data entered for each business is legitimate and accurate. Sharing your account with unauthorized users or using the app in a manner that exceeds its intended purpose will lead to termination of service.
        </p>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">4. Prohibited Activities</h2>
        <ul className="list-none list-inside mb-2 text-sm">
          <li>Engaging in any illegal or fraudulent activity, including but not limited to manipulating data for financial gain or tax evasion.</li>
          <li>Tampering with the app's functionality, including hacking, reverse engineering, or unauthorized data access.</li>
          <li>Sharing access credentials with unauthorized individuals or third parties.</li>
        </ul>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">5. Third-Party Integrations</h2>
        <p className="mb-2 text-sm">
          QuickTrack may offer integration with third-party services or APIs for enhanced functionality. However, we do not endorse or assume responsibility for the actions or security of third-party providers. You are responsible for understanding and agreeing to their terms before using integrated features.
        </p>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">6. Modifications to the App & Terms</h2>
        <p className="mb-2 text-sm">
          QuickTrack reserves the right to update or modify the app's functionality, features, or these terms and conditions at any time. We will notify you of significant changes via email or app notifications. Continued use of the app after such modifications implies acceptance of the updated terms.
        </p>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">7. Termination of Service</h2>
        <p className="mb-2 text-sm">
          QuickTrack reserves the right to suspend or terminate your access to the app at any time if we suspect misuse, illegal activities, or violations of these terms. In such cases, all your stored data may be deleted or withheld from access until further notice.
        </p>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">8. Limitation of Liability</h2>
        <p className="mb-2 text-sm">
          While QuickTrack strives to provide reliable and accurate services, we are not responsible for any financial loss, data inaccuracy, or downtime caused by user error, system updates, or unforeseen technical issues. Use of the app is at your own risk.
        </p>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">9. Governing Law</h2>
        <p className="mb-2 text-sm">
          These terms and conditions shall be governed by and interpreted in accordance with the laws of the jurisdiction in which QuickTrack operates. Any disputes arising from the use of the app will be resolved through legal channels within the applicable jurisdiction.
        </p>
      </div>

      <p className="mb-4">
        By using QuickTrack, you acknowledge that you have read, understood, and agree to these terms and conditions. Failure to comply with these terms may result in suspension or termination of your account.
      </p>
    </div>

  
      <Footer/>
    </div>
  );
};

export default TermsAndConditions;
