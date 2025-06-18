import { Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import PropTypes from 'prop-types';
import cvData from './content.json';
import DecryptedText from './blocks/TextAnimations/DecryptedText/DecryptedText';
import FadeContent from './blocks/Animations/FadeContent/FadeContent';


const Section = ({ title, children, className = "mb-6 sm:mb-8" }) => (
  <section className={className}>
    <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4 pb-2 border-b border-white/50">{title}</h3>
    {children}
  </section>
);

const SkillLevel = ({ level }) => (
  <div className="flex gap-1">
    {[...Array(3)].map((_, i) => (
      <div
        key={i}
        className={`w-2 h-2 rounded-full ${i < level ? 'bg-blue-500' : 'bg-gray-200'}`}
      />
    ))}
  </div>
);


Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

SkillLevel.propTypes = {
  level: PropTypes.number.isRequired
};


export const CV = () => {
  const { personalInfo, summary, skills, experience, education, additional } = cvData;

  return (
    <div className="w-full max-w-4xl mx-auto px-6 py-6 pb-8 sm:px-6 sm:py-6 sm:pb-10 lg:px-8 lg:py-8 lg:pb-12 bg-white bg-opacity-40 backdrop-blur-xl rounded-lg shadow-xl print:shadow-none">

      {/* Header */}
      <header className="mb-6 sm:mb-8">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 mb-4 sm:mb-6">

          {/* Photo */}
          <div className="flex-shrink-0">
            <div className="w-24 h-24 sm:w-32 sm:h-32 lg:w-36 lg:h-36 rounded-full overflow-hidden bg-gray-100 bg-opacity-70 border-4 border-white/20">
              <img src="/profile.png" alt="Profile" className="w-full h-full object-cover" />
            </div>
          </div>
  
          {/* Contact details */}
          <div className="flex-grow text-center sm:text-left">

            {/* Name & Title */}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-2">
              <DecryptedText text={personalInfo.name} animateOn="view" maxIterations={20} />
            </h1>
            <h2 className="text-lg sm:text-xl text-gray-600 mb-4">
              <DecryptedText text={personalInfo.title} animateOn="view" maxIterations={20} />
            </h2>

            <FadeContent blur={true} threshold={0} duration={200} delay={100}>
              <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 sm:gap-4 text-sm sm:text-base text-gray-600">
                <div className="flex items-center justify-center sm:justify-start gap-2">
                  <MapPin size={16} className="sm:w-[18px] sm:h-[18px]" />
                  <span>{personalInfo.location}</span>
                </div>
                <div className="flex items-center justify-center sm:justify-start gap-2">
                  <Phone size={16} className="sm:w-[18px] sm:h-[18px]" />
                  <span>{personalInfo.phone}</span>
                </div>
                <div className="flex items-center justify-center sm:justify-start gap-2">
                  <Mail size={16} className="sm:w-[18px] sm:h-[18px]" />
                  <a href={`mailto:${personalInfo.email}`} className="text-blue-600 hover:text-blue-800 break-all">
                    {personalInfo.email}
                  </a>
                </div>
                <div className="flex items-center justify-center sm:justify-start gap-2">
                  <Linkedin size={16} className="sm:w-[18px] sm:h-[18px]" />
                  <a href={`https://${personalInfo.linkedin}`} target="_blank" rel="noreferrer" className="text-blue-600 hover:text-blue-800 break-all">
                    {personalInfo.linkedin}
                  </a>
                </div>
                <div className="flex items-center justify-center sm:justify-start gap-2">
                  <Github size={16} className="sm:w-[18px] sm:h-[18px]" />
                  <a href={`https://${personalInfo.github}`} target="_blank" rel="noreferrer" className="text-blue-600 hover:text-blue-800 break-all">
                    {personalInfo.github}
                  </a>
                </div>
              </div>
            </FadeContent>
          </div>

        </div>
      </header>

      {/* Summary */}
      <FadeContent blur={true} threshold={0} duration={200} delay={200}>
        <Section title="Summary">
          {summary.paragraphs.map((paragraph, index) => (
            <p key={index} className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4">{paragraph}</p>
          ))}
        </Section>
      </FadeContent>

      {/* Skills */}
      <FadeContent blur={true} threshold={0} duration={200} delay={300}>
        <Section title="Skills">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
            <div className="lg:col-span-1">
              <h4 className="text-base sm:text-lg font-semibold mb-2">Technical Skills</h4>
              <div className="space-y-2">
                {skills.technical.map(([skill, level]) => (
                  <div key={skill} className="flex items-center justify-between">
                    <span className="text-sm sm:text-base text-gray-700 pr-2">{skill}</span>
                    <SkillLevel level={level} />
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-1 grid gap-4 sm:gap-6">
              <div>
                <h4 className="text-base sm:text-lg font-semibold mb-2">Archi. & Dev. Concepts</h4>
                <div className="space-y-2">
                  {skills.architectural.map(([skill, level]) => (
                    <div key={skill} className="flex items-center justify-between">
                      <span className="text-sm sm:text-base text-gray-700 pr-2">{skill}</span>
                      <SkillLevel level={level} />
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-base sm:text-lg font-semibold mb-2">Application Knowledge</h4>
                <div className="space-y-2">
                  {skills.application.map(([skill, level]) => (
                    <div key={skill} className="flex items-center justify-between">
                      <span className="text-sm sm:text-base text-gray-700 pr-2">{skill}</span>
                      <SkillLevel level={level} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="lg:col-span-1">
              <h4 className="text-base sm:text-lg font-semibold mb-2">Other Relevant Skills</h4>
              <div className="space-y-2">
                {skills.other.map(([skill, level]) => (
                  <div key={skill} className="flex items-center justify-between">
                    <span className="text-sm sm:text-base text-gray-700 pr-2">{skill}</span>
                    <SkillLevel level={level} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>
      </FadeContent>

      {/* Experience */}
      <FadeContent blur={true} threshold={0} duration={200} delay={400}>
        <Section title="Work Experience">
          <div className="space-y-6 sm:space-y-8">
            {experience.map((job, index) => (
              <div key={index} className="bg-white bg-opacity-40 rounded-lg border border-gray-200 p-4 sm:p-6 print:border-none print:p-0">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 gap-2 sm:gap-4">
                  <div className="flex-grow">
                    <h4 className="text-lg sm:text-xl font-semibold text-gray-800">{job.title}</h4>
                    <h5 className="text-base sm:text-lg text-gray-600">{job.company}</h5>
                  </div>
                  <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium self-start sm:self-auto whitespace-nowrap">
                    {job.period}
                  </span>
                </div>
                <div className="space-y-4 sm:space-y-6">
                  {job.sections.map((section, sIndex) => (
                    <div key={sIndex} className="bg-gray-200 bg-opacity-25 border border-gray-200 rounded-lg p-3 sm:p-4 print:bg-white print:p-0">
                      <h6 className="font-semibold text-gray-800 mb-2 sm:mb-3 text-sm sm:text-base">{section.title}</h6>
                      {section.items ? (
                        <ul className="list-disc pl-4 sm:pl-5 space-y-2 sm:space-y-3">
                          {section.items.map((item, iIndex) => (
                            <li key={iIndex} className="text-sm sm:text-base text-gray-700">{item}</li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-sm sm:text-base text-gray-700">{section.text}</p>
                      )}
                    </div>
                  ))}
                </div>
                {index < experience.length - 1 && (
                  <div className="h-0 w-full bg-gray-200 print:h-[2px] print:mt-6"></div>
                )}
              </div>
            ))}
          </div>
        </Section>
      </FadeContent>

      {/* Education */}
      <FadeContent blur={true} threshold={0} duration={200} delay={500}>
        <Section title="Education">
          <div>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-1 sm:gap-2">
              <div>
                <h4 className="text-lg sm:text-xl font-semibold text-gray-800">{education.degree}</h4>
                <h5 className="text-base sm:text-lg text-gray-600">{education.school}</h5>
              </div>
              {/* Don't display dates to avoid age discrimination? */}
              {/* <span className="text-gray-600">{education.period}</span> */}
            </div>
            <ul className="list-disc pl-4 sm:pl-5 space-y-1 sm:space-y-2 text-sm sm:text-base text-gray-700">
              {education.details.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
          </div>
        </Section>
      </FadeContent>

      {/* Additional Information */}
      <FadeContent blur={true} threshold={0} duration={200} delay={600}>
        <Section title="Additional Information" className="mb-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div className="grid gap-4 sm:gap-6">
              <div>
                <h4 className="text-base sm:text-lg font-semibold mb-2">Languages</h4>
                <ul className="space-y-1 text-sm sm:text-base text-gray-700">
                  {additional.languages.map((language, index) => (
                    <li key={index}>{language}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-base sm:text-lg font-semibold mb-2">Certifications</h4>
                <ul className="space-y-1 text-sm sm:text-base text-gray-700">
                  {additional.certifications.map(({ label, link }, index) => (
                    <li key={index}>
                      <a className="text-blue-600 hover:text-blue-800 break-words" href={link} target="_blank">{label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-semibold mb-2">Side Projects</h4>
              <div className="text-sm sm:text-base text-gray-700">
                <p className="font-semibold pb-1">
                  <a className="text-blue-600 hover:text-blue-800 break-words" href={additional.sideProjects.link} target="_blank">{additional.sideProjects.title}</a>
                </p>
                <p>{additional.sideProjects.description}</p>
              </div>
            </div>
          </div>
        </Section>
      </FadeContent>
    </div>
  );
};
