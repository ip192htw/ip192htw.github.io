import {
  PROFILE_DATA,
  EXPERIENCE_DATA,
  RESUME_PROJECTS_DATA,
  SKILLS_DATA,
  EDUCATION_DATA,
} from "../lib/portfolio-data";

export default function ResumePage() {
  return (
    <main className="max-w-[1280px] mx-auto px-4 md:px-8 pt-8 md:pt-12 pb-16 flex flex-col gap-8 md:gap-12 w-full">
      {/* Header Section */}
      <section className="flex flex-col gap-4">
        <div>
          <h1 className="font-headline-lg-mobile text-headline-lg-mobile md:font-display-lg md:text-display-lg text-on-surface">
            {PROFILE_DATA.name}
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant mt-1">
            {PROFILE_DATA.title}
          </p>
        </div>
        <div className="flex flex-wrap gap-4 font-body-md text-body-md text-on-surface-variant">
          <div className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[16px]">
              location_on
            </span>
            {PROFILE_DATA.location}
          </div>
          <div className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[16px]">mail</span>
            {PROFILE_DATA.contact.email}
          </div>
          <div className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[16px]">code</span>
            {PROFILE_DATA.contact.github}
          </div>
        </div>
        <button
          onClick={undefined}
          className="w-fit flex items-center gap-2 px-4 py-2 mt-2 rounded-lg border border-outline-variant text-on-surface hover:bg-surface-container-high transition-colors font-label-md text-label-md uppercase tracking-widest cursor-pointer"
        >
          <span className="material-symbols-outlined text-[16px]">
            download
          </span>{" "}
          Download Resume
        </button>
      </section>

      {/* Experience Section */}
      <section>
        <h2 className="font-label-lg text-label-lg uppercase tracking-widest text-on-surface-variant mb-4 flex items-center gap-2">
          <span className="material-symbols-outlined text-[18px]">work</span>{" "}
          Experience
        </h2>
        <div className="border-t border-outline-variant flex flex-col">
          {EXPERIENCE_DATA.map((exp, i) => (
            <div
              key={i}
              className="py-6 border-b border-outline-variant flex flex-col md:flex-row gap-2 md:gap-8 hover:bg-surface-container-low transition-colors px-2 -mx-2 rounded"
            >
              <div className="md:w-32 flex-shrink-0 font-label-md text-label-md text-on-surface-variant mt-1">
                {exp.period}
              </div>
              <div className="flex flex-col gap-2">
                <div>
                  <h3 className="font-headline-md text-headline-md text-on-surface text-[18px]">
                    {exp.role}{" "}
                    <span className="text-on-surface-variant font-normal">
                      @ {exp.company}
                    </span>
                  </h3>
                </div>
                <ul className="font-body-md text-body-md text-on-surface-variant list-none space-y-2">
                  {exp.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex gap-2">
                      <span className="text-tertiary-container mt-1 select-none">
                        ›
                      </span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section>
        <h2 className="font-label-lg text-label-lg uppercase tracking-widest text-on-surface-variant mb-4 flex items-center gap-2">
          <span className="material-symbols-outlined text-[18px]">
            folder_open
          </span>{" "}
          Projects
        </h2>
        <div className="border-t border-outline-variant flex flex-col">
          {RESUME_PROJECTS_DATA.map((proj, i) => (
            <div
              key={i}
              className="py-4 border-b border-outline-variant flex flex-col md:flex-row gap-2 md:gap-8 hover:bg-surface-container-low transition-colors px-2 -mx-2 rounded"
            >
              <div className="md:w-32 flex-shrink-0 font-label-md text-label-md text-on-surface-variant mt-1">
                {proj.period}
              </div>
              <div>
                <h3 className="font-headline-md text-[16px] text-on-surface mb-1">
                  {proj.title}
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  {proj.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section>
        <h2 className="font-label-lg text-label-lg uppercase tracking-widest text-on-surface-variant mb-4 flex items-center gap-2">
          <span className="material-symbols-outlined text-[18px]">
            construction
          </span>{" "}
          Skills
        </h2>
        <div className="border-t border-outline-variant pt-4 flex flex-col gap-4">
          <div className="flex flex-col md:flex-row gap-1 md:gap-8">
            <div className="md:w-32 font-label-md text-label-md text-on-surface-variant uppercase mt-0.5">
              Languages
            </div>
            <div className="font-body-md text-body-md text-on-surface">
              {SKILLS_DATA.languages.join(", ")}
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-1 md:gap-8">
            <div className="md:w-32 font-label-md text-label-md text-on-surface-variant uppercase mt-0.5">
              Frameworks
            </div>
            <div className="font-body-md text-body-md text-on-surface">
              {SKILLS_DATA.frameworks.join(", ")}
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-1 md:gap-8">
            <div className="md:w-32 font-label-md text-label-md text-on-surface-variant uppercase mt-0.5">
              Tools
            </div>
            <div className="font-body-md text-body-md text-on-surface">
              {SKILLS_DATA.tools.join(", ")}
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section>
        <h2 className="font-label-lg text-label-lg uppercase tracking-widest text-on-surface-variant mb-4 flex items-center gap-2">
          <span className="material-symbols-outlined text-[18px]">school</span>{" "}
          Education
        </h2>
        <div className="border-t border-outline-variant pt-6">
          {EDUCATION_DATA.map((edu, i) => (
            <div key={i} className="flex flex-col md:flex-row gap-2 md:gap-8">
              <div className="md:w-32 flex-shrink-0 font-label-md text-label-md text-on-surface-variant mt-1">
                {edu.period}
              </div>
              <div>
                <h3 className="font-headline-md text-headline-md text-on-surface text-[18px]">
                  {edu.degree}
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant mt-1">
                  {edu.institution}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
