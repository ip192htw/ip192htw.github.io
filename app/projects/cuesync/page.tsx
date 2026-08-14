import Link from "next/link";
import { CUESYNC_CASE_STUDY } from "../../lib/portfolio-data";

export default function CueSyncPage() {
  const caseStudy = CUESYNC_CASE_STUDY;

  return (
    <main className="w-full max-w-[1280px] mx-auto px-4 md:px-8 pt-8 pb-16 flex flex-col gap-12">
      {/* Page Header & Breadcrumb */}
      <header className="flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <Link
            href="/"
            className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors uppercase tracking-widest"
          >
            Home
          </Link>
          <span className="font-label-md text-label-md text-on-surface-variant">
            /
          </span>
          <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest">
            01 / PROJECT
          </span>
        </div>
        <h1 className="font-headline-lg-mobile md:font-display-lg text-headline-lg-mobile md:text-display-lg text-on-surface">
          {caseStudy.title}
        </h1>
        <p className="font-body-md text-body-md text-on-surface-variant max-w-[720px]">
          {caseStudy.subtitle}
        </p>
      </header>

      {/* Metadata Grid */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-y-6 gap-x-4 border-t border-b border-outline-variant py-6">
        <div className="flex flex-col gap-1">
          <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest">
            Role
          </span>
          <span className="font-body-md text-body-md text-on-surface">
            {caseStudy.role}
          </span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest">
            Type
          </span>
          <span className="font-body-md text-body-md text-on-surface">
            {caseStudy.type}
          </span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest">
            Stack
          </span>
          <div className="flex flex-wrap gap-2 mt-1">
            {caseStudy.stack.map((tech) => (
              <span
                key={tech}
                className="bg-surface-container-highest px-2 py-1 rounded font-label-md text-label-md text-on-surface"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest">
            Status
          </span>
          <span className="font-body-md text-body-md text-tertiary flex items-center gap-2 mt-1">
            <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse" />
            {caseStudy.status}
          </span>
        </div>
      </section>

      {/* Hero Image */}
      <figure className="w-full aspect-video rounded-xl overflow-hidden bg-surface-container-low border border-outline-variant">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt={caseStudy.heroImageAlt}
          className="w-full h-full object-cover"
          src={caseStudy.heroImageSrc}
        />
      </figure>

      {/* Case Study Sections */}
      <article className="flex flex-col gap-10 max-w-[720px]">
        {/* Overview */}
        <section className="flex flex-col gap-3">
          <h2 className="font-headline-md text-headline-md text-on-surface border-b border-outline-variant pb-2">
            Overview
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            {caseStudy.overview}
          </p>
        </section>

        {/* Technical Decisions */}
        <section className="flex flex-col gap-3">
          <h2 className="font-headline-md text-headline-md text-on-surface border-b border-outline-variant pb-2">
            Technical Decisions
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            {caseStudy.technicalDecisions}
          </p>
        </section>

        {/* Implementation */}
        <section className="flex flex-col gap-3">
          <h2 className="font-headline-md text-headline-md text-on-surface border-b border-outline-variant pb-2">
            Implementation
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-2">
            The core challenge was ensuring immediate updates across devices
            during active events (e.g., room changes, delays).
          </p>

          {/* Technical Log Snippet */}
          <div className="bg-surface-container-low border border-outline-variant rounded-lg p-4 font-mono text-xs overflow-x-auto space-y-1">
            {caseStudy.logs.map((log, i) => (
              <div key={i} className="flex gap-4">
                <span className="text-tertiary select-none">{log.time}</span>
                <span
                  className={
                    log.highlight
                      ? "text-primary font-semibold"
                      : "text-on-surface-variant"
                  }
                >
                  {log.text}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Outcome */}
        <section className="flex flex-col gap-3">
          <h2 className="font-headline-md text-headline-md text-on-surface border-b border-outline-variant pb-2">
            Outcome
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            {caseStudy.outcome}
          </p>
        </section>
      </article>

      {/* Project Links */}
      <section className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-outline-variant">
        <a
          className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-primary-container text-on-primary rounded-lg font-label-md text-label-md uppercase tracking-widest hover:opacity-90 transition-opacity"
          href={caseStudy.demoUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Live Demo
          <span className="material-symbols-outlined text-[16px]">
            open_in_new
          </span>
        </a>
        <a
          className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-transparent border border-outline-variant text-on-surface rounded-lg font-label-md text-label-md uppercase tracking-widest hover:bg-surface-container-high transition-colors"
          href={caseStudy.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub Repository
          <span className="material-symbols-outlined text-[16px]">code</span>
        </a>
      </section>
    </main>
  );
}
