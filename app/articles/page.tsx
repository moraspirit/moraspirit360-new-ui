import PageHero from "../Components/PageHero/PageHero";
import ArticleCard from "@/app/Components/ArticleCards/ArticleCards";
import Image from "next/image";
import Footer from "@/app/Components/Footer/Footer";
import React from "react";
import ScrollUpDiv from "@/app/Components/ScrollRevealSection/ScrollRevealUp";

const imgUrl = "/eventPageBg.png";
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
                            src={"/eventPageMainEVent.png"}
                            alt=""
                            fill={true}
                            objectFit="contain"
                            className=""
                        />
                    </div>
                    <div className="text w-1/2 flex justify-center flex-col p-10">
                        <span className="text-gray-600">NOVEMBER 24, 2024</span>
                        <h2>World of Boxing Insights and Stories</h2>
                        <p className="mt-5 text-justify">
                            Explore the latest in boxing with expert analysis, fighter profiles,
                            and thrilling match recaps. Stay updated on the sport’s most
                            exciting developments and stories from the ring.
                        </p>
                    </div>
                </div>
            </ScrollUpDiv>


            <ScrollUpDiv>

                <div
                    className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  py-5 px-10 justify-items-center items-center gap-y-32">
                    <ArticleCard
                        img="/EventCard1.png"
                        date="NOVEMBER 24, 2024"
                        title="World of Boxing Insights and Stories"
                        desc="Explore the latest in boxing with expert analysis, fighter profiles, and thrilling match recaps. Stay updated on the sport’s most exciting developments and stories from the ring."
                    />
                    <ArticleCard
                        img="/EventCard2.png"
                        date="NOVEMBER 24, 2024"
                        title="World of Boxing Insights and Stories"
                        desc="Explore the latest in boxing with expert analysis, fighter profiles, and thrilling match recaps. Stay updated on the sport’s most exciting developments and stories from the ring."
                    />
                    <ArticleCard
                        img="/EventCard3.png"
                        date="NOVEMBER 24, 2024"
                        title="World of Boxing Insights and Stories"
                        desc="Explore the latest in boxing with expert analysis, fighter profiles, and thrilling match recaps. Stay updated on the sport’s most exciting developments and stories from the ring."
                    />
                    <ArticleCard
                        img="/EventCard2.png"
                        date="NOVEMBER 24, 2024"
                        title="World of Boxing Insights and Stories"
                        desc="Explore the latest in boxing with expert analysis, fighter profiles, and thrilling match recaps. Stay updated on the sport’s most exciting developments and stories from the ring."
                    />
                    <ArticleCard
                        img="/EventCard2.png"
                        date="NOVEMBER 24, 2024"
                        title="World of Boxing Insights and Stories"
                        desc="Explore the latest in boxing with expert analysis, fighter profiles, and thrilling match recaps. Stay updated on the sport’s most exciting developments and stories from the ring."
                    />
                    <ArticleCard
                        img="/EventCard1.png"
                        date="NOVEMBER 24, 2024"
                        title="World of Boxing Insights and Stories"
                        desc="Explore the latest in boxing with expert analysis, fighter profiles, and thrilling match recaps. Stay updated on the sport’s most exciting developments and stories from the ring."
                    />
                </div>
            </ScrollUpDiv>
            <Footer></Footer>

        </div>


    );
}