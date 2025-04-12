import { useState } from 'react'

function App() {
  const [openFaq, setOpenFaq] = useState(null);

  // Add smooth scroll handler
  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80; // Account for fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      {/* Navigation - Enhanced */}
      <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col items-center justify-center space-y-4 md:space-y-0 md:flex-row md:justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <div className="relative group cursor-pointer" onClick={(e) => handleSmoothScroll(e, 'hero')}>
                {/* <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-200"></div> */}
                <div className="relative text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-200">
                  SchoolSync
                </div>
              </div>
            </div>

            {/* Center Navigation */}
            <div className="flex items-center space-x-1">
              {[
                { name: 'Features', href: 'features' },
                { name: 'Benefits', href: 'benefits' },
                { name: 'Testimonials', href: 'testimonials' },
                { name: 'Contact', href: 'contact' }
              ].map((item) => (
                <a
                  key={item.name}
                  href={`#${item.href}`}
                  onClick={(e) => handleSmoothScroll(e, item.href)}
                  className="relative px-4 py-2 group text-gray-600 hover:text-blue-600 transition-colors duration-200"
                >
                  <span className="relative z-10">{item.name}</span>
                  <div className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-600 transform scale-x-0 origin-left transition-transform duration-200 group-hover:scale-x-100"></div>
                </a>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex items-center space-x-4">
              <button className="px-6 py-2 text-blue-600 hover:text-blue-700 transition-colors duration-200">
                Sign In
              </button>
              <button className="relative group">
                {/* <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full blur opacity-50 group-hover:opacity-75 transition duration-200"></div> */}
                <div className="relative px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-200 group-hover:shadow-lg group-hover:-translate-y-0.5">
                  Book Demo
                </div>
              </button>
            </div>
          </div>

          {/* Mobile Menu Button - Add if needed */}
          <div className="md:hidden absolute right-4 top-4">
            <button className="p-2 text-gray-600 hover:text-blue-600 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative">
        {/* Subtle background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-transparent"></div>

        <div className="max-w-7xl mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Main Content */}
            <div className="space-y-8">
              <div className="relative">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-gray-900">
                  Transform How Your
                  <span className="block text-blue-600">
                    School Operates
                  </span>
                </h1>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                All-in-one School Management System to streamline admin, teachers, students, and parents under one roof.
              </p>

              {/* Buttons and Stats */}
              <div className="space-y-12">
                <div className="flex space-x-6">
                  <button className="bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-all hover:shadow-lg text-lg font-medium">
                    Book a Free Demo
                  </button>
                  <button className="bg-white text-blue-600 px-8 py-4 rounded-full hover:bg-blue-50 transition-all border border-blue-100 text-lg font-medium">
                    Learn More
                  </button>
                </div>
                <div className="flex items-center space-x-16">
                  <div>
                    <div className="text-4xl font-bold text-blue-600">500+</div>
                    <div className="text-gray-600 font-medium">Schools</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-blue-600">50k+</div>
                    <div className="text-gray-600 font-medium">Students</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-blue-600">99%</div>
                    <div className="text-gray-600 font-medium">Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="relative bg-white rounded-2xl shadow-lg p-6">
                <img 
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                  alt="School Management Dashboard"
                  className="rounded-xl w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything you need to manage your school
            </h2>
            <p className="text-gray-600">
              Comprehensive features designed to streamline every aspect of school management
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Student Information",
                description: "Centralized database for student profiles, academic records, and more"
              },
              {
                title: "Online Fee Payment",
                description: "Secure payment gateway with automated receipts and reports"
              },
              {
                title: "Attendance Tracking",
                description: "Real-time attendance monitoring with automated notifications"
              },
              {
                title: "Exam Management",
                description: "Complete exam lifecycle from scheduling to report card generation"
              },
              {
                title: "Class Scheduling",
                description: "Smart timetable management with conflict resolution"
              },
              {
                title: "Communication Hub",
                description: "Seamless interaction between teachers, parents, and administration"
              }
            ].map((feature, index) => (
              <div key={index} className="group p-8 rounded-2xl bg-gradient-to-b from-white to-blue-50 border border-blue-100 hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="w-12 h-12 bg-blue-600/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600/20 transition-colors">
                  <div className="w-6 h-6 bg-blue-600 rounded-lg"></div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-gradient-to-b from-blue-50 to-white scroll-mt-20 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-100 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-blue-200 rounded-full filter blur-3xl opacity-20 animate-pulse delay-300"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Schools Choose
              <span className="text-blue-600"> SchoolSync</span>
            </h2>
            <p className="text-gray-600">
              Experience the advantages that make SchoolSync the preferred choice for educational institutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                ),
                title: "Easy to Use Interface",
                description: "Intuitive design that requires minimal training, making it accessible for all staff members and parents.",
                features: ["User-friendly dashboard", "Mobile responsive", "Quick setup"]
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
                title: "Enhanced Security",
                description: "Bank-grade security measures to protect sensitive school and student data.",
                features: ["End-to-end encryption", "Regular backups", "Access control"]
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                title: "Time-Saving Automation",
                description: "Automate repetitive tasks and streamline administrative processes.",
                features: ["Automated reports", "Scheduled tasks", "Batch processing"]
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                ),
                title: "Seamless Communication",
                description: "Foster better collaboration between administrators, teachers, and parents.",
                features: ["Real-time messaging", "Announcement system", "Parent portal"]
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                ),
                title: "Comprehensive Analytics",
                description: "Make data-driven decisions with detailed insights and reports.",
                features: ["Performance tracking", "Attendance analytics", "Financial reports"]
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: "Cost-Effective Solution",
                description: "Affordable pricing plans that provide excellent value for educational institutions.",
                features: ["Flexible plans", "No hidden fees", "Free updates"]
              }
            ].map((benefit, index) => (
              <div 
                key={index}
                className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-blue-100/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative">
                  <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4">
                    {benefit.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {benefit.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600">
                        <svg className="w-4 h-4 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-lg text-gray-600">
              See how leading institutions are transforming education with SchoolSync
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Featured Success Story */}
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 to-blue-800 p-1">
              <div className="bg-white rounded-[1.4rem] p-8 h-full">
                <div className="flex items-center gap-4 mb-6">
                  <img 
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                    alt="International School"
                    className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-lg"
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">International School</h3>
                    <p className="text-gray-600">Singapore</p>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-bold text-blue-600">85%</span>
                    <span className="text-lg text-gray-600">Reduction in Administrative Work</span>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    "SchoolSync has revolutionized how we manage our daily operations. The automated systems have freed up our staff to focus on what matters most - our students' education."
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm">Automated Attendance</span>
                    <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm">Digital Records</span>
                    <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm">Parent Communication</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Success Stats Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                {
                  stat: "100%",
                  title: "Digital Transformation",
                  description: "Complete shift to paperless operations",
                  color: "from-green-500 to-emerald-700"
                },
                {
                  stat: "95%",
                  title: "Parent Satisfaction",
                  description: "Improved communication and transparency",
                  color: "from-purple-500 to-purple-700"
                },
                {
                  stat: "60%",
                  title: "Cost Reduction",
                  description: "Decreased operational expenses",
                  color: "from-orange-500 to-red-700"
                },
                {
                  stat: "24/7",
                  title: "Accessibility",
                  description: "Round-the-clock system availability",
                  color: "from-cyan-500 to-blue-700"
                }
              ].map((item, index) => (
                <div 
                  key={index}
                  className="group relative overflow-hidden rounded-2xl bg-gradient-to-br p-1 hover:p-1.5 transition-all duration-300"
                  style={{ backgroundImage: `linear-gradient(to bottom right, ${item.color.split(' ')[1]}, ${item.color.split(' ')[3]})` }}
                >
                  <div className="bg-white rounded-[1.4rem] p-6 h-full">
                    <div className="space-y-4">
                      <div className="text-4xl font-bold" style={{ color: item.color.split(' ')[3] }}>
                        {item.stat}
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900">{item.title}</h4>
                        <p className="text-gray-600 mt-1">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center">
            <a 
              href="#contact" 
              onClick={(e) => handleSmoothScroll(e, 'contact')}
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium group"
            >
              <span>View More Success Stories</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-gradient-to-b from-white to-blue-50 scroll-mt-20 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-blue-600 font-semibold mb-2 block">TESTIMONIALS</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Trusted by Leading
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent"> Educators</span>
            </h2>
            <p className="text-xl text-gray-600">
              Discover why school leaders choose SchoolSync for their institutions
            </p>
          </div>

          {/* Featured Testimonial */}
          <div className="mb-20">
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/3">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl transform rotate-6 scale-105 opacity-20"></div>
                    <img 
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                      alt="Dr. James Wilson"
                      className="relative rounded-2xl w-full h-72 object-cover"
                    />
                  </div>
                </div>
                <div className="md:w-2/3 space-y-6">
                  <div className="flex items-center space-x-2 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <blockquote className="text-2xl font-medium text-gray-900 italic">
                    "SchoolSync has completely transformed how we manage our institution. The efficiency gains are remarkable, and our staff couldn't be happier with the streamlined processes."
                  </blockquote>
                  <div>
                    <p className="text-xl font-semibold text-gray-900">Dr. James Wilson</p>
                    <p className="text-blue-600">Principal, International Academy</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "The parent-teacher communication feature has brought our school community closer than ever before. We've seen a 90% increase in parent engagement.",
                author: "Sarah Chen",
                role: "School Administrator",
                image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                rating: 5,
                color: "from-green-600 to-emerald-800"
              },
              {
                quote: "Implementation was smooth and the support team is exceptional. They helped us transition seamlessly to digital management.",
                author: "Michael Brown",
                role: "IT Director",
                image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                rating: 5,
                color: "from-blue-600 to-blue-800"
              },
              {
                quote: "The analytics and reporting features have given us invaluable insights into our school's performance metrics.",
                author: "Emily Rodriguez",
                role: "Academic Coordinator",
                image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                rating: 5,
                color: "from-purple-600 to-purple-800"
              }
            ].map((testimonial, index) => (
              <div 
                key={index} 
                className="group relative perspective-1000"
              >
                <div className="relative bg-white rounded-2xl p-8 shadow-lg transition-all duration-500 transform group-hover:scale-[1.02] group-hover:-translate-y-1">
                  <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl"
                       style={{ backgroundImage: `linear-gradient(to right, ${testimonial.color.split(' ')[1]}, ${testimonial.color.split(' ')[3]})` }}>
                  </div>
                  
                  <div className="relative">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r rounded-full transform rotate-6 scale-105 opacity-20"
                             style={{ backgroundImage: `linear-gradient(to right, ${testimonial.color.split(' ')[1]}, ${testimonial.color.split(' ')[3]})` }}>
                        </div>
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.author}
                          className="relative w-16 h-16 rounded-full object-cover border-2 border-white shadow-lg"
                        />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{testimonial.author}</div>
                        <div className="text-sm" style={{ color: testimonial.color.split(' ')[1] }}>{testimonial.role}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    
                    <blockquote className="text-gray-700 leading-relaxed mb-6">"{testimonial.quote}"</blockquote>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                        </svg>
                        <span>Verified User</span>
                      </div>
                      <div className="w-8 h-8 bg-gray-50 rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center">
            <a 
              href="#contact"
              onClick={(e) => handleSmoothScroll(e, 'contact')}
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium group"
            >
              <span>Read More Success Stories</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>

        <style jsx>{`
          @keyframes blob {
            0% { transform: translate(0px, 0px) scale(1); }
            33% { transform: translate(30px, -50px) scale(1.1); }
            66% { transform: translate(-20px, 20px) scale(0.9); }
            100% { transform: translate(0px, 0px) scale(1); }
          }
          .animate-blob {
            animation: blob 7s infinite;
          }
          .animation-delay-2000 {
            animation-delay: 2s;
          }
          .animation-delay-4000 {
            animation-delay: 4s;
          }
          .perspective-1000 {
            perspective: 1000px;
          }
        `}</style>
      </section>

      {/* FAQ Section - Enhanced */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
        {/* Animated background blobs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-100 to-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-100 to-purple-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-pink-100 to-pink-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20">
            <span className="text-blue-600 font-semibold mb-2 block">GOT QUESTIONS?</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent"> Questions</span>
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about SchoolSync and how it can transform your institution
            </p>
          </div>

          <div className="grid gap-6">
            {[
              {
                question: "How long does it take to implement SchoolSync?",
                answer: "Typically, schools can go live with SchoolSync within 2-4 weeks, depending on the size and complexity of your institution. Our dedicated implementation team works closely with your staff to ensure a smooth transition.",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )
              },
              {
                question: "Is my school's data secure with SchoolSync?",
                answer: "Yes, we use bank-grade encryption and follow strict data protection protocols to ensure your school's information is completely secure. We implement multiple layers of security including end-to-end encryption, regular security audits, and compliance with international data protection standards.",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                )
              },
              {
                question: "Can SchoolSync be customized for our school?",
                answer: "Absolutely! SchoolSync is highly customizable to meet your school's specific needs and requirements. From custom branding to specialized workflows, our platform can be tailored to match your unique processes and preferences.",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                  </svg>
                )
              },
              {
                question: "What kind of support do you provide?",
                answer: "We offer comprehensive support including 24/7 technical assistance, regular training sessions, and a dedicated account manager for every school. Our support team is always available via chat, email, or phone to help you make the most of SchoolSync.",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                )
              },
              {
                question: "How do updates and new features work?",
                answer: "SchoolSync is continuously updated with new features and improvements based on user feedback and educational trends. All updates are automatically rolled out to our cloud platform, ensuring you always have access to the latest features without any manual intervention.",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                )
              }
            ].map((faq, index) => (
              <div 
                key={index} 
                className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full p-6 text-left focus:outline-none"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-300 ${openFaq === index ? 'bg-blue-600 text-white' : 'bg-blue-50 text-blue-600'}`}>
                        {faq.icon}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900">{faq.question}</h3>
                    </div>
                    <div className={`ml-4 flex-shrink-0 transform transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`}>
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </button>
                <div 
                  className={`transition-all duration-500 ease-in-out ${
                    openFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="p-6 pt-0 text-gray-600 border-t border-gray-100">
                    <p className="leading-relaxed">{faq.answer}</p>
                    <div className="mt-4 flex items-center gap-4">
                      <button className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1 group">
                        <span>Learn More</span>
                        <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                      <div className="h-4 w-px bg-gray-300"></div>
                      <button className="text-gray-500 hover:text-gray-700 flex items-center gap-1 group">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Contact Support</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Contact Support Section */}
          <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-center relative overflow-hidden">
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-blue-600 opacity-50"></div>
              <div className="absolute inset-0" style={{ 
                backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(255,255,255,0.2) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(255,255,255,0.2) 0%, transparent 50%)'
              }}></div>
            </div>
            <div className="relative">
              <h3 className="text-2xl font-bold text-white mb-4">Still have questions?</h3>
              <p className="text-blue-100 mb-8">Our support team is here to help you 24/7</p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="bg-white text-blue-600 px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors duration-300 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  <span>Live Chat</span>
                </button>
                <button className="bg-white/10 text-white px-6 py-3 rounded-xl hover:bg-white/20 transition-colors duration-300 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>Email Support</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-white relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 -right-40 w-80 h-80 bg-blue-50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="bg-white border border-blue-100 rounded-3xl p-8 md:p-12 shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              {/* Left Content */}
              <div className="flex-1 space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Ready to Transform Your
                  <span className="block text-blue-600 mt-1">School Management?</span>
                </h2>
                <p className="text-gray-600 text-lg">
                  Join hundreds of schools already using SchoolSync to streamline their operations.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 text-gray-600">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Free 30-day trial</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>No credit card required</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Full feature access</span>
                  </div>
                </div>
              </div>

              {/* Right Form */}
              <div className="flex-1 w-full">
                <form className="space-y-4">
                  <div>
                    <input 
                      type="text" 
                      placeholder="School Name" 
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all duration-200"
                    />
                  </div>
                  <div>
                    <input 
                      type="email" 
                      placeholder="Work Email" 
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all duration-200"
                    />
                  </div>
                  <div>
                    <input 
                      type="tel" 
                      placeholder="Phone Number" 
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all duration-200"
                    />
                  </div>
                  <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transform hover:-translate-y-0.5 transition-all duration-200 font-medium">
                    Get Started
                  </button>
                  <p className="text-center text-sm text-gray-500">
                    By signing up, you agree to our{' '}
                    <a href="#" className="text-blue-600 hover:underline">Terms</a>
                    {' '}and{' '}
                    <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes blob {
            0% { transform: translate(0px, 0px) scale(1); }
            33% { transform: translate(30px, -50px) scale(1.1); }
            66% { transform: translate(-20px, 20px) scale(0.9); }
            100% { transform: translate(0px, 0px) scale(1); }
          }
          .animate-blob {
            animation: blob 7s infinite;
          }
          .animation-delay-2000 {
            animation-delay: 2s;
          }
          .animation-delay-4000 {
            animation-delay: 4s;
          }
        `}</style>
      </section>

      {/* Trust Badges Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-semibold text-gray-900">Trusted by Leading Educational Institutions</h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            {[
              {
                name: "ISO Certified",
                icon: (
                  <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                )
              },
              {
                name: "GDPR Compliant",
                icon: (
                  <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                )
              },
              {
                name: "Cloud Security Alliance",
                icon: (
                  <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                )
              },
              {
                name: "Education Standards",
                icon: (
                  <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5zm0 0L3 9m0 0v11m0-11l9 5" />
                  </svg>
                )
              }
            ].map((badge, index) => (
              <div key={index} className="group flex flex-col items-center">
                <div className="w-24 h-24 rounded-xl bg-gray-50 flex items-center justify-center group-hover:bg-blue-50 transition-colors duration-300">
                  {badge.icon}
                </div>
                <p className="mt-4 text-sm font-medium text-gray-600">{badge.name}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 flex flex-wrap justify-center gap-8 items-center opacity-50">
            {[
              "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png",
              "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/2560px-IBM_logo.svg.png",
              "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/2560px-Microsoft_logo_%282012%29.svg.png",
              "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png"
            ].map((logo, index) => (
              <img 
                key={index}
                src={logo}
                alt="Partner Logo"
                className="h-8 object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-white to-blue-50 border-t border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand Section */}
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="text-3xl font-bold text-blue-600">
                  SchoolSync
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Transforming school management for the digital age. Join us in revolutionizing education administration.
              </p>
              <div className="flex items-center space-x-4">
                <a href="#" className="group">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                    <svg className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                  </div>
                </a>
                <a href="#" className="group">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                    <svg className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </div>
                </a>
                <a href="#" className="group">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                    <svg className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.237 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.08.734-2.599 1M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                </a>
              </div>
            </div>

            {/* Quick Links Sections */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Product</h3>
              <ul className="space-y-4">
                {['Features', 'Pricing', 'Security', 'Updates'].map((item) => (
                  <li key={item}>
                    <a href="#" className="group flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-300">
                      <span className="relative">
                        {item}
                        <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                      </span>
                      <svg className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Company</h3>
              <ul className="space-y-4">
                {['About', 'Careers', 'Contact', 'Blog'].map((item) => (
                  <li key={item}>
                    <a href="#" className="group flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-300">
                      <span className="relative">
                        {item}
                        <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                      </span>
                      <svg className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter Section */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-900">Stay Updated</h3>
              <p className="text-gray-600">Subscribe to our newsletter for the latest updates and features.</p>
              <div className="relative group">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 focus:outline-none focus:border-blue-600 transition-colors duration-300"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-16 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-600">
              © 2024 SchoolSync. All rights reserved.
            </div>
            <div className="flex items-center space-x-6">
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">Terms of Service</a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </div>
  )
}

export default App
