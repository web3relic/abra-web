import Image from "next/image";

import { TextHoverEffect } from "@/components/ace/text-hover-effect";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="flex items-center fixed top-0 left-0">
          <svg className="w-20 p-4" viewBox="0 0 392 211" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M309.266 62.1562L222.766 148.656L172.833 98.724L131.057 140.5L185.422 194.859C205.766 215.208 238.76 215.208 259.104 194.859L391.219 62.7552L309.266 62.1562Z" fill="#fff"/>
            <path d="M222.766 111.161L264.536 69.3854L212.276 17.125C189.932 -5.21875 153.708 -5.21875 131.365 17.125L0.796875 147.693L84.7552 148.302L172.328 60.7188L222.766 111.161Z" fill="#fff"/>
          </svg>
        </div>
        <div className="w-full h-screen">
          <TextHoverEffect text="ABRA" />
        </div>

        <div className="w-full fixed bottom-20 flex gap-4 items-center justify-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 px-5 min-w-32 sm:min-w-44"
            href="mailto:hello@abra.foundation"
            target="_blank"
            rel="noopener noreferrer"
          >
            Join Us
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <p className="text-xs py-8 text-zinc-600">
          Founded by <a href="https://github.com/web3relic" target="_blank" rel="noopener noreferrer" className="underline">Web3Relic.</a>
        </p>
      </footer>
    </div>
  );
}
