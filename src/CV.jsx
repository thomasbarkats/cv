import { Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const ModernCV = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white">
      {/* Header Section with Profile Picture */}
      <header className="mb-8">
        <div className="flex items-start gap-6 mb-6">
          <div className="flex-shrink-0">
            <div className="w-32 h-32 rounded-full overflow-hidden bg-gray-200">
              <img
                src="/src/assets/profile.png"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="flex-grow">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">Thomas BARKATS</h1>
            <h2 className="text-xl text-gray-600 mb-4">Software Engineer (web, Full-stack)</h2>

            <div className="flex flex-wrap gap-4 text-gray-600">
              <div className="flex items-center gap-2">
                <MapPin size={18} />
                <span>Toulouse, France</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={18} />
                <span>+33 (0)7 84 45 17 87</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={18} />
                <a href="mailto:thomasbarkats@gmail.com" className="text-blue-600 hover:text-blue-800">
                  thomasbarkats@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Linkedin size={18} />
                <a href="https://linkedin.com/in/thomas-barkats" target="_blank" rel="noreferrer" className="text-blue-600 hover:text-blue-800">
                  linkedin.com/in/thomas-barkats
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Github size={18} />
                <a href="https://github.com/thomasbarkats" target="_blank" rel="noreferrer" className="text-blue-600 hover:text-blue-800">
                  github.com/thomasbarkats
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Summary Section */}
      <section className="mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b">Summary</h3>
        <p className="text-gray-700 mb-4">
          👋 I&#39;m Thomas BARKATS, a passionate about software & engineering development with a strong foundation as a full-stack lead developer. I thrive on technical challenges and am constantly seeking opportunities to learn and grow. I have extensive experience in the world of JavaScript / TypeScript / Node.js, but am always open to exploring other languages, as I believe the key is understanding the logic, algorithms, and fundamentals behind the code.
        </p>
        <p className="text-gray-700">
          📈 In recent years, I have transitioned towards project management, where I&#39;ve enjoyed combining my technical knowledges with leadership and strategic planning. I am eager to continue down this path, as I find great satisfaction in guiding projects from conception to completion.
        </p>
      </section>

      {/* Skills Section */}
      <section className="mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b">Skills</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h4 className="text-lg font-semibold mb-2">Technical Skills</h4>
            <div className="space-y-2">
              {[
                ['JS / TS / NodeJS', 3],
                ['Angular 14+', 3],
                ['ReactJS', 3],
                ['HTML / CSS', 3],
                ['MongoDB', 3],
                ['SQL and related DB', 2],
                ['Bash / Linux', 2],
                ['Python 3+', 2],
                ['Java / Spring', 1],
              ].map(([skill, level]) => (
                <div key={skill} className="flex items-center justify-between">
                  <span className="text-gray-700">{skill}</span>
                  <div className="flex gap-1">
                    {[...Array(3)].map((_, i) => (
                      <div
                        key={i}
                        className={`w-2 h-2 rounded-full ${i < level ? 'bg-blue-500' : 'bg-gray-200'
                          }`}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-6">
            <div>
              <h4 className="text-lg font-semibold mb-2">Archi. & Dev. Concepts</h4>
              <div className="space-y-2">
                {[
                  ['API REST / RESTful', 3],
                  ['SOLID / DDD', 2],
                  ['CI/CD Principles', 1],
                  ['Unit Testing / TDD', 2],
                ].map(([skill, level]) => (
                  <div key={skill} className="flex items-center justify-between">
                    <span className="text-gray-700">{skill}</span>
                    <div className="flex gap-1">
                      {[...Array(3)].map((_, i) => (
                        <div
                          key={i}
                          className={`w-2 h-2 rounded-full ${i < level ? 'bg-blue-500' : 'bg-gray-200'
                            }`}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-2">Application Knowledge</h4>
              <div className="space-y-2">
                {[
                  ['Git / GitHub', 3],
                  ['JIRA / Confluence', 3],
                  ['OpenShift', 3],
                ].map(([skill, level]) => (
                  <div key={skill} className="flex items-center justify-between">
                    <span className="text-gray-700">{skill}</span>
                    <div className="flex gap-1">
                      {[...Array(3)].map((_, i) => (
                        <div
                          key={i}
                          className={`w-2 h-2 rounded-full ${i < level ? 'bg-blue-500' : 'bg-gray-200'
                            }`}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-2">Other Relevant Skills</h4>
            <div className="space-y-2">
              {[
                ['Project Management', 2],
                ['UX / UI Best practices', 2],
                ['Agile Scrum', 3],
              ].map(([skill, level]) => (
                <div key={skill} className="flex items-center justify-between">
                  <span className="text-gray-700">{skill}</span>
                  <div className="flex gap-1">
                    {[...Array(3)].map((_, i) => (
                      <div
                        key={i}
                        className={`w-2 h-2 rounded-full ${i < level ? 'bg-blue-500' : 'bg-gray-200'
                          }`}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b">Work Experience</h3>

        <div className="space-y-8">
          {/* Technical Lead Position */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h4 className="text-xl font-semibold text-gray-800">Technical Lead / Delivery & Management Support</h4>
                <h5 className="text-lg text-gray-600">CGI, Toulouse, FR</h5>
              </div>
              <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">2021-11 - Present</span>
            </div>

            <div className="space-y-6">
              {/* Various Activities Section */}
              <div className="bg-gray-50 rounded-lg p-4">
                <h6 className="font-semibold text-gray-800 mb-3">Enterprise Architecture projects (Airbus)</h6>
                <ul className="list-disc pl-5 space-y-3">
                  <li>Technical Leadership: Oversaw a cross-project development pool, including project assignments and the establishment of technical guidelines (team of 5 to 10 people).</li>
                  <li>Participation in the technical implementation from scratch of a new data hub and data quality management platform for Airbus Aircraft ; and to the organizational set-up.</li>
                  <li>Client Engagement/Relations: Acted as a Proxy Product Owner, engaging with the current client to explore new feature opportunities and drive project expansion. Facilitated regular updates and discussions to ensure client satisfaction and address any concerns.</li>
                  <li>Continued leading the development of &#34;MyPortfolio&#34; (team of 3 to 5 people) the data management platform for Airbus Aircraft, focusing on continuous improvement, technical oversight, enhanced development environments through DevOps practices such as continuous integration and deployment.</li>
                </ul>
              </div>

              {/* Enterprise Architecture Section */}
              <div className="bg-gray-50 rounded-lg p-4">
                <h6 className="font-semibold text-gray-800 mb-3">Enterprise Architecture Repository project (CGI side)</h6>
                <ul className="list-disc pl-5 space-y-3">
                  <li>Delivery Follow-up: Monitoring of operational and financial delivery, and regular contract renewal (service catalog model), with the support and under the responsibility of the scope project manager.</li>
                  <li>Supported Director in creating delivery tracking templates tailored to our contractual model (service catalog), that can be used to standardize and improve our follow-up on all our scope.</li>
                </ul>
              </div>

              {/* Parallel Activities */}
              <div className="bg-gray-50 rounded-lg p-4">
                <h6 className="font-semibold text-gray-800 mb-3">Additional Responsibilities (CGI)</h6>
                <p className="text-gray-700">Support for my VP in our sector as training manager. Follow-up of a training budget and a training plan for our members (up to 60 members).</p>
              </div>
            </div>
          </div>

          {/* Full-stack Developer Position */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h4 className="text-xl font-semibold text-gray-800">Full-stack Developer / Lead Support</h4>
                <h5 className="text-lg text-gray-600">CGI, Toulouse, FR</h5>
              </div>
              <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">2018-12 - 2021-11</span>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <h6 className="font-semibold text-gray-800 mb-3">MyPortfolio Platform Development</h6>
              <ul className="list-disc pl-5 space-y-3">
                <li>Full-stack Development: Led front-end and back-end web development tasks using contributing to both the build and run phases.</li>
                <li>Acted as Lead Developer and Scrum Master role in a small Agile team (team of 3 to 5 people), facilitating sprints and maintaining direct communication with customers.</li>
                <li>Deployment and Configuration: Managed solution deployment, including server and route configurations, utilizing OpenShift for a streamlined deployment process.</li>
                <li>User Support and Documentation: Established user support processes and authored comprehensive user documentation to enhance platform usability.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b">Education</h3>
        <div>
          <div className="flex justify-between items-start mb-2">
            <div>
              <h4 className="text-xl font-semibold text-gray-800">Digital Application Designer & Developer</h4>
              <h5 className="text-lg text-gray-600">IPI, école d&#39;informatique (bachelor&#39;s degree)</h5>
            </div>
            <span className="text-gray-600">2018 - 2021</span>
          </div>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>One of the only schools to offer a work-study program from the 1st year</li>
            <li>Design and development of web / mobile / desktop applications (eg. React / Java / Python)</li>
            <li>Network & security concepts, algorithmic, and Computer Science in general</li>
          </ul>
        </div>
      </section>

      {/* Additional Information */}
      <section>
        <h3 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b">Additional Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="grid gap-6">
            <div>
              <h4 className="text-lg font-semibold mb-2">Languages</h4>
              <ul className="space-y-1 text-gray-700">
                <li>French (Native)</li>
                <li>English (Business Level, TOEIC)</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-2">Certifications</h4>
              <ul className="space-y-1 text-gray-700">
                <li>Certification Scrum Master PSM I.</li>
              </ul>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-2">Side Projects</h4>
            <div className="text-gray-700">
              <p className="font-semibold">Yasui (npmjs.com/yasui)</p>
              <p>A small framework built from-scratch over Express – inspired by NestJS for concepts – facilitating Node.js API setup.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ModernCV;
