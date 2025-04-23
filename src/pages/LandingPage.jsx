import React from 'react';
import Header from '../components/Header';
import illustration from '../assets/illustration.png';
import featureSearch from '../assets/feature-search.png';
import featureAI from '../assets/feature-ai.png';
import featureVPN from '../assets/feature-vpn.png';
import logo from '../assets/Logo.svg';

const LandingPage = () => {
  return (
    <main className="font-serif text-gray-900 scroll-smooth">
      <Header />
      <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-white via-red-50 to-red-100">
        <div className="container mx-auto px-6 lg:px-0 grid lg:grid-cols-2 gap-12 py-24 items-center">
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-6xl font-bold leading-snug">
              The browser that puts <span className="text-red-600">you</span> first
            </h1>
            <p className="text-lg lg:text-xl text-gray-700">
              Block ads, save data, and enjoy lightning-fast browsing—effortlessly.
            </p>
            <a href="#features" className="inline-block mt-4 px-6 py-3 bg-red-600 text-white rounded-full hover:bg-red-700 transition">
              Discover Features
            </a>
          </div>
          <img src={illustration} alt="Illustration" className="hidden lg:block max-w-md mx-auto rounded-xl shadow-lg" />
        </div>
      </section>

      <section id="features" className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-0">
          <h2 className="text-4xl font-bold text-center mb-12">Key Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: featureSearch, title: 'Private Search', desc: 'AI-powered answers with zero profiling.' },
              { icon: featureAI, title: 'AI Assistant', desc: 'Summarize pages & generate content privately.' },
              { icon: featureVPN, title: 'VPN Protection', desc: 'Encrypt traffic & hide your IP on the go.' },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="text-center p-8 border border-gray-100 rounded-2xl shadow-sm hover:shadow-lg transition">
                <img src={icon} alt={title} className="mx-auto mb-4 h-16 w-16 opacity-80" />
                <h3 className="text-2xl font-semibold mb-2">{title}</h3>
                <p className="text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="benefits" className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-0 max-w-4xl space-y-8">
          <h2 className="text-4xl font-bold text-center">The Web, without the annoyances</h2>
          <p className="text-lg text-gray-700">Brave blocks third-party ads on every website. That’s video ads, search ads, social media ads, and more.</p>
          <h3 className="text-3xl font-semibold">Save data, save battery, save time</h3>
          <p className="text-lg text-gray-700">Without that unwanted junk, you save Wi-Fi bandwidth and mobile data, battery life and CPU. And websites load 3x-6x faster. Less waiting = more time back in your day.</p>
          <p className="text-lg text-gray-700">Shields against tracking and fingerprinting. A premium VPN that can encrypt every connection no matter where you are. On-by-default Global Privacy Control to stop websites from selling and sharing your data.</p>
          <p className="text-lg text-gray-700">All this (and more) in one ridiculously easy package. Brave works right out of the box. No dials to turn, no extensions, no PhD required.</p>
          <h3 className="text-3xl font-semibold">A faster, more private, less annoying Web is only 60 seconds away</h3>
          <p className="text-lg text-gray-700">Just download Brave, import favorites from your old browser, and… You’re done!</p>
        </div>
      </section>

      <section id="video" className="py-24 bg-gray-100">
        <div className="container mx-auto px-6 lg:px-0">
          <div className="relative w-full pb-[56.25%] rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.youtube.com/embed/fiXaHv_9rmQ"
              title="Brave Demo Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>
        </div>
      </section>

      <section id="faq" className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-0 max-w-2xl">
          <h2 className="text-4xl font-bold text-center mb-12">FAQ</h2>
          <div className="space-y-4">
            {[
              { q: 'Is Brave really private?', a: 'Yes—Brave blocks ads & trackers by default for true privacy.' },
              { q: 'How do I enable VPN?', a: 'Go to Settings → Privacy Features → VPN to toggle encryption.' },
              { q: 'Can I import bookmarks?', a: 'Yes! In Settings → Bookmarks, choose “Import Bookmarks.”' },
            ].map(({ q, a }) => (
              <details key={q} className="group border border-gray-200 rounded-lg p-4">
                <summary className="font-medium cursor-pointer list-none">
                  {q}
                  <span className="float-right transition-transform group-open:rotate-180">▼</span>
                </summary>
                <p className="mt-2 text-gray-600">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 bg-gradient-to-br from-red-50 to-red-100">
        <div className="container mx-auto px-6 lg:px-0 max-w-md">
          <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
          <form className="space-y-6">
            <input type="text" placeholder="Your Name" className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-400" required />
            <input type="email" placeholder="Your Email" className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-400" required />
            <textarea placeholder="Your Message" rows={5} className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-400" required />
            <button type="submit" className="w-full py-3 bg-red-600 text-white font-semibold rounded-full hover:bg-red-700 transition">
              Send Message
            </button>
          </form>
        </div>
      </section>

      <section id="download" className="py-24 bg-black">
        <div className="container mx-auto px-6 lg:px-0 flex flex-col lg:flex-row items-center justify-between text-white">
          <div className="max-w-lg text-center lg:text-left">
            <h2 className="text-4xl lg:text-5xl font-bold mb-2">The browser that saves your time, not your personal info</h2>
            <p className="text-lg lg:text-xl">Download Brave for Android, iOS, Linux, macOS, or Windows</p>
          </div>
          <img src={logo} alt="Brave Logo" className="h-24 w-24 opacity-80 mt-8 lg:mt-0" />
        </div>
      </section>

    </main>
  );
};

export default LandingPage;