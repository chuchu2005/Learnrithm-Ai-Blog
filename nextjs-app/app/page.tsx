import { Suspense } from "react";
import Link from "next/link";
import { AllPosts } from "@/app/components/Posts";

export default async function Page() {
  return (
    <>
      <div className="bg-white">
        <div className="container relative">
          <div className="mx-auto max-w-2xl py-20 lg:max-w-4xl lg:px-12 text-center">
            <div className="flex flex-col gap-4 items-center">
              <div className="text-md leading-6 prose uppercase text-gray-600">
                Welcome to
              </div>
              <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-black">
                Learnrithm AI
              </h1>
            </div>
            <div className="mt-6 space-y-6 prose sm:prose-lg md:prose-xl lg:prose-2xl text-gray-700">
              <p>
                Discover insights, updates, and thought leadership in artificial intelligence and machine learning. 
                Stay informed about the latest developments in AI technology and its impact on education and learning.
              </p>
            </div>
            <div className="mt-8">
              <Link
                href="/posts"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-black hover:bg-gray-800 transition-colors duration-200 rounded-full"
              >
                Read Our Latest Posts
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 ml-2"
                >
                  <path d="M10 6V8H5V19H16V14H18V20C18 20.5523 17.5523 21 17 21H4C3.44772 21 3 20.5523 3 20V7C3 6.44772 3.44772 6 4 6H10ZM21 3V12L17.206 8.207L11.2071 14.2071L9.79289 12.7929L15.792 6.793L12 3H21Z"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-100">
        <div className="container">
          <aside className="py-12 sm:py-20">
            <h2 className="text-3xl font-bold text-center mb-12">Latest Articles</h2>
            <Suspense>{await AllPosts()}</Suspense>
          </aside>
        </div>
      </div>
    </>
  );
}
