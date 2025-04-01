export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-50 border-gray-100 border-t">
      <div className="container">
        <div className="flex flex-col items-center py-16 lg:flex-row">
          <div className="mb-10 lg:mb-0 lg:w-1/2 lg:pr-4">
            <h3 className="text-center text-4xl font-bold leading-tight tracking-tighter lg:text-left lg:text-5xl">
              Learning Doesn't Have To Be Hard
            </h3>
          </div>
          
          <div className="flex flex-col items-center lg:w-1/2 lg:pl-4">
            <a
              href="https://app.learnrithm.com"
              className="rounded-full flex gap-2 items-center bg-black hover:bg-blue-600 focus:bg-cyan-500 py-3 px-6 text-white transition-colors duration-200 mb-8"
              target="_blank"
              rel="noopener noreferrer"
            >
              Try Learnrithm AI Now
            </a>
            
            {/* Links section with border */}
            <div className="border-t border-gray-200 pt-6 w-full max-w-xs">
              <div className="flex flex-col items-center gap-4">
                <a href="https://learnrithm.com/privacypolicy" className="hover:underline">
                  Privacy Policy
                </a>
                <a href="https://learnrithm.com/refundpolicy" className="hover:underline">
                  Refund Policy
                </a>
                <a href="https://learnrithm.com/requestdeletion.html" className="hover:underline">
                  Request Deletion Of Data
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Copyright section */}
        <div className="border-t border-gray-200 py-8 text-center text-sm text-gray-500">
          &copy; {currentYear} Learnrithm AI. All rights reserved.
        </div>
      </div>
    </footer>
  );
}