import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { MapPin, Zap, Phone } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Import New Professional Images
import slide1 from '../assets/hero-carousel/slide1-car-snow.png';
import slide2 from '../assets/hero-carousel/slide2-auto-rural.png';
import slide3 from '../assets/hero-carousel/slide3-tractor-storm.png';
import slide4 from '../assets/hero-carousel/slide4-bike-ad-new.png';
import slide5 from '../assets/hero-carousel/slide5-brand-ad-new-clean.png';

const HeroCarousel = () => {
    const slides = [
        // Content Slide 1: Car Snow
        {
            id: 1,
            image: slide1,
            isAd: false,
            heading: "All-Weather Reliability",
            cta: { text: "Car Batteries", icon: <Zap size={20} />, link: "/products" },
            position: "top-left",
            mobileBgPos: "80% 100%" // Focus on the battery at bottom right
        },
        // Content Slide 2: Auto Rural
        {
            id: 2,
            image: slide2,
            isAd: false,
            heading: "Power for Every Mile",
            cta: { text: "Auto Batteries", icon: <Zap size={20} />, link: "/products" },
            position: "top-center",
            mobileBgPos: "50% 100%" // Focus on bottom center
        },
        // Content Slide 3: Tractor Storm
        {
            id: 3,
            image: slide3,
            isAd: false,
            heading: "Unstoppable Strength",
            cta: { text: "Tractor Batteries", icon: <Zap size={20} />, link: "/products" },
            position: "top-left"
        },
        // Content Slide 4: Bike (New Image - Needs Text)
        {
            id: 4,
            image: slide4,
            isAd: false,
            heading: "Unleash the Power",
            cta: { text: "Bike Batteries", icon: <Zap size={20} />, link: "/products" },
            position: "top-left",
            mobileBgPos: "75% center" // Focus on the bike (usually right side)
        },
        // Content Slide 5: Brand/Batteries (New Image - Needs Text)
        {
            id: 5,
            image: slide5,
            isAd: false,
            heading: "Zero Maintenance",
            cta: { text: "Visit Store", icon: <MapPin size={20} />, link: "https://www.google.com/maps/search/?api=1&query=Sri+Shakti+Vinayakar+Battery+Dindigul+Pensioner+Street" },
            position: "center-center",
            overlayOpacity: 0.6
        }
    ];

    return (
        <div className="hero-carousel-container">
            <Swiper
                modules={[Autoplay, EffectFade, Pagination, Navigation]}
                effect="fade"
                loop={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                    dynamicBullets: true,
                }}
                navigation={false}
                className="h-full w-full"
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <div
                            className="hero-slide"
                            style={{
                                backgroundImage: `url(${slide.image})`,
                                '--bg-pos-desktop': 'center center',
                                '--bg-pos-mobile': slide.mobileBgPos || 'center center',
                            }}
                        >
                            {/* Only render overlay and content for non-Ad slides */}
                            {!slide.isAd && (
                                <>
                                    <div className="hero-overlay" style={{ opacity: slide.overlayOpacity || 0.3 }}></div>
                                    <div
                                        className="hero-content-wrapper"
                                        style={{
                                            position: 'absolute',
                                            top: 0, left: 0, right: 0, bottom: 0,
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: slide.position?.includes('center-center') ? 'center' : (slide.position?.includes('top') ? 'flex-start' : 'flex-end'),
                                            alignItems: slide.position?.includes('left') ? 'flex-start' :
                                                slide.position?.includes('right') ? 'flex-end' : 'center',
                                            padding: '5% 8%', // Safe margin
                                            zIndex: 10
                                        }}
                                    >
                                        <div className="animate-fade-in" style={{ textAlign: slide.position?.includes('center') ? 'center' : 'left' }}>
                                            <h2 className="hero-heading-pro">
                                                {slide.heading}
                                            </h2>

                                            {slide.cta.link.startsWith('http') ? (
                                                <a
                                                    href={slide.cta.link}
                                                    className="btn btn-primary hero-btn-pro"
                                                    target="_blank"
                                                    rel="noreferrer"
                                                >
                                                    {slide.cta.icon && <span style={{ marginRight: '8px' }}>{slide.cta.icon}</span>}
                                                    {slide.cta.text}
                                                </a>
                                            ) : (
                                                <Link
                                                    to={slide.cta.link}
                                                    className="btn btn-primary hero-btn-pro"
                                                >
                                                    {slide.cta.icon && <span style={{ marginRight: '8px' }}>{slide.cta.icon}</span>}
                                                    {slide.cta.text}
                                                </Link>
                                            )}
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default HeroCarousel;
