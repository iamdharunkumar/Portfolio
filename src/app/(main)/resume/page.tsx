import SharedLayout from "@/components/shared-layout";

export default function ResumePage() {
  return (
    <SharedLayout currentPage="resume">
      <div className="flex flex-col justify-center px-16 min-h-[calc(100vh-200px)]">
        <div className="space-y-12">
          {/* Header Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <span className="text-gray-400 text-sm tracking-widest">RESUME</span>
              <div className="h-px bg-[var(--overall-color)] w-1/6"></div>
            </div>
            <h2 className="text-3xl font-bold text-gray-300">MY RESUME</h2>
          </div>

          {/* Experience Section */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-[var(--overall-color)] border-b border-gray-700 pb-2">
              Experience
            </h3>
            
            <div className="space-y-6">
              <div className="border-l-4 border-[var(--overall-color)] pl-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-xl font-semibold text-gray-300">Software Development Engineer</h4>
                    <p className="text-[var(--overall-color)] font-medium">TCS</p>
                  </div>
                  <span className="text-gray-500 text-sm">2023 - Present</span>
                </div>
                <p className="text-gray-400 mt-2">
                  Specializing in backend development, microservices, and cloud technologies like AWS. 
                  Expertise in Java, databases, API development, and scalable architectures.
                </p>
              </div>
            </div>
          </div>

          {/* Education Section */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-[var(--overall-color)] border-b border-gray-700 pb-2">
              Education
            </h3>
            
            <div className="space-y-6">
              <div className="border-l-4 border-[var(--overall-color)] pl-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-xl font-semibold text-gray-300">Computer Science Engineering</h4>
                    <p className="text-[var(--overall-color)] font-medium">Undergraduate Degree</p>
                  </div>
                  <span className="text-gray-500 text-sm">2020 - 2024</span>
                </div>
                <p className="text-gray-400 mt-2">
                  Explored machine learning, cloud computing, and software development. 
                  Focused on building secure, high-performance, and impactful solutions.
                </p>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-[var(--overall-color)] border-b border-gray-700 pb-2">
              Skills
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-gray-300">Programming Languages</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300">Java</span>
                  <span className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300">JavaScript</span>
                  <span className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300">Python</span>
                  <span className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300">TypeScript</span>
                </div>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-gray-300">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300">AWS</span>
                  <span className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300">Docker</span>
                  <span className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300">Kubernetes</span>
                  <span className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300">React</span>
                </div>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-gray-300">Databases</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300">MySQL</span>
                  <span className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300">PostgreSQL</span>
                  <span className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300">MongoDB</span>
                  <span className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300">Redis</span>
                </div>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-gray-300">Tools & Practices</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300">Git</span>
                  <span className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300">Jenkins</span>
                  <span className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300">Agile</span>
                  <span className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300">CI/CD</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SharedLayout>
  );
}
