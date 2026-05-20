import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What kind of businesses do you work with?",
    answer: "We primarily work with startups, SMBs, and growing B2B companies. Whether you're pre-launch or scaling, we tailor our approach to your stage and budget. If you have a product or service and need a digital presence that converts, we're a great fit.",
  },
  {
    question: "How long does it take to build a website?",
    answer: "Most websites are delivered in 2-4 weeks from kickoff. Complex web apps or e-commerce platforms may take 4-6 weeks. We move fast without cutting corners — our streamlined process means you get premium quality at startup speed.",
  },
  {
    question: "Do you offer ongoing support after launch?",
    answer: "Absolutely. We offer flexible monthly retainer plans that cover website maintenance, content updates, social media management, and growth marketing. Think of us as your outsourced digital team.",
  },
  {
    question: "What's included in your social media management?",
    answer: "Content strategy, graphic design, copywriting, scheduling, engagement management, and monthly performance reports. We handle everything so you can focus on running your business.",
  },
  {
    question: "How much do your services cost?",
    answer: "Every project is different. We offer custom quotes based on scope and timeline. Book a free discovery call and we'll put together a proposal tailored to your needs and budget — no surprises, no hidden fees.",
  },
  {
    question: "Can I see examples of your work?",
    answer: "Absolutely! Reach out and we'll share a detailed portfolio deck. We're proud of every project we deliver and happy to walk you through our process.",
  },
];

function FAQItem({ question, answer, isOpen, onClick, index }: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="border-b border-white/[0.06] last:border-b-0"
    >
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between py-5 sm:py-6 text-left group"
        id={`faq-${index}`}
      >
        <span
          className="text-[15px] sm:text-base font-semibold text-white pr-8 group-hover:text-[#4F8EF7] transition-colors duration-300"
          style={{ fontFamily: "'Syne', sans-serif" }}
        >
          {question}
        </span>
        <ChevronDown
          size={18}
          className={`flex-shrink-0 text-[#999] transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#4F8EF7]' : ''}`}
        />
      </button>
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="overflow-hidden"
      >
        <p className="pb-6 text-sm text-[#999] leading-relaxed max-w-2xl">
          {answer}
        </p>
      </motion.div>
    </motion.div>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative py-20 md:py-28 lg:py-32" id="faq-section">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-[11px] font-semibold tracking-[0.2em] uppercase text-[#4F8EF7] mb-4">
            FAQ
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Got Questions?
          </h2>
          <p className="text-[#999] text-base">
            Here are the answers to what founders ask most.
          </p>
        </motion.div>

        {/* FAQ accordion */}
        <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm px-6 sm:px-8">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
