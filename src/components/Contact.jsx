/* eslint-disable react/no-unescaped-entities */
import {
  SiGithub,
  SiLinkedin,
  SiInstagram,
  SiTwitter,
  SiGmail,
} from "react-icons/si";
import { FaPhone } from "react-icons/fa";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import Vivek from "../assets/Vivek.png";

const emailServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const emailTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const emailPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!emailServiceId || !emailTemplateId || !emailPublicKey) {
      setSubmitStatus("configuration-error");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await emailjs.send(
        emailServiceId,
        emailTemplateId,
        formData,
        emailPublicKey,
      );
      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setSubmitStatus("error");
      console.error("Error sending email:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="p-5 mx-20 min-h-screen flex flex-col justify-center font-['Poppins'] max-sm:p-2 max-sm:mx-5"
    >
      <h1 className="text-primary-dark dark:text-white font-extrabold text-5xl text-center mb-16 max-sm:text-4xl max-sm:mb-10">
        Get In Touch
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12">
        {/* About Card */}
        <article
          className="group bg-gradient-to-br from-primary/10 to-primary-accent/10 dark:from-primary/30 dark:to-primary-accent/30 
          rounded-2xl shadow-lg p-8 max-sm:p-6
          transition-all duration-300 ease-smooth
          hover:shadow-2xl hover:scale-[1.01] hover:from-primary/15 hover:to-primary-accent/15 dark:hover:from-primary/35 dark:hover:to-primary-accent/35
          border border-transparent hover:border-primary/20 dark:hover:border-primary-accent/20
          flex flex-col items-center text-center lg:text-left lg:items-start"
        >
          {/* Profile Image */}
          <div className="mb-6 lg:mb-8">
            <div className="relative">
              <img
                src={Vivek}
                alt="Vivek Kumar - Backend Developer"
                className="h-40 w-40 max-sm:h-32 max-sm:w-32 rounded-full object-cover
                  ring-4 ring-primary/20 dark:ring-primary-accent/20
                  transition-all duration-500 ease-smooth
                  group-hover:scale-105 group-hover:ring-primary/40 dark:group-hover:ring-primary-accent/40
                  group-hover:shadow-2xl group-hover:shadow-primary/30 dark:group-hover:shadow-white/30"
                loading="lazy"
              />
              {/* Online status indicator */}
              <div className="absolute bottom-2 right-2 h-5 w-5 bg-green-500 rounded-full ring-4 ring-white dark:ring-gray-900 animate-pulse" />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 w-full">
            <h2 className="text-primary-dark dark:text-white font-bold text-2xl tracking-wide mb-3">
              Vivek Kumar
            </h2>
            <p className="text-primary-dark/90 dark:text-white/80 font-medium text-sm mb-4">
              Backend Developer | Full-Stack Builder
            </p>
            <p className="text-primary-dark/70 dark:text-white/70 leading-relaxed mb-6 max-w-md mx-auto lg:mx-0">
              I build secure, scalable APIs and full-stack applications with Node.js,
              TypeScript, PostgreSQL, MongoDB, and React. Let&apos;s build something reliable.
            </p>

            {/* Social Links */}
            <div className="flex gap-4 mb-6 justify-center lg:justify-start flex-wrap">
              {[
                {
                  icon: SiGithub,
                  href: "https://github.com/vivekk002",
                  label: "GitHub",
                },
                {
                  icon: SiLinkedin,
                  href: "https://www.linkedin.com/in/vivek1107",
                  label: "LinkedIn",
                },
                {
                  icon: SiInstagram,
                  href: "https://www.instagram.com/vivekrajput_1025/",
                  label: "Instagram",
                },
                {
                  icon: SiTwitter,
                  href: "https://twitter.com/vivekrajput1125",
                  label: "Twitter",
                },
                {
                  icon: SiGmail,
                  href: "mailto:vivekkumar.contacts@gmail.com",
                  label: "Email",
                },
                {
                  icon: FaPhone,
                  href: "tel:+919870977572",
                  label: "Call Vivek",
                },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="group/icon p-3 rounded-xl bg-primary/5 dark:bg-primary-accent/10 
                    text-primary-dark dark:text-white text-2xl
                    transition-all duration-300 hover:scale-110 hover:-translate-y-1
                    hover:bg-primary/10 dark:hover:bg-primary-accent/20
                    hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-accent"
                >
                  <Icon className="transition-transform group-hover/icon:rotate-12" />
                </a>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 flex-wrap justify-center lg:justify-start">
              <a
                href="https://drive.google.com/file/d/1YKYVaHUMjixdHOFEtNDD3ft0JwfbeihZ/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn px-6 py-3 bg-gradient-to-r from-primary to-primary-accent dark:from-white dark:to-primary 
                  font-semibold text-sm text-white dark:text-primary rounded-lg
                  transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/40 dark:hover:shadow-white/40
                  active:scale-95 focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-white"
              >
                📄 View Resume
              </a>
              <a
                href="https://github.com/vivekk002/myPortfolio.git"
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn px-6 py-3 bg-primary/10 dark:bg-primary-accent/10 
                  font-semibold text-sm text-primary-dark dark:text-white rounded-lg
                  flex items-center gap-2
                  transition-all duration-300 hover:scale-105 hover:bg-primary/20 dark:hover:bg-primary-accent/20
                  active:scale-95 focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-accent"
              >
                <SiGithub className="transition-transform group-hover/btn:rotate-12" />
                Star on GitHub
              </a>
            </div>
          </div>
        </article>

        {/* Contact Form Card */}
        <article
          className="bg-gradient-to-br from-primary/10 to-primary-accent/10 dark:from-primary/30 dark:to-primary-accent/30 
          rounded-2xl shadow-lg p-8 max-sm:p-6
          transition-all duration-300 ease-smooth
          hover:shadow-2xl hover:scale-[1.01] hover:from-primary/15 hover:to-primary-accent/15 dark:hover:from-primary/35 dark:hover:to-primary-accent/35
          border border-transparent hover:border-primary/20 dark:hover:border-primary-accent/20"
        >
          <h2 className="text-primary-dark dark:text-white font-bold text-2xl tracking-wide mb-2 text-center">
            Send a Message
          </h2>
          <p className="text-primary-dark/60 dark:text-white/60 text-sm text-center mb-6">
            Have a project in mind? Let's talk!
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label
                htmlFor="name"
                className="block text-primary-dark dark:text-white font-medium mb-2 text-sm"
              >
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                autoComplete="name"
                minLength={2}
                maxLength={100}
                className="w-full px-4 py-3 rounded-lg 
                  bg-white dark:bg-primary/20 
                  border-2 border-primary/20 dark:border-white/20
                  text-primary-dark dark:text-white 
                  focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-accent focus:border-transparent
                  transition-all duration-300 
                  placeholder-primary-dark/40 dark:placeholder-white/40"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-primary-dark dark:text-white font-medium mb-2 text-sm"
              >
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                autoComplete="email"
                maxLength={254}
                className="w-full px-4 py-3 rounded-lg 
                  bg-white dark:bg-primary/20 
                  border-2 border-primary/20 dark:border-white/20
                  text-primary-dark dark:text-white 
                  focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-accent focus:border-transparent
                  transition-all duration-300 
                  placeholder-primary-dark/40 dark:placeholder-white/40"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-primary-dark dark:text-white font-medium mb-2 text-sm"
              >
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                minLength={10}
                maxLength={2000}
                rows={5}
                className="w-full px-4 py-3 rounded-lg 
                  bg-white dark:bg-primary/20 
                  border-2 border-primary/20 dark:border-white/20
                  text-primary-dark dark:text-white 
                  focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-accent focus:border-transparent
                  transition-all duration-300 resize-none
                  placeholder-primary-dark/40 dark:placeholder-white/40"
                placeholder="Tell me about your project..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 bg-gradient-to-r from-primary to-primary-accent dark:from-white dark:to-primary 
                text-white dark:text-primary font-semibold text-base rounded-lg
                transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/40 dark:hover:shadow-white/40
                active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
                focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-white focus:ring-offset-2"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Sending...
                </span>
              ) : (
                "Send Message 📨"
              )}
            </button>

            {submitStatus === "success" && (
              <div role="status" className="p-4 bg-green-500/10 border border-green-500/30 text-green-700 dark:text-green-400 rounded-lg text-center text-sm font-medium animate-fade-in">
                ✅ Message sent successfully! I'll get back to you soon.
              </div>
            )}
            {submitStatus === "error" && (
              <div role="alert" className="p-4 bg-red-500/10 border border-red-500/30 text-red-700 dark:text-red-400 rounded-lg text-center text-sm font-medium animate-fade-in">
                ❌ Oops! Something went wrong. Please try again.
              </div>
            )}
            {submitStatus === "configuration-error" && (
              <div role="alert" className="p-4 bg-red-500/10 border border-red-500/30 text-red-700 dark:text-red-400 rounded-lg text-center text-sm font-medium animate-fade-in">
                The contact form is temporarily unavailable. Please email me directly.
              </div>
            )}
          </form>
        </article>
      </div>

      {/* Footer */}
      <footer className="text-primary-dark/70 dark:text-white/70 text-center text-sm tracking-wide max-sm:text-xs mt-8">
        Made with 💚 by{" "}
        <span className="font-semibold text-primary-dark dark:text-white">
          Vivek Kumar
        </span>{" "}
        & the Open Source Community
      </footer>
    </section>
  );
};

export default Contact;
