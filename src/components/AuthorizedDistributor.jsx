import React from 'react';
import { ShieldCheck, Check, PhoneCall } from 'lucide-react';
import powerzoneLogo from '../assets/powerzone-logo.png';

const AuthorizedDistributor = () => {
    return (
        <section className="auth-section">
            <div className="container auth-container">
                {/* Content Only - Centered Layout */}
                <div className="auth-content">
                    <div className="auth-header">
                        <img src={powerzoneLogo} alt="PowerZone Logo" className="auth-logo-brand" />
                        <span className="auth-subtitle">Official Partner</span>
                        <h2 className="section-title auth-title">Authorized PowerZone Distributor</h2>
                    </div>

                    <p className="auth-description">
                        Sri Shakti Vinayakar Battery is your trusted, officially authorized partner for PowerZone batteries in Dindigul.
                        We guarantee authenticity, manufacturer warranty coverage, and expert support for every product we sell.
                    </p>

                    <ul className="auth-benefits">
                        <li className="auth-benefit-item">
                            <Check className="auth-check-icon" size={20} />
                            <span><strong>Genuine Products:</strong> Factory-fresh batteries with serialized warranty.</span>
                        </li>
                        <li className="auth-benefit-item">
                            <Check className="auth-check-icon" size={20} />
                            <span><strong>Full Manufacturer Warranty:</strong> Easy claims and replacements directly through us.</span>
                        </li>
                        <li className="auth-benefit-item">
                            <Check className="auth-check-icon" size={20} />
                            <span><strong>Expert Guidance:</strong> Technical advice to choose the perfect battery for your vehicle.</span>
                        </li>
                    </ul>

                    <div className="auth-actions">
                        <a href="tel:+919363919696" className="btn btn-primary auth-btn">
                            <PhoneCall size={20} />
                            Contact Authorized Dealer
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AuthorizedDistributor;
