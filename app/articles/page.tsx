import Image from "next/image";
import ArticleCard from "@/app/Components/ArticleCards/ArticleCards";

export default function EventPage() {
    return (
        <div className="bg-black ">
            <div
                className="mainSection h-[90vh] w-screen opacity-[25%] "
                style={{
                    backgroundImage: "url(/eventPageBg.png)",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                }}
            ></div>
            <div className="textContainer  w-screen h-1/2 absolute z-20 top-1/4 flex flex-col items-center justify-center">
                <h1 className="text-[138px] text-white">Our Articles</h1>
                <h2 className="text-[50px] text-white">ELEVATE EVERY</h2>
                <span className="text-[30px] text-[#DD2025]">
          Where Exceptional Events Come to Life
        </span>
            </div>
            <div className="secondSection bg-black w-full h-screen flex text-white justify-center gap-20 items-center">
                <div className="image w-[709px] h-[473px] flex justify-center items-center relative p-10">
                    <Image
                        src={"/eventPageMainEVent.png"}
                        alt=""
                        fill={true}
                        objectFit="contain"
                        className=""
                    />
                </div>
                <div className="text w-1/3 flex justify-center flex-col">
                    <span className="text-gray-600">NOVEMBER 24, 2024</span>
                    <h2>World of Boxing Insights and Stories</h2>
                    <p className="mt-5">
                        Explore the latest in boxing with expert analysis, fighter profiles,
                        and thrilling match recaps. Stay updated on the sport’s most
                        exciting developments and stories from the ring
                    </p>
                </div>
            </div>
            <div className="secondSection  w-full  grid grid-cols-3 grid-rows-2 p-10 m-auto gap-8 ml-10 place-items-center">
                <ArticleCard
                    img="/EventCard1.png"
                    date="NOVEMBER 24, 2024"
                    title="World of Boxing Insights and Stories"
                    desc="Explore the latest in boxing with expert analysis, fighter profiles, and thrilling match recaps. Stay updated on the sport’s most exciting developments and stories from the ring"
                />
                <ArticleCard
                    img="/EventCard2.png"
                    date="NOVEMBER 24, 2024"
                    title="World of Boxing Insights and Stories"
                    desc="Explore the latest in boxing with expert analysis, fighter profiles, and thrilling match recaps. Stay updated on the sport’s most exciting developments and stories from the ring"
                />
                <ArticleCard
                    img="/EventCard3.png"
                    date="NOVEMBER 24, 2024"
                    title="World of Boxing Insights and Stories"
                    desc="Explore the latest in boxing with expert analysis, fighter profiles, and thrilling match recaps. Stay updated on the sport’s most exciting developments and stories from the ring"
                />
                <ArticleCard
                    img="/EventCard2.png"
                    date="NOVEMBER 24, 2024"
                    title="World of Boxing Insights and Stories"
                    desc="Explore the latest in boxing with expert analysis, fighter profiles, and thrilling match recaps. Stay updated on the sport’s most exciting developments and stories from the ring"
                />
                <ArticleCard
                    img="/EventCard2.png"
                    date="NOVEMBER 24, 2024"
                    title="World of Boxing Insights and Stories"
                    desc="Explore the latest in boxing with expert analysis, fighter profiles, and thrilling match recaps. Stay updated on the sport’s most exciting developments and stories from the ring"
                />
                <ArticleCard
                    img="/EventCard1.png"
                    date="NOVEMBER 24, 2024"
                    title="World of Boxing Insights and Stories"
                    desc="Explore the latest in boxing with expert analysis, fighter profiles, and thrilling match recaps. Stay updated on the sport’s most exciting developments and stories from the ring"
                />
            </div>
        </div>
    );
}