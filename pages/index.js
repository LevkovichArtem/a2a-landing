export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <div
        className="relative min-h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/background.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-white text-center px-4">
          <h1 className="text-5xl font-bold mb-4">A2A Solutions</h1>
          <p className="text-xl max-w-2xl">
            Your trusted partner in building scalable digital products.
          </p>
          <a
            href="mailto:hello@a2a-solutions.pl"
            className="mt-6 inline-block px-6 py-3 bg-white text-black font-semibold rounded hover:bg-gray-200 transition"
          >
            Get in touch
          </a>
          <p className="mt-2 text-sm text-gray-300">
            Or send an email to <span className="underline">hello@a2a-solutions.pl</span>
          </p>
          <p className="mt-4 text-sm bg-green-100 text-green-800 font-semibold px-4 py-3 rounded-lg max-w-xl mx-auto text-center shadow-sm">
  A visual beats a thousand words - send us your draft, and we’ll quickly return with a ⚡ working prototype to kickstart your vision.
</p>
        </div>
        <footer className="absolute bottom-0 left-0 right-0 text-center py-4 text-sm text-white bg-black bg-opacity-70">
          © {new Date().getFullYear()} A2A Solutions. All rights reserved.
        </footer>
      </div>

      {/* Info Section */}
      <section className="py-20 px-6 md:px-12 bg-white text-gray-900">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Grounded in experience, powered by AI
          </h2>
          <p className="text-lg leading-relaxed mb-4">
            We’re not newcomers riding the latest trend - we’ve been building
            software for over <strong>12 years</strong>, with a strong
            foundation in <strong>mobile development</strong>, full-stack
            delivery, and long-term support.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            Now, we combine that deep engineering expertise with the latest in{" "}
            <strong>AI-assisted tools</strong> and{" "}
            <strong>prototyping workflows</strong>, enabling us to move faster
            than ever - without compromising on quality.
          </p>
          <ul className="list-disc pl-6 text-lg mb-4 space-y-2">
            <li>
              A solid understanding of the entire{" "}
              <strong>software development lifecycle (SDLC)</strong>
            </li>
            <li>
              Experience in <strong>project discovery</strong>,{" "}
              <strong>delivery management</strong>, and{" "}
              <strong>post-launch support</strong>
            </li>
            <li>
              Strong <strong>analytical thinking</strong> and a pragmatic
              approach to problem-solving
            </li>
            <li>
              Hands-on knowledge of <strong>mobile platforms</strong>, backend
              systems, and cloud infrastructure
            </li>
            <li>
              Proactive adoption of <strong>modern technologies</strong>,
              especially in the AI/productivity space
            </li>
            <li>
              Access to a trusted <strong>network of engineers</strong> ready
              to support any scale of work
            </li>
          </ul>
          <p className="text-lg leading-relaxed font-semibold">
            Most MVPs we build go from idea to a live product in under{" "}
            <strong>2 weeks</strong> - fully functional, testable, and often
            already launched to the market.
          </p>
          <p className="text-lg leading-relaxed mt-4">
            We don’t just build fast - we build right. And we stay with you
            beyond launch, ensuring your product evolves with confidence.
          </p>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 px-6 md:px-12 bg-gray-100 text-gray-900">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Portfolio</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="text-center">
        <a href="https://apps.apple.com/app/ai-song-maker-music-generator/id6670408789" target="_blank" rel="noopener noreferrer">
          <img src="/photo-song.png" alt="AI Photo Song Maker" className="rounded shadow-lg mb-4" />
          <h3 className="text-xl font-semibold text-green-600">AI Photo Song Maker</h3>
          <p className="text-sm text-blue-600 underline mt-2">Check in App Store</p>
        </a>
      </div>
      <div className="text-center">
        <a href="https://apps.apple.com/app/call-record-auto-recording/id6747336964" target="_blank" rel="noopener noreferrer">
          <img src="/call-recorder.png" alt="AI Call Recorder" className="rounded shadow-lg mb-4" />
          <h3 className="text-xl font-semibold text-green-600">AI Call Recorder</h3>
          <p className="text-sm text-blue-600 underline mt-2">Check in App Store</p>
        </a>
      </div>
      <div className="text-center">
        <a href="https://apps.apple.com/app/ai-math-homework-solver-app/id6670184163" target="_blank" rel="noopener noreferrer">
          <img src="/ai-homework.png" alt="AI Homework" className="rounded shadow-lg mb-4" />
          <h3 className="text-xl font-semibold text-green-600">AI Homework</h3>
          <p className="text-sm text-blue-600 underline mt-2">Check in App Store</p>
        </a>
      </div>
    </div>
  </div>
</section>


    </div>
  );
}
