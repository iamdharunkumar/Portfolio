"use client";

import SharedLayout from "@/components/shared-layout";
import { Mail, Phone, Share2, User, Linkedin, Instagram, Facebook, Github, CheckCircle, AlertCircle } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormStatus {
  type: 'idle' | 'loading' | 'success' | 'error';
  message: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [formStatus, setFormStatus] = useState<FormStatus>({
    type: 'idle',
    message: ''
  });
  const [currentDateTime, setCurrentDateTime] = useState("");

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const validateForm = (): string | null => {
    if (!formData.name.trim()) return "Name is required";
    if (!formData.email.trim()) return "Email is required";
    if (!formData.subject.trim()) return "Subject is required";
    if (!formData.message.trim()) return "Message is required";
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) return "Please enter a valid email address";
    
    return null;
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const validationError = validateForm();
    if (validationError) {
      setFormStatus({
        type: 'error',
        message: validationError
      });
      return;
    }

    setFormStatus({ type: 'loading', message: 'Sending message...' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setFormStatus({
          type: 'success',
          message: 'Message sent successfully! I\'ll get back to you soon.'
        });
        // Reset form
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: ""
        });
      } else {
        setFormStatus({
          type: 'error',
          message: result.error || 'Failed to send message. Please try again.'
        });
      }
    } catch {
      setFormStatus({
        type: 'error',
        message: 'Network error. Please check your connection and try again.'
      });
    }
  };

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
                      <h3 className="text-lg font-semibold text-gray-300 mb-2">I&apos;m Based In</h3>
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
                      <Link href="https://www.instagram.com/dharun._72/?igsh=MTRzYjEyNDVieHd5#" target="_blank" rel="noopener noreferrer">
                  <Instagram className="w-5 h-5 text-[var(--overall-color)] hover:scale-110 transition-transform cursor-pointer" />
                </Link>
                <Link href="https://www.linkedin.com/in/iamdharunkumar" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5 text-[var(--overall-color)] hover:scale-110 transition-transform cursor-pointer" />
                </Link>
                <Link href="https://github.com/iamdharunkumar" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5 text-[var(--overall-color)] hover:scale-110 transition-transform cursor-pointer" />
                </Link>
                <Link href="https://www.facebook.com/dharun.kumar.722" target="_blank" rel="noopener noreferrer">
                  <Facebook className="w-5 h-5 text-[var(--overall-color)] hover:scale-110 transition-transform cursor-pointer" />
                </Link>
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
                  Curious about my work? 💡 Have questions about something you saw in my portfolio? 🖼️ I&apos;m always happy to chat 💬
                </p>
                <p className="text-gray-400 text-lg">
                  Whether you&apos;re just browsing 👀, looking for inspiration ✨, or thinking about how we might collaborate 🤝 feel free to reach out.
                </p>
                <p className="text-gray-400 text-lg">
                  I&apos;d love to hear your thoughts 💭, answer your questions ?, or just connect and exchange ideas 🔄
                </p>
                <p className="text-gray-400 text-lg">
                  Drop me a message anytime ✉️ — I&apos;m all ears 👂
                </p>
              </div>

              {/* Right Column - Contact Form */}
              <div className="space-y-6">
                {/* Status Message */}
                {formStatus.type !== 'idle' && (
                  <div className={`p-4 rounded-lg flex items-center space-x-3 ${
                    formStatus.type === 'success' 
                      ? 'bg-green-900/20 border border-green-700 text-green-300' 
                      : formStatus.type === 'error'
                      ? 'bg-red-900/20 border border-red-700 text-red-300'
                      : 'bg-blue-900/20 border border-blue-700 text-blue-300'
                  }`}>
                    {formStatus.type === 'success' ? (
                      <CheckCircle className="w-5 h-5 flex-shrink-0" />
                    ) : formStatus.type === 'error' ? (
                      <AlertCircle className="w-5 h-5 flex-shrink-0" />
                    ) : (
                      <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin flex-shrink-0"></div>
                    )}
                    <span className="text-sm">{formStatus.message}</span>
                  </div>
                )}

                <form onSubmit={handleSendMessage} className="space-y-6">
                  <div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      className="w-full px-4 py-3 bg-transparent border-b border-gray-700 text-gray-300 placeholder-gray-500 focus:outline-none focus:border-b-[var(--overall-color)] transition-colors"
                      placeholder="Your Name"
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      disabled={formStatus.type === 'loading'}
                    />
                  </div>
                  
                  <div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      className="w-full px-4 py-3 bg-transparent border-b border-gray-700 text-gray-300 placeholder-gray-500 focus:outline-none focus:border-b-[var(--overall-color)] transition-colors"
                      placeholder="Your Email"
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      disabled={formStatus.type === 'loading'}
                    />
                  </div>
                  
                  <div>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      className="w-full px-4 py-3 bg-transparent border-b border-gray-700 text-gray-300 placeholder-gray-500 focus:outline-none focus:border-b-[var(--overall-color)] transition-colors"
                      placeholder="Subject"
                      onChange={(e) => handleInputChange('subject', e.target.value)}
                      disabled={formStatus.type === 'loading'}
                    />
                  </div>
                  
                  <div>
                    <textarea
                      name="message"
                      value={formData.message}
                      rows={6}
                      className="w-full px-4 py-3 bg-transparent border-b border-gray-700 text-gray-300 placeholder-gray-500 focus:outline-none focus:border-b-[var(--overall-color)] transition-colors resize-none"
                      placeholder="Message"
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      disabled={formStatus.type === 'loading'}
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={formStatus.type === 'loading'}
                    className="w-full px-6 py-3 bg-[var(--overall-color)] text-black font-semibold rounded-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {formStatus.type === 'loading' ? 'Sending...' : 'Send Message'}
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
