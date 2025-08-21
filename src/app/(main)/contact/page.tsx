"use client";

import SharedLayout from "@/components/shared-layout";
import { Mail, Phone, MapPin, Share2, User, Clock, Linkedin, Instagram, Facebook, Twitter } from "lucide-react";
import { useEffect, useState } from "react";

export default function ContactPage() {
  const [currentDateTime, setCurrentDateTime] = useState("");

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const options = {
        weekday: 'short' as const,
        month: 'short' as const,
        day: '2-digit' as const,
        year: 'numeric' as const,
        hour: '2-digit' as const,
        minute: '2-digit' as const,
        second: '2-digit' as const,
        hour12: true as const
      };
      
      const formattedDate = now.toLocaleDateString('en-US', options);
      const timezone = 'GMT+5.5';
      setCurrentDateTime(`${formattedDate} (${timezone})`);
    };

    // Update immediately
    updateDateTime();
    
    // Update every second
    const interval = setInterval(updateDateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <SharedLayout currentPage="contact">
      <div className=" sm:px-8 md:px-16">
      <div className="flex flex-col justify-center  min-h-[calc(100vh-200px)] mt-10">
        <div className="space-y-16">
          {/* CONTACT ME Section */}
          <div className="space-y-4">
          <div className="flex items-center space-x-4">
              <span className="text-gray-400 text-sm tracking-widest">CONTACT</span>
              <div className="h-px bg-[var(--overall-color)] w-1/6"></div>
            </div>
            <h2 className="text-3xl font-bold text-gray-300">CONTACT ME</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Column */}
              <div className="space-y-8">
                {/* I'm Based In Card */}
                <div className="bg-black backdrop-blur-sm border border-gray-700 rounded-xl p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center flex-shrink-0">
                      <User className="w-6 h-6 text-[var(--overall-color)]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-300 mb-2">I'm Based In</h3>
                      <div className="flex items-center space-x-2 ">
                      <p className="text-gray-400">Tamilnadu, India</p>
                      <p className="text-gray-400">{currentDateTime}</p>
                      </div>
                      
                    </div>
                  </div>
                </div>

                {/* Email Me Card */}
                <div className="bg-black backdrop-blur-sm border border-gray-700 rounded-xl p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-[var(--overall-color)]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-300 mb-2">Email Me</h3>
                      <p className="text-gray-400">dev.dharunkumar@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-8">
                {/* Social Space BETA Card */}
                <div className="bg-black backdrop-blur-sm border border-gray-700 rounded-xl p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center flex-shrink-0">
                      <Share2 className="w-6 h-6 text-[var(--overall-color)]" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h3 className="text-lg font-semibold text-gray-300">Social Space</h3>
                      </div>
                      <div className="flex space-x-3">
                      <button className="cursor-pointer">
                  <Twitter className="w-5 h-5 text-[var(--overall-color)]" />
                </button>
                <button className="cursor-pointer">
                  <Facebook className="w-5 h-5 text-[var(--overall-color)]" />
                </button>
                <button className="cursor-pointer">
                  <Instagram className="w-5 h-5 text-[var(--overall-color)]" />
                </button>
                <button className="cursor-pointer ">
                  <Linkedin className="w-5 h-5 text-[var(--overall-color)]" />
                </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Call Me Card */}
                  <div className="bg-black backdrop-blur-sm border border-gray-700 rounded-xl p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-[var(--overall-color)]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-300 mb-2">Call Me</h3>
                      <p className="text-gray-400">+91 82205 88049</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* LEAVE A MESSAGE Section */}
          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <span className="text-gray-400 text-sm tracking-widest">CONNECT</span>
              <div className="h-px bg-[var(--overall-color)] w-1/6"></div>
            </div>
            <h2 className="text-3xl font-bold text-gray-300">LEAVE A MESSAGE</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Left Column - Descriptive Text */}
              <div className="space-y-6">
                <div className="text-4xl font-bold text-gray-300">
                  Hello 👋
                </div>
                <p className="text-gray-400 text-lg">
                  Thanks for stopping by.
                </p>
                <p className="text-gray-400 text-lg">
                  Curious about my work? 💡 Have questions about something you saw in my portfolio? 🖼️ I'm always happy to chat 💬
                </p>
                <p className="text-gray-400 text-lg">
                  Whether you're just browsing 👀, looking for inspiration ✨, or thinking about how we might collaborate 🤝 feel free to reach out.
                </p>
                <p className="text-gray-400 text-lg">
                  I'd love to hear your thoughts 💭, answer your questions ?, or just connect and exchange ideas 🔄
                </p>
                <p className="text-gray-400 text-lg">
                  Drop me a message anytime ✉️ — I'm all ears 👂
                </p>
              </div>

              {/* Right Column - Contact Form */}
              <div className="space-y-6">
                <form className="space-y-6">
                  <div>
                                          <input
                        type="text"
                        name="name"
                        className="w-full px-4 py-3 bg-transparent border-b border-gray-700 text-gray-300 placeholder-gray-500 focus:outline-none focus:border-b-[var(--overall-color)] transition-colors"
                        placeholder="Your Name"
                      />
                  </div>
                  
                  <div>
                                          <input
                        type="email"
                        name="email"
                        className="w-full px-4 py-3 bg-transparent border-b border-gray-700 text-gray-300 placeholder-gray-500 focus:outline-none focus:border-b-[var(--overall-color)] transition-colors"
                        placeholder="Your Email"
                      />
                  </div>
                  
                  <div>
                                          <input
                        type="text"
                        name="subject"
                        className="w-full px-4 py-3 bg-transparent border-b border-gray-700 text-gray-300 placeholder-gray-500 focus:outline-none focus:border-b-[var(--overall-color)] transition-colors"
                        placeholder="Subject"
                      />
                  </div>
                  
                  <div>
                                          <textarea
                        name="message"
                        rows={6}
                        className="w-full px-4 py-3 bg-transparent border-b border-gray-700 text-gray-300 placeholder-gray-500 focus:outline-none focus:border-b-[var(--overall-color)] transition-colors resize-none"
                        placeholder="Message"
                      ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-[var(--overall-color)] text-black font-semibold rounded-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </SharedLayout>
  );
}
