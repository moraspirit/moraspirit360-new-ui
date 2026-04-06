import PageHero from "../Components/PageHero/PageHero";
import ArticleCard from "@/app/Components/ArticleCards/ArticleCards";
import Image from "next/image";
import Footer from "@/app/Components/Footer/Footer";
import React from "react";
import ScrollUpDiv from "@/app/Components/ScrollRevealSection/ScrollRevealUp";

const imgUrl = "/eventPageBg.avif";
const title = "Our ARTICLES";
const subTitle = "ELEVATE EVERY OCCASION";
const description = "Where Exceptional Events Come to Life";

export default function EventPage() {
    return (
        <div className="bg-black">
            <PageHero imgUrl={imgUrl} title={title} subTitle={subTitle} description={description}/>

            <ScrollUpDiv>
                <div
                    className="bg-black w-full h-screen hidden md:flex text-white justify-center px-20 gap-0 items-center">
                    <div className="image w-[70%] h-[50%] flex justify-center items-center relative">
                        <Image
                            src={"/article/main.avif"}
                            alt=""
                            fill={true}
                            objectFit="contain"
                            className=""
                        />
                    </div>
                    <div className="text w-1/2 flex justify-center flex-col p-10">
                        <span className="text-gray-600">NOVEMBER 24, 2024</span>
                        <h2>Japura Defends Crown at Inter-University Championships 2024</h2>
                        <p className="mt-5 text-justify">
                        Showcasing broad athletic talent, Sri Jayewardenepura University triumphed at the Inter University Games, 
                        securing the Champions title with wins in hockey, tennis, swimming, and carrom, and joint titles in karate. 
                        Organized by SLUSA The championship, spanning from August 24 to December 15 and hosted by 16 universities, 
                        was documented by MoraSpirit's extensive media coverage.
                        </p>
                    </div>
                </div>
            </ScrollUpDiv>


            <ScrollUpDiv>

                <div
                    className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  py-5 px-10 justify-items-center items-start gap-y-32">
                    <ArticleCard
                        img="/article/1.avif"
                        date="JULY 27, 2024"
                        title="An opening ceremony to remember: Paris 2024 unfolds gracefully along the river Seine"
                        desc="The Paris 2024 Olympic Games truly deserves a golden chapter in history. The grand opening ceremony, set along the iconic Seine River, was historic as the first-ever Olympic opening ceremony held outside a stadium."
                    />
                    <ArticleCard
                        img="/article/2.avif"
                        date="AUGUST 27, 2024"
                        title="Sri Lanka's journey in Paralympics: Celebrating Triumphs and Overcoming Challenges"
                        desc="Sri Lanka's memorable Paralympic history, celebrating victories from their debut in 1996 to capturing gold and bronze medals, and looking forward to the 2024 Paralympics with great expectations for their outstanding athletes."
                    />
                </div>
            </ScrollUpDiv>
            <Footer></Footer>

        </div>


    );
}