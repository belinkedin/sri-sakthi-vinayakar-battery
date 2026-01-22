import React from 'react';
import { Camera, Calendar, Tag, MapPin, Instagram } from 'lucide-react';

// Import assets
import stockArrivalImg from '../assets/stock-arrival.jpg';
import inverterSetupImg from '../assets/inverter-setup.jpg';
import happyCustomerImg from '../assets/happy-customer.jpg';
import heavyDutyBanner from '../assets/heavy-duty-banner.jpg';
import carBatteryImg from '../assets/car-battery.jpg';
import bikeBatteryImg from '../assets/bike-battery.jpg';

// New Imports
import shopBanner from '../assets/shop-banner.jpg';
import ultimateEndurance from '../assets/ultimate-endurance.jpg';
import carPowerhouse from '../assets/car-powerhouse.jpg';
import winterPerformance from '../assets/winter-performance.jpg';

const Gallery = () => {
    // Placeholder data for "Instagram-style" posts
    const posts = [
        {
            id: 7,
            title: "Authorized Distributor",
            date: "Jan 22, 2026",
            type: "Official",
            image: shopBanner,
            content: "Proudly serving Dindigul as an Authorized PowerZone Distributor. High cranking power and trusted brand support for all needs. 🏆🏢",
            tags: ["#AuthorizedDistributor", "#Dindigul", "#PowerZone"],
            color: "bg-orange-50"
        },
        {
            id: 8,
            title: "Ultimate Endurance",
            date: "Jan 21, 2026",
            type: "Product",
            image: ultimateEndurance,
            content: "Instant start. Long-lasting power. Experience the ultimate endurance with PowerZone batteries. 🔋⚡",
            tags: ["#UltimateEndurance", "#InstantStart", "#PowerZone"],
            color: "bg-blue-50"
        },
        {
            id: 9,
            title: "Your Car's Power House",
            date: "Jan 20, 2026",
            type: "Service",
            image: carPowerhouse,
            content: "Ensuring your car always has the power it needs. 60 months warranty on select models! 🚗💪",
            tags: ["#CarBattery", "#Warranty", "#PowerHouse"],
            color: "bg-gray-50"
        },
        {
            id: 10,
            title: "Winter-Proof Performance",
            date: "Jan 19, 2026",
            type: "Update",
            image: winterPerformance,
            content: "No matter how cold it gets, PowerZone keeps you moving. Reliable performance in all weather conditions. ❄️🏔️",
            tags: ["#WinterProof", "#Reliable", "#AllWeather"],
            color: "bg-cyan-50"
        },
        {
            id: 1,
            title: "Fresh Stock Arrival",
            date: "Jan 15, 2026",
            type: "Event",
            image: stockArrivalImg,
            content: "Just arrived: Fresh shipment of Amaron and PowerZone batteries. Ready to power your journey! ⚡🚗",
            tags: ["#PowerZone", "#StockArrival", "#Genuine"],
            color: "bg-orange-100"
        },
        {
            id: 2,
            title: "Heavy Duty Power",
            date: "Jan 12, 2026",
            type: "Product",
            image: heavyDutyBanner,
            content: "Unmatched reliability and heavy-duty performance for trucks and commercial vehicles. 36 months warranty! 🚛💪",
            tags: ["#PowerZone", "#TruckBattery", "#HeavyDuty"],
            color: "bg-blue-100"
        },
        {
            id: 3,
            title: "Premium Car Service",
            date: "Jan 10, 2026",
            type: "Info",
            image: carBatteryImg,
            content: "High Cranking Power, Low Maintenance, and Long Battery Life. Trusted support for all your battery needs. ✅",
            tags: ["#AuthorizedDistributor", "#Dindigul", "#LongLife"],
            color: "bg-yellow-100"
        },
        {
            id: 4,
            title: "Inverter Installation",
            date: "Jan 8, 2026",
            type: "Service",
            image: inverterSetupImg,
            content: "Successful installation of PowerZone tubular battery. Reliable backup power for homes and offices. 🏠🔌",
            tags: ["#Inverter", "#PowerBackup", "#Installation"],
            color: "bg-green-100"
        },
        {
            id: 5,
            title: "Happy Customer",
            date: "Jan 5, 2026",
            type: "Offer",
            image: happyCustomerImg,
            content: "Another quick service completed! Swift Dzire battery replaced in just 15 mins. Customer satisfaction is our priority. 😊♻️",
            tags: ["#HappyCustomer", "#QuickService", "#SwiftDzire"],
            color: "bg-red-100"
        },
        {
            id: 6,
            title: "Bike Battery Care",
            date: "Jan 3, 2026",
            type: "Product",
            image: bikeBatteryImg,
            content: "Reliable starting power for your two-wheelers. Vibration resistant technology for Indian roads. 🏍️⚡",
            tags: ["#BikeBattery", "#StartingPower", "#Performance"],
            color: "bg-blue-50"
        }
    ];

    return (
        <div className="gallery-page" style={{ padding: '3rem 0' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <h2 className="section-title">Recent Updates @ssvbatterydgl</h2>
                    <p style={{ maxWidth: '600px', margin: '0 auto', color: '#6b7280' }}>
                        Follow us on Instagram for latest deliveries, offers, and shop updates.
                    </p>
                </div>

                <div className="gallery-grid" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                    gap: '2rem'
                }}>
                    {posts.map(post => (
                        <a
                            key={post.id}
                            href="https://www.instagram.com/ssvbatterydgl_powerzone/"
                            target="_blank"
                            rel="noreferrer"
                            className="gallery-card"
                            style={{
                                background: 'var(--white)',
                                borderRadius: 'var(--radius)',
                                overflow: 'hidden',
                                boxShadow: 'var(--shadow)',
                                border: '1px solid #e5e7eb',
                                display: 'block',
                                textDecoration: 'none',
                                color: 'inherit',
                                transition: 'transform 0.2s ease-in-out'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                        >
                            {/* Image Container */}
                            <div style={{
                                height: '250px',
                                backgroundColor: '#f3f4f6',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderBottom: '1px solid #e5e7eb',
                                position: 'relative',
                                overflow: 'hidden'
                            }}>
                                {post.image ? (
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    />
                                ) : (
                                    <Camera size={48} color="#9ca3af" />
                                )}
                                <div style={{
                                    position: 'absolute',
                                    top: '10px',
                                    right: '10px',
                                    background: 'rgba(255,255,255,0.8)',
                                    borderRadius: '50%',
                                    padding: '5px',
                                    display: 'flex'
                                }}>
                                    <Instagram size={18} color="#E4405F" />
                                </div>
                            </div>

                            <div style={{ padding: '1.5rem' }}>
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    marginBottom: '1rem'
                                }}>
                                    <span style={{
                                        background: 'var(--primary-yellow)',
                                        color: 'var(--text-dark)',
                                        padding: '0.25rem 0.75rem',
                                        borderRadius: '50px',
                                        fontSize: '0.75rem',
                                        fontWeight: '700'
                                    }}>
                                        {post.type}
                                    </span>
                                    <span style={{
                                        color: '#6b7280',
                                        fontSize: '0.875rem',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.25rem'
                                    }}>
                                        <Calendar size={14} /> {post.date}
                                    </span>
                                </div>

                                <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.75rem' }}>
                                    {post.title}
                                </h3>
                                <p style={{ color: '#4b5563', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                                    {post.content}
                                </p>

                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                    {post.tags.map((tag, index) => (
                                        <span key={index} style={{
                                            color: 'var(--primary-blue)',
                                            fontSize: '0.875rem',
                                            fontWeight: '500'
                                        }}>
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Gallery;
