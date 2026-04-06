import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "../../../Components/Footer/Footer";
import { digitalProjects } from "../projectData";

type ProjectDetailsPageProps = {
  slug: string;
};

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
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          <article className="bg-[#131313] border border-white/10 rounded-2xl p-6">
            <h2 className="text-xl font-semibold">Challenge</h2>
            <p className="text-gray-300 mt-3 leading-7">{project.challenge}</p>
          </article>

          <article className="bg-[#131313] border border-white/10 rounded-2xl p-6">
            <h2 className="text-xl font-semibold">Solution</h2>
            <p className="text-gray-300 mt-3 leading-7">{project.solution}</p>
          </article>

          <article className="bg-[#131313] border border-white/10 rounded-2xl p-6 lg:col-span-2">
            <h2 className="text-xl font-semibold">Key Features</h2>
            <ul className="list-disc pl-5 mt-3 text-gray-300 space-y-2">
              {project.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </article>

          <article className="bg-[#131313] border border-white/10 rounded-2xl p-6 lg:col-span-2">
            <h2 className="text-xl font-semibold">Outcome</h2>
            <p className="text-gray-300 mt-3 leading-7">{project.outcome}</p>
          </article>
        </div>
      </section>

      <Footer />
    </div>
  );
}
