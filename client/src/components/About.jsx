import React from 'react'

const About = () => {
  return (
    <div className = "h-dvh text-white">
      {/* About Us section */}
      <div className="about-us-section bg-yellow-500 p-8">
        <h2 className="text-4xl font-bold mb-6">About Us</h2>
        <p className="text-lg mb-6">
          Founded in August 2024, MTC at Georgia Tech is committed to uplifting the local Muslim community through technology. We execute impactful technical projects for Muslim-owned businesses, organizations, and masjids. Our initiatives also include empowering the youth with tech skills and fostering a nurturing environment that supports spiritual and professional development.
        </p>
        <p className="text-lg mb-6">
          Our community comprises hundreds of dedicated Muslim college students and working professionals nationwide.
        </p>
        <p className="text-lg font-semibold">Join MTC now and be part of this vibrant and growing network.</p>
      </div>

      {/* Image section */}
      <div className="image-section grid grid-cols-2 gap-6 p-8 bg-gray-900">
        <div className="bg-gray-700 h-56 rounded-lg flex items-center justify-center">
          <span className="text-gray-300">Image Placeholder</span>
        </div>
        <div className="bg-gray-700 h-56 rounded-lg flex items-center justify-center">
          <span className="text-gray-300">Image Placeholder</span>
        </div>
      </div>

      {/* Projects section */}
      <div className="content-section bg-yellow-500 p-8">
        <h2 className="text-4xl font-bold mb-6">Our Projects</h2>
        <p className="text-lg mb-8">
          We are dedicated to making a meaningful impact through technology and community engagement.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">Technical Projects</h3>
            <p>Collaborating with local Muslim-owned businesses and organizations to deliver tailored technical solutions.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">Youth Tech Education</h3>
            <p>Equipping young Muslims with essential tech skills to prepare them for future success.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">Community Building</h3>
            <p>Creating a sense of belonging through activities that blend spiritual and professional growth.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
