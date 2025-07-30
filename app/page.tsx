import Link from "next/link";

export default function Home() {
  return (
    <div className='min-h-screen bg-[#F5F5F5]'>
      {/* Navigation */}
      <nav className='neo-nav'>
        <div className='neo-container'>
          <div className='neo-flex-between'>
            <Link href='/' className='neo-nav-link neo-heading-h3'>
              NagarPalika
            </Link>
            <div className='neo-flex'>
              <Link
                href='/user/dashboard'
                className='neo-button-primary neo-mr-md'
              >
                <svg
                  className='w-4 h-4 mr-2'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
                  />
                </svg>
                Citizen Portal
              </Link>
              <Link href='/admin/login' className='neo-button-primary'>
                <svg
                  className='w-4 h-4 mr-2'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
                  />
                </svg>
                Admin Login
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className='neo-hero'>
        <div className='neo-container'>
          <div className='neo-hero-content'>
            <h1 className='neo-heading-h1 neo-mb-md text-[#222222]'>
              Modern Citizen Authority Platform
            </h1>
            <p className='neo-body neo-mb-lg text-[#111111] text-xl'>
              Connect citizens with authorities for efficient complaint
              management and civic improvement
            </p>
            <div className='neo-flex'>
              <Link href='/user/complaints/new' className='neo-button-primary'>
                File Complaint
              </Link>
              <Link href='/user/dashboard' className='neo-button-secondary'>
                View Dashboard
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Features Grid */}
      <section className='neo-section'>
        <div className='neo-container'>
          <div className='neo-text-center neo-mb-xl'>
            <h2 className='neo-heading-h2 neo-mb-md text-[#222222]'>
              Platform Features
            </h2>
            <p className='neo-body text-[#111111] text-lg'>
              Everything you need for effective civic engagement
            </p>
          </div>

          <div className='neo-grid neo-grid-3'>
            {/* Feature Card 1 - Real-time Tracking */}
            <div className='neo-card neo-feature-card group hover:scale-105 transition-transform duration-300'>
              <div className='neo-feature-number group-hover:text-[#222222] transition-colors duration-300'>
                01.
              </div>
              <div className='neo-mt-lg'>
                <div className='w-16 h-16 bg-[#FFD84C] border-4 border-[#222222] mb-4 flex items-center justify-center group-hover:bg-[#222222] group-hover:text-[#FFD84C] transition-all duration-300'>
                  <svg
                    className='w-8 h-8'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
                    />
                  </svg>
                </div>
                <h3 className='neo-card-title'>Real-time Tracking</h3>
                <p className='neo-card-body'>
                  Track your complaints from submission to resolution with
                  real-time status updates and instant notifications.
                </p>
                <div className='neo-card-footer'>
                  <span className='neo-label text-[#222222]'>Live Updates</span>
                </div>
              </div>
            </div>

            {/* Feature Card 2 - Department Assignment */}
            <div className='neo-card neo-feature-card group hover:scale-105 transition-transform duration-300'>
              <div className='neo-feature-number group-hover:text-[#222222] transition-colors duration-300'>
                02.
              </div>
              <div className='neo-mt-lg'>
                <div className='w-16 h-16 bg-[#FFD84C] border-4 border-[#222222] mb-4 flex items-center justify-center group-hover:bg-[#222222] group-hover:text-[#FFD84C] transition-all duration-300'>
                  <svg
                    className='w-8 h-8'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
                    />
                  </svg>
                </div>
                <h3 className='neo-card-title'>Smart Assignment</h3>
                <p className='neo-card-body'>
                  AI-powered routing ensures your complaint reaches the right
                  department and authority for faster resolution.
                </p>
                <div className='neo-card-footer'>
                  <span className='neo-label text-[#222222]'>AI Routing</span>
                </div>
              </div>
            </div>

            {/* Feature Card 3 - Photo Evidence */}
            <div className='neo-card neo-feature-card group hover:scale-105 transition-transform duration-300'>
              <div className='neo-feature-number group-hover:text-[#222222] transition-colors duration-300'>
                03.
              </div>
              <div className='neo-mt-lg'>
                <div className='w-16 h-16 bg-[#FFD84C] border-4 border-[#222222] mb-4 flex items-center justify-center group-hover:bg-[#222222] group-hover:text-[#FFD84C] transition-all duration-300'>
                  <svg
                    className='w-8 h-8'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z'
                    />
                  </svg>
                </div>
                <h3 className='neo-card-title'>Photo Evidence</h3>
                <p className='neo-card-body'>
                  Upload high-quality photos and documents to provide clear
                  evidence and accelerate complaint resolution.
                </p>
                <div className='neo-card-footer'>
                  <span className='neo-label text-[#222222]'>Visual Proof</span>
                </div>
              </div>
            </div>

            {/* Feature Card 4 - Priority System */}
            <div className='neo-card neo-feature-card group hover:scale-105 transition-transform duration-300'>
              <div className='neo-feature-number group-hover:text-[#222222] transition-colors duration-300'>
                04.
              </div>
              <div className='neo-mt-lg'>
                <div className='w-16 h-16 bg-[#FFD84C] border-4 border-[#222222] mb-4 flex items-center justify-center group-hover:bg-[#222222] group-hover:text-[#FFD84C] transition-all duration-300'>
                  <svg
                    className='w-8 h-8'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M13 10V3L4 14h7v7l9-11h-7z'
                    />
                  </svg>
                </div>
                <h3 className='neo-card-title'>Priority System</h3>
                <p className='neo-card-body'>
                  Urgent issues are automatically flagged and prioritized for
                  immediate attention and faster response times.
                </p>
                <div className='neo-card-footer'>
                  <span className='neo-label text-[#222222]'>
                    Smart Priority
                  </span>
                </div>
              </div>
            </div>

            {/* Feature Card 5 - Analytics Dashboard */}
            <div className='neo-card neo-feature-card group hover:scale-105 transition-transform duration-300'>
              <div className='neo-feature-number group-hover:text-[#222222] transition-colors duration-300'>
                05.
              </div>
              <div className='neo-mt-lg'>
                <div className='w-16 h-16 bg-[#FFD84C] border-4 border-[#222222] mb-4 flex items-center justify-center group-hover:bg-[#222222] group-hover:text-[#FFD84C] transition-all duration-300'>
                  <svg
                    className='w-8 h-8'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
                    />
                  </svg>
                </div>
                <h3 className='neo-card-title'>Analytics Dashboard</h3>
                <p className='neo-card-body'>
                  Comprehensive analytics help authorities identify patterns,
                  track performance, and improve service delivery.
                </p>
                <div className='neo-card-footer'>
                  <span className='neo-label text-[#222222]'>
                    Data Insights
                  </span>
                </div>
              </div>
            </div>

            {/* Feature Card 6 - Mobile Responsive */}
            <div className='neo-card neo-feature-card group hover:scale-105 transition-transform duration-300'>
              <div className='neo-feature-number group-hover:text-[#222222] transition-colors duration-300'>
                06.
              </div>
              <div className='neo-mt-lg'>
                <div className='w-16 h-16 bg-[#FFD84C] border-4 border-[#222222] mb-4 flex items-center justify-center group-hover:bg-[#222222] group-hover:text-[#FFD84C] transition-all duration-300'>
                  <svg
                    className='w-8 h-8'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z'
                    />
                  </svg>
                </div>
                <h3 className='neo-card-title'>Mobile Responsive</h3>
                <p className='neo-card-body'>
                  Access the platform from any device with our fully responsive
                  design and optimized mobile experience.
                </p>
                <div className='neo-card-footer'>
                  <span className='neo-label text-[#222222]'>Any Device</span>
                </div>
              </div>
            </div>
          </div>

          {/* Feature Stats */}
          <div className='neo-mt-xl'>
            <div
              className='neo-grid'
              style={{
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "var(--spacing-lg)",
              }}
            >
              <div className='neo-card neo-text-center'>
                <div className='neo-heading-h3 text-[#FFD84C] neo-mb-sm'>
                  10K+
                </div>
                <div className='neo-subheading text-[#222222]'>
                  Complaints Resolved
                </div>
              </div>
              <div className='neo-card neo-text-center'>
                <div className='neo-heading-h3 text-[#FFD84C] neo-mb-sm'>
                  24hrs
                </div>
                <div className='neo-subheading text-[#222222]'>
                  Average Response Time
                </div>
              </div>
              <div className='neo-card neo-text-center'>
                <div className='neo-heading-h3 text-[#FFD84C] neo-mb-sm'>
                  95%
                </div>
                <div className='neo-subheading text-[#222222]'>
                  Satisfaction Rate
                </div>
              </div>
              <div className='neo-card neo-text-center'>
                <div className='neo-heading-h3 text-[#FFD84C] neo-mb-sm'>
                  50+
                </div>
                <div className='neo-subheading text-[#222222]'>
                  Departments Connected
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className='neo-section'>
        <div className='neo-container'>
          <div
            className='neo-grid'
            style={{ gridTemplateColumns: "1fr 1fr", gap: "var(--spacing-xl)" }}
          >
            {/* Image Placeholder */}
            <div
              className='neo-card'
              style={{
                minHeight: "400px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div className='neo-text-center'>
                <div className='neo-heading-h3 neo-mb-sm text-[#222222]'>
                  Image Placeholder
                </div>
                <p className='neo-body text-[#111111]'>
                  Geometric shape overlay
                </p>
              </div>
            </div>

            {/* Content */}
            <div>
              <h2 className='neo-heading-h2 neo-mb-md text-[#222222]'>
                About NagarPalika
              </h2>
              <p className='neo-body neo-mb-md text-[#111111]'>
                NagarPalika is a modern civic engagement platform designed to
                bridge the gap between citizens and local authorities. Our
                mission is to create transparent, efficient, and responsive
                governance through technology.
              </p>
              <p className='neo-body neo-mb-lg text-[#111111]'>
                Built with cutting-edge technology and user-centered design, we
                provide a seamless experience for both citizens filing
                complaints and authorities managing civic issues.
              </p>
              <Link href='/user/dashboard' className='neo-button-primary'>
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className='neo-section'>
        <div className='neo-container'>
          <div className='neo-text-center neo-mb-xl'>
            <h2 className='neo-heading-h2 neo-mb-md text-[#222222]'>
              What Citizens Say
            </h2>
          </div>

          <div
            className='neo-grid'
            style={{
              gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
              gap: "var(--spacing-lg)",
            }}
          >
            {/* Testimonial 1 */}
            <div className='neo-card'>
              <div className='neo-card-body neo-mb-md'>
                "The platform made it incredibly easy to report a broken
                streetlight. It was fixed within 48 hours!"
              </div>
              <div className='neo-card-footer'>
                <div className='neo-subheading text-[#222222]'>
                  Rahul Sharma
                </div>
                <div className='neo-caption text-[#222222]'>
                  Resident, Sector 15
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className='neo-card'>
              <div className='neo-card-body neo-mb-md'>
                "Transparent tracking and regular updates kept me informed
                throughout the entire process."
              </div>
              <div className='neo-card-footer'>
                <div className='neo-subheading text-[#222222]'>Priya Patel</div>
                <div className='neo-caption text-[#222222]'>Business Owner</div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className='neo-card'>
              <div className='neo-card-body neo-mb-md'>
                "As an authority, the dashboard helps me manage complaints
                efficiently and improve response times."
              </div>
              <div className='neo-card-footer'>
                <div className='neo-subheading text-[#222222]'>Amit Kumar</div>
                <div className='neo-caption text-[#222222]'>
                  Municipal Engineer
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='neo-section'>
        <div className='neo-container'>
          <div className='neo-card neo-text-center'>
            <h2 className='neo-heading-h2 neo-mb-md text-[#222222]'>
              Ready to Get Started?
            </h2>
            <p className='neo-body neo-mb-lg text-[#111111]'>
              Join thousands of citizens who are already using NagarPalika to
              improve their communities.
            </p>
            <div className='neo-flex' style={{ justifyContent: "center" }}>
              <Link href='/user/complaints/new' className='neo-button-primary'>
                File Your First Complaint
              </Link>
              <Link href='/admin/login' className='neo-button-secondary'>
                Authority Login
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className='neo-footer'>
        <div className='neo-container'>
          <div
            className='neo-grid'
            style={{
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "var(--spacing-lg)",
            }}
          >
            {/* Company Info */}
            <div>
              <h3 className='neo-subheading neo-mb-md text-[#FFD84C]'>
                NagarPalika
              </h3>
              <p className='neo-body neo-mb-md text-[#EEEEEE]'>
                Modern civic engagement platform connecting citizens with
                authorities for better governance.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className='neo-subheading neo-mb-md text-[#FFD84C]'>
                Quick Links
              </h4>
              <ul className='space-y-2'>
                <li>
                  <Link href='/user/dashboard' className='neo-footer-link'>
                    Citizen Dashboard
                  </Link>
                </li>
                <li>
                  <Link href='/user/complaints/new' className='neo-footer-link'>
                    File Complaint
                  </Link>
                </li>
                <li>
                  <Link href='/admin/login' className='neo-footer-link'>
                    Admin Portal
                  </Link>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className='neo-subheading neo-mb-md text-[#FFD84C]'>
                Support
              </h4>
              <ul className='space-y-2'>
                <li>
                  <Link href='#' className='neo-footer-link'>
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href='#' className='neo-footer-link'>
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href='#' className='neo-footer-link'>
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>

            {/* Departments */}
            <div>
              <h4 className='neo-subheading neo-mb-md text-[#FFD84C]'>
                Departments
              </h4>
              <ul className='space-y-2'>
                <li>
                  <Link href='#' className='neo-footer-link'>
                    Roads & Infrastructure
                  </Link>
                </li>
                <li>
                  <Link href='#' className='neo-footer-link'>
                    Water Supply
                  </Link>
                </li>
                <li>
                  <Link href='#' className='neo-footer-link'>
                    Sanitation
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className='neo-text-center neo-mt-lg pt-8 border-t border-[#444444]'>
            <p className='neo-caption text-[#EEEEEE]'>
              © 2024 NagarPalika. All rights reserved. Built with modern
              technology for better governance.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
