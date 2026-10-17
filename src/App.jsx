import React from "react";

const features = [
  {
    icon: "✦",
    color: "blue-bg",
    title: "AI Mock Tests",
    description: "Practice exam-style questions and identify areas for improvement.",
    link: "Start practicing"
  },
  {
    icon: "◷",
    color: "orange-bg",
    title: "Current Affairs",
    description: "Stay updated with important national and international news.",
    link: "Read updates"
  },
  {
    icon: "▤",
    color: "green-bg",
    title: "Smart Study Notes",
    description: "Revise important concepts using organized study materials.",
    link: "Explore notes"
  },
  {
    icon: "▧",
    color: "purple-bg",
    title: "Previous Year Papers",
    description: "Understand exam patterns and practice previous-year questions.",
    link: "Explore PYQs"
  }
];

const testimonials = [
  {
    initial: "A",
    quote: "Practice questions and study resources make my preparation easier to organize.",
    role: "Mock Test Learner"
  },
  {
    initial: "S",
    quote: "A clean dashboard helps me focus on daily revision and maintain my study routine.",
    role: "Self-paced Learner"
  },
  {
    initial: "R",
    quote: "Current affairs and previous papers are useful when planning my study sessions.",
    role: "Daily Practice Learner"
  }
];

function Header() {
  return (
    <header className="navbar">
      <a href="#home" className="logo">
        <span className="logo-icon">U</span>
        <span>UPSC ZONE <span className="blue">AI</span></span>
      </a>
      <nav aria-label="Main navigation">
        <a href="#home">Home</a>
        <a href="#features">Features</a>
        <a href="#about">About</a>
        <a href="#testimonials">Testimonials</a>
      </nav>
      <div className="nav-buttons">
        <a href="#login" className="login">Log In</a>
        <a href="#features" className="btn small-btn">Get Started ↗</a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <span className="tag">✦ AI-POWERED UPSC PREPARATION</span>
        <h1>Your IAS Dream.<br /><span>Our AI. One Mission.</span></h1>
        <p>
          Prepare smarter, learn faster, and move closer to your civil services
          dream with AI-powered learning, mock tests, and daily current affairs.
        </p>
        <div className="hero-buttons">
          <a href="#features" className="btn">Start Preparing →</a>
          <a href="#about" className="btn outline-btn">Explore Features</a>
        </div>
        <div className="stats">
          <div><h3>AI-Powered</h3><p>Smart Learning</p></div>
          <div><h3>24/7</h3><p>Study Anytime</p></div>
          <div><h3>All-in-One</h3><p>Exam Preparation</p></div>
        </div>
      </div>

      <div className="hero-visual">
        <div className="dashboard">
          <span className="label">YOUR PREPARATION</span>
          <h2>Learning Dashboard</h2>
          <div className="progress-box">
            <div className="progress-heading">
              <span>Weekly Progress</span><strong>78%</strong>
            </div>
            <div className="progress-bar"><div className="progress" /></div>
            <p>Keep going! You're building a great habit.</p>
          </div>
          <div className="task">
            <div className="task-icon">✎</div>
            <div><h4>AI Mock Tests</h4><p>Practice and improve</p></div>
            <span className="arrow">→</span>
          </div>
          <div className="task">
            <div className="task-icon purple">▤</div>
            <div><h4>Current Affairs</h4><p>Explore today's updates</p></div>
            <span className="arrow">→</span>
          </div>
          <div className="ai-note">✦ Your AI study companion is ready!</div>
        </div>
        <div className="floating-badge badge-top">✦ Smart AI Learning</div>
        <div className="floating-badge badge-bottom">✓ Learn at your pace</div>
      </div>
    </section>
  );
}

function Features() {
  return (
    <section className="section" id="features">
      <div className="section-heading">
        <span className="tag">EVERYTHING YOU NEED</span>
        <h2>One Platform. <span>Endless Possibilities.</span></h2>
        <p>Powerful tools to make your UPSC preparation focused and effective.</p>
      </div>
      <div className="feature-grid">
        {features.map((feature) => (
          <article className="feature-card" key={feature.title}>
            <div className={`feature-icon ${feature.color}`}>{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
            <a href="#about">{feature.link} →</a>
          </article>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="about section" id="about">
      <div className="about-visual">
        <div className="about-symbol">U<span>+</span></div>
        <div className="about-badge">✦ Learning, made smarter.</div>
      </div>
      <div className="about-content">
        <span className="tag">A SMARTER WAY TO PREPARE</span>
        <h2>Your preparation.<br /><span>Your pace.</span></h2>
        <p>
          UPSC ZONE AI brings your learning resources together in one place.
          Practice questions, revise important topics, and stay informed while
          building a consistent study routine.
        </p>
        <ul>
          <li>✓ Organized preparation resources</li>
          <li>✓ AI-assisted practice and revision</li>
          <li>✓ Daily learning in one convenient place</li>
        </ul>
        <a href="#features" className="btn">Explore the Platform →</a>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="section" id="testimonials">
      <div className="section-heading">
        <span className="tag">STUDENT EXPERIENCES</span>
        <h2>Every Aspirant Has <span>A Story.</span></h2>
        <p>Tools and consistent preparation can help aspirants stay focused.</p>
      </div>
      <div className="testimonial-grid">
        {testimonials.map((item) => (
          <article className="testimonial-card" key={item.initial}>
            <div className="stars" aria-label="5 stars">★★★★★</div>
            <p>"{item.quote}"</p>
            <div className="student">
              <div className="avatar">{item.initial}</div>
              <div><h4>UPSC Aspirant</h4><span>{item.role}</span></div>
            </div>
          </article>
        ))}
      </div>
      <p className="demo-note">Sample testimonials for design demonstration only.</p>
    </section>
  );
}

function Footer() {
  return (
    <>
      <section className="cta" id="login">
        <span className="tag">YOUR JOURNEY STARTS HERE</span>
        <h2>Ready to Prepare <span>Smarter?</span></h2>
        <p>Build better study habits and take the next step toward your goal.</p>
        <a href="#features" className="btn">Begin Your Journey →</a>
      </section>
      <footer className="footer">
        <div className="footer-grid">
          <div>
            <a href="#home" className="logo footer-logo">
              <span className="logo-icon">U</span>
              <span>UPSC ZONE <span className="blue">AI</span></span>
            </a>
            <p>A smarter learning companion for UPSC and competitive exam aspirants.</p>
          </div>
          <div>
            <h4>Platform</h4>
            <a href="#features">AI Mock Tests</a>
            <a href="#features">Current Affairs</a>
            <a href="#features">Study Notes</a>
            <a href="#features">PYQs</a>
          </div>
          <div>
            <h4>Explore</h4>
            <a href="#home">Home</a>
            <a href="#about">About Us</a>
            <a href="#testimonials">Testimonials</a>
          </div>
          <div>
            <h4>Contact</h4>
            <a href="mailto:hello@example.com">Email Us</a>
            <a href="#login">Get Started</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 UPSC ZONE AI. All rights reserved.</p>
          <p>Designed for aspirants, built for ambition.</p>
        </div>
      </footer>
    </>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <About />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
