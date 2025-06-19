import PropTypes from 'prop-types';
import cvData from '../content.json';
import { CVHeader } from '../components/cv/CVHeader';
import { FadeContentPrintable } from '../components/FadeContentPrintable';
import { Section } from '../components/common/Section';
import { SkillLevel } from '../components/common/SkillLevel';
import { useThemeStyles } from '../hooks/useThemeStyles';
import { usePageTitle } from '../hooks/usePageTitle';

export const CVPage = ({ isDark }) => {
  const { personalInfo, summary, skills, experience, education, additional } = cvData;
  const { 
    getTextColor, 
    link,
    cardBg,
    mainBg,
    borderColor,
    nestedBg,
    badgeBg 
  } = useThemeStyles(isDark);

  usePageTitle(`${personalInfo.name} - CV`);

  return (
    <div className={`w-full max-w-4xl mx-auto px-6 py-6 pb-8 sm:px-6 sm:py-6 sm:pb-10 lg:px-8 lg:py-8 lg:pb-12 backdrop-blur-2xl rounded-lg shadow-xl print:shadow-none transition-all duration-300 ${mainBg}`}>

      {/* Header */}
      <CVHeader
        personalInfo={personalInfo}
        profileSrc="https://raw.githubusercontent.com/thomasbarkats/assets/refs/heads/main/personal-website/profile-cv.png"
        isDark={isDark}
      />

      {/* Summary */}
      <FadeContentPrintable blur={true} threshold={0} duration={200} delay={200}>
        <Section title="Summary" isDark={isDark}>
          {summary.paragraphs.map((paragraph, index) => (
            <p key={index} className={`text-sm sm:text-base mb-3 sm:mb-4 transition-colors duration-300 ${getTextColor('body')}`}>
              {paragraph}
            </p>
          ))}
        </Section>
      </FadeContentPrintable>

      {/* Skills */}
      <FadeContentPrintable blur={true} threshold={0} duration={200} delay={300}>
        <Section title="Skills" isDark={isDark}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
            <div className="lg:col-span-1">
              <h4 className={`text-base sm:text-lg font-semibold mb-2 transition-colors duration-300 ${getTextColor('primary')}`}>
                Technical Skills
              </h4>
              <div className="space-y-2">
                {skills.technical.map(([skill, level]) => (
                  <div key={skill} className="flex items-center justify-between">
                    <span className={`text-sm sm:text-base pr-2 transition-colors duration-300 ${getTextColor('body')}`}>
                      {skill}
                    </span>
                    <SkillLevel level={level} isDark={isDark} />
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-1 grid gap-4 sm:gap-6">
              <div>
                <h4 className={`text-base sm:text-lg font-semibold mb-2 transition-colors duration-300 ${getTextColor('primary')}`}>
                  Archi. & Dev. Concepts
                </h4>
                <div className="space-y-2">
                  {skills.architectural.map(([skill, level]) => (
                    <div key={skill} className="flex items-center justify-between">
                      <span className={`text-sm sm:text-base pr-2 transition-colors duration-300 ${getTextColor('body')}`}>
                        {skill}
                      </span>
                      <SkillLevel level={level} isDark={isDark} />
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className={`text-base sm:text-lg font-semibold mb-2 transition-colors duration-300 ${getTextColor('primary')}`}>
                  Application Knowledge
                </h4>
                <div className="space-y-2">
                  {skills.application.map(([skill, level]) => (
                    <div key={skill} className="flex items-center justify-between">
                      <span className={`text-sm sm:text-base pr-2 transition-colors duration-300 ${getTextColor('body')}`}>
                        {skill}
                      </span>
                      <SkillLevel level={level} isDark={isDark} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="lg:col-span-1">
              <h4 className={`text-base sm:text-lg font-semibold mb-2 transition-colors duration-300 ${getTextColor('primary')}`}>
                Other Relevant Skills
              </h4>
              <div className="space-y-2">
                {skills.other.map(([skill, level]) => (
                  <div key={skill} className="flex items-center justify-between">
                    <span className={`text-sm sm:text-base pr-2 transition-colors duration-300 ${getTextColor('body')}`}>
                      {skill}
                    </span>
                    <SkillLevel level={level} isDark={isDark} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>
      </FadeContentPrintable>

      {/* Experience */}
      <FadeContentPrintable fixMt={true} blur={true} threshold={0} duration={200} delay={400}>
        <Section title="Work Experience" isDark={isDark}>
          <div className="space-y-6 sm:space-y-8">
            {experience.map((job, index) => (
              <div key={index} className={`rounded-lg border p-4 sm:p-6 print:border-none print:p-0 transition-all duration-300 ${cardBg} ${borderColor}`}>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 gap-2 sm:gap-4">
                  <div className="flex-grow">
                    <h4 className={`text-lg sm:text-xl font-semibold transition-colors duration-300 ${getTextColor('primary')}`}>
                      {job.title}
                    </h4>
                    <h5 className={`text-base sm:text-lg transition-colors duration-300 ${getTextColor('secondary')}`}>
                      {job.company}
                    </h5>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium self-start sm:self-auto whitespace-nowrap transition-colors duration-300 ${badgeBg}`}>
                    {job.period}
                  </span>
                </div>
                <div className="space-y-4 sm:space-y-6">
                  {job.sections.map((section, sIndex) => (
                    <div key={sIndex} className={`border rounded-lg p-3 sm:p-4 print:bg-white print:p-0 transition-all duration-300 ${nestedBg}`}>
                      <h6 className={`font-semibold mb-2 sm:mb-3 text-sm sm:text-base transition-colors duration-300 ${getTextColor('primary')}`}>
                        {section.title}
                      </h6>
                      {section.items ? (
                        <ul className="list-disc pl-4 sm:pl-5 space-y-2 sm:space-y-3">
                          {section.items.map((item, iIndex) => (
                            <li key={iIndex} className={`text-sm sm:text-base transition-colors duration-300 ${getTextColor('body')}`}>
                              {item}
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className={`text-sm sm:text-base transition-colors duration-300 ${getTextColor('body')}`}>
                          {section.text}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
                {index < experience.length - 1 && (
                  <div className={`h-0 w-full print:h-[2px] print:mt-6 transition-colors duration-300 ${
                    isDark ? 'bg-gray-600' : 'bg-gray-200'
                  }`}></div>
                )}
              </div>
            ))}
          </div>
        </Section>
      </FadeContentPrintable>

      {/* Education */}
      <FadeContentPrintable fixMt={true} blur={true} threshold={0} duration={200} delay={500}>
        <Section title="Education" isDark={isDark}>
          <div>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-1 sm:gap-2">
              <div>
                <h4 className={`text-lg sm:text-xl font-semibold transition-colors duration-300 ${getTextColor('primary')}`}>
                  {education.degree}
                </h4>
                <h5 className={`text-base sm:text-lg transition-colors duration-300 ${getTextColor('secondary')}`}>
                  {education.school}
                </h5>
              </div>
            </div>
            <ul className="list-disc pl-4 sm:pl-5 space-y-1 sm:space-y-2 text-sm sm:text-base">
              {education.details.map((detail, index) => (
                <li key={index} className={`transition-colors duration-300 ${getTextColor('body')}`}>
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        </Section>
      </FadeContentPrintable>

      {/* Additional Information */}
      <FadeContentPrintable blur={true} threshold={0} duration={200} delay={600}>
        <Section title="Additional Information" className="mb-0" isDark={isDark}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div className="grid gap-4 sm:gap-6">
              <div>
                <h4 className={`text-base sm:text-lg font-semibold mb-2 transition-colors duration-300 ${getTextColor('primary')}`}>
                  Languages
                </h4>
                <ul className={`space-y-1 text-sm sm:text-base transition-colors duration-300 ${getTextColor('body')}`}>
                  {additional.languages.map((language, index) => (
                    <li key={index}>{language}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className={`text-base sm:text-lg font-semibold mb-2 transition-colors duration-300 ${getTextColor('primary')}`}>
                  Certifications
                </h4>
                <ul className={`space-y-1 text-sm sm:text-base transition-colors duration-300 ${getTextColor('body')}`}>
                  {additional.certifications.map(({ label, link: certLink }, index) => (
                    <li key={index}>
                      <a className={`break-words transition-colors duration-300 ${link}`} href={certLink} target="_blank" rel="noreferrer">
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <h4 className={`text-base sm:text-lg font-semibold mb-2 transition-colors duration-300 ${getTextColor('primary')}`}>
                Side Projects
              </h4>
              <div className={`text-sm sm:text-base transition-colors duration-300 ${getTextColor('body')}`}>
                <p className="font-semibold pb-1">
                  <a className={`break-words transition-colors duration-300 ${link}`} href={additional.sideProjects.link} target="_blank" rel="noreferrer">
                    {additional.sideProjects.title}
                  </a>
                </p>
                <p>{additional.sideProjects.description}</p>
              </div>
            </div>
          </div>
        </Section>
      </FadeContentPrintable>
    </div>
  );
};

CVPage.propTypes = {
  isDark: PropTypes.bool.isRequired
};
