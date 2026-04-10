import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  alternates: {
    canonical: 'https://paypalfeecalculator.org/terms',
  },
};

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="w-full max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-5xl font-bold text-zinc-900 mb-8">Terms of Service</h1>
        
        <div className="space-y-8 text-zinc-700">
          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">1. Acceptance of Terms</h2>
            <p className="leading-relaxed">
              By accessing and using PayPal Fee Calculator, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">2. Use License</h2>
            <p className="leading-relaxed mb-4">
              Permission is granted to temporarily use PayPal Fee Calculator for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose or for any public display</li>
              <li>Attempt to reverse engineer any software contained on PayPal Fee Calculator</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
              <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">3. Disclaimer</h2>
            <p className="leading-relaxed">
              The materials on PayPal Fee Calculator are provided on an 'as is' basis. PayPal Fee Calculator makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">4. Limitations</h2>
            <p className="leading-relaxed">
              In no event shall PayPal Fee Calculator or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on PayPal Fee Calculator, even if PayPal Fee Calculator or a PayPal Fee Calculator authorized representative has been notified orally or in writing of the possibility of such damage.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">5. Accuracy of Materials</h2>
            <p className="leading-relaxed">
              The materials appearing on PayPal Fee Calculator could include technical, typographical, or photographic errors. PayPal Fee Calculator does not warrant that any of the materials on its website are accurate, complete or current. PayPal Fee Calculator may make changes to the materials contained on its website at any time without notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">6. Links</h2>
            <p className="leading-relaxed">
              PayPal Fee Calculator has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by PayPal Fee Calculator of the site. Use of any such linked website is at the user's own risk.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">7. Modifications</h2>
            <p className="leading-relaxed">
              PayPal Fee Calculator may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">8. Governing Law</h2>
            <p className="leading-relaxed">
              These terms and conditions are governed by and construed in accordance with the laws and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">9. Contact Information</h2>
            <p className="leading-relaxed">
              If you have any questions about these Terms of Service, please contact us through our support page.
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
