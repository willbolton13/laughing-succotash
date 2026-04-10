import { Videotape } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="w-full border-b bg-base-900 border-accent px-6 py-4">
      <div className="mx-auto flex max-w-5xl items-center justify-between">
        
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <Videotape className="text-accent h-6 w-6" />
          <span className="text-base-50 text-xl font-bold tracking-tight">
            Demo<span className="text-accent">Lab</span>
          </span>
        </div>
        
        {/* Links Section */}
        <div className="flex gap-6">
          <a href="/" className="text-base-50 hover:text-accent font-medium transition-colors">
            Home
          </a>
          <a href="/demos" className="text-base-100 hover:text-accent font-medium transition-colors">
            Experiments
          </a>
        </div>

      </div>
    </nav>
  );
}