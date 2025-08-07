// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const Hero = () => {
  return (
    <motion.section
      id="home"
      className="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <div className="hero-container">
        <motion.div
          className="hero-content"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div className="hero-badge">
            <span>👋Hello, I' am</span>
          </motion.div>
          <motion.h1
            className="glitch"
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
          >
            Atidivya Kumar Patra
          </motion.h1>
          <motion.h2 className="hero-subtitle" variants={fadeInUp}>
            Senior Frontend Engineer
          </motion.h2>
          <motion.p className="hero-description" variants={fadeInUp}>
            As a seasoned IT professional with 7 years of experience, I have
            honed my skills in frontend development, project management, team
            management, and agile scrum methodologies. In my most recent role, I
            had the opportunity to leverage my skills in revenue reconciliation,
            leading a team that managed this critical function while also
            training team members on new business processes.
          </motion.p>

          <motion.div className="cta-buttons" variants={staggerContainer}>
            <motion.a
              href="#projects"
              className="cta-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.a>
            <motion.a
              href="#contact"
              className="cta-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
          </motion.div>

          <motion.div className="social-links" variants={staggerContainer}>
            <motion.a
              href="https://atidivya.github.io/cv-atidivya/"
              target="_blank"
            >
              <i className="fa-regular fa-file-pdf" />
            </motion.a>
            <motion.a href="https://github.com/atidivya" target="_blank">
              <i className="fab fa-github" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/atidivya-patra/"
              target="_blank"
            >
              <i className="fab fa-linkedin" />
            </motion.a>
          </motion.div>
        </motion.div>
        <motion.div
          className="hero-image-container"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="code-display">
            <SyntaxHighlighter
              language="typescript"
              style={vscDarkPlus}
              customStyle={{
                margin: 0,
                padding: "2rem",
                height: "100%",
                borderRadius: "20px",
                background: "rgba(30,41,59,0.8)",
                backdropFilter: "blue(10px)",
                marginBottom: 50,
              }}
            >
              {`const aboutMe: DeveloperProfile = {
      codename: "Ati",
      origin: " 🇮🇳 🌏 India",
      based: "🇵🇹 🌐 Portugal",
      role: "Senior Frontend Engineer",
      stack: {
        languages: ["JavaScript", "TypeScript"],
        frameworks: ["Vue", "React", "Next.js", "TailwindCSS"],
      },
      traits: [
        "Clean code advocate",
        "Passionate About Scalable UI/UX",
        "Scrum practitioner",
        "Terminal aesthetic enthusiast",
      ],
      missionStatement:
        "Translating ideas into elegant frontends that scale"
};`}
            </SyntaxHighlighter>
          </div>

          <motion.div
            className="floating-card"
            animate={{ y: [0, -10, 0], rotate: [0, 2, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="card-content">
              <span className="card-icon"> 💻 </span>
              <span className="card-text">
                Currently working on Hybrid mode
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};
