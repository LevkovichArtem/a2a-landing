
export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black flex flex-col items-center justify-center px-4 py-12">
      <section className="text-center max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          From concept to launch<br />
          <span className="text-blue-600">with AI assistance.</span>
        </h1>
        <p className="text-lg md:text-xl mb-10">
          Moving from problem to solution in weeks, not months.
        </p>
        <a
          href="mailto:info@a2a-solutions.pl"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition"
        >
          Let’s talk
        </a>
      </section>

      <section className="mt-24 text-center max-w-3xl">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          What we do
        </h2>
        <p className="text-md md:text-lg mb-6">
          We build full-cycle software solutions with a strong focus on mobile development.
        </p>
        <ul className="text-left list-disc list-inside text-gray-700">
          <li className="mb-2">Mobile-first Product Development</li>
          <li className="mb-2">AI-powered Prototyping</li>
          <li className="mb-2">Scalable SDLC Architecture</li>
          <li className="mb-2">Delivery Management & Team Leadership</li>
        </ul>
      </section>
    </main>
  );
}
