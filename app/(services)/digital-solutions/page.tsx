import Image from "next/image";
import Link from "next/link";
import PageHero from "../../Components/PageHero/PageHero";
import ScrollRevealDiv from "../../Components/ScrollRevealSection/ScrollRevealDiv";
import ScrollUpDiv from "../../Components/ScrollRevealSection/ScrollRevealUp";
import Footer from "../../Components/Footer/Footer";
import { digitalProjects } from "./projectData";

const imgUrl = "/webdevelopment.png";
const title = "DIGITAL SOLUTIONS";
const subTitle = "Building Web, Mobile, and AI-Driven Products";
const description =
  "From idea to launch, we engineer scalable digital solutions for real operational impact.";

export default function DigitalSolutionsPage() {
  return (
    <div>
      <PageHero
        imgUrl={imgUrl}
        title={title}
        subTitle={subTitle}
        description={description}
      />

      <section className="w-full mt-10 mb-5 py-10 text-white flex flex-col items-center justify-start gap-2">
        <ScrollRevealDiv className="w-full flex flex-col items-center px-4">
          <h1 className="text-2xl sm:text-6xl tracking-wider font-bold text-center">
            WHAT WE BUILD
          </h1>
          <div className="w-full sm:w-[70%] mt-6 text-center">
            <p className="text-sm sm:text-xl font-light">
              MoraSpirit 360 delivers more than visual experiences. We build
              production-ready websites, internal operation tools, and secure
              backend systems that solve real workflow challenges. Every
              solution is designed for usability, maintainability, and
              long-term scale.
            </p>
          </div>
          <Link
            href="/request"
            className="border-2 w-[150px] h-[50px] text-lg font-bold rounded-2xl mt-10 mb-10 hover:bg-mora-red active:translate-y-1 flex items-center justify-center"
          >
            REQUEST
          </Link>
        </ScrollRevealDiv>
      </section>

      <section className="w-full py-10 text-white flex flex-col items-center">
        <ScrollRevealDiv className="w-full flex flex-col items-center px-4">
          <h1 className="text-3xl sm:text-5xl font-bold text-center">
            OUR FEATURED PROJECTS
          </h1>
          <h2 className="text-base sm:text-xl mt-2 text-center">
            Selected work delivered across the MoraSpirit digital ecosystem
          </h2>
        </ScrollRevealDiv>

        <div className="w-[90%] lg:w-[80%] mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {digitalProjects.map((work, index) => (
            <ScrollUpDiv key={work.slug} delay={(index * 150).toString()}>
              <Link
                href={`/digital-solutions/projects/${work.slug}`}
                className="block h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400 rounded-2xl"
              >
                <article className="bg-[#131313] border border-white/10 rounded-2xl overflow-hidden h-full transition-transform duration-300 hover:-translate-y-1 hover:border-red-400/60">
                  <div className="relative w-full aspect-[16/10]">
                    <Image
                      src={work.image}
                      alt={work.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <p className="text-xs tracking-widest text-red-400 uppercase">
                      {work.category}
                    </p>
                    <h3 className="text-xl font-semibold mt-2">{work.title}</h3>
                    <p className="text-sm font-light mt-3 text-gray-300">
                      {work.summary}
                    </p>
                  </div>
                </article>
              </Link>
            </ScrollUpDiv>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
