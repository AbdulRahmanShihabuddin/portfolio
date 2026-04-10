import './App.css'
import PillNav from './components/PillNav'

function App() {
  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <div className="selection:bg-primary selection:text-on-primary">
      {/* TopNavBar */}
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center w-full pointer-events-none">
        <div className="pointer-events-auto">
          <PillNav
            items={navItems}
            activeHref="#home"
            className="mt-6"
            ease="power3.easeOut"
            baseColor="#b89fff"
            pillColor="#1a1919"
            hoveredPillTextColor="#000000"
            pillTextColor="#ffffff"
            initialLoadAnimation={true}
          />
        </div>
      </div>
      <main>
        {/* Hero Section */}
        <section className="min-h-screen pt-40 px-6 md:px-12 flex flex-col justify-center max-w-7xl mx-auto" id="home">
          <div className="editorial-grid gap-y-12">
            <div className="col-span-12 md:col-span-10">
              <h1
                className="text-[clamp(3rem,8vw,6rem)] font-headline font-extrabold leading-[0.9] tracking-tighter text-white">
                ABDUL RAHMAN <br />
                <span className="text-primary-fixed">SHIHABUDDIN</span>
              </h1>
            </div>
            <div className="col-span-12 md:col-start-6 md:col-span-7 self-end">
              <p className="text-xl md:text-2xl text-on-surface-variant font-light leading-relaxed">
                Full-stack Software Engineering student with hands-on experience building production-grade
                applications. Seeking Software Engineering Internship opportunities in product-driven teams.
              </p>

            </div>
          </div>
          {/* Ambient Glow */}
          <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10">
          </div>
        </section>
        {/* Skills Section */}
        <section className="py-40 px-6 md:px-12 max-w-7xl mx-auto" id="skills">
          <div className="mb-20 text-center md:text-left">
            <h2 className="text-xs font-headline font-bold tracking-[0.3em] uppercase text-secondary mb-4">Technical
              Arsenal</h2>
            <h3 className="text-5xl font-headline font-extrabold text-white">The Stack.</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-8 bg-surface-container rounded-lg hover:bg-surface-bright transition-colors duration-500">
              <h4 className="text-sm font-headline font-bold text-primary mb-4 uppercase tracking-widest">Languages
              </h4>
              <p className="text-on-surface-variant font-light">JavaScript (ES6+), TypeScript, Python, Java, C++</p>
            </div>
            <div
              className="p-8 bg-surface-container-low rounded-lg hover:bg-surface-container transition-colors duration-500">
              <h4 className="text-sm font-headline font-bold text-secondary mb-4 uppercase tracking-widest">Frameworks
              </h4>
              <p className="text-on-surface-variant font-light">React.js, Node.js, Express.js, Vue.js, Nuxt 3</p>
            </div>
            <div className="p-8 bg-surface-container rounded-lg hover:bg-surface-bright transition-colors duration-500">
              <h4 className="text-sm font-headline font-bold text-primary mb-4 uppercase tracking-widest">Databases
              </h4>
              <p className="text-on-surface-variant font-light">MongoDB, PostgreSQL, MySQL</p>
            </div>
            <div
              className="p-8 bg-surface-container-low rounded-lg hover:bg-surface-container transition-colors duration-500">
              <h4 className="text-sm font-headline font-bold text-secondary mb-4 uppercase tracking-widest">Frontend
              </h4>
              <p className="text-on-surface-variant font-light">HTML5, CSS3, TailwindCSS, Shadcn/UI</p>
            </div>
            <div
              className="p-8 bg-surface-container-low rounded-lg hover:bg-surface-container transition-colors duration-500">
              <h4 className="text-sm font-headline font-bold text-secondary mb-4 uppercase tracking-widest">Backend
              </h4>
              <p className="text-on-surface-variant font-light">REST API Development, Auth Systems</p>
            </div>
            <div className="p-8 bg-surface-container rounded-lg hover:bg-surface-bright transition-colors duration-500">
              <h4 className="text-sm font-headline font-bold text-primary mb-4 uppercase tracking-widest">Security
              </h4>
              <p className="text-on-surface-variant font-light">OAuth 2.0, JWT, RBAC, bcrypt, HTTP-only</p>
            </div>
            <div
              className="p-8 bg-surface-container-low rounded-lg hover:bg-surface-container transition-colors duration-500">
              <h4 className="text-sm font-headline font-bold text-secondary mb-4 uppercase tracking-widest">Tools</h4>
              <p className="text-on-surface-variant font-light">Git, GitHub, Docker, Postman</p>
            </div>
            <div className="p-8 bg-surface-container rounded-lg hover:bg-surface-bright transition-colors duration-500">
              <h4 className="text-sm font-headline font-bold text-primary mb-4 uppercase tracking-widest">Deployment
              </h4>
              <p className="text-on-surface-variant font-light">Vercel, Render, Netlify</p>
            </div>
          </div>
        </section>
        {/* Experience */}
        <section className="py-40 px-6 md:px-12 bg-surface-container-lowest" id="experience">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-6">
              <div>
                <h2 className="text-xs font-headline font-bold tracking-[0.3em] uppercase text-primary mb-4">
                  Professional Artifacts</h2>
                <h3 className="text-5xl font-headline font-extrabold text-white">Timeline.</h3>
              </div>
            </div>
            <div className="space-y-0">
              {/* UCPro */}
              <div
                className="group py-16 px-8 hover:bg-surface-container-low transition-colors duration-500 border-t border-outline-variant/10 flex flex-col md:grid md:grid-cols-12 gap-8 items-start">
                <div className="md:col-span-3 text-primary font-headline font-bold">NOV 2025 — PRES.</div>
                <div className="md:col-span-4">
                  <h4 className="text-2xl font-headline font-extrabold text-white">Software Product Engineer</h4>
                  <p className="text-secondary-dim font-bold tracking-widest text-xs uppercase mt-1">UCPro</p>
                </div>
                <div className="md:col-span-5 text-on-surface-variant leading-relaxed">
                  <ul className="bullet-list text-sm">
                    <li>Engineered Logiskan, a B2B logistics platform supporting 20+ vendors and 10,000+
                      shipping rate records.</li>
                    <li>Designed scalable RESTful APIs using Node.js and MongoDB, handling 500+ daily
                      queries with &lt;300ms response.</li>
                    <li>Built CSV-based bulk data ingestion pipelines, reducing vendor onboarding time by
                      ~60%.</li>
                    <li>Digitized manual rate discovery, reducing lookup time from 7 mins to under 10
                      seconds.</li>
                    <li>Implemented real-time dashboard updates and scroll-based rendering, improving
                      efficiency by ~40%.</li>
                    <li>Designed modular backend architecture for scalable B2B logistics platform services.
                    </li>
                  </ul>
                </div>
              </div>
              {/* Kalvium */}
              <div
                className="group py-16 px-8 hover:bg-surface-container-low transition-colors duration-500 border-t border-outline-variant/10 flex flex-col md:grid md:grid-cols-12 gap-8 items-start">
                <div className="md:col-span-3 text-primary font-headline font-bold">AUG 2024 — PRES.</div>
                <div className="md:col-span-4">
                  <h4 className="text-2xl font-headline font-extrabold text-white">SWE Intern</h4>
                  <p className="text-secondary-dim font-bold tracking-widest text-xs uppercase mt-1">Kalvium Work
                    Integration</p>
                </div>
                <div className="md:col-span-5 text-on-surface-variant leading-relaxed">
                  <ul className="bullet-list text-sm">
                    <li>Developed and maintained production-grade full-stack applications.</li>
                    <li>Built responsive interfaces for internal tools using React and Tailwind, boosting
                      completion rates by 25%.</li>
                    <li>Implemented secure REST API integrations with Axios and JWT-based authentication.
                    </li>
                    <li>Diagnosed and resolved frontend bugs while ensuring consistent cross-device
                      responsiveness.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Projects */}
        <section className="py-40 px-6 md:px-12 max-w-7xl mx-auto" id="projects">
          <div className="mb-20">
            <h2 className="text-xs font-headline font-bold tracking-[0.3em] uppercase text-primary mb-4">Curated
              Exhibition</h2>
            <h3 className="text-5xl font-headline font-extrabold text-white">Projects.</h3>
          </div>
          <div className="grid grid-cols-1 gap-32">
            {/* Spopify */}
            <div className="editorial-grid gap-12 items-center">
              <div className="col-span-12 md:col-span-7 relative group">
                <div className="overflow-hidden rounded-lg">
                  <img alt="Spopify Project"
                    className="w-full h-auto aspect-video object-cover transition-transform duration-1000 group-hover:scale-105"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBvuLG1Ftw-uz96U0xE_SCuTn4cksTiGIRAibYP-uEzJx59BlY7VlQ7MQFwXgvkWDYD9Gezq2iHcaKdd9ZT1L3lEG2mesakiWBHnTAJlsfOcdTStITfsGgqUoPPQY1GJTLYoKKcAnadZQYGlMzWjJ94i1SaZdRPPXS0CLagyovpXIy8Aw7vJec2JGaU-j6fob1QF_hW-JG778oDOI0MTh2yjk3LM3BuZRqhEve_mTc0MJM3VNpjLkKldDw0rPUMVnjB7gMiauMGNXbN" />
                </div>
                <div className="absolute top-6 left-6 flex gap-3">
                  <span
                    className="px-4 py-1.5 glass-pill rounded-full text-xs font-bold text-white border border-white/5">MERN</span>
                  <span
                    className="px-4 py-1.5 glass-pill rounded-full text-xs font-bold text-white border border-white/5">OAUTH
                    2.0</span>
                  <span
                    className="px-4 py-1.5 glass-pill rounded-full text-xs font-bold text-white border border-white/5">SPOTIFY
                    API</span>
                </div>
              </div>
              <div className="col-span-12 md:col-span-5 md:pl-12">
                <p className="text-primary-fixed text-xs font-bold mb-2">JUNE 2025 – JULY 2025</p>
                <h4 className="text-4xl font-headline font-extrabold text-white mb-6">Spopify</h4>
                <p className="text-on-surface-variant leading-loose mb-8">
                  Spotify Playlist Genre Filter. Integrated Spotify Web API with OAuth 2.0. Achieved 80%
                  reduction in failed API calls and automated playlist generation logic (45m to &lt;2m).
                </p>
                <a className="inline-flex items-center gap-4 text-primary font-headline font-bold group"
                  href="https://github.com/AbdulRahmanShihabuddin/spopifyy" target="_blank" rel="noreferrer">
                  GITHUB ARTIFACT
                  <span
                    className="material-symbols-outlined group-hover:translate-x-2 transition-transform">arrow_forward</span>
                </a>
              </div>
            </div>
            {/* SaaS Dashboard */}
            <div className="editorial-grid gap-12 items-center">
              <div className="col-span-12 md:col-span-7 md:order-2 relative group">
                <div className="overflow-hidden rounded-lg">
                  <img alt="SaaS Dashboard"
                    className="w-full h-auto aspect-video object-cover transition-transform duration-1000 group-hover:scale-105"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCEKP-R8InSe2LBMUb3tyT8aKBeepfPzTnMJCVa-S9J2Wa4s15Afq5Uso6yZb8pVaBQTtTMtUU091zlOWof0X-bC85IlJgLWBaA6y_BNwfhgMurOGogP9TsjavS1j4GBDlHqN36lwMrMmNv5WoRHm0qCV0Glc1FZ1DBjijsg4kGsI3wtg6M9NigBx1eey2gm_DFq7V-naSni7Il4be21u-Nb-YvyE0CXMpYtr0mgmHIWDFciAFg16N53oNq8VunoJEIQUuWy2mgMpty" />
                </div>
                <div className="absolute top-6 right-6 flex gap-3">
                  <span
                    className="px-4 py-1.5 glass-pill rounded-full text-xs font-bold text-white border border-white/5">NUXT
                    3</span>
                  <span
                    className="px-4 py-1.5 glass-pill rounded-full text-xs font-bold text-white border border-white/5">POSTGRESQL</span>
                  <span
                    className="px-4 py-1.5 glass-pill rounded-full text-xs font-bold text-white border border-white/5">TYPESCRIPT</span>
                </div>
              </div>
              <div className="col-span-12 md:col-span-5 md:order-1 md:pr-12 text-right">
                <p className="text-primary-fixed text-xs font-bold mb-2">JAN 2026 – FEB 2026</p>
                <h4 className="text-4xl font-headline font-extrabold text-white mb-6">SaaS-Analytics</h4>
                <p className="text-on-surface-variant leading-loose mb-8">
                  Business Intelligence Platform. Engineered SQL aggregation for 10,000+ transaction records.
                  Achieved 400ms load times with SSR and implemented RBAC with HTTP-only cookies.
                </p>
                <a className="inline-flex items-center gap-4 text-primary font-headline font-bold group flex-row-reverse"
                  href="https://github.com/AbdulRahmanShihabuddin/saas-analytics" target="_blank" rel="noreferrer">
                  GITHUB ARTIFACT
                  <span
                    className="material-symbols-outlined group-hover:-translate-x-2 transition-transform">arrow_back</span>
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* Education & Achievements */}
        <section className="py-40 px-6 md:px-12 bg-surface-container-low">
          <div className="max-w-7xl mx-auto editorial-grid gap-24">
            <div className="col-span-12 md:col-span-6">
              <h2 className="text-xs font-headline font-bold tracking-[0.3em] uppercase text-secondary mb-4">Scholarly
                Artifacts</h2>
              <h3 className="text-4xl font-headline font-extrabold text-white leading-tight mb-8">Education.</h3>
              <div className="border-l-2 border-primary pl-8 py-4">
                <h4 className="text-xl font-headline font-bold text-white">B.Tech in Computer Science</h4>
                <p className="text-primary-fixed text-xs font-bold uppercase tracking-wider mt-1">Software Product
                  Engineering</p>
                <p className="text-on-surface-variant mt-4">Kalvium UG Program / Lovely Professional University</p>
                <p className="text-neutral-500 text-sm mt-1">2024 – 2028 | Phagwara, Punjab</p>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6">
              <h2 className="text-xs font-headline font-bold tracking-[0.3em] uppercase text-secondary mb-4">Accolades
              </h2>
              <h3 className="text-4xl font-headline font-extrabold text-white leading-tight mb-8">Milestones.</h3>
              <div className="space-y-8">
                <div className="relative pl-10 border-l border-outline-variant/30">
                  <div
                    className="absolute -left-[5px] top-0 w-2 h-2 rounded-full bg-secondary shadow-[0_0_10px_#4efbe6]">
                  </div>
                  <h4 className="text-lg font-headline font-bold text-white">1st Place – CODEQUEST Hackathon</h4>
                  <p className="text-on-surface-variant text-sm">Lovely Professional University</p>
                </div>
                <div className="relative pl-10 border-l border-outline-variant/30">
                  <h4 className="text-lg font-headline font-bold text-white">Led Promptrepo AI Hackathon</h4>
                  <p className="text-on-surface-variant text-sm">Team leader for 5-member engineering team.</p>
                </div>
                <div className="relative pl-10 border-l border-outline-variant/30">
                  <h4 className="text-lg font-headline font-bold text-white">CampusLeet Advanced DSA Wins</h4>
                  <p className="text-on-surface-variant text-sm">1st and 2nd Place – Kalvium CampusLeet
                    Challenges.</p>
                </div>
                <div className="relative pl-10 border-l border-outline-variant/30">
                  <h4 className="text-lg font-headline font-bold text-white">100/100 CBSE Record</h4>
                  <p className="text-on-surface-variant text-sm">Class 12 Informatics Practices (Python &amp;
                    SQL).</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Contact Section */}
        <section className="py-40 px-6 md:px-12 max-w-7xl mx-auto" id="contact">
          <div className="editorial-grid gap-12">
            <div className="col-span-12 md:col-span-5">
              <h2 className="text-xs font-headline font-bold tracking-[0.3em] uppercase text-primary mb-4">Acquisition
              </h2>
              <h3 className="text-5xl font-headline font-extrabold text-white leading-tight mb-8">Connect.</h3>
              <p className="text-on-surface-variant text-lg mb-10 leading-relaxed">
                Currently open for high-impact software engineering roles. Reach out to discuss how we can build
                performant systems.
              </p>
              <div className="space-y-4">
                <a className="flex items-center gap-4 text-white font-medium hover:text-primary transition-colors"
                  href="mailto:abdul.rahman.iv7@gmail.com">
                  <span className="material-symbols-outlined text-primary">mail</span>
                  abdul.rahman.iv7@gmail.com
                </a>
                <p className="flex items-center gap-4 text-white font-medium">
                  <span className="material-symbols-outlined text-primary">call</span>
                  +91 7559999445
                </p>
                <p className="flex items-center gap-4 text-white font-medium">
                  <span className="material-symbols-outlined text-primary">pin_drop</span>
                  Remote / Global
                </p>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6 md:col-start-7 bg-surface-container-low p-12 rounded-lg">
              <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
                <div className="group">
                  <label
                    className="block text-xs uppercase tracking-widest text-on-surface-variant mb-4 group-focus-within:text-secondary transition-colors">Identification</label>
                  <input
                    className="w-full bg-surface-container-lowest border-0 border-b border-outline-variant/20 focus:ring-0 focus:border-secondary text-white pb-4 transition-all placeholder:text-neutral-700"
                    placeholder="Your Name" type="text" />
                </div>
                <div className="group">
                  <label
                    className="block text-xs uppercase tracking-widest text-on-surface-variant mb-4 group-focus-within:text-secondary transition-colors">Digital
                    Address</label>
                  <input
                    className="w-full bg-surface-container-lowest border-0 border-b border-outline-variant/20 focus:ring-0 focus:border-secondary text-white pb-4 transition-all placeholder:text-neutral-700"
                    placeholder="email@example.com" type="email" />
                </div>
                <div className="group">
                  <label
                    className="block text-xs uppercase tracking-widest text-on-surface-variant mb-4 group-focus-within:text-secondary transition-colors">Inquiry</label>
                  <textarea
                    className="w-full bg-surface-container-lowest border-0 border-b border-outline-variant/20 focus:ring-0 focus:border-secondary text-white pb-4 transition-all placeholder:text-neutral-700 resize-none"
                    placeholder="Tell me about your project vision..." rows={4}></textarea>
                </div>
                <button
                  className="w-full py-5 rounded-md bg-gradient-to-r from-primary to-tertiary-container text-on-primary-fixed font-headline font-black text-lg tracking-widest hover:scale-[1.01] active:scale-95 transition-all"
                  type="submit">
                  SEND DISPATCH
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      {/* Footer */}
      <footer
        className="bg-[#0e0e0e] w-full py-20 px-10 mt-40 flex flex-col md:flex-row justify-between items-center border-t border-white/5">
        <div className="font-['Inter'] text-sm tracking-wide text-neutral-500 mb-8 md:mb-0">
          © 2024 ABDUL RAHMAN SHIHABUDDIN. Built in the Noir.
        </div>
        <div className="flex gap-12">
          <a className="text-neutral-500 hover:text-[#b89fff] transition-colors duration-300 font-['Inter'] text-sm tracking-wide"
            href="https://github.com/AbdulRahmanShihabuddin" target="_blank" rel="noreferrer">Github</a>
          <a className="text-neutral-500 hover:text-[#b89fff] transition-colors duration-300 font-['Inter'] text-sm tracking-wide"
            href="https://www.linkedin.com/in/abdul-rahman-shihabuddin-47474b31b/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a className="text-neutral-500 hover:text-[#b89fff] transition-colors duration-300 font-['Inter'] text-sm tracking-wide"
            href="#twit" onClick={(e) => e.preventDefault()}>Twitter</a>
        </div>
      </footer>
    </div>
  )
}

export default App
