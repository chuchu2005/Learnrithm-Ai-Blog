import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed z-50 h-24 inset-0 bg-white/80 flex items-center backdrop-blur-lg">
      <div className="container py-6 sm:px-6">
        <div className="flex items-center justify-between gap-5">
          <Link className="flex items-center gap-2" href="/">
            <Image
              src="/images/full-logo.png"
              alt="Learnrithm AI"
              width={150}
              height={40}
              priority
              className="h-8 sm:h-10 w-auto"
            />
          </Link>

          <nav>
            <ul
              role="list"
              className="flex items-center gap-4 md:gap-6 leading-5 text-sm md:text-base tracking-tight font-normal"
            >
              <li className="sm:before:w-[1px] sm:before:bg-gray-100 before:block flex sm:gap-4 md:gap-6">
                <Link
                  className="rounded-full flex gap-2 items-center bg-black hover:bg-red-500 focus:bg-cyan-500 p-1 sm:py-3 sm:px-6 text-white transition-colors duration-200"
                  href="https://learnrithm.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="sr-only sm:not-sr-only">Visit Learnrithm AI</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-6"
                  >
                    <path d="M10 6V8H5V19H16V14H18V20C18 20.5523 17.5523 21 17 21H4C3.44772 21 3 20.5523 3 20V7C3 6.44772 3.44772 6 4 6H10ZM21 3V12L17.206 8.207L11.2071 14.2071L9.79289 12.7929L15.792 6.793L12 3H21Z"></path>
                  </svg>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
