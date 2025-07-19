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
            We’re not newcomers riding the latest trend — we’ve been building
            software for over <strong>12 years</strong>, with a strong
            foundation in <strong>mobile development</strong>, full-stack
            delivery, and long-term support.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            Now, we combine that deep engineering expertise with the latest in{" "}
            <strong>AI-assisted tools</strong> and{" "}
            <strong>prototyping workflows</strong>, enabling us to move faster
            than ever — without compromising on quality.
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
            <strong>2 weeks</strong> — fully functional, testable, and often
            already launched to the market.
          </p>
          <p className="text-lg leading-relaxed mt-4">
            We don’t just build fast — we build right. And we stay with you
            beyond launch, ensuring your product evolves with confidence.
          </p>
        </div>
      </section>
    </div>
  );
}
