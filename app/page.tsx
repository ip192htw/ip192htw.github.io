import Link from "next/link";
import { PROFILE_DATA, PROJECTS_DATA } from "./lib/portfolio-data";

export default function Home() {
  return (
    <main className="flex-grow w-full max-w-[1280px] mx-auto px-4 md:px-8 py-12 flex flex-col gap-12">
      {/* 1. Profile Section & Status */}
      <section className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 border-b border-outline-variant pb-12">
        <div className="flex flex-col gap-6 max-w-2xl">
          <div>
            <h1 className="font-display-lg text-display-lg text-on-surface mb-2 tracking-tight">
              {PROFILE_DATA.name}
            </h1>
            <h2 className="font-headline-md text-headline-md text-on-surface-variant font-normal">
              {PROFILE_DATA.title}
            </h2>
          </div>
          <div className="flex items-center gap-2 text-on-surface-variant font-body-md text-body-md">
            <span className="material-symbols-outlined text-[18px]">
              location_on
            </span>
            <span>{PROFILE_DATA.location}</span>
          </div>
          <p className="font-body-lg text-body-lg text-on-surface">
            {PROFILE_DATA.bio}
          </p>
          <div className="inline-flex items-center gap-2 bg-surface-container-low border border-outline-variant px-3 py-1.5 rounded-full w-fit">
            <span className="text-tertiary text-[10px]">●</span>
            <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">
              {PROFILE_DATA.status}
            </span>
          </div>
        </div>
        <div className="shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="w-[192px] h-[192px] object-cover rounded-lg border border-outline-variant grayscale hover:grayscale-0 transition-all duration-500"
            alt={PROFILE_DATA.portraitAlt}
            src={PROFILE_DATA.portraitSrc}
          />
        </div>
      </section>

      {/* 2. About Section */}
      <section className="border-b border-outline-variant pb-12">
        <h3 className="font-label-lg text-label-lg text-on-surface-variant uppercase tracking-widest mb-6">
          About
        </h3>
        <p className="font-body-lg text-body-lg text-on-surface max-w-[720px] text-justify leading-relaxed">
          {PROFILE_DATA.about}
        </p>
      </section>

      {/* 3. Selected Projects */}
      <section>
        <div className="flex justify-between items-end mb-8">
          <h3 className="font-label-lg text-label-lg text-on-surface-variant uppercase tracking-widest">
            Selected Projects
          </h3>
        </div>
        <div className="flex flex-col">
          {PROJECTS_DATA.map((project, index) => {
            const isLast = index === PROJECTS_DATA.length - 1;
            return (
              <article
                key={project.id}
                className={`group border-t border-outline-variant ${
                  isLast ? "border-b" : ""
                } py-8 flex flex-col md:flex-row gap-8 hover:bg-surface-container-low/30 transition-colors`}
              >
                <div className="md:w-16 shrink-0 font-label-md text-label-md text-on-surface-variant pt-1">
                  {project.number}
                </div>
                <div className="shrink-0 w-full md:w-[360px]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    className="w-full h-auto aspect-video object-cover rounded border border-outline-variant group-hover:border-primary/50 transition-colors"
                    alt={project.imageAlt}
                    src={project.imageSrc}
                  />
                </div>
                <div className="flex flex-col gap-4 flex-grow justify-between">
                  <div>
                    <div className="flex items-baseline gap-4 mb-2">
                      <h4 className="font-headline-md text-headline-md text-on-surface">
                        {project.title}
                      </h4>
                      <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">
                        {project.category}
                      </span>
                    </div>
                    <p className="font-body-md text-body-md text-on-surface-variant max-w-xl">
                      {project.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-surface-container-highest px-2 py-1 rounded font-label-md text-label-md text-on-surface"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-6">
                      <div className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">
                        {project.role}
                      </div>
                      <Link
                        className="inline-flex items-center gap-1 font-label-lg text-label-lg text-primary hover:text-primary-fixed transition-colors"
                        href={project.link}
                      >
                        View Project{" "}
                        <span className="material-symbols-outlined text-[16px]">
                          arrow_forward
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}
