import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Gallery } from './components/Gallery';
import { Testimonials } from './components/Testimonials';
import { Pricing } from './components/Pricing';
import { BookingForm } from './components/BookingForm';
import { Footer } from './components/Footer';
import { CookieConsent } from './components/CookieConsent';
import { YandexMetrika } from './components/YandexMetrika';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <Gallery />
      <Testimonials />
      <Pricing />
      <BookingForm />
      <Footer />
      <CookieConsent />
      <YandexMetrika counterId={106318525}/>
    </div>
  );
}