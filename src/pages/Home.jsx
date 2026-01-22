import React from 'react';
import { Phone, MessageCircle, ShieldCheck, Zap, Award, Star, ArrowRight, Truck, Instagram } from 'lucide-react';
import HeroCarousel from '../components/HeroCarousel';
import AuthorizedDistributor from '../components/AuthorizedDistributor';
import { Link } from 'react-router-dom';
import stockArrivalImg from '../assets/stock-arrival.jpg';
import inverterSetupImg from '../assets/inverter-setup.jpg';
import happyCustomerImg from '../assets/happy-customer.jpg';
import heavyDutyBanner from '../assets/heavy-duty-banner.jpg';
import shopBanner from '../assets/shop-banner.jpg';
import ultimateEndurance from '../assets/ultimate-endurance.jpg';
import carPowerhouse from '../assets/car-powerhouse.jpg';
import winterPerformance from '../assets/winter-performance.jpg';

const Home = () => {
    return (
        <div className="home-page">
            {/* Hero Section */}
            <HeroCarousel />

            {/* Authorized Distributor Section */}
            <AuthorizedDistributor />

            {/* Trust Identifiers */}
            <section className="trust-bar" style={{ background: 'var(--dark-bg)', borderBottom: '1px solid #374151' }}>
                <div className="container trust-grid">
                    <div className="trust-item" style={{ background: '#1f2937', color: 'white' }}>
                        <Award className="trust-icon" style={{ color: 'var(--primary-blue)' }} />
                        <div>
                            <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Authorized</h3>
                            <p style={{ color: '#9ca3af' }}>PowerZone Dealer</p>
                        </div>
                    </div>
                    <div className="trust-item" style={{ background: '#1f2937', color: 'white' }}>
                        <Truck className="trust-icon" style={{ color: 'var(--primary-blue)' }} />
                        <div>
                            <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Heavy Duty</h3>
                            <p style={{ color: '#9ca3af' }}>Truck Batteries</p>
                        </div>
                    </div>
                    <div className="trust-item" style={{ background: '#1f2937', color: 'white' }}>
                        <ShieldCheck className="trust-icon" style={{ color: 'var(--primary-blue)' }} />
                        <div>
                            <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>36 Months</h3>
                            <p style={{ color: '#9ca3af' }}>Warranty Support</p>
                        </div>
                    </div>
                    <div className="trust-item" style={{ background: '#1f2937', color: 'white' }}>
                        <Zap className="trust-icon" style={{ color: 'var(--primary-blue)' }} />
                        <div>
                            <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Jumpstart</h3>
                            <p style={{ color: '#9ca3af' }}>Service Available</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Latest Updates / Gallery Preview */}
            <section style={{ padding: '5rem 0', background: 'var(--light-bg)' }}>
                <div className="container">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: '3rem' }}>
                        <div>
                            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '0.5rem', color: 'var(--dark-bg)' }}>Latest Updates</h2>
                            <p style={{ color: '#6b7280' }}>Recent deliveries and shop activities.</p>
                        </div>
                        <Link to="/gallery" className="btn" style={{ textDecoration: 'underline', color: 'var(--dark-bg)' }}>
                            View All <ArrowRight size={16} />
                        </Link>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        <a href="https://www.instagram.com/ssvbatterydgl_powerzone/" target="_blank" rel="noreferrer" className="update-card" style={{ background: 'white', padding: '1rem', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow)', textDecoration: 'none', color: 'inherit', display: 'block', transition: 'transform 0.2s', overflow: 'hidden' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                            <div style={{ height: '220px', background: '#f3f4f6', margin: '-1rem -1rem 1rem -1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
                                <img src={heavyDutyBanner} alt="Heavy Duty Power" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                <div style={{ position: 'absolute', top: '10px', right: '10px', background: 'rgba(255,255,255,0.8)', padding: '5px', borderRadius: '50%', display: 'flex' }}><Instagram size={20} color="#E4405F" /></div>
                            </div>
                            <h3 style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>Heavy Duty Power</h3>
                            <p style={{ color: '#6b7280', fontSize: '0.9rem' }}>Unmatched reliability and performance for commercial vehicles. 36 months warranty!</p>
                        </a>
                        <a href="https://www.instagram.com/ssvbatterydgl_powerzone/" target="_blank" rel="noreferrer" className="update-card" style={{ background: 'white', padding: '1rem', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow)', textDecoration: 'none', color: 'inherit', display: 'block', transition: 'transform 0.2s', overflow: 'hidden' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                            <div style={{ height: '220px', background: '#f3f4f6', margin: '-1rem -1rem 1rem -1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
                                <img src={inverterSetupImg} alt="Home Inverter Setup" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                <div style={{ position: 'absolute', top: '10px', right: '10px', background: 'rgba(255,255,255,0.8)', padding: '5px', borderRadius: '50%', display: 'flex' }}><Instagram size={20} color="#E4405F" /></div>
                            </div>
                            <h3 style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>Home Inverter Setup</h3>
                            <p style={{ color: '#6b7280', fontSize: '0.9rem' }}>Professional inverter battery installation for long backup.</p>
                        </a>
                        <a href="https://www.instagram.com/ssvbatterydgl_powerzone/" target="_blank" rel="noreferrer" className="update-card" style={{ background: 'white', padding: '1rem', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow)', textDecoration: 'none', color: 'inherit', display: 'block', transition: 'transform 0.2s', overflow: 'hidden' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                            <div style={{ height: '220px', background: '#f3f4f6', margin: '-1rem -1rem 1rem -1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
                                <img src={happyCustomerImg} alt="Happy Customer" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                <div style={{ position: 'absolute', top: '10px', right: '10px', background: 'rgba(255,255,255,0.8)', padding: '5px', borderRadius: '50%', display: 'flex' }}><Instagram size={20} color="#E4405F" /></div>
                            </div>
                            <h3 style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>Happy Customer</h3>
                            <p style={{ color: '#6b7280', fontSize: '0.9rem' }}>Quick service for Swift Dzire. Replaced in 15 mins.</p>
                        </a>
                        <a href="https://www.instagram.com/ssvbatterydgl_powerzone/" target="_blank" rel="noreferrer" className="update-card" style={{ background: 'white', padding: '1rem', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow)', textDecoration: 'none', color: 'inherit', display: 'block', transition: 'transform 0.2s', overflow: 'hidden' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                            <div style={{ height: '220px', background: '#f3f4f6', margin: '-1rem -1rem 1rem -1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
                                <img src={ultimateEndurance} alt="Ultimate Endurance" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                <div style={{ position: 'absolute', top: '10px', right: '10px', background: 'rgba(255,255,255,0.8)', padding: '5px', borderRadius: '50%', display: 'flex' }}><Instagram size={20} color="#E4405F" /></div>
                            </div>
                            <h3 style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>Ultimate Endurance</h3>
                            <p style={{ color: '#6b7280', fontSize: '0.9rem' }}>Instant start. Long-lasting power. Experience PowerZone. </p>
                        </a>
                        <a href="https://www.instagram.com/ssvbatterydgl_powerzone/" target="_blank" rel="noreferrer" className="update-card" style={{ background: 'white', padding: '1rem', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow)', textDecoration: 'none', color: 'inherit', display: 'block', transition: 'transform 0.2s', overflow: 'hidden' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                            <div style={{ height: '220px', background: '#f3f4f6', margin: '-1rem -1rem 1rem -1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
                                <img src={carPowerhouse} alt="Car Power House" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                <div style={{ position: 'absolute', top: '10px', right: '10px', background: 'rgba(255,255,255,0.8)', padding: '5px', borderRadius: '50%', display: 'flex' }}><Instagram size={20} color="#E4405F" /></div>
                            </div>
                            <h3 style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>Car Power House</h3>
                            <p style={{ color: '#6b7280', fontSize: '0.9rem' }}>Ensuring your vehicle has the best power backup available.</p>
                        </a>
                        <a href="https://www.instagram.com/ssvbatterydgl_powerzone/" target="_blank" rel="noreferrer" className="update-card" style={{ background: 'white', padding: '1rem', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow)', textDecoration: 'none', color: 'inherit', display: 'block', transition: 'transform 0.2s', overflow: 'hidden' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                            <div style={{ height: '220px', background: '#f3f4f6', margin: '-1rem -1rem 1rem -1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
                                <img src={winterPerformance} alt="Winter Performance" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                <div style={{ position: 'absolute', top: '10px', right: '10px', background: 'rgba(255,255,255,0.8)', padding: '5px', borderRadius: '50%', display: 'flex' }}><Instagram size={20} color="#E4405F" /></div>
                            </div>
                            <h3 style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>All-Weather Power</h3>
                            <p style={{ color: '#6b7280', fontSize: '0.9rem' }}>Reliable performance in all extreme weather conditions.</p>
                        </a>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="container" style={{ padding: '5rem 1rem' }}>
                <h2 className="section-title" style={{ color: 'var(--dark-bg)' }}>Trusted by Local Drivers</h2>
                <div className="testimonials-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                    <div className="review-card" style={{ border: '1px solid #e5e7eb' }}>
                        <div className="review-stars">
                            {[1, 2, 3, 4, 5].map(i => <Star key={i} fill="var(--primary-blue)" size={20} stroke="none" />)}
                        </div>
                        <p style={{ fontStyle: 'italic', color: '#4b5563' }}>"Best battery shop in Dindigul. Very quick service and good price for my car battery."</p>
                        <p style={{ marginTop: '1rem', fontWeight: 'bold', color: 'var(--dark-bg)' }}>- Rajesh K.</p>
                    </div>
                    <div className="review-card" style={{ border: '1px solid #e5e7eb' }}>
                        <div className="review-stars">
                            {[1, 2, 3, 4, 5].map(i => <Star key={i} fill="var(--primary-blue)" size={20} stroke="none" />)}
                        </div>
                        <p style={{ fontStyle: 'italic', color: '#4b5563' }}>"Genuine PowerZone product. The installation was done immediately."</p>
                        <p style={{ marginTop: '1rem', fontWeight: 'bold', color: 'var(--dark-bg)' }}>- Priya M.</p>
                    </div>
                    <div className="review-card" style={{ border: '1px solid #e5e7eb' }}>
                        <div className="review-stars">
                            {[1, 2, 3, 4, 5].map(i => <Star key={i} fill="var(--primary-blue)" size={20} stroke="none" />)}
                        </div>
                        <p style={{ fontStyle: 'italic', color: '#4b5563' }}>"Friendly owner and good response. Highly recommended for bike batteries."</p>
                        <p style={{ marginTop: '1rem', fontWeight: 'bold', color: 'var(--dark-bg)' }}>- Karthik S.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
