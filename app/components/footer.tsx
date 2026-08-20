
import { PROFILE_DATA } from "../lib";


export default function Footer() {
  return (
    <footer className="bg-surface w-full py-8 border-t border-outline-variant transition-all duration-200 mt-auto">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="font-label-md text-label-md font-bold text-on-surface tracking-widest uppercase">
          © 2026 ip192htw
        </div>
        <div className="flex gap-6">
          <a
            className="font-label-md text-label-md uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors"
            href={PROFILE_DATA.contact.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            className="font-label-md text-label-md uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors"
            href={PROFILE_DATA.contact.email}
          >
            Email
          </a>
          <a
            className="font-label-md text-label-md uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors"
            href={PROFILE_DATA.contact.linkedin}
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
