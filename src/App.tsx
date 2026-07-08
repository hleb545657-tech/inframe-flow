import { useState, useEffect } from 'react'
import { Navbar } from './components/layout/Navbar'
import { SmoothScroll } from './hooks/SmoothScroll'
import { ScrollDivider } from './components/ui/ScrollDivider'
import { FiArrowUpRight, FiSend, FiVideo, FiLayers, FiTrendingUp } from 'react-icons/fi'

const THEME = {
  bg: '#050505',
  surface: '#171717',
  light: '#404040',
  muted: '#A3A3A3',
  accent: '#FFFFFF'
}

const App = () => {
  const [lang, setLang] = useState<'RU' | 'EN'>('RU')
  
  // Храним точные пиксели для плавной трансформации
  const [mouseCoords, setMouseCoords] = useState({ x: 0, y: 0 })
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    // Устанавливаем начальное положение по центру экрана
    setMouseCoords({ x: window.innerWidth / 2, y: window.innerHeight / 2 })

    const handleMouseMove = (e: MouseEvent) => {
      setMouseCoords({ x: e.clientX, y: e.clientY })
    }
    
    window.addEventListener('mousemove', handleMouseMove)

    const items = document.querySelectorAll('.timeline-item-center');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, {
      threshold: 0.15, // Анимация срабатывает, когда элемент показался на 15%
      rootMargin: '0px 0px -50px 0px'
    });

    items.forEach(item => observer.observe(item));

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      items.forEach(item => observer.unobserve(item));
    };
  }, [])

  const content = {
    RU: {
      heroTitle: 'Делаем монтаж, который удерживает зрителя',
      heroSub: 'High-end пост-продакшн полного цикла. Повышаем среднее удержание аудитории и создаем премиальный визуальный стиль.',
      btnPortfolio: 'Смотреть портфолио',
      btnBot: 'Запустить Telegram-бота',
      servicesTitle: 'Наши услуги',
      casesTitle: 'Кейсы и результаты',
      contactsTitle: 'Обсудить проект',
    },
    EN: {
      heroTitle: 'Video editing that keeps viewers hooked',
      heroSub: 'High-end full-cycle post-production. Maximizing audience retention and crafting premium visual identities.',
      btnPortfolio: 'View Portfolio',
      btnBot: 'Launch Telegram Bot',
      servicesTitle: 'Our Services',
      casesTitle: 'Cases & Results',
      contactsTitle: 'Let\'s talk',
    }
  }

  const portfolioVideos = [
    { id: 1, title: 'Podcast Highlight #1', url: 'https://www.youtube.com/', category: 'Shorts / Reels' },
    { id: 2, title: 'Documentary Post-Production', url: 'https://www.youtube.com/', category: 'YouTube Essay' },
    { id: 3, title: 'Dynamic Promo Video', url: 'https://www.youtube.com/', category: 'Commercial' },
  ]

  const sectionStyle = {
    padding: '120px 24px',
    maxWidth: '1200px',
    margin: '0 auto',
    position: 'relative' as const
  }

  const cardStyle = {
    backgroundColor: 'rgba(10, 10, 10, 0.9)',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    borderRadius: '24px',
    padding: '36px',
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
    transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.4s ease, box-shadow 0.4s ease',
    display: 'flex',
    flexDirection: 'column' as const,
    justifyContent: 'space-between',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)'
  }

  return (
    <div style={{ backgroundColor: THEME.bg, color: '#ffffff', minHeight: '100vh', fontFamily: 'system-ui, -apple-system, sans-serif', overflowX: 'hidden', letterSpacing: '-0.01em', position: 'relative' }}>
      <SmoothScroll />
      <Navbar lang={lang} setLang={setLang} />

      {/* --- ФОНОВАЯ СЕТКА (ОГРАНИЧЕНА ПЕРВЫМ ЭКРАНОМ) --- */}
      <div 
        className="transition-opacity duration-1000 ease-out animate-fade-in"
        style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: '100vh',
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.07) 1px, transparent 1px)`,
          backgroundSize: '55px 55px',
          maskImage: 'linear-gradient(to bottom, white 40%, transparent 90%)',
          WebkitMaskImage: 'linear-gradient(to bottom, white 40%, transparent 90%)',
          pointerEvents: 'none', zIndex: 1
        }} />

      {/* ИДЕАЛЬНО ПЛАВНЫЙ ИСПРАВЛЕННЫЙ ФОНАРЬ (УЛЬТРА-МИНИМАЛИСТИЧНЫЙ РАДИУС) */}
      <div style={{ 
        position: 'fixed', 
        width: '140px', 
        height: '140px', 
        backgroundColor: 'rgba(255, 255, 255, 0.04)', 
        borderRadius: '50%', 
        filter: 'blur(40px)', 
        top: 0, 
        left: 0,
        pointerEvents: 'none', 
        zIndex: 1,
        opacity: isMounted ? 1 : 0,
        transform: `translate3d(${mouseCoords.x - 70}px, ${mouseCoords.y - 70}px, 0)`,
        transition: 'transform 0.08s cubic-bezier(0.1, 0.8, 0.2, 1), opacity 0.5s ease'
      }} />
      
      {/* Мягкий статический фоновый свет для общего объема */}
      <div style={{ position: 'absolute', width: '500px', height: '500px', backgroundColor: 'rgba(255, 255, 255, 0.02)', borderRadius: '50%', filter: 'blur(130px)', top: '20%', left: '10%', pointerEvents: 'none', zIndex: 1 }} />

      {/* --- HERO SECTION --- */}
      <section style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '64px 24px 40px 24px', position: 'relative', zIndex: 2 }}>
        <div style={{ maxWidth: '950px', marginTop: 'auto', marginBottom: 'auto', textAlign: 'center' }}>
          
          {/* СТИЛЬНЫЙ НЕОНОВЫЙ БЕЙДЖ */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            backgroundColor: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            padding: '6px 16px',
            borderRadius: '100px',
            marginBottom: '28px',
            fontSize: '12px',
            fontWeight: 600,
            letterSpacing: '1.5px',
            color: '#A3A3A3',
            textTransform: 'uppercase',
            opacity: 0,
            animation: 'cinematicFadeIn 1s cubic-bezier(0.16, 1, 0.3, 1) forwards',
            animationDelay: '200ms'
          }}>
            <div style={{ 
              position: 'relative', 
              width: '8px', 
              height: '8px', 
              marginRight: '8px',
              backgroundColor: '#FFFFFF',
              borderRadius: '50%',
              boxShadow: '0 0 8px #FFFFFF',
              flexShrink: 0
            }}>
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: '#FFFFFF',
                borderRadius: '50%',
                animation: 'ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite',
                opacity: 0.6
              }} />
            </div>
            Showreel 2026
          </div>

          <h1 style={{ fontSize: 'calc(2.4rem + 2vw)', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.04em', lineHeight: 1.15, marginBottom: '16px', opacity: 0, animation: 'cinematicFadeIn 1s cubic-bezier(0.16, 1, 0.3, 1) forwards', animationDelay: '400ms' }}>
            {content[lang].heroTitle}
          </h1>
          
          <p style={{
            fontSize: '18px',
            color: '#A3A3A3',
            maxWidth: '640px',
            margin: '0 auto 54px auto',
            lineHeight: '1.6',
            fontWeight: '400',
            opacity: 0,
            animation: 'cinematicFadeIn 1s cubic-bezier(0.16, 1, 0.3, 1) forwards',
            animationDelay: '600ms'
          }}>
            {lang === 'RU' ? 'Превращаем исходники в вирусный контент. Поток просмотров под ключ' : 'Turning raw footage into viral content. Seamless viewership flow.'}
          </p>
          
          <div className="relative z-50" style={{ display: 'flex', gap: '18px', justifyContent: 'center', flexWrap: 'wrap', opacity: 0, animation: 'cinematicFadeIn 1s cubic-bezier(0.16, 1, 0.3, 1) forwards', animationDelay: '800ms' }}>
            <a
              href="#portfolio"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="transition-all duration-300 ease-out hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(255,255,255,0.25)] active:scale-[0.98]"
              style={{ 
                display: 'inline-flex', alignItems: 'center', gap: '10px', 
                backgroundColor: '#ffffff', border: `1px solid #ffffff`, color: '#050505',
                padding: '18px 40px', borderRadius: '16px', fontSize: '16px', fontWeight: 700, 
                textDecoration: 'none', transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
            >
              {content[lang].btnPortfolio}
            </a>
            
            <a
              href="https://t.me/zamyatin_3"
              target="_blank"
              rel="noreferrer"
              className="transition-all duration-300 ease-out hover:bg-white/5 hover:border-white/40 active:scale-[0.98] group"
              style={{ 
                display: 'inline-flex', alignItems: 'center', gap: '10px', 
                backgroundColor: 'transparent', border: `1px solid rgba(255, 255, 255, 0.4)`, color: 'rgba(255, 255, 255, 0.8)',
                padding: '18px 40px', borderRadius: '16px', fontSize: '16px', fontWeight: 600, 
                textDecoration: 'none', transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
            >
              <FiSend className="transition-transform duration-300 ease-out group-hover:translate-x-1 group-hover:-translate-y-0.5" style={{ fontSize: '18px' }} /> {content[lang].btnBot}
            </a>
          </div>
          
          <ScrollDivider />
        </div>
      </section>

      {/* --- PORTFOLIO SECTION --- */}
      <section id="portfolio" style={{ ...sectionStyle, zIndex: 2 }}>
        <h2 style={{ fontSize: '38px', fontWeight: 800, color: '#ffffff', marginBottom: '54px', display: 'flex', alignItems: 'center', gap: '16px', letterSpacing: '-0.03em' }}>
          <span style={{ width: '48px', height: '3px', backgroundColor: THEME.light, display: 'inline-block', borderRadius: '2px' }}></span>
          {lang === 'RU' ? 'Наши работы' : 'Selected Works'}
        </h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
          {portfolioVideos.map((video) => {
            const [isHovered, setIsHovered] = useState(false);
            return (
                <div 
                  key={video.id} 
                  style={cardStyle}
                  onMouseEnter={(e) => { 
                    setIsHovered(true);
                    e.currentTarget.style.transform = 'translateY(-8px)'; 
                    e.currentTarget.style.borderColor = THEME.light;
                    e.currentTarget.style.boxShadow = `0 20px 40px rgba(5, 38, 89, 0.3)`;
                  }}
                  onMouseLeave={(e) => { 
                    setIsHovered(false);
                    e.currentTarget.style.transform = 'translateY(0)'; 
                    e.currentTarget.style.borderColor = 'rgba(84, 131, 179, 0.25)';
                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.3)';
                  }}
                >
                  <div style={{ marginBottom: '48px' }}>
                    <span style={{ fontSize: '12px', fontFamily: 'monospace', textTransform: 'uppercase', letterSpacing: '2px', color: '#A3A3A3', display: 'block', marginBottom: '12px', fontWeight: 600 }}>
                      {video.category}
                    </span>
                    <h3 style={{ fontSize: '24px', fontWeight: 700, color: '#ffffff', margin: 0, lineHeight: 1.25 }}>{video.title}</h3>
                  </div>
                  <a
                    href={video.url}
                    target="_blank"
                    rel="noreferrer"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '15px', color: '#A3A3A3', fontWeight: 600, textDecoration: 'none', width: 'fit-content', transition: 'color 0.2s' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#ffffff'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#A3A3A3'}
                  >
                    {lang === 'RU' ? 'Смотреть видео' : 'Watch Video'} <FiArrowUpRight />
                  </a>
                </div>
            )
          })}
        </div>
      </section>

      {/* --- SERVICES SECTION --- */}
      <div className="bg-black relative z-10" style={{ backgroundColor: 'transparent', background: 'none', borderTop: `1px solid rgba(255, 255, 255, 0.08)`, borderBottom: `1px solid rgba(255, 255, 255, 0.08)`, position: 'relative', zIndex: 2 }}>
        <section id="services" style={sectionStyle}>
          <h2 style={{ fontSize: '42px', fontWeight: 800, color: '#ffffff', marginBottom: '60px', textAlign: 'center', letterSpacing: '-0.03em' }}>
            {content[lang].servicesTitle}
          </h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
            
            {[
              { icon: FiVideo, title: lang === 'RU' ? 'Монтаж под ключ' : 'Full-Scale Editing', desc: lang === 'RU' ? 'YouTube-шоу, подкасты, блоги. От подрезки исходников и мультикамерного монтажа до глубокого саунд-дизайна.' : 'YouTube shows, podcasts, corporate vlogs. From multi-cam syncing to immersive sound design.' },
              { icon: FiLayers, title: lang === 'RU' ? 'Вертикальный контент' : 'Short-Form Content', desc: lang === 'RU' ? 'Динамичные Shorts/Reels/TikToks с жестким удержанием внимания, кастомными анимациями и адаптивными субтитрами.' : 'High-retention Shorts, Reels, and TikTok clips with engaging text styles and animations.' },
              { icon: FiTrendingUp, title: lang === 'RU' ? 'Моушн-дизайн и VFX' : 'Motion Design & VFX', desc: lang === 'RU' ? 'Создание уникальной визуальной айдентики канала, 2D/3D карт для расследований, инфографики и сложных графических вставок.' : 'Creating unique channel visual identity, 2D/3D maps for business investigations, infographics, and advanced VFX templates.' }
            ].map((service, index) => {
              const [hoverCoords, setHoverCoords] = useState({ x: 0, y: 0 });
              const [isHovered, setIsHovered] = useState(false);
              return (
                <div
                  key={index}
                  onMouseMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    setHoverCoords({ x: e.clientX - rect.left, y: e.clientY - rect.top });
                  }}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  style={{
                    position: 'relative',
                    backgroundColor: '#000000',
                    border: '1px solid #27272a',
                    borderRadius: '16px',
                    padding: '32px',
                    overflow: 'hidden',
                    transition: 'border-color 0.3s ease, transform 0.3s ease',
                    transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
                    borderColor: isHovered ? 'rgba(255, 255, 255, 0.2)' : '#27272a',
                  }}
                >
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: `radial-gradient(300px circle at ${hoverCoords.x}px ${hoverCoords.y}px, rgba(255, 255, 255, 0.12), transparent 80%)`,
                    opacity: isHovered ? 1 : 0,
                    transition: 'opacity 0.3s ease',
                    pointerEvents: 'none'
                  }} />

                  <div style={{ position: 'relative', zIndex: 2 }}>
                    <div style={{ padding: '14px', backgroundColor: 'rgba(255, 255, 255, 0.07)', borderRadius: '16px', color: '#ffffff', width: 'fit-content', marginBottom: '24px', display: 'flex' }}>
                      <service.icon size={24} />
                    </div>
                    <h3 style={{ fontSize: '22px', fontWeight: 700, marginBottom: '14px', color: '#ffffff' }}>{service.title}</h3>
                    <p style={{ color: '#A3A3A3', fontSize: '15px', lineHeight: 1.6, margin: 0, fontWeight: 400 }}>{service.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </section>
      </div>

      {/* --- CASES SECTION --- */}
      <section id="cases" className="bg-black relative z-10" style={{ ...sectionStyle, zIndex: 2 }}>
        <h2 style={{ fontSize: '38px', fontWeight: 800, color: '#ffffff', marginBottom: '54px', letterSpacing: '-0.03em' }}>{content[lang].casesTitle}</h2>
        <div className="bg-black relative z-10" style={{ 
          border: '1px solid rgba(255, 255, 255, 0.08)', 
          borderRadius: '28px', padding: '48px', display: 'flex', flexDirection: 'row', 
          justifyContent: 'space-between', alignItems: 'center', gap: '40px', flexWrap: 'wrap',
          boxShadow: '0 20px 50px rgba(0,0,0,0.2)'
        }}>
          <div style={{ flex: '1 1 500px' }}>
            <span style={{ fontSize: '12px', fontFamily: 'monospace', color: '#A3A3A3', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 600 }}>
              {lang === 'RU' ? 'Кейс: Канал про business-расследования' : 'Case Study: Business Documentary Channel'}
            </span>
            <h3 style={{ fontSize: '32px', fontWeight: 800, color: '#ffffff', marginTop: '12px', marginBottom: '20px', letterSpacing: '-0.02em', lineHeight: 1.2 }}>
              {lang === 'RU' ? 'Рост просмотров на 400% за 3 месяца' : '400% Viewership Growth in 3 Months'}
            </h3>
            <p style={{ color: '#E5E5E5', fontSize: '16px', lineHeight: 1.6, margin: 0, fontWeight: 400 }}>
              {lang === 'RU' ? 'Разработали уникальный визуальный стиль пост-продакшна, внедрили динамичные карты и моушн-графику, повысив среднее удержание аудитории до 65%.' : 'Created custom mapping visuals and motion design style guide, boosting absolute retention to 65%.'}
            </p>
          </div>
          <div className="bg-zinc-950 relative z-20" style={{ 
            fontSize: '54px', fontWeight: 900, fontFamily: 'monospace', padding: '20px 32px', 
            borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.1)', 
            textAlign: 'center', boxShadow: 'none',
            flexShrink: 0, margin: '0 auto'
          }}>
            <span style={{
              color: '#FFFFFF',
              fontWeight: '800',
              letterSpacing: '-0.03em'
            }}>+1.2M</span>
            <span style={{ fontSize: '13px', fontFamily: 'sans-serif', display: 'block', color: '#A3A3A3', fontWeight: 500, letterSpacing: '0.5px', marginTop: '6px' }}>
              {lang === 'RU' ? 'просмотров' : 'views'}
            </span>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 1. СЕКЦИЯ: КАК МЫ РАБОТАЕМ (ТАЙМЛАЙН) */}
      {/* ========================================================= */}
      <section className="timeline-section">
        <div className="timeline-container">
          
          <div className="timeline-header-center">
            <h2>Как мы работаем</h2>
            <div className="timeline-header-line-center"></div>
          </div>

          <div className="timeline-stream-center">
            
            <div className="timeline-item-center item-right">
              <div className="timeline-badge-center">1</div>
              <div className="timeline-content-center">
                <span className="timeline-step">Брифинг и стратегия</span>
                <h3 className="timeline-title">Концепция</h3>
                <p className="timeline-text">Обсуждаем задачу, анализируем вашу аудиторию и референсы. Формируем четкое ТЗ и утверждаем структуру будущего ролика, чтобы сразу попасть в цель.</p>
              </div>
            </div>

            <div className="timeline-item-center item-left">
              <div className="timeline-badge-center">2</div>
              <div className="timeline-content-center">
                <span className="timeline-step">Отбор исходников</span>
                <h3 className="timeline-title">Сортировка</h3>
                <p className="timeline-text">Выгружаете файлы, а мы берем на себя всю рутину. Отсматриваем часы материала, вырезаем неудачные дубли, паузы и оставляем только самое сочное.</p>
              </div>
            </div>

            <div className="timeline-item-center item-right">
              <div className="timeline-badge-center">3</div>
              <div className="timeline-content-center">
                <span className="timeline-step">Черновой монтаж</span>
                <h3 className="timeline-title">Производство</h3>
                <p className="timeline-text">Собираем скелет видео. Выстраиваем повествование, задаем темп, который удержит зрителя с первой секунды, и делаем базовые склейки.</p>
              </div>
            </div>

            <div className="timeline-item-center item-left">
              <div className="timeline-badge-center">4</div>
              <div className="timeline-content-center">
                <span className="timeline-step">Саунд-дизайн и VFX</span>
                <h3 className="timeline-title">Магия звука и графики</h3>
                <p className="timeline-text">Добавляем атмосферу: подбираем треки, накладываем звуковые эффекты (SFX), делаем цветокоррекцию, добавляем графику и динамичные субтитры.</p>
              </div>
            </div>

            <div className="timeline-item-center item-right">
              <div className="timeline-badge-center">5</div>
              <div className="timeline-content-center">
                <span className="timeline-step">Рендер и сдача</span>
                <h3 className="timeline-title">Финальный результат</h3>
                <p className="timeline-text">Вы получаете готовое видео. Если нужно, оперативно вносим финальные штрихи и отдаем ролик в максимальном качестве, полностью готовый к публикации.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Секция: Обсудить проект */}
      <section id="contacts" style={{ backgroundColor: '#000000', color: '#ffffff', padding: '96px 24px', textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ maxWidth: '640px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '36px', fontWeight: '800', letterSpacing: '-0.03em', marginBottom: '16px', color: '#ffffff', textTransform: 'uppercase' }}>Обсудить проект</h2>
          <p style={{ color: '#a1a1aa', fontSize: '16px', lineHeight: '1.6', marginBottom: '40px' }}>
            Готовы поднять качество вашего контента на новый уровень? Напишите нам прямо сейчас в Telegram.
          </p>
          
          {/* Стильная кнопка-ссылка */}
          <a 
            href="https://t.me/zamyatin_3" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              backgroundColor: '#ffffff',
              color: '#000000',
              fontWeight: 'bold',
              fontSize: '15px',
              textDecoration: 'none',
              padding: '16px 32px',
              borderRadius: '12px',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 20px rgba(255,255,255,0.1)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#e4e4e7';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#ffffff';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            {/* Аккуратная SVG иконка самолетика */}
            <svg 
              style={{ width: '18px', height: '18px', fill: 'currentColor' }} 
              viewBox="0 0 24 24"
            >
              <path d="M1.101 10.422l21.218-8.121c.969-.37 1.923.442 1.631 1.48L19.066 21.6c-.237.896-1.302 1.233-1.996.633l-5.694-4.919-3.238 3.125c-.266.256-.69.215-.9-.089l-2.023-2.92-4.015-1.4c-.815-.285-.815-1.423.001-1.708zm4.729.832l11.192-6.527-12.757 8.354 1.565 2.173 1.565-4.0zm-.246 5.864l1.838-1.774-1.838-.64v2.414z"/>
            </svg>
            Написать менеджеру
          </a>
      
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer style={{ padding: '40px 24px', textAlign: 'center', fontSize: '13px', color: 'rgba(125, 160, 202, 0.3)', borderTop: `1px solid rgba(84, 131, 179, 0.08)`, position: 'relative', zIndex: 2 }}>
        &copy; {new Date().getFullYear()} InFrame Flow. All rights reserved.
      </footer>
    </div>
  )
}

export default App
