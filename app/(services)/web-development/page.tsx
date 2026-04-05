'use client';

import Image from "next/image";
import PageHero from "../../Components/PageHero/PageHero";
import ScrollRevealDiv from "../../Components/ScrollRevealSection/ScrollRevealDiv";
import ScrollUpDiv from "../../Components/ScrollRevealSection/ScrollRevealUp";
import Footer from "../../Components/Footer/Footer";

const imgUrl = "/webdevelopment.png";
const title = "WEB DEVELOPMENT";
const subTitle = "Building Web, Mobile, and AI-Driven Products";
const description = "From idea to launch, we engineer scalable digital solutions.";

const webWorks = [
  {
    title: "University Event Registration Platform",
    category: "Website",
    summary:
      "Designed and developed a responsive event website with online registration, speaker profiles, schedule management, and mobile-first performance optimization.",
    image: "/marketingHero.png",
  },
  {
    title: "Content and Media Management Portal",
    category: "Web App",
    summary:
      "Built a centralized web app for content teams to upload media, publish announcements, organize categories, and monitor audience engagement in one dashboard.",
    image: "/eventPageBg.png",
  },
  {
    title: "Online Ticketing and Analytics Dashboard",
    category: "Dashboard",
    summary:
      "Created an operations dashboard to track ticket sales in real time, monitor campaign results, and prepare event-day check-ins with actionable insights.",
    image: "/section1.png",
  },
  {
    title: "Campus Club Web Portal",
    category: "Portal",
    summary:
      "Developed a modern portal for student organizations to publish updates, showcase events, manage member inquiries, and streamline communication workflows.",
    image: "/webdevelopment.png",
  },
];

export default function Home() {
  function navigateToRequest() {
    window.location.href = "/request";
  }

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
              MoraSpirit 360 goes beyond websites. We design and develop
              high-performance web platforms, mobile apps, custom software
              systems, and AI-enabled solutions powered by agentic workflows.
              Every build is tailored to your goals with a strong focus on user
              experience, speed, security, and long-term scalability.
            </p>
          </div>
          <button
            className="border-2 w-[150px] h-[50px] text-lg font-bold rounded-2xl mt-10 mb-10 hover:bg-mora-red active:translate-y-1"
            onClick={navigateToRequest}
          >
            REQUEST
          </button>
        </ScrollRevealDiv>
      </section>

      <section className="w-full py-10 text-white flex flex-col items-center">
        <ScrollRevealDiv className="w-full flex flex-col items-center">
          <h1 className="text-3xl sm:text-5xl font-bold text-center">
            OUR WEB WORK
          </h1>
          <h2 className="text-base sm:text-xl mt-2 text-center">
            Selected web projects that highlight design, performance, and impact
          </h2>
        </ScrollRevealDiv>

        <div className="w-[90%] lg:w-[80%] mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {webWorks.map((work, index) => (
            <ScrollUpDiv key={work.title} delay={(index * 150).toString()}>
              <article className="bg-[#131313] border border-white/10 rounded-2xl overflow-hidden h-full">
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
            </ScrollUpDiv>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
