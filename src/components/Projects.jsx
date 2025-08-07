// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

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

export const Projects = () => {
  return (
    <motion.section
      id="projects"
      className="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        My Projects
      </motion.h2>
      <motion.div
        className="project-grid"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
          onClick={() =>
            window.open("https://smart-assistant-3tjm.onrender.com", "_blank")
          }
        >
          <motion.div
            className="project-image"
            style={{
              backgroundImage: "url('/projects/smart-assistance.png')",
            }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          />
          <h3>AI Smart Assistant</h3>
          <p>
            Smart Assistant is an intelligent voice-based web assistant powered
            by Google Gemini LLM. It lets users interact through speech, receive
            dynamic responses, and manage personalized experiences.
          </p>
          <div className="project-tech">
            <span>React</span>
            <span> Node.js</span>
            <span> Gemini</span>
            <span>TailwindCSS</span>
          </div>
        </motion.div>

        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
          onClick={() =>
            window.open(
              "https://next-js-15-stripe-e-commerce.vercel.app",
              "_blank"
            )
          }
        >
          <motion.div
            className="project-image"
            style={{
              backgroundImage: "url('/projects/shopkart.png')",
            }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          />
          <h3>Shopkart</h3>
          <p>
            A fully functional e-commerce application built with Next.js for
            both frontend and backend, using Stripe as the payment gateway, and
            deployed seamlessly via Vercel.
          </p>
          <div className="project-tech">
            <span>Next.js</span>
            <span> Stripe</span>
            <span>TailwindCSS</span>
          </div>
        </motion.div>

        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
          onClick={() =>
            window.open("https://atidivya.github.io/incidentmanager", "_blank")
          }
        >
          <motion.div
            className="project-image"
            style={{
              backgroundImage: "url('/projects/incident-management.png')",
            }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          />
          <h3>Incident Manager</h3>
          <p>
            A web-based application built to log, track, and resolve workplace
            or system incidents in real time. It features role-based access,
            incident categorization, real-time database syncing, status tracking
            for enabling teams to respond to issues quickly and maintain
            operational efficiency.
          </p>
          <div className="project-tech">
            <span>Vue js</span>
            <span> Firebase</span>
            <span> CSS</span>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};
