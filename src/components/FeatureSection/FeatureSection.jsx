import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FaCubes, FaLaptopCode, FaGraduationCap, FaTools, FaUniversity, FaIndustry } from 'react-icons/fa';
import styles from './Features.module.css';

// ModelViewerComponent (if you still need it separately)
const ModelViewerComponent = () => {
  useEffect(() => {
    if (!customElements.get('model-viewer')) {
      import('@google/model-viewer');
    }
  }, []);

  return null; // We don't need to render anything here since we're using it in Swiper
};

const FeatureSection = () => {
  const [activeModelIndex, setActiveModelIndex] = useState(0);
  const [modelLoading, setModelLoading] = useState(true);
  const [currentModelInfo, setCurrentModelInfo] = useState({
    title: 'Planetary System',
    description: 'Explore orbital mechanics and planetary motion in this interactive model'
  });

  const translations = {
    en: {
      title: "Immersive 3D Learning",
      subtitle: "Experience complex concepts through interactive visualization without expensive hardware",
      showcase: {
        title: "Interactive Exploration Engine",
        description: "Our WebGL-powered platform lets you manipulate realistic 3D models with intuitive controls. Dismantle complex structures, view cross-sections, and observe real-time simulations to truly understand how systems work at a molecular, mechanical, and computational level.",
        features: [
          "Advanced model manipulation with 6 degrees of freedom",
          "Real-time functional simulations with accurate physics",
          "Multi-layer cross-sectional visualization",
          "Interactive annotations with contextual information",
          "Progressive learning paths with adaptive difficulty"
        ],
        exploreButton: "Explore EduViz Technology"
      },
      cards: [
        {
          title: "High-Fidelity 3D Models",
          description: "Scientifically accurate models with industry-leading detail for astronomy, geology, and atmospheric visualization based on research-grade data."
        },
        {
          title: "Web-Based Immersion",
          description: "Experience VR-quality visualization without specialized hardware - our platform delivers advanced 3D rendering on any modern web browser with WebGL support."
        },
        {
          title: "Adaptive Learning Paths",
          description: "Follow personalized exploration sequences with interactive assessments, challenges, and progress tracking built around sophisticated 3D models."
        },
        {
          title: "Domain-Specific Tools",
          description: "Access specialized interaction tools for different disciplines - from astronomy to meteorology to planetary geology visualization."
        },
        {
          title: "Research-Grade Education",
          description: "Designed by educators and domain experts to make complex celestial concepts accessible with the same tools used in cutting-edge research labs."
        },
        {
          title: "Professional Applications",
          description: "Beyond education: our platform serves industrial clients with professional-grade visualization for satellite tracking, weather modeling, and space exploration."
        }
      ],
      metrics: {
        models: "Interactive 3D Models",
        simulations: "Advanced Simulations",
        compatibility: "Browser Compatibility",
        rating: "Educator Rating"
      },
      modelShowcases: [
        {
          title: 'Medical',
          description: 'Explore medical courses and resources'
        },
        {
          title: 'Engineering',
          description: 'Engineering courses and tutorials'
        },
        {
          title: 'Science',
          description: 'Scientific studies and research'
        },
        {
          title: 'Architecture',
          description: 'Architectural design and planning'
        }
      ],
      buttons: {
        explore: 'Explore',
        details: 'Details'
      }
    }
  };

  const modelShowcases = [
    {
      id: '1',
      modelSrc: 'https://res.cloudinary.com/duwvhcha4/image/upload/v1750913289/Cloudinary%203D/models/FullCycle4_b08jah.glb',
      alt: 'Medical Model'
    },
    {
      id: '2',
      modelSrc: 'https://res.cloudinary.com/duwvhcha4/image/upload/v1750912596/Cloudinary%203D/models/Astronaut_3_sm5qas.glb',
      alt: 'Engineering Model'
    },
    {
      id: '3',
      modelSrc: 'https://res.cloudinary.com/duwvhcha4/image/upload/v1750913587/Cloudinary%203D/models/k07_drone_tr80zy.glb',
      alt: 'Science Model'
    }
  ];

  // Helper function to get translations
  const t = (key, index) => {
    if (key.includes('.')) {
      const keys = key.split('.');
      let value = translations.en;
      for (const k of keys) {
        value = value?.[k];
      }
      return value || '';
    }
    
    if (index !== undefined) {
      return translations.en[key]?.[index] || '';
    }
    
    return translations.en[key] || '';
  };

  // Update translations for model showcases
  const getTranslatedShowcase = (index) => {
    const showcases = translations.en.modelShowcases;
    return showcases[index] || { title: '', description: '' };
  };

  return (
    <section 
      id="features-section"
      className={styles.featuresSection} 
    >
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>{t('title')}</h2>
          <p className={styles.sectionSubtitle}>{t('subtitle')}</p>
        </div>
        
        <div className={styles.featureShowcase}>
          <div className={styles.featureShowcaseContent}>
            <h3 className={styles.featureShowcaseTitle}>{t('showcase.title')}</h3>
            <p className={styles.featureShowcaseDescription}>{t('showcase.description')}</p>
            <ul className={styles.featureShowcaseList}>
              {t('showcase.features')?.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <Link to="/" className={styles.btnOutline}>
              {t('showcase.exploreButton')}
            </Link>
          </div>
          <div className={styles.featureShowcaseImage}>
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={0}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              onSlideChange={(swiper) => {
                setActiveModelIndex(swiper.activeIndex);
                setModelLoading(true);
                setTimeout(() => setModelLoading(false), 1500);
              }}
              className={`${styles.featureSwiper} h-full w-full`}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
            >
              {modelShowcases.map((model, index) => (
                <SwiperSlide key={model.id}>
                  <div className={styles.featureImagePlaceholder}>
                    <div className={`${styles.modelProgress} ${modelLoading ? styles.loading : ''}`}></div>
                    <model-viewer
                      src={model.modelSrc}
                      alt={getTranslatedShowcase(index).title}
                      auto-rotate
                      camera-controls
                      shadow-intensity="1"
                      environment-image="neutral"
                      exposure="0.9"
                      style={{ width: '100%', height: '100%' }}
                      onLoad={() => index === activeModelIndex && setModelLoading(false)}
                    ></model-viewer>
                    <div className={styles.modelShowcase}>
                      <div className={styles.modelOverlay}>
                        <h4 className={styles.modelTitle}>
                          {getTranslatedShowcase(index).title}
                        </h4>
                        <p className={styles.modelDescription}>
                          {getTranslatedShowcase(index).description}
                        </p>
                        <div className={styles.modelControls}>
                          <button className={styles.modelButton}>
                            {translations.en.buttons.explore}
                          </button>
                          <button className={styles.modelButton}>
                            {translations.en.buttons.details}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        
        <div className={styles.featuresGrid}>
          {t('cards')?.map((card, index) => (
            <div key={index} className={styles.featureCard}>
              <div className={styles.featureIcon}>
                {index === 0 && <FaCubes />}
                {index === 1 && <FaLaptopCode />}
                {index === 2 && <FaGraduationCap />}
                {index === 3 && <FaTools />}
                {index === 4 && <FaUniversity />}
                {index === 5 && <FaIndustry />}
              </div>
              <h3 className={styles.featureTitle}>{card.title}</h3>
              <p className={styles.featureDescription}>{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;