import React from 'react';
import { MapPin, Phone, Clock, MessageCircle, Instagram, Mail } from 'lucide-react';

const Contact = () => {
    return (
        <div className="contact-page">
            <div className="container">
                <h2 className="section-title">Contact Us</h2>

                <div className="contact-grid">
                    <div className="contact-info">
                        <div className="info-card">
                            <div className="info-item">
                                <MapPin className="info-icon" size={24} />
                                <div>
                                    <h3>Visit Our Shop</h3>
                                    <p>No.38A, Vasantham Complex,<br />Pensioner Street, Dindigul Bazaar,<br />Dindigul – 624001, Tamil Nadu</p>
                                    <a
                                        href="https://www.google.com/maps/search/?api=1&query=Sri+Shakti+Vinayakar+Battery+Dindigul+Pensioner+Street"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="btn btn-secondary"
                                        style={{ marginTop: '0.75rem', padding: '0.4rem 1rem', fontSize: '0.85rem' }}
                                    >
                                        View on Google Maps
                                    </a>
                                </div>
                            </div>

                            <div className="info-item">
                                <Phone className="info-icon" size={24} />
                                <div>
                                    <h3>Call Us</h3>
                                    <p><a href="tel:9363919696">9363919696</a></p>
                                    <p><a href="tel:9363929696">9363929696</a></p>
                                </div>
                            </div>

                            <div className="info-item">
                                <Mail className="info-icon" size={24} />
                                <div>
                                    <h3>Email Us</h3>
                                    <p><a href="mailto:svbatteries96@gmail.com">svbatteries96@gmail.com</a></p>
                                </div>
                            </div>

                            <div className="info-item">
                                <Instagram className="info-icon" size={24} />
                                <div>
                                    <h3>Follow Us</h3>
                                    <p><a href="https://www.instagram.com/ssvbatterydgl_powerzone/" target="_blank" rel="noreferrer">@ssvbatterydgl_powerzone</a></p>
                                </div>
                            </div>

                            <div className="info-item">
                                <Clock className="info-icon" size={24} />
                                <div>
                                    <h3>Business Hours</h3>
                                    <p>Monday - Sunday</p>
                                    <p>9:00 AM – 9:00 PM</p>
                                </div>
                            </div>

                            <div style={{ marginTop: '2rem' }}>
                                <a href="https://wa.me/919363919696" className="btn btn-secondary" style={{ width: '100%' }} target="_blank" rel="noreferrer">
                                    <MessageCircle size={20} /> Chat on WhatsApp
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="map-container">
                        <iframe
                            title="Location Map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3924.325607062483!2d77.96726487508678!3d10.360699289763785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00ab00392e624f%3A0x647614210d70eb0!2sDindigul%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
