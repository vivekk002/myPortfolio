/* eslint-disable react/no-unescaped-entities */
import {
  SiGithub,
  SiLinkedin,
  SiInstagram,
  SiTwitter,
  SiGmail,
} from "react-icons/si";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import Vivek from "../assets/Vivek.png";

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
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await emailjs.send(
        "service_t8pyqed",
        "template_fac2z4t",
        formData,
        "JfSxIXTlTgFSl1IMD"
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
    <>
      <section
        id="contact"
        className="EXPERIENCE p-5 min-h-screen flex flex-col justify-center font-['Poppins'] max-sm:p-2"
      >
        <div className="flex gap-8 max-sm:flex-col">
          <div
            className="bg-gradient-to-br from-primary/5 to-primary-accent/5 dark:from-primary/20 dark:to-primary-accent/20 rounded-2xl shadow-lg WRAPPER mx-2 flex justify-between p-7 mb-7 max-sm:flex-col-reverse max-sm:p-2
            transition-all duration-300 ease-smooth
            hover:shadow-xl hover:scale-[1.01] hover:from-primary/10 hover:to-primary-accent/10 dark:hover:from-primary/30 dark:hover:to-primary-accent/30"
          >
            <div className="ABOUT p-7 flex-1">
              <h2 className="text-primary dark:text-white font-semibold leading-7 text-xl tracking-wider max-sm:text-center">
                Vivek Kumar
              </h2>
              <p className="text-primary/70 dark:text-white/90 leading-[30.8px] mt-7 max-w-[400px] max-sm:text-center">
                Passionate Full-Stack Developer with expertise in the MERN
                stack, building scalable web applications. Driven by a love for
                technology and problem-solving. 🚀
              </p>
              <div className="SOCIALS text-primary dark:text-white text-2xl flex gap-7 mt-5 max-sm:justify-evenly">
                <a
                  href="https://github.com/vivekk002"
                  className="transition-all duration-300 hover:scale-110 hover:text-primary-accent/80 dark:hover:text-white/80"
                >
                  <SiGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/vivek1107"
                  className="transition-all duration-300 hover:scale-110 hover:text-primary-accent/80 dark:hover:text-white/80"
                >
                  <SiLinkedin />
                </a>
                <a
                  href="https://www.instagram.com/vivekrajput_1025/"
                  className="transition-all duration-300 hover:scale-110 hover:text-primary-accent/80 dark:hover:text-white/80"
                >
                  <SiInstagram />
                </a>
                <a
                  href="https://twitter.com/silent_saffer"
                  className="transition-all duration-300 hover:scale-110 hover:text-primary-accent/80 dark:hover:text-white/80"
                >
                  <SiTwitter />
                </a>
                <a
                  href="mailto:vivekkumar.akvk@gmail.com"
                  className="transition-all duration-300 hover:scale-110 hover:text-primary-accent/80 dark:hover:text-white/80"
                >
                  <SiGmail />
                </a>
              </div>
              <div className="flex gap-5 max-sm:justify-center">
                <button
                  className="py-3 px-4 bg-gradient-to-r from-primary to-primary-accent dark:from-white dark:to-primary 
                  font-medium text-[12px] text-primary-accent dark:text-primary outline-none mt-10 mr-3 rounded
                  transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/30 dark:hover:shadow-white/30
                  active:scale-95"
                >
                  <a href="https://drive.google.com/file/d/1ZlOHq-1R9bn6CgRWm2R1_nzFRsD5VC9f/view?usp=sharing">
                    Resume
                  </a>
                </button>
                <button
                  className="py-3 px-4 bg-gradient-to-r from-primary to-primary-accent dark:from-white dark:to-primary 
                  font-medium text-[12px] text-primary-accent dark:text-primary outline-none mt-10 mr-3 rounded
                  transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/30 dark:hover:shadow-white/30
                  active:scale-95"
                >
                  <a
                    href="https://github.com/vivekk002/myPortfolio.git"
                    className="flex gap-2 items-center justify-center"
                  >
                    <SiGithub />
                    Star
                  </a>
                </button>
              </div>
            </div>

            <div className="IMG p-0 max-sm:grid max-sm:place-content-center flex-1 flex justify-center items-center">
              <img
                src={Vivek}
                alt="Vivek Kumar"
                className="h-[200px] max-sm:h-[150px] rounded-full
                  transition-all duration-300 ease-smooth
                  hover:scale-110 hover:shadow-xl hover:shadow-primary/30 dark:hover:shadow-white/30"
              />
            </div>
          </div>

          <div
            className="bg-gradient-to-br from-primary/5 to-primary-accent/5 dark:from-primary/20 dark:to-primary-accent/20 rounded-2xl shadow-lg p-7 flex-1
            transition-all duration-300 ease-smooth
            hover:shadow-xl hover:scale-[1.01] hover:from-primary/10 hover:to-primary-accent/10 dark:hover:from-primary/30 dark:hover:to-primary-accent/30"
          >
            <h2 className="text-primary dark:text-white font-semibold text-xl tracking-wider mb-6 text-center">
              Get in Touch
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-primary dark:text-white mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-primary-accent/5 dark:bg-primary/10 border border-primary/20 dark:border-white/30
                    text-primary dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-accent/50 dark:focus:ring-white/50
                    transition-all duration-300 placeholder-primary/50 dark:placeholder-white/50"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-primary dark:text-white mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-primary-accent/5 dark:bg-primary/10 border border-primary/20 dark:border-white/30
                    text-primary dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-accent/50 dark:focus:ring-white/50
                    transition-all duration-300 placeholder-primary/50 dark:placeholder-white/50"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-primary dark:text-white mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg bg-primary-accent/5 dark:bg-primary/10 border border-primary/20 dark:border-white/30
                    text-primary dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-accent/50 dark:focus:ring-white/50
                    transition-all duration-300 resize-none placeholder-primary/50 dark:placeholder-white/50"
                  placeholder="Your message here..."
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 bg-gradient-to-r from-primary to-primary-accent dark:from-white dark:to-primary 
                  text-primary-accent dark:text-primary font-medium rounded-lg
                  transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/30 dark:hover:shadow-white/30
                  active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
              {submitStatus === "success" && (
                <p className="text-primary-accent/80 dark:text-white/90 text-center mt-2">
                  Message sent successfully! I'll get back to you soon.
                </p>
              )}
              {submitStatus === "error" && (
                <p className="text-primary-accent/80 dark:text-white/90 text-center mt-2">
                  Oops! Something went wrong. Please try again later.
                </p>
              )}
            </form>
          </div>
        </div>

        <p className="text-primary dark:text-white mx-2 text-center capitalize tracking-widest max-sm:text-sm p-2">
          made with 💚 by Vivek Kumar & the Open Source Community
        </p>
      </section>
    </>
  );
};
export default Contact;
