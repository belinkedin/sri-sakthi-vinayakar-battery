import React from 'react';
import { Battery, Zap, Car, Bike, Phone, Truck } from 'lucide-react';
import carBatteryImg from '../assets/car-battery.jpg';
import bikeBatteryImg from '../assets/bike-battery.jpg';
import inverterBatteryImg from '../assets/inverter-battery.png';
import truckBatteryImg from '../assets/truck-battery.jpg';
import maintenanceImg from '../assets/maintenance-service.jpg';

const Products = () => {
    const products = [
        {
            id: 1,
            category: "Car Batteries",
            title: "PowerZone Car Battery",
            desc: "High-performance batteries for all car models. Long life and maintenance-free.",
            icon: <Car size={48} />,
            image: carBatteryImg,
            type: "Car"
        },
        {
            id: 2,
            category: "Bike Batteries",
            title: "PowerZone Bike Battery",
            desc: "Reliable starting power for two-wheelers. Vibration resistant technology.",
            icon: <Bike size={48} />,
            image: bikeBatteryImg,
            type: "Bike"
        },
        {
            id: 3,
            category: "Inverter Batteries",
            title: "Tubular Inverter Battery",
            desc: "Long backup power for homes and offices. Heavy-duty grid design.",
            icon: <Zap size={48} />,
            image: inverterBatteryImg,
            type: "Inverter"
        },
        {
            id: 4,
            category: "Heavy Duty",
            title: "Truck & Lorry Battery",
            desc: "High cranking power for commercial vehicles. Defined for Indian roads.",
            icon: <Truck size={48} />,
            image: truckBatteryImg,
            type: "Commercial"
        },
        {
            id: 5,
            category: "Maintenance",
            title: "Battery Health Check",
            desc: "Professional battery testing and replacement services.",
            icon: <Battery size={48} />,
            image: maintenanceImg,
            type: "Service"
        }
    ];

    return (
        <div className="products-page">
            <div className="container">
                <h2 className="section-title">Our Products & Services</h2>
                <div className="products-grid">
                    {products.map((product) => (
                        <div key={product.id} className="product-card">
                            <div className="product-image">
                                {product.image ? (
                                    <img src={product.image} alt={product.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                ) : (
                                    product.icon
                                )}
                            </div>
                            <div className="product-content">
                                <div className="product-brand">{product.category}</div>
                                <h3 className="product-title">{product.title}</h3>
                                <p className="product-desc">{product.desc}</p>
                                <a href="tel:9363919696" className="btn btn-primary" style={{ width: '100%' }}>
                                    <Phone size={18} /> Enquire Now
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Products;
