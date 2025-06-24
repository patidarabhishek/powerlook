import React from 'react';
import { Container } from 'react-bootstrap';

const PrivacyPolicy = () => {
  return (
    <>
      <h2 className="text-center color-black mb-4" style={{marginTop:'120px'}}>Privacy Policy</h2>
    <Container className="" style={{ lineHeight: '1.8', fontSize: '15px',marginBottom:'100px',color:'#555454' }}>

      <div className="mb-4">
        <h5 className="fw-semibold">User’s Information and Privacy</h5>
        <p>
          We truly value the trust you place in us. Protecting personal data and your privacy is our highest priority. This privacy policy ensures your information remains confidential and secure. We never sell your personal information to third parties.
        </p>
        <p>
          While we adopt stringent security practices, we cannot be held responsible for breaches or unauthorized access by third parties beyond our control. We continuously update our systems to better protect your data.
        </p>
        <p>
          By using our services, you authorize <strong>Powerlook Apparels Private Limited</strong> to send you alerts, SMS messages, calls, and other communications directly or via third-party service providers to the numbers you provided, even if they are registered with the Do Not Disturb registry.
        </p>
        <p>
          You agree not to hold Powerlook or its providers liable under <strong>TRAI regulations</strong> or any applicable laws related to communication preferences.
        </p>
      </div>

      <div className="mb-4">
        <h5 className="fw-semibold">Cookies</h5>
        <p>
          We use “cookies” to improve your user experience and ensure efficient, safe, and customized interaction on our platform. These cookies allow us to recognize returning users and tailor our services accordingly.
        </p>
        <p>We use your information to:</p>
        <ul>
          <li>Make your site experience smoother and easier</li>
          <li>Respond to inquiries and provide requested services</li>
          <li>Inform you about orders, products, and promotions</li>
          <li>Improve site content and advertising</li>
          <li>Update you on changes to policies and services</li>
          <li>Present personalized products and offers</li>
          <li>Assist with technical or service-related issues</li>
          <li>Process purchases and provide customer support</li>
          <li>Ensure website administration and troubleshooting</li>
          <li>Perform internal analysis to improve our services</li>
        </ul>
      </div>

      <div className="mb-4">
        <h5 className="fw-semibold">Security</h5>
        <p>
          We have implemented physical, administrative, and technical safeguards to protect your data. This includes encryption protocols for sensitive information like credit card details.
        </p>
        <p>
          In the rare case of a breach, we will notify you promptly via email or other contact methods and take swift action to secure our systems.
        </p>
      </div>

      <div className="mb-4">
        <h5 className="fw-semibold">Advertising</h5>
        <p>
          We work with select third parties to display limited advertisements on our platform. No personal data is shared during this process. General profile information may be used to ensure ads are relevant to your interests.
        </p>
      </div>

      <div className="mb-4">
        <h5 className="fw-semibold">Use of Services</h5>
        <p>
          Providing personal information on Powerlook.in is completely optional. However, certain services (like placing orders or creating an account) will require basic personal data.
        </p>
        <p>
          If you choose to provide personal details, we will only use them to deliver the requested products or information.
        </p>
      </div>

      <div className="mb-4">
        <h5 className="fw-semibold">Important Disclaimer</h5>
        <p>
          We strive to ensure security of your data, but urge you not to share sensitive information (e.g., OTPs, bank details) with any third parties claiming to be from Powerlook via unofficial communication channels.
        </p>
        <p>
          We are not responsible for any damage or loss due to negligence or willful misconduct on your part. Please stay vigilant and contact us for any doubts.
        </p>
      </div>
    </Container>
    </>
  );
};

export default PrivacyPolicy;
