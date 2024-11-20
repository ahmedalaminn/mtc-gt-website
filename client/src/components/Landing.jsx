import React from 'react';

const Landing = () => {
  return (
    <div className="h-dvh flex flex-col items-center bg-gray-900 text-white">
      <div className="flex-1 flex items-center justify-center">
        <div className="hero text-center">
          <h1 className="text-6xl font-extrabold">Muslim Tech Collaborative @ Georgia Tech</h1>
          <p className="text-2xl mt-6 font-light">Building the ummah by building for the ummah.</p>
        </div>
      </div>

      <div className="hero text-center mt-auto pb-32">
        <h3 className="text-3xl font-bold">Subscribe to our newsletter</h3>
        <p className="text-lg mt-3 font-light text-gray-300">Stay up to date on our latest projects and events</p>
        
        <form 
          className="w-full max-w-3xl mt-8 mx-auto px-4"
          onSubmit={(e) => {
            e.preventDefault();
            // Add your form submission logic here
          }}
        >
          <div className="flex w-full rounded-full overflow-hidden border border-gray-600 bg-transparent focus-within:border-yellow-400 transition-colors">
            <input
              type="email"
              placeholder="name@email.com"
              required
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              className="w-full px-6 py-4 bg-transparent text-gray-300 placeholder-gray-500 focus:outline-none peer"
              onInvalid={(e) => {
                e.target.setCustomValidity('')
                if (e.target.validity.valueMissing) {
                  e.target.setCustomValidity('Please enter your email address')
                } else if (e.target.validity.patternMismatch) {
                  e.target.setCustomValidity('Please enter a valid email address')
                }
              }}
              onInput={(e) => e.target.setCustomValidity('')}
            />
            <button
              type="submit"
              className="whitespace-nowrap px-8 py-4 bg-yellow-400 hover:bg-yellow-500 text-black font-medium rounded-full transition-colors"
            >
              Join Newsletter
            </button>
          </div>
          <div className="text-sm text-red-400 mt-2 h-5" aria-live="polite">
            {/* Error message will appear here via browser validation */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Landing;

