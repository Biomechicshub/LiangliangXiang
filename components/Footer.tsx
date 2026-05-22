import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-slate-100">
      <div className="max-w-3xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-slate-400">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span>
          Built with{" "}
          <a
            href="https://nextjs.org"
            target="_blank"
            rel="noreferrer"
            className="hover:text-slate-600 transition-colors"
          >
            Next.js
          </a>{" "}
          &amp;{" "}
          <a
            href="https://tailwindcss.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-slate-600 transition-colors"
          >
            Tailwind CSS
          </a>
        </span>
      </div>
    </footer>
  );
}
