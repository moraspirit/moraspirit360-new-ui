import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "../../../Components/Footer/Footer";
import { digitalProjects, type ArticleBlock } from "../projectData";

type ProjectDetailsPageProps = {
  slug: string;
};

function ArticleContent({ blocks }: { blocks: ArticleBlock[] }) {
  return (
    <div className="space-y-8">
      {blocks.map((block, index) => {
        if (block.type === "heading") {
          const HeadingTag = block.level === 3 ? "h3" : "h2";
          return (
            <HeadingTag
              key={index}
              className={
                block.level === 3
                  ? "text-lg font-semibold text-white"
                  : "text-2xl font-semibold text-white"
              }
            >
              {block.text}
            </HeadingTag>
          );
        }

        if (block.type === "paragraph") {
          return (
            <p key={index} className="text-gray-300 leading-7">
              {block.text}
            </p>
          );
        }

        if (block.type === "list") {
          return (
            <ul
              key={index}
              className="list-disc pl-5 text-gray-300 space-y-2 leading-7"
            >
              {block.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          );
        }

        if (block.type === "image") {
          const isPhone = block.variant === "phone";

          return (
            <div
              key={index}
              className={
                isPhone
                  ? "relative mx-auto w-[42%] max-w-[220px] overflow-hidden rounded-2xl border border-white/10 sm:w-[28%] sm:max-w-[240px]"
                  : "relative w-full overflow-hidden rounded-2xl border border-white/10"
              }
            >
              <Image
                src={block.src}
                alt={block.alt}
                width={isPhone ? 509 : 1600}
                height={isPhone ? 870 : 900}
                className="h-auto w-full object-contain"
              />
            </div>
          );
        }

        if (block.type === "meta") {
          return (
            <div
              key={index}
              className="bg-[#131313] border border-white/10 rounded-2xl overflow-hidden"
            >
              <dl className="divide-y divide-white/10">
                {block.rows.map((row) => (
                  <div
                    key={row.label}
                    className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-6 px-5 py-4"
                  >
                    <dt className="text-sm font-semibold text-white">
                      {row.label}
                    </dt>
                    <dd className="sm:col-span-2 text-gray-300">{row.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          );
        }

        if (block.type === "table") {
          return (
            <div
              key={index}
              className="overflow-x-auto bg-[#131313] border border-white/10 rounded-2xl"
            >
              <table className="min-w-full text-left text-sm">
                <thead className="border-b border-white/10">
                  <tr>
                    {block.headers.map((header) => (
                      <th
                        key={header}
                        className="px-5 py-3 font-semibold text-white"
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {block.rows.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                      {row.map((cell, cellIndex) => (
                        <td key={cellIndex} className="px-5 py-3 text-gray-300">
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
        }

        if (block.type === "video") {
          const videoId =
            block.url.match(
              /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/))([^?&/]+)/,
            )?.[1] ?? "";
          const embedUrl = `https://www.youtube.com/embed/${videoId}`;

          return (
            <div
              key={index}
              className="bg-[#131313] border border-white/10 rounded-2xl p-6 space-y-4"
            >
              {block.description ? (
                <p className="text-gray-300 leading-7">{block.description}</p>
              ) : null}
              <p className="text-white font-medium">{block.title}</p>
              <div className="relative w-full aspect-video overflow-hidden rounded-xl border border-white/10">
                <iframe
                  src={embedUrl}
                  title={block.title}
                  className="absolute inset-0 h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              </div>
            </div>
          );
        }

        return null;
      })}
    </div>
  );
}

export default function ProjectDetailsPage({ slug }: ProjectDetailsPageProps) {
  const project = digitalProjects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="text-white">
      <section className="w-full py-12 sm:py-16 px-6 sm:px-10 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <Link
            href="/digital-solutions"
            className="inline-flex mb-6 text-sm text-red-400 hover:text-red-300"
          >
            Back to Digital Solutions
          </Link>

          <p className="text-xs tracking-widest text-red-400 uppercase">
            {project.category}
          </p>
          <h1 className="text-3xl sm:text-5xl font-bold mt-2">{project.title}</h1>
          <p className="text-base sm:text-lg font-light text-gray-300 mt-4 max-w-4xl">
            {project.summary}
          </p>

          <div className="relative w-full aspect-[16/8] mt-8 rounded-2xl overflow-hidden border border-white/10">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="w-full px-6 sm:px-10 lg:px-20 pb-16">
        <div className="max-w-6xl mx-auto">
          {project.article ? (
            <ArticleContent blocks={project.article} />
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <article className="bg-[#131313] border border-white/10 rounded-2xl p-6">
                <h2 className="text-xl font-semibold">Challenge</h2>
                <p className="text-gray-300 mt-3 leading-7">
                  {project.challenge}
                </p>
              </article>

              <article className="bg-[#131313] border border-white/10 rounded-2xl p-6">
                <h2 className="text-xl font-semibold">Solution</h2>
                <p className="text-gray-300 mt-3 leading-7">
                  {project.solution}
                </p>
              </article>

              <article className="bg-[#131313] border border-white/10 rounded-2xl p-6 lg:col-span-2">
                <h2 className="text-xl font-semibold">Key Features</h2>
                <ul className="list-disc pl-5 mt-3 text-gray-300 space-y-2">
                  {(project.features ?? []).map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </article>

              <article className="bg-[#131313] border border-white/10 rounded-2xl p-6 lg:col-span-2">
                <h2 className="text-xl font-semibold">Outcome</h2>
                <p className="text-gray-300 mt-3 leading-7">
                  {project.outcome}
                </p>
              </article>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
