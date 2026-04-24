/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, MapPin, Phone, Clock, Star, 
  CreditCard, Sparkles, UserCheck, ShieldCheck, 
  Instagram, Facebook, ChevronRight, Check, Calendar, ChevronLeft
} from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

// --- Navbar Component ---
const Navbar = ({ onOpenBooking }: { onOpenBooking: () => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-sand/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <a href="#" className="font-serif text-2xl tracking-wider font-bold text-charcoal">
          HOUSE OF HAIR
        </a>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm uppercase tracking-widest hover:text-gold transition-colors">
              {link.name}
            </a>
          ))}
          <button onClick={(e) => { e.preventDefault(); onOpenBooking(); }} className="px-6 py-2 bg-charcoal text-sand text-sm uppercase tracking-widest hover:bg-gold transition-colors">
            Book Now
          </button>
        </nav>

        {/* Mobile Nav Toggle */}
        <button className="md:hidden text-charcoal" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-sand border-t border-blush"
          >
            <nav className="flex flex-col py-4 px-4 space-y-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-lg uppercase tracking-widest py-2 border-b border-blush/50"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <button onClick={() => { setIsMobileMenuOpen(false); onOpenBooking(); }} className="w-full px-6 py-3 bg-charcoal text-sand text-center text-sm uppercase tracking-widest mt-4">
                Book Now
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

// --- Hero Component ---
const Hero = ({ onOpenBooking }: { onOpenBooking: () => void }) => {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center pt-20">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1595475884562-073c18845a7c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
          alt="Luxury Hair Salon" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-charcoal/40"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-2xl text-sand"
        >
          <motion.div variants={fadeIn} className="flex items-center space-x-2 mb-4">
            <Star className="text-gold w-5 h-5 fill-gold" />
            <span className="uppercase tracking-widest text-sm font-medium">Lusaka's Premier Hair Studio</span>
          </motion.div>
          <motion.h1 variants={fadeIn} className="text-5xl sm:text-6xl md:text-7xl mb-6 leading-tight">
            Luxury Hair. <br/>
            <span className="italic text-gold">Confidence</span> Redefined.
          </motion.h1>
          <motion.p variants={fadeIn} className="text-lg sm:text-xl mb-10 text-sand/90 font-light max-w-lg">
            Premium hair care and styling in Lusaka, tailored exclusively for modern women who demand the best.
          </motion.p>
          <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4">
            <button onClick={onOpenBooking} className="px-8 py-4 bg-gold text-charcoal hover:bg-gold-light transition-colors text-center uppercase tracking-widest text-sm font-medium">
              Book Appointment
            </button>
            <a href="tel:0962221272" className="px-8 py-4 border border-sand text-sand hover:bg-sand hover:text-charcoal transition-colors text-center uppercase tracking-widest text-sm font-medium flex justify-center items-center gap-2">
              <Phone size={16} /> Call Now
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// --- About Component ---
const About = () => {
  return (
    <section id="about" className="py-24 bg-sand">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="order-2 md:order-1"
          >
            <h4 className="text-gold uppercase tracking-widest text-sm font-semibold mb-4">Our Story</h4>
            <h2 className="text-4xl md:text-5xl mb-6">Empowering Women Through Styling.</h2>
            <p className="text-charcoal/70 mb-6 font-light leading-relaxed text-lg">
              House of Hair is a proud women-owned business located inside the heart of Agora Village. We believe that a trip to the salon shouldn't just be an errand; it should be a premium experience.
            </p>
            <p className="text-charcoal/70 mb-8 font-light leading-relaxed text-lg">
              Our focus is entirely on you—expert care, personalized styling, and high-end products that leave your hair flawless and your confidence soaring.
            </p>
            <div className="flex items-center gap-6">
              <div className="border border-charcoal/10 p-4 w-40 text-center">
                <p className="font-serif text-3xl text-gold mb-1">3.9★</p>
                <p className="text-xs uppercase tracking-wider text-charcoal/60">Average Rating</p>
              </div>
              <div className="border border-charcoal/10 p-4 w-40 text-center">
                <p className="font-serif text-3xl text-gold mb-1">100+</p>
                <p className="text-xs uppercase tracking-wider text-charcoal/60">Loyal Clients</p>
              </div>
            </div>
          </motion.div>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0, scale: 0.95 },
              visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } }
            }}
            className="order-1 md:order-2 relative"
          >
            <img 
              src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              alt="Salon styling" 
              className="w-full h-auto aspect-[4/5] object-cover rounded-sm shadow-xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-charcoal text-sand p-6 max-w-xs hidden md:block">
              <p className="font-serif italic text-xl">"A premium experience crafted for modern women."</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// --- Services Component ---
const Services = () => {
  const services = [
    { name: "Haircuts & Styling", desc: "Precision cuts and tailored styling to fit your unique bone structure and lifestyle.", price: "From K500" },
    { name: "Hair Treatments", desc: "Deep conditioning, protein treatments, and restorative care for flawless healthy hair.", price: "From K800" },
    { name: "Coloring & Highlights", desc: "Premium color services using high-end products that protect hair integrity.", price: "From K1200" },
    { name: "Blow Dry & Finish", desc: "Soft, bouncy, or sleek. Perfect finishing that lasts for your special events.", price: "From K300" },
    { name: "Manicure & Pedicure", desc: "Elevate your look fully with our luxury nail care, highly recommended by reviews.", price: "From K450" },
  ];

  return (
    <section id="services" className="py-24 bg-blush">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h4 className="text-charcoal/60 uppercase tracking-widest text-sm font-semibold mb-4">Our Expertise</h4>
          <h2 className="text-4xl md:text-5xl text-charcoal">Curated Services</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-8"
          >
            {services.map((service, index) => (
              <motion.div variants={fadeIn} key={index} className="border-b border-charcoal/10 pb-6 group">
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="text-2xl font-serif text-charcoal group-hover:text-gold transition-colors">{service.name}</h3>
                  <span className="text-sm tracking-widest text-charcoal/60">{service.price}</span>
                </div>
                <p className="text-charcoal/70 font-light pr-12">{service.desc}</p>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
             initial={{ opacity: 0, x: 50 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8 }}
             viewport={{ once: true }}
             className="relative h-full min-h-[400px] hidden lg:block"
          >
             <img 
              src="https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              alt="Service highlight" 
              className="absolute inset-0 w-full h-full object-cover object-top"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// --- Why Choose Us Component ---
const WhyUs = () => {
  const reasons = [
    { icon: <UserCheck size={32} className="text-gold" />, title: "Experienced Stylists", desc: "Our team consists of highly trained experts who stay updated on the latest trends and techniques." },
    { icon: <Sparkles size={32} className="text-gold" />, title: "Premium Products", desc: "We use only top-tier, quality products that nurture your hair and provide lasting results." },
    { icon: <Check size={32} className="text-gold" />, title: "Personalized Service", desc: "Every appointment begins with a consultation to understand your specific needs and goals." },
    { icon: <ShieldCheck size={32} className="text-gold" />, title: "Clean & Modern", desc: "A pristine, welcoming salon environment that guarantees relaxation from the moment you walk in." },
  ];

  return (
    <section className="py-24 bg-charcoal text-sand">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
        >
          {reasons.map((item, index) => (
             <motion.div variants={fadeIn} key={index} className="flex flex-col items-start">
               <div className="mb-6 bg-sand/5 p-4 rounded-full">{item.icon}</div>
               <h3 className="text-xl font-serif mb-3">{item.title}</h3>
               <p className="text-sand/60 font-light leading-relaxed">{item.desc}</p>
             </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// --- Testimonials Component ---
const Testimonials = () => {
  const reviews = [
    { text: "Very welcoming staff and great results — I’ll definitely be back.", name: "Sarah M." },
    { text: "They understand how to style even thin hair beautifully. The atmosphere is top tier.", name: "Chanda K." },
    { text: "A premium experience worth trying. My go-to for events and regular maintenance.", name: "Natasha P." }
  ];

  return (
    <section className="py-24 bg-sand">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-charcoal">Client Experiences</h2>
          <p className="mt-4 text-charcoal/60 uppercase tracking-widest text-sm">Trusted by women in Lusaka</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              className="bg-white p-8 shadow-sm border border-charcoal/5 relative"
            >
              <div className="flex gap-1 mb-6">
                {[1, 2, 3, 4, 5].map(star => <Star key={star} className="w-4 h-4 fill-gold text-gold" />)}
              </div>
              <p className="text-charcoal/80 italic font-serif text-lg mb-6 leading-relaxed">"{review.text}"</p>
              <p className="uppercase tracking-widest text-xs font-semibold text-charcoal">- {review.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- Gallery Component ---
const Gallery = () => {
  // Using curated Unsplash images for salon aesthetic
  const images = [
    "https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1620331311520-24c4bd2fc990?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1595476108010-b4d1f10d5e43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  ];

  return (
    <section id="gallery" className="py-24 bg-blush">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl text-charcoal">The Lookbook</h2>
          </div>
          <a href="#contact" className="hidden md:flex items-center gap-2 uppercase tracking-widest text-sm font-semibold hover:text-gold transition-colors">
            Follow our Instagram <ChevronRight w-4 h-4 />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((src, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className={`relative overflow-hidden group aspect-[3/4] ${idx === 0 || idx === 3 ? 'lg:mt-8' : ''}`}
            >
              <img 
                src={src} 
                alt="Salon highlight" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-charcoal/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- Contact / Booking Component ---
const Contact = ({ onOpenBooking }: { onOpenBooking: () => void }) => {
  return (
    <section id="contact" className="py-24 bg-sand">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h4 className="text-gold uppercase tracking-widest text-sm font-semibold mb-4">Visit Us</h4>
            <h2 className="text-4xl md:text-5xl mb-8">Reserve Your Spot.</h2>
            <p className="text-charcoal/70 mb-10 font-light text-lg">
              We highly recommend booking in advance. Use the form below or contact us directly via phone or WhatsApp. Limited daily bookings available to ensure personalized care.
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <MapPin className="text-gold mt-1" size={24} />
                <div>
                  <h4 className="font-semibold text-lg font-serif">Location</h4>
                  <p className="text-charcoal/70 font-light">Inside Agora Village, Along Thabo Mbeki Rd<br/>Lusaka, Zambia</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="text-gold mt-1" size={24} />
                <div>
                  <h4 className="font-semibold text-lg font-serif">Hours</h4>
                  <p className="text-charcoal/70 font-light">Open daily, closes at 6:00 PM</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="text-gold mt-1" size={24} />
                <div>
                  <h4 className="font-semibold text-lg font-serif">Phone</h4>
                  <p className="text-charcoal/70 font-light">096 2221272</p>
                </div>
              </div>
            </div>

             <div className="flex flex-col sm:flex-row gap-4">
               {/* Click to book modal */ }
               <button onClick={onOpenBooking} className="flex-1 py-4 bg-charcoal text-sand hover:bg-gold hover:text-charcoal transition-colors text-center uppercase tracking-widest text-sm font-medium">
                 Book Online
               </button>
               {/* WhatsApp. Replace with real API link for the actual phone number */}
               <a href="https://wa.me/260962221272" target="_blank" rel="noopener noreferrer" className="flex-1 py-4 bg-[#25D366] text-white hover:bg-[#1ebd5a] transition-colors text-center uppercase tracking-widest text-sm font-medium shadow-lg shadow-[#25D366]/20">
                 WhatsApp Book
               </a>
             </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 md:p-10 shadow-sm border border-charcoal/5"
          >
            <h3 className="text-2xl font-serif mb-6">Booking Request</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-xs uppercase tracking-widest mb-2 text-charcoal/60">Full Name</label>
                <input type="text" className="w-full border-b border-charcoal/20 py-2 focus:outline-none focus:border-gold transition-colors bg-transparent" placeholder="Jane Doe" required />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest mb-2 text-charcoal/60">Phone Number</label>
                <input type="tel" className="w-full border-b border-charcoal/20 py-2 focus:outline-none focus:border-gold transition-colors bg-transparent" placeholder="09X XXX XXXX" required />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-widest mb-2 text-charcoal/60">Service</label>
                  <select className="w-full border-b border-charcoal/20 py-2 focus:outline-none focus:border-gold transition-colors bg-transparent rounded-none appearance-none">
                    <option>Haircut & Styling</option>
                    <option>Coloring</option>
                    <option>Treatment</option>
                    <option>Manicure/Pedicure</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest mb-2 text-charcoal/60">Preferred Date</label>
                  <input type="date" className="w-full border-b border-charcoal/20 py-2 focus:outline-none focus:border-gold transition-colors bg-transparent text-charcoal/80" required />
                </div>
              </div>
              <button type="submit" className="w-full mt-4 py-4 border border-charcoal text-charcoal hover:bg-charcoal hover:text-sand transition-colors uppercase tracking-widest text-sm font-medium">
                Send Inquiry
              </button>
              <p className="text-xs text-center text-charcoal/50 mt-4">We will contact you to confirm your appointment time.</p>
            </form>
          </motion.div>
        </div>

        {/* Map Placeholder */}
        <div className="mt-16 bg-gray-200 w-full h-[400px] border border-charcoal/10 grayscale opacity-80 hover:grayscale-0 transition-all duration-500">
           {/* Using an iframe to embed Google Map based on location string */}
          <iframe 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            loading="lazy" 
            allowFullScreen 
            referrerPolicy="no-referrer-when-downgrade" 
            src={`https://www.google.com/maps/embed/v1/place?key=${import.meta.env.VITE_MAPS_API_KEY || ''}&q=Agora+Village,+Thabo+Mbeki+Rd,+Lusaka,+Zambia`}
            title="House of Hair Location"
          ></iframe>
          {/* Note: Google Maps embed won't work perfectly without an API key, fallback styling implies map area */}
          <div className="h-full w-full flex items-center justify-center bg-charcoal/5">
             <p className="text-charcoal/50 font-serif z-0 absolute">View on Google Maps</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// --- Footer Component ---
const Footer = ({ onOpenBooking }: { onOpenBooking: () => void }) => {
  return (
    <footer className="bg-charcoal text-sand py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 pb-12 border-b border-sand/10">
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-serif mb-4">Ready for a transformation?</h2>
            <p className="text-sand/60 font-light max-w-md">Book your next appointment today and experience premium hair care.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <button onClick={onOpenBooking} className="px-8 py-4 bg-gold text-charcoal hover:bg-gold-light transition-colors text-center uppercase tracking-widest text-sm font-medium">
              Book Now
            </button>
            <a href="tel:0962221272" className="px-8 py-4 border border-sand text-sand hover:bg-white hover:text-charcoal transition-colors text-center uppercase tracking-widest text-sm font-medium">
              Call Now
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h3 className="font-serif text-xl tracking-wider font-bold text-sand mb-4">HOUSE OF HAIR</h3>
            <p className="text-sand/50 text-sm leading-relaxed mb-4">
              Premium hair salon in Lusaka.<br/>Tailored for modern women.
            </p>
            <div className="flex justify-center md:justify-start gap-4 text-sand/50">
              <a href="#" className="hover:text-gold transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-gold transition-colors"><Facebook size={20} /></a>
            </div>
          </div>
          
          <div>
            <h4 className="uppercase tracking-widest text-xs font-semibold text-sand/80 mb-4">Links</h4>
            <ul className="space-y-2 text-sm text-sand/50">
              <li><a href="#about" className="hover:text-gold transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-gold transition-colors">Services</a></li>
              <li><a href="#gallery" className="hover:text-gold transition-colors">Gallery</a></li>
              <li><a href="#contact" className="hover:text-gold transition-colors">Book Appointment</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="uppercase tracking-widest text-xs font-semibold text-sand/80 mb-4">Location</h4>
            <ul className="space-y-2 text-sm text-sand/50">
              <li>Inside Agora Village</li>
              <li>Thabo Mbeki Rd</li>
              <li>Lusaka, Zambia</li>
              <li className="mt-4 pt-4 border-t border-sand/10">096 2221272</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 text-center text-xs text-sand/40">
          &copy; {new Date().getFullYear()} House of Hair Lusaka. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

// --- Booking Modal Component ---
const BookingModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [step, setStep] = useState(1);
  const [service, setService] = useState('');
  const [date, setDate] = useState<Date | null>(null);
  const [time, setTime] = useState('');
  const [formData, setFormData] = useState({ name: '', phone: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const services = [
    "Haircut & Styling - K500",
    "Deep Treatment - K800",
    "Coloring & Highlights - K1200",
    "Blow Dry & Finish - K300",
    "Manicure & Pedicure - K450"
  ];

  const timeSlots = ["09:00 AM", "10:30 AM", "12:00 PM", "02:00 PM", "03:30 PM", "05:00 PM"];
  
  const nextDays = Array.from({ length: 7 }).map((_, i) => {
    const d = new Date();
    d.setDate(d.getDate() + i + 1);
    return d;
  });

  useEffect(() => {
    if (!isOpen) { 
      setTimeout(() => {
        setStep(1); setService(''); setDate(null); setTime(''); setIsSubmitting(false);
      }, 300);
    }
  }, [isOpen]);

  const handleBook = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setStep(4);
    }, 1500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="absolute inset-0 bg-charcoal/80 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div 
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="bg-sand w-full max-w-lg relative z-10 shadow-2xl flex flex-col max-h-[90vh]"
          >
            <div className="flex items-center justify-between p-6 border-b border-charcoal/10 shrink-0">
              <h3 className="font-serif text-2xl text-charcoal">
                {step === 4 ? 'Confirmed' : 'Book Appointment'}
              </h3>
              <button onClick={onClose} className="p-2 hover:bg-charcoal/5 rounded-full transition-colors">
                <X size={20} className="text-charcoal" />
              </button>
            </div>

            <div className="p-6 overflow-y-auto flex-1">
              {step === 1 && (
                <div className="space-y-4">
                  <h4 className="uppercase tracking-widest text-xs text-charcoal/60 font-semibold mb-4">Select a Service</h4>
                  {services.map(s => (
                    <button 
                      key={s}
                      onClick={() => setService(s)}
                      className={`w-full text-left p-4 border transition-colors ${service === s ? 'border-gold bg-gold/5' : 'border-charcoal/10 hover:border-gold/50'}`}
                    >
                      <span className="font-serif text-lg">{s.split(' - ')[0]}</span>
                      <span className="block text-sm text-charcoal/60 mt-1">{s.split(' - ')[1]}</span>
                    </button>
                  ))}
                  <button 
                     disabled={!service}
                     onClick={() => setStep(2)}
                     className="w-full mt-6 py-4 bg-charcoal text-sand disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gold hover:text-charcoal transition-colors uppercase tracking-widest text-sm font-medium"
                  >
                     Continue
                  </button>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-6">
                  <div className="flex items-center gap-2 mb-4">
                    <button onClick={() => setStep(1)} className="text-charcoal/60 hover:text-charcoal"><ChevronLeft size={20} /></button>
                    <h4 className="uppercase tracking-widest text-xs text-charcoal/60 font-semibold">Select Date & Time</h4>
                  </div>
                  
                  <div className="flex gap-2 overflow-x-auto pb-2" style={{ scrollbarWidth: 'none' }}>
                    {nextDays.map((d, i) => {
                      const isSelected = date?.toDateString() === d.toDateString();
                      return (
                        <button 
                          key={i}
                          onClick={() => setDate(d)}
                          className={`flex-shrink-0 w-16 p-3 flex flex-col items-center border transition-colors ${isSelected ? 'border-gold bg-gold/5' : 'border-charcoal/10 hover:border-gold/50'}`}
                        >
                          <span className="text-xs uppercase text-charcoal/60">{d.toLocaleDateString('en-US', { weekday: 'short' })}</span>
                          <span className="font-serif text-xl mt-1">{d.getDate()}</span>
                        </button>
                      );
                    })}
                  </div>

                  {date && (
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="grid grid-cols-2 gap-3 mt-4">
                      {timeSlots.map(t => (
                        <button
                          key={t}
                          onClick={() => setTime(t)}
                          className={`p-3 text-sm border text-center transition-colors ${time === t ? 'border-gold bg-gold/5' : 'border-charcoal/10 hover:border-gold/50'}`}
                        >
                          {t}
                        </button>
                      ))}
                    </motion.div>
                  )}

                  <button 
                     disabled={!date || !time}
                     onClick={() => setStep(3)}
                     className="w-full mt-6 py-4 bg-charcoal text-sand disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gold hover:text-charcoal transition-colors uppercase tracking-widest text-sm font-medium"
                  >
                     Continue
                  </button>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-6">
                  <div className="flex items-center gap-2 mb-4">
                    <button onClick={() => setStep(2)} className="text-charcoal/60 hover:text-charcoal"><ChevronLeft size={20} /></button>
                    <h4 className="uppercase tracking-widest text-xs text-charcoal/60 font-semibold">Your Details</h4>
                  </div>
                  
                  <div className="bg-charcoal/5 p-4 mb-6 text-sm">
                    <p className="font-serif"><strong className="font-sans font-semibold text-xs uppercase tracking-widest">Service:</strong> {service.split(' - ')[0]}</p>
                    <p className="font-serif mt-1"><strong className="font-sans font-semibold text-xs uppercase tracking-widest">When:</strong> {date?.toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric'})} at {time}</p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs uppercase tracking-widest mb-2 text-charcoal/60">Full Name</label>
                      <input 
                        type="text" 
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full border-b border-charcoal/20 py-2 focus:outline-none focus:border-gold transition-colors bg-transparent" 
                        placeholder="e.g. Jane Doe" 
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-widest mb-2 text-charcoal/60">Phone Number</label>
                      <input 
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full border-b border-charcoal/20 py-2 focus:outline-none focus:border-gold transition-colors bg-transparent" 
                        placeholder="09X XXX XXXX" 
                      />
                    </div>
                  </div>

                  <button 
                     disabled={!formData.name || !formData.phone || isSubmitting}
                     onClick={handleBook}
                     className="w-full mt-6 py-4 bg-charcoal text-sand disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gold hover:text-charcoal transition-colors uppercase tracking-widest text-sm font-medium flex items-center justify-center gap-2"
                  >
                     {isSubmitting ? <span className="animate-pulse">Confirming...</span> : 'Confirm Booking'}
                  </button>
                </div>
              )}

              {step === 4 && (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-gold/20 text-gold rounded-full flex items-center justify-center mx-auto mb-6">
                    <Check size={32} />
                  </div>
                  <h3 className="font-serif text-3xl mb-2">You're Booked!</h3>
                  <p className="text-charcoal/70 mb-8 font-light">
                    We've received your booking for {service.split(' - ')[0]} on {date?.toLocaleDateString('en-US', { month: 'short', day: 'numeric'})} at {time}. We look forward to seeing you!
                  </p>
                  <button 
                    onClick={onClose}
                    className="w-full py-4 bg-charcoal text-sand hover:bg-gold hover:text-charcoal transition-colors uppercase tracking-widest text-sm font-medium"
                  >
                    Done
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

// --- Main App Component ---
export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <div className="font-sans text-charcoal bg-sand">
      <Navbar onOpenBooking={() => setIsBookingOpen(true)} />
      <main>
        <Hero onOpenBooking={() => setIsBookingOpen(true)} />
        <About />
        <Services />
        <WhyUs />
        <Testimonials />
        <Gallery />
        <Contact onOpenBooking={() => setIsBookingOpen(true)} />
      </main>
      <Footer onOpenBooking={() => setIsBookingOpen(true)} />
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </div>
  );
}
