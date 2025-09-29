import { Github, Linkedin, Twitter } from "lucide-react";
import './Footer.scss'
export default function Footer() {
  return (
    <footer id="footer" className="site-footer bg-[#111] text-gray-300 py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        
        
        <div className="text-sm">
          © {new Date().getFullYear()} <span className="font-semibold text-white">SHRI MUTHU KUMARAN</span>
        </div>

        <div className="flex gap-4">
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer"
             className="hover:text-white transition-colors">
            <Github size={30} />
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer"
             className="hover:text-white transition-colors">
            <Linkedin size={30} />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"
             className="hover:text-white transition-colors">
            <Twitter size={30} />
          </a>
        </div>
      </div>
    </footer>
  );
}
