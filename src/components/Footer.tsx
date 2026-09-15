export default function Footer() {
  return (
    <footer className="py-8 border-t border-[#00f0ff]/20 bg-[#050505]">
      <div className="container mx-auto px-6 text-center">
        <p className="text-gray-400 font-medium">
          &copy; {new Date().getFullYear()} <span className="text-[#00f0ff] font-orbitron">Samarth Varma Mandapati</span>.
        </p>
        <p className="text-gray-500 text-sm mt-2">
          Built with passion, code, and a touch of the future.
        </p>
      </div>
    </footer>
  );
}
