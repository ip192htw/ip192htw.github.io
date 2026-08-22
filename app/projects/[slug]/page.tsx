import Link from "next/link";
import Image from 'next/image';
import { notFound } from "next/navigation";
import { CUESYNC_CASE_STUDY, SHOP_PROJECT } from "../../lib";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { SiGithub } from 'react-icons/si';
import { ProjectMeta } from "@/app/lib/type";

export async function generateStaticParams() {
  const projects = ['cuesync', 'shop']; // 可從資料庫或 JSON 陣列讀取

  return projects.map((slug) => ({
    slug: slug,
  }));
}
 

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}



export default async function CueSyncPage({ params }: PageProps) {

  const { slug } = await params;

  let caseStudy: ProjectMeta;
  
  switch (slug) {

    case "cuesync":
      caseStudy = CUESYNC_CASE_STUDY;
      break;
    case "shop":
      caseStudy = SHOP_PROJECT;
      break;
    default:
      notFound();
  }

  return (
    <main className="w-full max-w-7xl mx-auto px-4 md:px-8 pt-8 pb-16 flex flex-col gap-12">
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
        <p className="font-body-md text-body-md text-on-surface-variant max-w-180">
          {caseStudy.subtitle}
        </p>
      </header>

      {/* Metadata Grid */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-y-6 gap-x-4 border-t   border-outline-variant py-6">
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
        <div className="flex flex-col gap-1">
          <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest">
            Links
          </span>
          <div className="flex items-center gap-4 mt-1">
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
                className="inline-flex items-center justify-center gap-2 px-4 py-3 bg-transparent border border-outline-variant text-on-surface rounded-lg font-label-md text-label-md uppercase tracking-widest hover:bg-surface-container-high transition-colors"
                href={caseStudy.links?.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiGithub size={16} />
                GitHub Repository
              </a>
            }
          </div>
        </div>
      </section>

    
      {/* Hero Image */}
      <figure className="relative w-full aspect-video rounded-xl overflow-x-scroll scrollbar-width:none [&::-webkit-scrollbar]:hidden bg-surface-container-low border border-outline-variant">
        {caseStudy.heroImages.map((heroImage) => (
          <Image
            key={heroImage.src}
            src={heroImage.src}
            alt={heroImage.alt}
            fill
            unoptimized
            className="w-full h-full object-cover"
          />
        ))}
      </figure>


      {/* Case Study Sections */}
      <article className="flex flex-col gap-10 max-w-180">
        <div className="prose dark:prose-invert prose-li:my-0 prose-p:my-0 max-w-none p-5">
          <ReactMarkdown

          remarkPlugins={[remarkGfm]}>
            {caseStudy.content}
          </ReactMarkdown>
        </div>
      </article>
    </main>
  );
}
