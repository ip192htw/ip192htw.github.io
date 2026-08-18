import Link from "next/link";
import { CUESYNC_CASE_STUDY } from "../../lib/portfolio-data";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

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
          src={caseStudy.heroImage}
        />
      </figure>

      {/* Case Study Sections */}
      <article className="flex flex-col gap-10 max-w-[720px]">
        <div className="prose dark:prose-invert max-w-none p-5">
          <ReactMarkdown

          remarkPlugins={[remarkGfm]}>
            {caseStudy.content}
          </ReactMarkdown>
        </div>
      </article>

      {/* Project Links */}
      <section className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-outline-variant">
        {caseStudy.links?.demo && 
          <a
            className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-primary-container text-on-primary rounded-lg font-label-md text-label-md uppercase tracking-widest hover:opacity-90 transition-opacity"
            href={caseStudy.links?.demo}
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Demo
            <span className="material-symbols-outlined text-[16px]">
              open_in_new
            </span>
          </a>
        }
        {caseStudy.links?.github && 
          <a
            className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-transparent border border-outline-variant text-on-surface rounded-lg font-label-md text-label-md uppercase tracking-widest hover:bg-surface-container-high transition-colors"
            href={caseStudy.links?.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Repository
            <span className="material-symbols-outlined text-[16px]">code</span>
          </a>
        }
      </section>
    </main>
  );
}
