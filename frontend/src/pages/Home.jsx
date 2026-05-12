import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Plus, ArrowRight, Headphones, Star } from 'lucide-react';

// Hero Section Component
const HeroSection = memo(() => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          className="w-full h-full object-cover" 
          src="https://lh3.googleusercontent.com/aida/ADBb0uiy3BoJ4TCIqLTBk2QLXLcYmt6dVPh4wKq4o35Rqb4R3sUSdKH1VP0JUKM0vPbenH7Kwi47h9XUSslUFEWrx5b8WUR0zyZhVAOcpGRIIHKmghb5hJ-6z1ST1F0AmiGhlupmlfj00n7L588TP4UBzv43q1baPIU2CX5J_fjEN0COMNx4duvPg7gc7GfIx7mkmR2tLFkwoXjgH64WXcpDkfmZdQNXqDDh-6ir26eVnk0LbgO7r8J41zLxRA7cP0Ss7CiVT-2MN7hkLuQ"
          alt="Midnight Monsoon Hero"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#141218] via-[#141218]/40 to-transparent"></div>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      <div className="relative z-10 text-center px-5 md:px-16 max-w-4xl">
        <h1 className="text-6xl md:text-7xl font-black text-[#e6e0e9] mb-4">
          Midnight Monsoon Bar
          <div className="h-1 w-48 mx-auto bg-[#cfbcff] mt-2 rounded-full shadow-[0_4px_15px_-2px_rgba(207,188,255,0.8)]"></div>
        </h1>
        <p className="text-lg md:text-xl text-[#cbc4d2] mb-16 max-w-2xl mx-auto">
          Where the rain meets the night – Sri Lanka's boldest after-dark experience.
        </p>
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <Link 
            to="/menu"
            className="border border-[#cfbcff]/50 backdrop-blur-md text-[#cfbcff] px-12 py-4 rounded-xl font-bold hover:bg-[#cfbcff]/10 transition-all scale-105 active:scale-95"
          >
            View Menu
          </Link>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <span className="text-[#cfbcff] text-4xl">↓</span>
      </div>
    </section>
  );
});

HeroSection.displayName = 'HeroSection';

// Midnight Experiences Section Component
const MidnightExperiencesSection = memo(() => {
  const services = [
    {
      id: 1,
      title: "Drinks",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBcPYqpjGj64DzK5vOi8Ot5Y0UWLFa7ZmYoXiWoxsap_mZSTkyrPknmSsvYI99fD_02AY3rWToB513gmUfVcK976jXnMuax41CdAZDaEPcy2cuKKRaxPMozwtpX8q1ATMRSPqGe76gKe1kFND2QiBT1EZpDWtgZ0JYfx8FAHqkZ2npDifzwgJAmAPslragkuxcipIqAedWvcpa_O6AQFBM7yAAGfvqSqyDv64P7j4GGgAs1j5IYOH1_XIJnWVlpb80OAzKbbMTMnzvf",
      items: [
        "Signature Cocktails",
        "Craft Beers", 
        "Premium Spirits",
        "Fine Wines",
        "Vintage Arrack",
        "Mocktails & Fresh Juices",
        "Bottle Service"
      ]
    },
    {
      id: 2,
      title: "Foods",
      image: "https://lh3.googleusercontent.com/aida/ADBb0uhTs6mKmMQMaOFCMdLva_6qBD2bzhcXEdJUoTfuR0ZB2whE2WpSFde-AEO3H8Jl8PXCYsgdEeDTdeSP_BcARot3yXXw4L1sxrc46Fvdu7rCND4LMJn0BV-9NMYBQYhm94nqhr5f5pTgUejtH4HuTPL7Q9ZAp3WRDTUjHpPfWFEi3hQ68irKo_pPTkVvzYZ46aU-e2xNdQGPrbtyR9JBbwtdsxgRmhd7g-hM1WpKsjyC14VxFJumJ3CY7kzYDXHL6T3aZI-_o8fFquc",
      items: [
        "Bites / Bar Snacks",
        "Gourmet Platters",
        "Fusion Tapas",
        "Late Night Bites", 
        "Artisan Platters"
      ]
    },
    {
      id: 3,
      title: "Entertainment",
      image: "https://lh3.googleusercontent.com/aida/ADBb0uh_xlm-2eiVsnqUWbn2ZKeKmrR3pB1dHUBYB2TGMbMzubeHFDPZRmwM6oVnkCEOhTj9KWutbvF_SYhk63F5N67vsg2xiBnAD4o6_-kc71fkAxtMml55QGeqHQoiQPHx4wX8y5UF2iacDe1Ft2StMyWenwjF9YPDalYLkuRRFU3p0Jw_r0J0v-P8Xa5CGx0wA5RNraTjF2c4njVGnbJWmrWQivbUwuP-MOEkzWfcf7s_e_uQdmepakDxzWpo_H3sn9rBUa2ZZC5XDQ",
      items: [
        "Live DJ Sets",
        "Jazz Nights",
        "Acoustic Solos",
        "Visual Shows"
      ]
    },
    {
      id: 4,
      title: "Lounge & Experience",
      image: "https://lh3.googleusercontent.com/aida/ADBb0ui7ATn34HJzkCBwDQp1w0c20Y9ZwMX9-KfaVwBXsBN578XqnVOy3bilUL05UC_QMq8KUbxQIp0f6MHtK-arsvxri3bRijHu3YVfGsRLRktkl5nvN8Bl84lDgeY4VL5jYa2WXge9Z_-4zcAbl_ME_IgUg5jB3b_2AwkaGiDYAQ9kDcOE33LJ1VIM8SqnoFRSJtpghEFJD7Lw7W6ezopamX3oC10pv7u8wvRZ4euEEvNN8ma3j2C2WN85-u0CSG7Z1Cgwwahb7uaIeo4",
      items: [
        "Rooftop Views",
        "Private Booths",
        "VIP Balcony", 
        "Cigar Lounge"
      ]
    },
    {
      id: 5,
      title: "Events & Social",
      image: "https://lh3.googleusercontent.com/aida/ADBb0ujkML6U-N-dOioif1UkTf9ZpI68MhU5Bb42oAgGb-rMTCoowB68xkEDhBwT10Ezv6RtRxFN0QM5jFhEf23tTVArFLqnv3TJOx_-s22Smd00OznKgtEV4F2okAgLvHpGsxO68__dTpnPt6vLB7n4WMTMqrJEu8cjEq8917jDKBVEHp673wCCHITja-w3wKAh1L98eRo9zxWGilSThqzryOb6wHyuuWYWDgXFgyFSfRmdBh6XUQdJWnf5KLhy7RrKrr3wW8l5YJGgnZ0",
      items: [
        "Launch Parties",
        "Mixology Classes",
        "Networking",
        "Seasonal Galas"
      ]
    },
    {
      id: 6,
      title: "Premium Services",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDQ8RMx-zUZvB6pu--IAaXMar9zpoqMuFRiOxOVkK-3Kg65aM6qpeEu6Y8RIBDXxmyBfnw3Ll9RhfBtLxZP6FbISOCJcbBJdKP_6fB6xAhjN_LXCavs-aDxITE6ljqjgy7fczFfT4f0w8ezrKvPSfL9XnafJC6WYjLyEnkdxIgTFP6wYW5U99JNfGIU8yTnfNcCTgoIAFGxYUGmVUkFo-_MeBu2MSMH088p_k0Dl83yoxnbOmRk9QxB-eywhuMCIz7szeKAUFQ7f-Du",
      items: [
        "Valet Parking",
        "Concierge",
        "Bottle Service",
        "Pick-up/Drop"
      ]
    },
    {
      id: 7,
      title: "Atmosphere & Ambience",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD8A4mKu9Qq3kkKGX_ucJne8RNuu7rQ79VN4ZPr5YavME2EkCzBKkdXCr7ZKBuM8dkjJIR6VZBahG7sDDfh-2anTrJr8vPJwRFA6uzZicWk3_CVfoWiGjgco-l81RqJY3AnYdb4DbKKxilK8K-n0YLIx6Y6VGFroxKlQWvw4JMxvzqWsj_XrF98gK7iqbmEL78vX6tD00Pjwk6VSz4bRQu3Gw5cqV8-gP_ko5hFmAENYCKMc-3f_82M4E0Z6CC_Bu0ynz20fgoGxODg",
      items: [
        "Rainy Moods",
        "Neon Lights",
        "Scent Design",
        "Temp Control"
      ]
    }
  ];

  return (
    <section className="py-16 md:py-24 relative overflow-hidden bg-[#141218]">
      <div className="px-5 md:px-16 max-w-[1440px] mx-auto mb-4 md:mb-16 flex justify-between items-end">
        <div>
          <span className="text-[#e7c365] text-xs font-semibold uppercase tracking-widest">Our Essence</span>
          <h2 className="text-4xl md:text-5xl font-black mt-2 text-white" style={{ textShadow: '0 0 10px rgba(207, 188, 255, 0.5)' }}>
            Midnight Experiences
          </h2>
        </div>
        <div className="flex gap-4">
          <button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#cfbcff]/20 transition-all text-[#cfbcff]">
            <ChevronLeft size={20} />
          </button>
          <button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#cfbcff]/20 transition-all text-[#cfbcff]">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      <div className="flex gap-6 overflow-x-auto pb-8 px-5 md:px-16 no-scrollbar snap-x">
        {services.map((service) => (
          <div 
            key={service.id}
            className="aspect-[4/5] md:aspect-video rounded-3xl overflow-hidden relative group snap-center flex-shrink-0 cursor-pointer min-w-[550px] md:min-w-[800px]"
          >
            <img 
              alt={service.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              src={service.image}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
            <div className="absolute inset-0 p-4 md:p-8 flex flex-col justify-end">
              <h3 className="text-2xl md:text-3xl font-black text-[#cfbcff] mb-4" style={{ textShadow: '0 0 10px rgba(207, 188, 255, 0.5)' }}>
                {service.title}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-[#cbc4d2]">
                {service.items.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-[#e7c365] rounded-full"></span> {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
});

MidnightExperiencesSection.displayName = 'MidnightExperiencesSection';
// Featured Drinks Section Component
const FeaturedDrinksSection = memo(() => {
  const drinks = [
    {
      id: 1,
      name: "Monsoon Blue Lagoon",
      description: "Electric curacao, premium vodka, and a splash of tropical monsoon mist.",
      price: "LKR 3,200",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAsZEklLyIq8R8XXUQhLHmDK78qwfGweSUo5FjtpAq8uCHDivMg7UowxUzV0L1oO0dEs3VWLkxHBmEXWaDwgOXXJQt16R6U3pPfWJmoD-tqsaHjreVwDD0fCeKzFGkuGqJHtfh34cC37wSLwJyJpuH_vzse9X1HNxIcjIklfCMEWGvnhsRC4hH2xaF2C6l79xFSYHHQXjHvmHcX1ugqdYmaHxUXHWKBRnorx4CoDRVEsp6dLnShXaly-xqCxhF9dvs3JkPyqNXHMKBc",
      badge: "Signature"
    },
    {
      id: 2,
      name: "Ceylon Storm Mojito",
      description: "Dark rum, wild Ceylon berries, lime, and crushed ice storm.",
      price: "LKR 2,800",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBLUzS18pVWno3w69K2RQ0JDlAOuvCGRjxR2e7JVg86Hm8MH4SnBGMNYWzaa9PNJiauJqySAGcOltiLo9XTuT6jcuU68ZBZXnDTYzxHNhEnV0SVeHsR_mHZzpJ5et-VJl1m59CSgcKUGB0wcJEHCyQMfpqcLhyO6sz-KpHsNbajFcR5GyFr0JSHRdkR6q9NH7xHDjpC0ttyfcIGQjAsDz1lg8OaiXLEQ8BFF52mcuyICuy4P4RwelD12JGnjaJ8EZdT_rny9cCMgNmy"
    },
    {
      id: 3,
      name: "Midnight Arrack Fusion",
      description: "Smoked island arrack, ginger bitters, and honey-infused clouds.",
      price: "LKR 3,500",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDplyFk3KYrGSYc-snhtWZeo8yGHPNWZqUfLsou-o_wWHP_ltHnyfQUr2nMK_CtRdNIxvEgDTM0uRGcq2JCO8UGJGVpwLo-HLCzbhQSBX8kAIBwa3KJFwrMKTthSmU5AGAeMOGQrYGmL_d3TJ1WLZKpqdLz0qWI4RpoS3hP0LkRkZwn2w5DwRH0eV7OYQKnj3Kb5d03gBc9WCAI2HvXvmK4xQzeEcptFWLFGyD6QMpcoI3NMHTAr7uVUjC-vpXuoXDNJ9_kj2kQqZt1"
    }
  ];

  return (
    <section className="py-16 md:py-24 px-5 md:px-16 max-w-[1440px] mx-auto overflow-hidden">
      <div className="flex justify-between items-end mb-16">
        <div>
          <span className="text-[#e7c365] text-xs font-semibold uppercase tracking-widest">Liquid Artistry</span>
          <h2 className="text-4xl md:text-5xl font-black mt-2 text-white">Featured Drinks</h2>
        </div>
        <div className="hidden md:flex gap-4">
          <button className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#cfbcff]/20 transition-colors">
            <ChevronLeft className="text-[#cfbcff]" size={20} />
          </button>
          <button className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#cfbcff]/20 transition-colors">
            <ChevronRight className="text-[#cfbcff]" size={20} />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {drinks.map((drink) => (
          <div key={drink.id} className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-4 md:p-8 group hover:border-[#cfbcff]/50 transition-all duration-500">
            <div className="relative h-80 rounded-2xl overflow-hidden mb-4 md:mb-8">
              <img 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                src={drink.image}
                alt={drink.name}
              />
              {drink.badge && (
                <div className="absolute top-4 right-4 bg-[#cfbcff]/20 backdrop-blur-md px-4 py-1 rounded-full text-[#cfbcff] text-xs font-semibold border border-[#cfbcff]/30">
                  {drink.badge}
                </div>
              )}
            </div>
            <h3 className="text-2xl md:text-3xl font-black text-[#cfbcff] mb-2">{drink.name}</h3>
            <p className="text-[#cbc4d2] mb-4">{drink.description}</p>
            <div className="flex justify-between items-center">
              <span className="text-[#e7c365] font-bold text-2xl md:text-3xl">{drink.price}</span>
              <button className="bg-[#cfbcff]/10 text-[#cfbcff] p-2 rounded-full hover:bg-[#cfbcff] hover:text-black transition-all">
                <Plus size={20} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
});

FeaturedDrinksSection.displayName = 'FeaturedDrinksSection';
// Tonight's Vibe Section Component
const TonightsVibeSection = memo(() => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#cfbcff]/5 -z-10"></div>
      <div className="px-5 md:px-16 max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
        <div className="relative">
          <div className="absolute -top-10 -left-10 w-64 h-64 bg-[#cfbcff]/20 blur-[100px] rounded-full"></div>
          <h2 className="text-4xl md:text-5xl font-black mb-8 md:mb-16 text-white">Tonight's Vibe</h2>
          
          <div className="space-y-6">
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-2xl border-l-4 border-l-[#e7c365]">
              <div className="flex gap-4 items-start">
                <Headphones className="text-[#e7c365] text-2xl md:text-3xl flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-lg md:text-xl font-bold text-white">Deep Monsoon Beats</h4>
                  <p className="text-[#cbc4d2]">Live DJ Set by DJ Auralis • 9:00 PM onwards</p>
                  <div className="mt-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                    <span className="text-red-500 text-xs font-semibold uppercase">Live Now</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-2xl border-l-4 border-l-[#cfbcff]/30">
              <div className="flex gap-4 items-start">
                <Star className="text-[#cfbcff] text-2xl md:text-3xl flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-lg md:text-xl font-bold text-white">VIP Rain Room</h4>
                  <p className="text-[#cbc4d2]">Private lounge access with panoramic rain views.</p>
                  <p className="text-[#cfbcff] text-xs font-semibold mt-1">Available for Booking</p>
                </div>
              </div>
            </div>
          </div>
          
          <button className="mt-8 md:mt-12 bg-[#cfbcff] text-black px-8 md:px-12 py-3 md:py-4 rounded-xl font-bold flex items-center gap-2 hover:shadow-[0_0_20px_rgba(207,188,255,0.4)] transition-all">
            Reserve Your Table
            <ArrowRight size={20} />
          </button>
        </div>
        
        <div className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
          <img 
            className="w-full h-full object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBonGKCYt7EVWbJ-M_sm1hsp0rw5_QvmRhjexVFAARBP7-7X9qc9WMIm8VXcNoKGnqQDI0vukcYHa0Wk48i0tM_5vumT8bvQJ9RYUzFi1tkC_WvUcUY4fe6i5THuX9emOvAZKsEYrXR5HA7IMs_tK4n1-y8_JuMr_xUVMXoXbT4QOyNNNVecSutclYZ_qKZf94kIRD3VyWza-Y7J98cxCSwE7NHOhifhpQ1aLK44T61_-V-YHqqWx_nCG7jV2ngBHMKFwwoLgpEBE55"
            alt="DJ performing in nightclub"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#141218] via-transparent to-transparent"></div>
          <div className="absolute bottom-6 left-6 bg-white/5 backdrop-blur-lg border border-white/10 p-4 rounded-xl">
            <p className="text-[#e7c365] text-xs mb-1">CURRENTLY PLAYING</p>
            <p className="text-white font-bold">Midnight Echoes (Live Edit)</p>
          </div>
        </div>
      </div>
    </section>
  );
});

TonightsVibeSection.displayName = 'TonightsVibeSection';

// Footer Component
const FooterSection = memo(() => {
  return (
    <footer className="w-full py-16 md:py-24 bg-[#0f0d13]/40 backdrop-blur-md border-t border-white/5">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-5 md:px-16 max-w-[1440px] mx-auto text-center md:text-left">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-[#e7c365] mb-4">Midnight Monsoon</h2>
          <p className="text-[#cbc4d2]">Colombo's sanctuary for the midnight dreamers and the monsoon seekers.</p>
        </div>
        <div className="flex flex-col gap-2">
          <h4 className="text-xs font-semibold text-[#e6e0e9] uppercase tracking-widest mb-4">Connect</h4>
          <a className="text-[#cbc4d2] text-xs hover:text-[#cfbcff] transition-colors" href="#">Instagram</a>
          <a className="text-[#cbc4d2] text-xs hover:text-[#cfbcff] transition-colors" href="#">TikTok</a>
          <a className="text-[#cbc4d2] text-xs hover:text-[#cfbcff] transition-colors" href="#">Facebook</a>
        </div>
        <div className="flex flex-col gap-2">
          <h4 className="text-xs font-semibold text-[#e6e0e9] uppercase tracking-widest mb-4">Experience</h4>
          <a className="text-[#cbc4d2] text-xs hover:text-[#cfbcff] transition-colors" href="#">Location</a>
          <a className="text-[#cbc4d2] text-xs hover:text-[#cfbcff] transition-colors" href="#">Careers</a>
          <p className="mt-4 text-[#cbc4d2] opacity-100 hover:opacity-80 transition-all cursor-default">
            © 2024 Midnight Monsoon Bar. Crafted for the Global Elite.
          </p>
        </div>
      </div>
    </footer>
  );
});

FooterSection.displayName = 'FooterSection';

// Main Home Component
export function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen bg-[#141218] text-[#e6e0e9]"
    >
      <HeroSection />
      <MidnightExperiencesSection />
      <FeaturedDrinksSection />
      <TonightsVibeSection />
      <FooterSection />
    </motion.div>
  );
}