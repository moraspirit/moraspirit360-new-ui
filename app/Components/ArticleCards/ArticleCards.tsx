import Image from "next/image";

type EventCardProps = {
    img: string;
    date: string;
    title: string;
    desc: string;
};

const ArticleCard = ({ img, date, title, desc }: EventCardProps) => {
    return (
        <div className="flex flex-col">
            <div className="overflow-hidden">
                <Image
                    src={img}
                    alt={desc}
                    width={300}
                    height={300}
                    className="transition-transform duration-500 ease-in-out transform hover:scale-105 hover:shadow-lg"
                />
            </div>
            <div className="mt-4 text-white">
                <h2 className="text-gray-600">{date}</h2>
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="w-[300px] mt-6">{desc}</p>
            </div>
        </div>
    );
};

export default ArticleCard;