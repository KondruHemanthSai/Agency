import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useState, useRef } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Instagram, Linkedin, Send, CheckCircle, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { emailConfig } from "@/config/emailConfig";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "buildoholics@gmail.com",
    href: "mailto:buildoholics@gmail.com",
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@buildoholics",
    href: "https://www.instagram.com/buildoholics/",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Buildoholics",
    href: "https://www.linkedin.com/in/buildoholics/",
  },
];

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isLoading) return; // Prevent spam clicks
    setIsLoading(true);

    if (!formRef.current) {
      setIsLoading(false);
      return;
    }

    try {
      if (!emailConfig.serviceId || !emailConfig.publicKey) {
        throw new Error("EmailJS configuration is missing");
      }

      // Send email to Buildoholics team (2420030246@klh.edu.in)
      await emailjs.sendForm(
        emailConfig.serviceId,
        emailConfig.buildoholicsTemplateId,
        formRef.current,
        emailConfig.publicKey
      );

      // Send auto-reply to user (if template is configured)
      if (emailConfig.templateId) {
        await emailjs.sendForm(
          emailConfig.serviceId,
          emailConfig.templateId,
          formRef.current,
          emailConfig.publicKey
        );
      }

      setIsLoading(false);
      setIsSubmitted(true);

      // Reset form
      formRef.current?.reset();

      toast({
        title: "Message sent!",
        description: "We'll get back to you within 24 hours.",
      });
    } catch (error) {
      console.error("EmailJS Error:", error);

      let errorMessage = "Failed to send message. Please try again.";

      if (error instanceof Error) {
        errorMessage = error.message;
      } else if (typeof error === 'object' && error !== null && 'text' in error) {
        errorMessage = (error as { text: string }).text;
      } else if (typeof error === 'string') {
        errorMessage = error;
      }

      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive",
      });

      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <section className="relative">
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-2xl mx-auto mb-16"
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-semibold tracking-[0.15em] uppercase bg-white/[0.05] text-[#4F8EF7] border border-[#4F8EF7]/20 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#4F8EF7]" />
                Contact Us
              </span>
              <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-6" style={{ fontFamily: "'Syne', sans-serif" }}>
                Let's Build{" "}
                <span className="gradient-text">Together</span>
              </h1>
              <p className="text-lg text-[#999]">
                Ready to start your project? We'd love to hear from you.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="lg:col-span-3"
              >
                <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm p-8 lg:p-10">
                  {isSubmitted ? (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 rounded-2xl bg-[#4F8EF7]/10 border border-[#4F8EF7]/20 flex items-center justify-center mx-auto mb-6">
                        <CheckCircle className="w-8 h-8 text-[#4F8EF7]" />
                      </div>
                      <h3 className="text-2xl font-semibold text-white mb-3" style={{ fontFamily: "'Syne', sans-serif" }}>
                        Message Sent!
                      </h3>
                      <p className="text-[#999] mb-6">
                        Thanks for reaching out. We'll get back to you within 24 hours.
                      </p>
                      <button
                        onClick={() => {
                          setIsSubmitted(false);
                          formRef.current?.reset();
                        }}
                        className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-white/[0.1] text-white text-sm font-medium hover:bg-white/[0.05] transition-all duration-300"
                      >
                        Send Another Message
                      </button>
                    </div>
                  ) : (
                    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="name" className="text-[#999] text-sm">Name</Label>
                          <Input
                            id="name"
                            name="Name"
                            placeholder="Your name"
                            required
                            className="bg-white/[0.03] border-white/[0.08] focus:border-[#4F8EF7] text-white placeholder:text-[#666] rounded-xl"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email" className="text-[#999] text-sm">Email</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="you@company.com"
                            required
                            className="bg-white/[0.03] border-white/[0.08] focus:border-[#4F8EF7] text-white placeholder:text-[#666] rounded-xl"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company" className="text-[#999] text-sm">Company</Label>
                        <Input
                          id="company"
                          name="company"
                          placeholder="Your company name"
                          className="bg-white/[0.03] border-white/[0.08] focus:border-[#4F8EF7] text-white placeholder:text-[#666] rounded-xl"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="message" className="text-[#999] text-sm">Message</Label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="Tell us about your project..."
                          rows={6}
                          required
                          className="bg-white/[0.03] border-white/[0.08] focus:border-[#4F8EF7] text-white placeholder:text-[#666] resize-none rounded-xl"
                        />
                      </div>
                      <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#4F8EF7] text-white text-sm font-bold uppercase tracking-wider hover:bg-[#3A7AE8] transition-all duration-300 cta-glow disabled:opacity-50 disabled:pointer-events-none"
                      >
                        <Send size={16} />
                        {isLoading ? "Sending..." : "Let's Build Together"}
                        <ArrowRight size={16} />
                      </button>
                    </form>
                  )}
                </div>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="lg:col-span-2 space-y-5"
              >
                <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-7">
                  <h3 className="text-sm font-semibold text-white mb-6 uppercase tracking-[0.15em]" style={{ fontFamily: "'Syne', sans-serif" }}>
                    Get in Touch
                  </h3>
                  <div className="space-y-5">
                    {contactInfo.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        className="flex items-center gap-4 group"
                      >
                        <div className="w-11 h-11 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center group-hover:bg-[#4F8EF7]/10 group-hover:border-[#4F8EF7]/20 transition-all duration-300">
                          <item.icon className="w-4 h-4 text-[#999] group-hover:text-[#4F8EF7] transition-colors" />
                        </div>
                        <div>
                          <p className="text-[12px] text-[#666] uppercase tracking-wider">
                            {item.label}
                          </p>
                          <p className="text-white text-sm font-medium group-hover:text-[#4F8EF7] transition-colors">
                            {item.value}
                          </p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-7">
                  <h3 className="text-sm font-semibold text-white mb-3 uppercase tracking-[0.15em]" style={{ fontFamily: "'Syne', sans-serif" }}>
                    Response Time
                  </h3>
                  <p className="text-[#999] text-sm leading-relaxed">
                    We typically respond within 24 hours on business days. For urgent matters,
                    reach out on Instagram or LinkedIn.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
