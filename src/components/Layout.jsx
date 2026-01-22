import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import amaraRajaLogo from '../assets/amara-raja-logo.png';

import { Menu, X, Phone, MessageCircle, MapPin, BatteryCharging, Instagram, Mail } from 'lucide-react';

const Layout = ({ children }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    const isActive = (path) => location.pathname === path;

    return (
        <div className="layout">
            {/* Header */}
            <header className="header">
                <div className="container header-content">
                    <Link to="/" className="logo">
                        <img src={amaraRajaLogo} alt="Amara Raja" className="logo-img" />
                        <div className="logo-text">
                            <h1>Sri Shakti Vinayakar</h1>
                            <span>Battery</span>
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="desktop-nav">
                        <Link to="/" className={isActive('/') ? 'active' : ''}>Home</Link>
                        <Link to="/products" className={isActive('/products') ? 'active' : ''}>Products</Link>
                        <Link to="/gallery" className={isActive('/gallery') ? 'active' : ''}>Gallery & Updates</Link>
                        <Link to="/contact" className={isActive('/contact') ? 'active' : ''}>Contact</Link>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle Menu">
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Nav */}
                <div className={`mobile-nav ${isMenuOpen ? 'open' : ''}`}>
                    <Link to="/" onClick={closeMenu} className={isActive('/') ? 'active' : ''}>Home</Link>
                    <Link to="/products" onClick={closeMenu} className={isActive('/products') ? 'active' : ''}>Products</Link>
                    <Link to="/gallery" onClick={closeMenu} className={isActive('/gallery') ? 'active' : ''}>Gallery</Link>
                    <Link to="/contact" onClick={closeMenu} className={isActive('/contact') ? 'active' : ''}>Contact</Link>
                </div>
            </header>

            {/* Main Content */}
            <main className="main-content">
                {children}
            </main>

            {/* Footer */}
            <footer className="footer">
                <div className="container footer-grid">
                    <div className="footer-section">
                        <div className="footer-logo">
                            <BatteryCharging size={24} />
                            <h3>Sri Shakti Vinayakar Battery</h3>
                        </div>
                        <p>Authorized PowerZone Distributor in Dindigul. Reliable batteries for cars, bikes, and inverters.</p>
                        <div style={{ marginTop: '1.5rem' }}>
                            <a href="https://www.instagram.com/ssvbatterydgl_powerzone/" target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: '#E4405F', fontWeight: 'bold' }}>
                                <Instagram size={20} />
                                <span>Follow on Instagram</span>
                            </a>
                        </div>
                    </div>

                    <div className="footer-section">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/products">Products</Link></li>
                            <li><Link to="/gallery">Gallery</Link></li>
                            <li><Link to="/contact">Contact Us</Link></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4>Contact Info</h4>
                        <ul className="contact-list">
                            <li>
                                <MapPin size={18} />
                                <a
                                    href="https://www.google.com/maps/search/?api=1&query=Sri+Shakti+Vinayakar+Battery+Dindigul+Pensioner+Street"
                                    target="_blank"
                                    rel="noreferrer"
                                    style={{ color: 'inherit', textDecoration: 'none' }}
                                >
                                    No.38A, Vasantham Complex, Pensioner Street, Dindigul – 624001
                                </a>
                            </li>
                            <li>
                                <Phone size={18} />
                                <a href="tel:9363919696">9363919696</a>, <a href="tel:9363929696">9363929696</a>
                            </li>
                            <li>
                                <Mail size={18} />
                                <a href="mailto:svbatteries96@gmail.com">svbatteries96@gmail.com</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>© {new Date().getFullYear()} Sri Shakti Vinayakar Battery. All rights reserved.</p>
                </div>
            </footer>

            {/* Sticky Mobile Actions */}
            <div className="sticky-actions">
                <a href="tel:9363919696" className="action-btn call-btn">
                    <Phone size={20} />
                    <span>Call</span>
                </a>
                <a href="https://wa.me/919363919696" className="action-btn whatsapp-btn" target="_blank" rel="noreferrer">
                    <MessageCircle size={20} />
                    <span>WhatsApp</span>
                </a>
            </div>
        </div>
    );
};

export default Layout;
