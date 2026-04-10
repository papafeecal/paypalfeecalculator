import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  alternates: {
    canonical: 'https://paypalfeecalculator.org/privacy',
  },
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="w-full max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-5xl font-bold text-zinc-900 mb-8">Privacy Policy</h1>
        
        <div className="space-y-8 text-zinc-700">
          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">1. Information We Collect</h2>
            <p className="leading-relaxed mb-4">
              When you use PayPal Fee Calculator, we may collect the following types of information:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Usage data: Information about how you use our calculator, including calculation inputs and results</li>
              <li>Device information: Browser type, operating system, and device identifiers</li>
              <li>Log data: IP address, access times, and pages viewed</li>
              <li>Cookies and similar technologies to enhance user experience</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">2. How We Use Your Information</h2>
            <p className="leading-relaxed mb-4">
              We use the collected information for various purposes:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>To provide and maintain our service</li>
              <li>To improve and optimize our calculator functionality</li>
              <li>To analyze usage patterns and trends</li>
              <li>To detect, prevent and address technical issues</li>
              <li>To provide customer support</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">3. Data Storage and Security</h2>
            <p className="leading-relaxed">
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized or unlawful processing, accidental loss, destruction, or damage. However, please note that no method of transmission over the Internet or electronic storage is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">4. Cookies</h2>
            <p className="leading-relaxed">
              We use cookies and similar tracking technologies to track activity on our service and hold certain information. Cookies are files with small amount of data which may include an anonymous unique identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">5. Third-Party Services</h2>
            <p className="leading-relaxed">
              We may employ third-party companies and individuals to facilitate our service, provide the service on our behalf, perform service-related services, or assist us in analyzing how our service is used. These third parties have access to your personal information only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">6. Data Retention</h2>
            <p className="leading-relaxed">
              We will retain your personal information only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your information to the extent necessary to comply with our legal obligations, resolve disputes, and enforce our policies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">7. Your Rights</h2>
            <p className="leading-relaxed mb-4">
              Depending on your location, you may have certain rights regarding your personal information:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>The right to access – You have the right to request copies of your personal data</li>
              <li>The right to rectification – You have the right to request correction of inaccurate information</li>
              <li>The right to erasure – You have the right to request deletion of your personal data</li>
              <li>The right to restrict processing – You have the right to request restriction of processing</li>
              <li>The right to data portability – You have the right to request transfer of your data</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">8. Children's Privacy</h2>
            <p className="leading-relaxed">
              Our service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from children under 13. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">9. Changes to This Privacy Policy</h2>
            <p className="leading-relaxed">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically for any changes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">10. Contact Us</h2>
            <p className="leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us through our support page.
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-zinc-200">
          <p className="text-sm text-zinc-500">Last updated: January 2026</p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
