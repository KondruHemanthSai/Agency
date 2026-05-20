import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const allTags = [
  "Web Development",
  "App Development",
  "AI Applications",
  "Social Media Management",
  "Cloud & DevOps",
  "UI/UX",
  "Logo Designing",
  "Rapid Prototyping and MVPs",
  "Digital Marketing & SEO",
  "Brand Strategy",
  "Visual Identity",
  "Video Editing",
];

const brandName = "Buildoholics...";

/* Per-letter stagger animation */
const letterVariants = {
  hidden: { opacity: 0, y: 8 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.03, duration: 0.2, ease: "easeOut" },
  }),
};

export function ServiceTunnel() {
  const leftLoop = [...allTags, ...allTags];
  const rightLoop = [...allTags, ...allTags];

  return (
    <section className="service-tunnel-section" id="service-tunnel">
      <style>{`
        .service-tunnel-section {
          width: 100%;
          padding: 2rem 1rem;
        }
        @media (min-width: 640px) {
          .service-tunnel-section { padding: 3rem 1.5rem; }
        }

        /* ── Outer card ── */
        .st-card {
          width: 100%;
          min-height: 65vh;
          background: #161616;
          color: #fff;
          border-radius: 36px;
          padding: 1rem;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.35);
          box-shadow: 0 0 20px rgba(255,255,255,0.06);
        }
        @media (min-width: 640px) {
          .st-card { padding: 1.75rem; }
        }
        @media (min-width: 1024px) {
          .st-card { padding: 2.5rem; }
        }

        /* ── Top section ── */
        .st-top {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 2.5rem;
          text-align: center;
          width: 100%;
          flex: 1;
        }

        .st-heading {
          font-family: 'Syne', sans-serif;
          font-weight: 700;
          font-size: clamp(1.4rem, 3.5vw, 2.25rem);
          letter-spacing: -0.02em;
          line-height: 1.3;
          color: #fff;
        }

        /* ── CTA button ── */
        .st-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 1rem 1.5rem;
          border-radius: 100px;
          background: #fff;
          color: #111;
          font-size: 1rem;
          font-weight: 600;
          letter-spacing: -0.01em;
          text-decoration: none;
          cursor: pointer;
          box-shadow: 2px 3px 0 #555;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .st-btn:hover {
          transform: translateY(-2px);
          box-shadow: 2px 5px 0 #444;
        }

        /* ── Bottom ticker card ── */
        .st-ticker-card {
          width: 100%;
          border-radius: 1rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 2rem 0;
          background: linear-gradient(180deg, #212121 0%, #1c1b1b 49%);
        }

        .st-subtext {
          font-size: 1.1rem;
          letter-spacing: -0.02em;
          color: #fff;
          margin-bottom: 2.5rem;
        }

        /* ── Marquee wrapper ── */
        .st-marquee-wrap {
          position: relative;
          display: flex;
          width: 100%;
          align-items: center;
          justify-content: center;
        }

        /* ── Center gate ── */
        .st-gate {
          position: absolute;
          width: 110px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #282828;
          padding: 1.25rem;
          z-index: 10;
          overflow: visible;
        }
        @media (min-width: 768px) {
          .st-gate { width: 250px; }
        }

        .st-gate-text {
          font-family: 'Syne', sans-serif;
          font-size: 0.95rem;
          font-weight: 700;
          color: #fff;
          display: flex;
        }

        /* Gradient fades on gate edges */
        .st-gate::before {
          content: '';
          position: absolute;
          height: 100%;
          width: 12px;
          left: -12px;
          background: linear-gradient(to left, #282828 50%, transparent 100%);
        }
        .st-gate::after {
          content: '';
          position: absolute;
          height: 100%;
          width: 12px;
          right: -12px;
          background: linear-gradient(to right, #282828 50%, transparent 100%);
        }

        /* Tunnel walls — WHITE borders with rounded ends */
        .st-wall-left {
          position: absolute;
          top: 0;
          right: 100%;
          width: 40px;
          height: 100%;
          pointer-events: none;
          border-right: 2px solid #fff;
          border-radius: 0 8px 8px 0;
          background: linear-gradient(to left, #1c1b1b, transparent);
          z-index: 20;
        }
        .st-wall-right {
          position: absolute;
          top: 0;
          left: 100%;
          width: 40px;
          height: 100%;
          pointer-events: none;
          border-left: 2px solid #fff;
          border-radius: 8px 0 0 8px;
          background: linear-gradient(to right, #1c1b1b, transparent);
          z-index: 20;
        }

        /* ── Tracks ── */
        .st-track {
          width: 50%;
          overflow: hidden;
        }

        .st-strip {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .st-track--left .st-strip {
          justify-content: flex-end;
          animation: marqueeScroll 8s linear infinite;
        }
        .st-track--right .st-strip {
          animation: marqueeScroll 8s linear infinite;
        }

        @keyframes marqueeScroll {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }

        /* ── Left pills: dashed outline ── */
        .st-pill-outline {
          display: flex;
          align-items: center;
          gap: 0.375rem;
          padding: 0.5rem;
          border-radius: 100px;
          flex-shrink: 0;
          border: 1px dashed rgba(255,255,255,0.2);
        }
        .st-pill-outline .st-dot {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.2);
          flex-shrink: 0;
        }
        .st-pill-outline span {
          font-size: 0.75rem;
          line-height: 1;
          white-space: nowrap;
          color: rgba(255,255,255,0.7);
        }

        /* ── Right pills: filled with check ── */
        .st-pill-filled {
          display: flex;
          align-items: center;
          gap: 0.375rem;
          padding: 0.5rem;
          border-radius: 100px;
          flex-shrink: 0;
          background: rgba(255,255,255,0.1);
        }
        .st-pill-filled .st-check {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: #4F8EF7;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .st-pill-filled span {
          font-size: 0.75rem;
          line-height: 1;
          white-space: nowrap;
          color: rgba(255,255,255,0.85);
        }
      `}</style>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7 }}
        className="st-card"
      >
        {/* ── Top ── */}
        <div className="st-top">
          <h3 className="st-heading">
            You've reached the end — now let's start something new!
          </h3>
          <a href="https://cal.com/buildoholics" className="st-btn">
            <Sparkles size={20} />
            Let's Connect
          </a>
        </div>

        {/* ── Bottom ticker card ── */}
        <div className="st-ticker-card">
          <span className="st-subtext">Trust us we are good at this :)</span>

          <div className="st-marquee-wrap">
            {/* Center gate */}
            <div className="st-gate">
              {/* Tunnel walls */}
              <div className="st-wall-left" />
              <div className="st-wall-right" />

              {/* Per-letter animated text */}
              <motion.div
                className="st-gate-text"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {brandName.split("").map((char, i) => (
                  <motion.span key={i} custom={i} variants={letterVariants}>
                    {char}
                  </motion.span>
                ))}
              </motion.div>
            </div>

            {/* Left track — dashed outline pills */}
            <div className="st-track st-track--left">
              <div className="st-strip">
                {leftLoop.map((tag, i) => (
                  <div key={`l${i}`} className="st-pill-outline">
                    <div className="st-dot" />
                    <span>{tag}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right track — filled check pills */}
            <div className="st-track st-track--right">
              <div className="st-strip">
                {rightLoop.map((tag, i) => (
                  <div key={`r${i}`} className="st-pill-filled">
                    <div className="st-check">
                      <svg width="10" height="8" viewBox="0 0 9 7" fill="none">
                        <path d="M1 3.5L3.5 6L8 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span>{tag}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
