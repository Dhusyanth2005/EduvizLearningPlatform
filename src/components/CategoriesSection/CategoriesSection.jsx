import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import styles from '../../pages/HomePage/HomePage.module.css';

const CategoriesSection = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const scrollContainerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const translations = {
    en: {
      title: "Explore Categories",
      subtitle: "Discover 3D models across multiple disciplines and subjects",
      viewAll: "View All Categories",
      categories: [
        {
          id: 1,
          name: "Medical",
          description: "Explore medical courses and resources",
          image: "https://cdn.pixabay.com/photo/2016/11/09/15/27/dna-1811955_1280.jpg"
        },
        {
          id: 2,
          name: "Engineering",
          description: "Engineering courses and tutorials",
          image: "https://cdn.pixabay.com/photo/2017/05/10/19/29/robot-2301646_1280.jpg"
        },
        {
          id: 3,
          name: "Science",
          description: "Scientific studies and research",
          image: "https://cdn.pixabay.com/photo/2016/11/18/19/01/paris-1836415_1280.jpg"
        },
        {
          id: 4,
          name: "Architecture",
          description: "Architectural design and planning",
          image: "https://cdn.pixabay.com/photo/2018/03/30/15/11/deer-3275594_1280.jpg"
        }
      ]
    },
    ta: {
      title: "வகைகளை ஆராயுங்கள்",
      subtitle: "பல்வேறு துறைகள் மற்றும் பாடங்களில் 3D மாதிரிகளைக் கண்டறியவும்",
      viewAll: "அனைத்து வகைகளையும் காண்க",
      categories: [
        {
          id: 1,
          name: "மருத்துவம்",
          description: "மருத்துவ படிப்புகள் மற்றும் வளங்களை ஆராயுங்கள்",
          image: "https://cdn.pixabay.com/photo/2016/11/09/15/27/dna-1811955_1280.jpg"
        },
        {
          id: 2,
          name: "பொறியியல்",
          description: "பொறியியல் பாடங்கள் மற்றும் பயிற்சிகள்",
          image: "https://cdn.pixabay.com/photo/2017/05/10/19/29/robot-2301646_1280.jpg"
        },
        {
          id: 3,
          name: "அறிவியல்",
          description: "அறிவியல் ஆய்வுகள் மற்றும் ஆராய்ச்சி",
          image: "https://cdn.pixabay.com/photo/2016/11/18/19/01/paris-1836415_1280.jpg"
        },
        {
          id: 4,
          name: "கட்டிடக்கலை",
          description: "கட்டிடக்கலை வடிவமைப்பு மற்றும் திட்டமிடல்",
          image: "https://cdn.pixabay.com/photo/2018/03/30/15/11/deer-3275594_1280.jpg"
        }
      ]
    },
    hi: {
      title: "श्रेणियों का अन्वेषण करें",
      subtitle: "कई विषयों और विषयों में 3D मॉडल की खोज करें",
      viewAll: "सभी श्रेणियां देखें",
      categories: [
        {
          id: 1,
          name: "चिकित्सा",
          description: "चिकित्सा पाठ्यक्रम और संसाधनों का अन्वेषण करें",
          image: "https://cdn.pixabay.com/photo/2016/11/09/15/27/dna-1811955_1280.jpg"
        },
        {
          id: 2,
          name: "इंजीनियरिंग",
          description: "इंजीनियरिंग पाठ्यक्रम और ट्यूटोरियल",
          image: "https://cdn.pixabay.com/photo/2017/05/10/19/29/robot-2301646_1280.jpg"
        },
        {
          id: 3,
          name: "विज्ञान",
          description: "वैज्ञानिक अध्ययन और अनुसंधान",
          image: "https://cdn.pixabay.com/photo/2016/11/18/19/01/paris-1836415_1280.jpg"
        },
        {
          id: 4,
          name: "वास्तुकला",
          description: "वास्तुकला डिजाइन और योजना",
          image: "https://cdn.pixabay.com/photo/2018/03/30/15/11/deer-3275594_1280.jpg"
        }
      ]
    },
    de: {
      title: "Kategorien erkunden",
      subtitle: "Entdecken Sie 3D-Modelle in verschiedenen Disziplinen und Fächern",
      viewAll: "Alle Kategorien anzeigen",
      categories: [
        {
          id: 1,
          name: "Medizin",
          description: "Medizinische Kurse und Ressourcen erkunden",
          image: "https://cdn.pixabay.com/photo/2016/11/09/15/27/dna-1811955_1280.jpg"
        },
        {
          id: 2,
          name: "Ingenieurwesen",
          description: "Ingenieurkurse und Tutorials",
          image: "https://cdn.pixabay.com/photo/2017/05/10/19/29/robot-2301646_1280.jpg"
        },
        {
          id: 3,
          name: "Wissenschaft",
          description: "Wissenschaftliche Studien und Forschung",
          image: "https://cdn.pixabay.com/photo/2016/11/18/19/01/paris-1836415_1280.jpg"
        },
        {
          id: 4,
          name: "Architektur",
          description: "Architekturdesign und -planung",
          image: "https://cdn.pixabay.com/photo/2018/03/30/15/11/deer-3275594_1280.jpg"
        }
      ]
    },
    ja: {
      title: "カテゴリーを探索",
      subtitle: "様々な分野や科目の3Dモデルを発見",
      viewAll: "すべてのカテゴリーを表示",
      categories: [
        {
          id: 1,
          name: "医療",
          description: "医療コースとリソースを探索",
          image: "https://cdn.pixabay.com/photo/2016/11/09/15/27/dna-1811955_1280.jpg"
        },
        {
          id: 2,
          name: "エンジニアリング",
          description: "エンジニアリングコースとチュートリアル",
          image: "https://cdn.pixabay.com/photo/2017/05/10/19/29/robot-2301646_1280.jpg"
        },
        {
          id: 3,
          name: "科学",
          description: "科学研究と研究",
          image: "https://cdn.pixabay.com/photo/2016/11/18/19/01/paris-1836415_1280.jpg"
        },
        {
          id: 4,
          name: "建築",
          description: "建築設計と計画",
          image: "https://cdn.pixabay.com/photo/2018/03/30/15/11/deer-3275594_1280.jpg"
        }
      ]
    }
  };

  // Update the translation helper function
  const t = (key) => {
    const translation = translations[selectedLanguage] || translations['en'];
    return translation[key] || translations['en'][key];
  };

  // Get translated categories
  const getTranslatedCategories = () => {
    return translations[selectedLanguage]?.categories || translations['en'].categories;
  };

  useEffect(() => {
    // Load initial language from localStorage
    const savedLanguage = localStorage.getItem('preferredLanguage');
    if (savedLanguage) {
      setSelectedLanguage(savedLanguage);
    }

    // Listen for language changes from Footer
    const handleLanguageChange = (e) => {
      if (e.key === 'preferredLanguage') {
        setSelectedLanguage(e.newValue || 'en');
      }
    };

    // Add event listener for storage changes
    window.addEventListener('storage', handleLanguageChange);

    // Cleanup
    return () => {
      window.removeEventListener('storage', handleLanguageChange);
    };
  }, []);

  // Listen for language changes within the same window
  useEffect(() => {
    const handleLocalLanguageChange = () => {
      const currentLanguage = localStorage.getItem('preferredLanguage');
      if (currentLanguage && currentLanguage !== selectedLanguage) {
        setSelectedLanguage(currentLanguage);
      }
    };

    // Add event listener for local storage changes
    window.addEventListener('localStorageChange', handleLocalLanguageChange);

    // Cleanup
    return () => {
      window.removeEventListener('localStorageChange', handleLocalLanguageChange);
    };
  }, [selectedLanguage]);

  // Mouse down event handler for dragging
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  // Mouse move event handler for dragging
  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll speed multiplier
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  // Mouse up event handler to stop dragging
  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Touch event handlers for mobile devices
  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const scrollLeft20 = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -300,
        behavior: 'smooth'
      });
    }
  };

  const scrollRight20 = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 300,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="categories-section" className={styles.categoriesSection}>
      <div className={styles.heroBackground}>
        <div className={`${styles.shape} ${styles.shape1}`}></div>
        <div className={`${styles.shape} ${styles.shape2}`}></div>
        <div className={`${styles.shape} ${styles.shape3}`}></div>
        <div className={`${styles.shape} ${styles.shape4}`}></div>
        <div className={styles.heroOverlay}></div>
      </div>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>{t('title')}</h2>
          <p className={styles.sectionSubtitle}>{t('subtitle')}</p>
        </div>
        
        <div className={styles.categoriesSliderContainer}>
          <button 
            className={`${styles.sliderNavButton} ${styles.sliderNavButtonLeft}`}
            onClick={scrollLeft20}
            aria-label="Scroll left"
          >
            &lt;
          </button>
          
          <div 
            ref={scrollContainerRef}
            className={styles.categoriesSlider}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleMouseUp}
          >
            {getTranslatedCategories().map((category) => (
              <Link
                key={category.id}
                to="/"
                className={styles.categoryCard}
              >
                <div
                  className={styles.categoryImage}
                  style={{ backgroundImage: `url(${category.image})` }}
                ></div>
                <h3 className={styles.categoryTitle}>{category.name}</h3>
                <p className={styles.categoryDescription}>{category.description}</p>
              </Link>
            ))}
          </div>
          
          <button 
            className={`${styles.sliderNavButton} ${styles.sliderNavButtonRight}`}
            onClick={scrollRight20}
            aria-label="Scroll right"
          >
            &gt;
          </button>
        </div>
        
        <div className={styles.categoriesCta}>
          <Link to="/" className={styles.btnSecondary}>
            {t('viewAll')}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;