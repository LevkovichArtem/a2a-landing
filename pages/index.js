export default function Home() {
  return (
    <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/background.jpg')" }}>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-white text-center px-4">
        <h1 className="text-5xl font-bold mb-4">A2A Solutions</h1>
        <p className="text-xl max-w-2xl">Your trusted partner in building scalable digital products.</p>
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
  );
}
