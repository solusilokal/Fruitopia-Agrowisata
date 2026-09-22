import React, { useState, useEffect } from 'react';
import {
  Instagram,
  MapPin,
  MessageCircle,
  X,
  ChevronLeft,
  ChevronRight,
  ArrowDown,
  Share,
  Copy,
  Check,
  Twitter,
  Clock,
  Calendar,
  Star,
  Quote,
  Sparkles,
  Apple,
  Navigation,
  HelpCircle,
  Trees,
  Info,
  DollarSign
} from 'lucide-react';

const pageData = {
  name: "Fruitopia Agrowisata",
  phone: "6289529605601",
  address: "Jl. Agrowisata KM 5, Palangka Raya, Kalimantan Tengah",
  title: "Sensasi Petik Buah Segar Langsung dari Pohonnya!",
  description: "Nikmati pengalaman rekreasi edukatif dan alam terbuka yang menyenangkan di Fruitopia. Petik buah segar berkualitas tinggi dengan udara asri langsung dari kebun organik kami.",
  profileImg: "./profile.png",
  heroImg: "./background.webp",
  links: {
    instagram: "https://www.instagram.com/solusilokal.id",
    tiktok: "https://tiktok.com/@solusilokal.id",
    maps: "https://maps.google.com/?cid=18047471913162934794",
    facebook: "https://facebook.com/"
  },
  locationHighlights: [
    { time: "Buka Setiap Hari", place: "(08.00 - 17.00)" },
    { time: "100%", place: "Buah Organik & Segar" },
    { time: "Area", place: "Parkir Luas & Nyaman" }
  ],
  aboutUs: {
    title: "Tentang Fruitopia",
    description: "Fruitopia adalah destinasi agrowisata unggulan di Palangka Raya yang memadukan kebun buah organik modern dengan rekreasi keluarga yang edukatif dan menyenangkan. Kami berkomitmen menyediakan pengalaman agrowisata terbaik bagi seluruh pengunjung."
  },
  history: {
    title: "Sejarah & Perjalanan",
    description: "Berdiri sejak tahun 2018, Fruitopia berawal dari lahan percontohan hortikultura lokal yang kini berkembang menjadi kawasan wisata petik buah favorit. Ribuan pengunjung telah menikmati edukasi pertanian dan kesegaran buah langsung dari pohonnya."
  },
  catalog: [
    { name: "Jeruk Siam Manis", price: "Rp 35.000 / kg", season: "Panen Raya", img: "./katalog-1.webp", desc: "Jeruk manis segar kaya vitamin C, langsung petik dari pohon." },
    { name: "Jambu Kristal Renyah", price: "Rp 30.000 / kg", season: "Tersedia", img: "./katalog-2.webp", desc: "Padat, manis, tanpa biji, dan sangat menyegarkan." },
    { name: "Melon Golden Premium", price: "Rp 45.000 / kg", season: "Terbatas", img: "./katalog-3.webp", desc: "Manis legit dengan tekstur daging buah yang lembut dan juicy." },
    { name: "Kelengkeng Itoh", price: "Rp 40.000 / kg", season: "Musiman", img: "./katalog-4.webp", desc: "Buah lebat, daging tebal, biji kecil dan sangat manis." },
    { name: "Apel Merah Segar", price: "Rp 50.000 / kg", season: "Panen Raya", img: "./katalog-5.webp", desc: "Manis renyah dengan aroma harum khas pegunungan." },
    { name: "Anggur Hitam Manis", price: "Rp 65.000 / kg", season: "Tersedia", img: "./katalog-6.webp", desc: "Bulir padat penuh kesegaran, manis tanpa rasa sepat." },
    { name: "Buah Persik / Peach", price: "Rp 55.000 / kg", season: "Terbatas", img: "./katalog-7.webp", desc: "Lembut, berair, dan kaya akan vitamin penambah imun." },
    { name: "Stroberi Organik", price: "Rp 45.000 / pak", season: "Musiman", img: "./katalog-8.webp", desc: "Asam manis segar, dipetik langsung dari kebun hidroponik." },
    { name: "Mangga Harum Manis", price: "Rp 38.000 / kg", season: "Panen Raya", img: "./katalog-9.webp", desc: "Daging buah tebal, harum khas, dan berair manis legit." },
    { name: "Naga Merah Super", price: "Rp 28.000 / kg", season: "Tersedia", img: "./katalog-10.webp", desc: "Kaya antioksidan, segar dan manis alami." }
  ],
  pricingList: [
    { item: "Tiket Masuk Kebun", price: "Rp 15.000 / orang", note: "Termasuk tester buah di lokasi" },
    { item: "Paket Edukasi Anak", price: "Rp 35.000 / anak", note: "Termasuk BIBIT tanaman mini & guide" },
    { item: "Sewa Keranjang & Gunting Petik", price: "Gratis", note: "Deposit KTP / ID Card" }
  ],
  faq: [
    { q: "Apakah buah yang dipetik wajib dibeli?", a: "Ya, buah yang Anda petik sendiri di pohon wajib ditimbang dan dibeli sesuai harga katalog per kilogram." },
    { q: "Apakah anak-anak bisa masuk?", a: "Tentu saja! Fruitopia sangat ramah anak dan menyediakan paket edukasi pertanian khusus anak." },
    { q: "Apakah perlu reservasi sebelum datang?", a: "Untuk kunjungan rombongan atau weekend disarankan reservasi terlebih dahulu agar slot petik buah Anda aman." }
  ],
  testimonials: [
    { name: "Dewi Lestari", rating: 5, text: "Seru banget bisa ngajak anak-anak petik jeruk langsung dari pohonnya. Buahnya manis-manis dan tempatnya bersih!" },
    { name: "Rian Pratama", rating: 5, text: "Tempat rekreasi keluarga yang edukatif di Palangka Raya. Pelayanannya ramah dan udaranya sejuk." },
    { name: "Siska Amelia", rating: 4, text: "Jambu kristalnya renyah banget! Puas keliling kebun sambil belajar cara berkebun organik." }
  ],
  galleryPhotos: [
    "./galeri-1.webp",
    "./galeri-2.webp",
    "./galeri-3.webp",
    "./galeri-4.webp",
    "./galeri-5.webp",
  ]
};

export default function App() {
  const [lightbox, setLightbox] = useState({ isOpen: false, images: [], currentIndex: 0 });
  const [showStickyCTA, setShowStickyCTA] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowStickyCTA(true);
      } else {
        setShowStickyCTA(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openLightbox = (images, index) => {
    setLightbox({ isOpen: true, images, currentIndex: index });
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightbox({ ...lightbox, isOpen: false });
    document.body.style.overflow = 'unset';
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setLightbox(prev => ({
      ...prev,
      currentIndex: (prev.currentIndex + 1) % prev.images.length
    }));
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setLightbox(prev => ({
      ...prev,
      currentIndex: (prev.currentIndex - 1 + prev.images.length) % prev.images.length
    }));
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const date = formData.get('date');
    const visitors = formData.get('visitors');
    const notes = formData.get('notes');
    const waUrl = `https://wa.me/${pageData.phone}?text=Halo%20Admin%20${pageData.name},%20saya%20${name}.%20Saya%20ingin%20reservasi%20kunjungan%20petik%20buah%20untuk%20${visitors}%20orang%20pada%20tanggal%20${date}.%20Catatan:%20${notes}`;
    window.open(waUrl, '_blank');
  };

  const handleShare = async () => {
    const shareData = {
      title: pageData.name,
      text: pageData.title,
      url: window.location.href,
    };

    if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.error('Error sharing:', err);
      }
    } else {
      setShowShareModal(true);
    }
  };

  const copyToClipboard = () => {
    const tempInput = document.createElement('input');
    tempInput.value = window.location.href;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);

    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap');
        
        body {
          background-color: #FAF6ED;
          color: #27411D;
          margin: 0;
          font-family: 'Plus Jakarta Sans', sans-serif;
          -webkit-font-smoothing: antialiased;
        }

        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }

        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      { }
      <main className="w-full max-w-[480px] mx-auto relative shadow-2xl bg-[#FAF6ED] min-h-screen overflow-hidden pb-32">

        {/* HERO SECTION */}
        <section className="relative w-full min-h-[90dvh] flex flex-col justify-end pb-12 px-6 bg-[#27411D]">

          <button
            onClick={handleShare}
            aria-label="Share this page"
            className="absolute top-6 right-6 z-20 p-3 bg-[#1d3115]/60 backdrop-blur-md rounded-full border border-amber-200/20 text-white hover:bg-[#1d3115] transition-all shadow-sm"
          >
            <Share size={20} />
          </button>

          <div className="absolute inset-0 z-0">
            <img
              src={pageData.heroImg}
              alt={pageData.name}
              className="w-full h-full object-cover object-top opacity-75"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#27411D] via-[#27411D]/75 via-50% to-transparent"></div>
          </div>

          <div className="relative z-10 flex flex-col items-center text-center mt-20">
            <div className="w-32 h-32 rounded-full p-1.5 bg-white/90 backdrop-blur-md mb-6 shadow-2xl border-2 border-amber-300/60 overflow-hidden">
              <img
                src={pageData.profileImg}
                alt="Profile"
                className="w-full h-full rounded-full object-cover"
              />
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-300/30 text-amber-200 text-xs font-semibold mb-3">
              <Sparkles size={14} className="text-amber-400" /> Agrowisata & Edukasi Buah
            </div>

            <h1 className="text-4xl font-extrabold text-amber-50 mb-3 leading-tight tracking-tight drop-shadow-md">
              {pageData.name}
            </h1>
            <p className="text-amber-100/90 font-light text-sm leading-relaxed mb-6 max-w-[95%]">
              {pageData.description}
            </p>

            <div className="flex flex-col gap-2.5 w-full max-w-sm mb-8">
              <div className="grid grid-cols-2 gap-3 w-full">
                <a
                  href={pageData.links.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 py-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all text-white shadow-sm text-sm font-medium"
                >
                  <Instagram size={18} /> Instagram
                </a>
                <a
                  href={pageData.links.tiktok}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 py-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all text-white shadow-sm text-sm font-medium"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                  </svg> TikTok
                </a>
              </div>
              <a
                href={pageData.links.maps}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 py-3.5 w-full rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all text-white shadow-sm text-sm font-medium"
              >
                <MapPin size={18} /> Lokasi Google Maps
              </a>
            </div>

            <button
              onClick={() => scrollToSection('booking-form')}
              className="group relative flex items-center justify-center gap-3 w-full max-w-sm py-4 bg-[#E06D2D] text-white rounded-2xl font-bold text-[13px] uppercase tracking-wider hover:bg-[#c95d22] transition-all shadow-lg"
            >
              Reservasi Kunjungan
              <ArrowDown size={18} className="group-hover:translate-y-1 transition-transform" />
            </button>
          </div>
        </section>

        { }
        <section id="tentang-kami" className="py-12 px-6 bg-[#FAF6ED] border-b border-[#E8DFCE]">
          <div className="max-w-md mx-auto">
            <div className="flex items-center gap-2 mb-3">
              <Trees className="text-[#27411D]" size={24} />
              <h2 className="text-2xl font-extrabold text-[#27411D] tracking-tight">{pageData.aboutUs.title}</h2>
            </div>
            <p className="text-[#3c5e2e] leading-relaxed text-sm">
              {pageData.aboutUs.description}
            </p>
            <div className="grid grid-cols-3 gap-3 mt-6">
              {pageData.locationHighlights.map((hl, idx) => (
                <div key={idx} className="bg-amber-100/50 p-3 rounded-2xl text-center border border-amber-200/60 flex flex-col justify-center items-center min-h-[64px]">
                  <div className="text-[11px] font-bold text-[#27411D] leading-tight">{hl.time}</div>
                  <div className="text-[10px] text-[#4b6b3e] mt-1 leading-tight">{hl.place}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        { }
        <section id="history" className="py-12 px-6 bg-[#F4EEDE] border-b border-[#E8DFCE]">
          <div className="max-w-md mx-auto">
            <div className="flex items-center gap-2 mb-3">
              <Clock className="text-[#27411D]" size={24} />
              <h2 className="text-2xl font-extrabold text-[#27411D] tracking-tight">{pageData.history.title}</h2>
            </div>
            <p className="text-[#3c5e2e] leading-relaxed text-sm bg-[#FAF6ED] p-5 rounded-2xl border border-amber-200/50 shadow-sm">
              {pageData.history.description}
            </p>
          </div>
        </section>

        { }
        <section id="katalog" className="py-12 px-6 bg-[#FAF6ED] border-b border-[#E8DFCE]">
          <div className="mb-6 flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <Apple className="text-[#27411D]" size={24} />
              <h2 className="text-2xl font-extrabold text-[#27411D] tracking-tight">Katalog Buah Segar</h2>
            </div>
            <p className="text-[#517541] text-xs">Geser ke samping untuk melihat berbagai varian buah segar siap petik di kebun kami.</p>
          </div>

          <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 no-scrollbar">
            {pageData.catalog.map((item, idx) => (
              <div key={idx} className="snap-center shrink-0 w-[240px] bg-white border border-amber-200/60 rounded-3xl overflow-hidden shadow-sm flex flex-col">
                <div className="h-40 overflow-hidden relative">
                  <img src={item.img} alt={item.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  <span className="absolute top-2.5 right-2.5 bg-[#E06D2D] text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow">
                    {item.season}
                  </span>
                </div>
                <div className="p-4 flex flex-col flex-grow justify-between">
                  <div>
                    <h3 className="font-bold text-[#27411D] text-sm mb-1">{item.name}</h3>
                    <p className="text-slate-500 text-xs mb-3 line-clamp-2">{item.desc}</p>
                  </div>
                  <div className="flex items-center justify-between mt-auto pt-2 border-t border-amber-100">
                    <span className="font-extrabold text-[#E06D2D] text-xs">{item.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        { }
        <section id="galeri" className="py-12 px-6 bg-[#F4EEDE] border-b border-[#E8DFCE]">
          <div className="mb-6 flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <Trees className="text-[#27411D]" size={24} />
              <h2 className="text-2xl font-extrabold text-[#27411D] tracking-tight">Galeri Kebun Fruitopia</h2>
            </div>
            <p className="text-[#517541] text-xs">Suasana asri dan keseruan pengunjung di kebun kami.</p>
          </div>

          <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-2 no-scrollbar">
            {pageData.galleryPhotos.map((img, idx) => (
              <div
                key={idx}
                onClick={() => openLightbox(pageData.galleryPhotos, idx)}
                className="snap-center shrink-0 w-[240px] aspect-[4/5] rounded-[1.5rem] overflow-hidden cursor-pointer relative group border border-amber-200/60 shadow-md bg-white"
              >
                <img
                  src={img}
                  alt={"Galeri Kebun " + (idx + 1)}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </section>

        { }
        <section id="harga" className="py-12 px-6 bg-[#FAF6ED] border-b border-[#E8DFCE]">
          <div className="mb-6 flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <DollarSign className="text-[#27411D]" size={24} />
              <h2 className="text-2xl font-extrabold text-[#27411D] tracking-tight">Harga & Tarif Kunjungan</h2>
            </div>
            <p className="text-[#517541] text-xs">Daftar harga tiket masuk dan fasilitas pendukung di Fruitopia.</p>
          </div>

          <div className="flex flex-col gap-3">
            {pageData.pricingList.map((priceItem, idx) => (
              <div key={idx} className="bg-white p-4 rounded-2xl border border-amber-200/60 shadow-sm flex items-center justify-between gap-3">
                <div className="flex-1">
                  <h3 className="font-bold text-[#27411D] text-sm">{priceItem.item}</h3>
                  <p className="text-[#517541] text-xs mt-0.5">{priceItem.note}</p>
                </div>
                <span className="font-extrabold text-[#E06D2D] text-sm bg-amber-100/60 px-4 py-1.5 rounded-xl border border-amber-200 shrink-0 min-w-[140px] text-center">
                  {priceItem.price}
                </span>
              </div>
            ))}
          </div>
        </section>

        { }
        <section id="lokasi" className="py-12 px-6 bg-[#F4EEDE] border-b border-[#E8DFCE]">
          <div className="mb-6 flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <Navigation className="text-[#27411D]" size={24} />
              <h2 className="text-2xl font-extrabold text-[#27411D] tracking-tight">Lokasi Kebun</h2>
            </div>
            <p className="text-[#517541] text-xs">Kunjungi langsung kebun kami di Palangka Raya.</p>
          </div>

          <div className="bg-[#FAF6ED] p-5 rounded-3xl border border-amber-200/60 shadow-sm flex flex-col gap-4">
            <div className="flex items-start gap-3">
              <MapPin className="text-[#E06D2D] shrink-0 mt-1" size={20} />
              <div>
                <h4 className="font-bold text-[#27411D] text-sm">Alamat Lengkap</h4>
                <p className="text-[#3c5e2e] text-xs mt-1 leading-relaxed">{pageData.address}</p>
              </div>
            </div>
            <a
              href={pageData.links.maps}
              target="_blank"
              rel="noreferrer"
              className="w-full py-3.5 bg-[#27411D] text-white rounded-xl font-bold text-xs text-center hover:bg-[#1d3115] transition-colors shadow"
            >
              Buka di Google Maps
            </a>
          </div>
        </section>

        { }
        <section id="faq" className="py-12 px-6 bg-[#FAF6ED] border-b border-[#E8DFCE]">
          <div className="mb-6 flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <HelpCircle className="text-[#27411D]" size={24} />
              <h2 className="text-2xl font-extrabold text-[#27411D] tracking-tight">Pertanyaan Umum (FAQ)</h2>
            </div>
            <p className="text-[#517541] text-xs">Hal-hal yang sering ditanyakan seputar wisata petik buah.</p>
          </div>

          <div className="flex flex-col gap-3">
            {pageData.faq.map((item, idx) => (
              <div key={idx} className="bg-amber-100/40 p-4 rounded-2xl border border-amber-200/60">
                <h3 className="font-bold text-[#27411D] text-xs mb-1.5 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#E06D2D]"></span>
                  {item.q}
                </h3>
                <p className="text-[#3c5e2e] text-xs pl-4 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        { }
        <section className="py-12 px-6 bg-[#F4EEDE] border-b border-[#E8DFCE]">
          <div className="mb-6 flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <Quote className="text-[#27411D]" size={24} />
              <h2 className="text-2xl font-extrabold text-[#27411D] tracking-tight">Testimoni Pengunjung</h2>
            </div>
            <p className="text-[#517541] text-xs">Apa kata mereka yang sudah berkunjung ke Fruitopia.</p>
          </div>

          <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 no-scrollbar">
            {pageData.testimonials.map((testi, idx) => (
              <div key={idx} className="snap-center shrink-0 w-[280px] bg-[#FAF6ED] p-5 rounded-3xl border border-amber-200/60 shadow-sm flex flex-col gap-3">
                <div className="flex items-center gap-1">
                  {[...Array(testi.rating)].map((_, i) => (
                    <Star key={i} size={14} className="fill-amber-500 text-amber-500" />
                  ))}
                </div>
                <p className="text-[#3c5e2e] text-xs leading-relaxed italic">"{testi.text}"</p>
                <div className="mt-auto pt-3 border-t border-amber-200/60 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#27411D] flex items-center justify-center text-white font-bold text-xs">
                    {testi.name.charAt(0)}
                  </div>
                  <span className="text-xs font-bold text-[#27411D]">{testi.name}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        { }
        <section id="booking-form" className="py-12 px-6 bg-[#FAF6ED]">
          <div className="bg-[#27411D] text-white rounded-[2rem] p-8 shadow-xl relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#3c5e2e] rounded-full pointer-events-none opacity-50"></div>

            <div className="relative z-10 mb-6">
              <h2 className="text-2xl font-extrabold mb-2 text-amber-50">Reservasi Kunjungan</h2>
              <p className="text-amber-100/80 text-xs leading-relaxed">Rencanakan kunjungan petik buah Anda bersama keluarga atau rombongan melalui WhatsApp.</p>
            </div>

            <form onSubmit={handleFormSubmit} className="flex flex-col gap-4 relative z-10">
              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] font-bold text-amber-200 uppercase tracking-wide ml-1">Nama Lengkap / Rombongan</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Ketik nama Anda"
                  className="w-full bg-[#1d3115] border border-amber-200/20 rounded-xl px-4 py-3.5 text-xs text-white placeholder-amber-200/40 focus:outline-none focus:border-amber-400 transition-all"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] font-bold text-amber-200 uppercase tracking-wide ml-1">Tanggal Kunjungan</label>
                <input
                  type="date"
                  name="date"
                  required
                  className="w-full bg-[#1d3115] border border-amber-200/20 rounded-xl px-4 py-3.5 text-xs text-white focus:outline-none focus:border-amber-400 transition-all"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] font-bold text-amber-200 uppercase tracking-wide ml-1">Jumlah Pengunjung</label>
                <select
                  name="visitors"
                  required
                  className="w-full bg-[#1d3115] border border-amber-200/20 rounded-xl px-4 py-3.5 text-xs text-white focus:outline-none focus:border-amber-400 transition-all appearance-none"
                >
                  <option value="" className="bg-[#1d3115]">Pilih jumlah pengunjung...</option>
                  <option value="1-3 Orang (Keluarga Kecil)" className="bg-[#1d3115]">1-3 Orang (Keluarga Kecil)</option>
                  <option value="4-10 Orang (Rombongan Keluarga)" className="bg-[#1d3115]">4-10 Orang (Rombongan Keluarga)</option>
                  <option value=">10 Orang (Wisata Sekolah / Kantor)" className="bg-[#1d3115]">&gt;10 Orang (Wisata Sekolah / Kantor)</option>
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] font-bold text-amber-200 uppercase tracking-wide ml-1">Catatan Tambahan (Opsional)</label>
                <textarea
                  name="notes"
                  rows="2"
                  placeholder="Cth: Ingin paket edukasi anak..."
                  className="w-full bg-[#1d3115] border border-amber-200/20 rounded-xl px-4 py-3.5 text-xs text-white placeholder-amber-200/40 focus:outline-none focus:border-amber-400 transition-all resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full mt-2 bg-[#E06D2D] text-white font-bold text-xs tracking-wide py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-[#c95d22] transition-colors shadow-lg"
              >
                Kirim Reservasi WhatsApp
                <MessageCircle size={18} className="fill-current text-white" />
              </button>
            </form>
          </div>
        </section>

        { }
        <footer className="pt-8 pb-12 text-center flex flex-col items-center justify-center mx-6 mt-4">
          <div className="w-full h-px bg-amber-200/60 mb-8"></div>

          <div className="w-16 h-16 bg-white rounded-full shadow-sm border border-amber-200 flex items-center justify-center mb-4 overflow-hidden p-1">
            <img src={pageData.profileImg} alt="Footer Logo" className="w-full h-full object-contain rounded-full" />
          </div>

          <div className="text-[#3c5e2e] text-xs flex flex-col gap-1 items-center">
            <span className="font-extrabold text-[#27411D] text-sm">{pageData.name}</span>
            <span className="max-w-[250px]">{pageData.address}</span>
          </div>

          <p className="text-[#688a5a] text-[10px] mt-8">
            © {new Date().getFullYear()} {pageData.name}. All rights reserved.
          </p>

          <a
            href="https://www.solusilokal.id"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#688a5a] text-[10px] mt-2 tracking-wide font-medium hover:text-[#27411D] transition-colors"
          >
            powered by solusilokal.id
          </a>
        </footer>

        {/* STICKY CTA */}
        <div
          className={`fixed bottom-6 left-1/2 -translate-x-1/2 w-[calc(100%-3rem)] max-w-[432px] z-40 transition-all duration-500 ease-out ${showStickyCTA ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0 pointer-events-none'
            }`}
        >
          <button
            onClick={() => scrollToSection('booking-form')}
            className="w-full flex items-center justify-between px-6 py-4 bg-[#27411D] backdrop-blur-xl border border-amber-300/40 rounded-2xl text-white shadow-[0_10px_40px_rgba(39,65,29,0.4)] hover:bg-[#1d3115] active:scale-[0.98] transition-all"
          >
            <span className="font-bold text-sm tracking-wide text-amber-200">Reservasi Kunjungan Sekarang</span>
            <div className="bg-[#E06D2D] text-white p-2 rounded-xl">
              <Calendar size={18} className="fill-none stroke-current stroke-2" />
            </div>
          </button>
        </div>

      </main>

      { }
      {lightbox.isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/95 backdrop-blur-xl"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-6 right-6 p-3 bg-white/10 rounded-full text-white hover:bg-white/20 transition-all z-50 border border-white/20"
            onClick={closeLightbox}
          >
            <X size={20} />
          </button>

          {lightbox.images.length > 1 && (
            <button
              className="absolute left-4 p-3 bg-white/10 rounded-full text-white hover:bg-white/20 transition-all z-50 border border-white/20"
              onClick={prevImage}
            >
              <ChevronLeft size={24} />
            </button>
          )}

          <div className="w-full max-w-4xl max-h-[100dvh] p-4 flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <img
              src={lightbox.images[lightbox.currentIndex]}
              alt="Lightbox View"
              className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl"
            />
          </div>

          {lightbox.images.length > 1 && (
            <button
              className="absolute right-4 p-3 bg-white/10 rounded-full text-white hover:bg-white/20 transition-all z-50 border border-white/20"
              onClick={nextImage}
            >
              <ChevronRight size={24} />
            </button>
          )}
        </div>
      )}

      {/* SHARE MODAL */}
      {showShareModal && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center bg-slate-900/40 backdrop-blur-sm sm:items-center transition-opacity"
          onClick={() => setShowShareModal(false)}
        >
          <div
            className="w-full max-w-[480px] bg-[#FAF6ED] sm:rounded-3xl rounded-t-3xl p-6 relative overflow-hidden animate-in slide-in-from-bottom-full sm:slide-in-from-bottom-0 sm:zoom-in-95 duration-300 border border-amber-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-center items-center mb-6 relative">
              <h3 className="text-[#27411D] font-bold text-[15px]">Bagikan {pageData.name}</h3>
              <button
                onClick={() => setShowShareModal(false)}
                className="absolute right-0 p-1 text-slate-500 hover:bg-amber-100 rounded-full transition-all"
              >
                <X size={20} />
              </button>
            </div>

            <div className="bg-amber-100/50 border border-amber-200 rounded-[24px] p-8 flex flex-col items-center justify-center mb-6 shadow-sm">
              <img src={pageData.profileImg} alt="Profile" className="w-[72px] h-[72px] rounded-full border border-amber-300 mb-4 object-contain bg-white" />
              <h4 className="text-[#27411D] font-bold text-lg text-center tracking-tight">@{pageData.name.toLowerCase().replace(/\s/g, '')}</h4>
              <p className="text-[#517541] text-xs mt-1 text-center font-medium opacity-90">{pageData.address}</p>
            </div>

            <div className="flex justify-center gap-4 mb-6">
              <button
                onClick={copyToClipboard}
                className="flex items-center gap-2 px-4 py-3 rounded-2xl bg-white text-[#27411D] border border-amber-200 hover:bg-amber-50 transition-all text-xs font-bold"
              >
                {copied ? <Check size={18} className="text-[#27411D]" /> : <Copy size={18} />}
                {copied ? 'Tersalin' : 'Salin Tautan'}
              </button>
              <a
                href={`https://wa.me/?text=${encodeURIComponent(pageData.title + ' ' + window.location.href)}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-3 rounded-2xl bg-[#E06D2D] text-white hover:bg-[#c95d22] transition-all text-xs font-bold"
              >
                <MessageCircle size={18} /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}