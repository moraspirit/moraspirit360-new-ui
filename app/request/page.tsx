import Footer from "../Components/Footer/Footer";
import RequestForm from "../Components/RequestForm/RequestForm";

const imgUrl = "/repage.avif"

export default function Home() {
    return (
        <>
        <div className="w-full md:overflow-hidden flex flex-col md:flex-row">

            <div className="h-[70dvh] md:h-[100dvh] flex-1">
                <div className=" w-full h-full relative">
                    <div className=" absolute first-letter w-full h-full text-white flex flex-col items-center justify-center gap-2 z-20 text-center px-3 sm:px-0">
                        <h1 className=" text-4xl md:text-5xl font-extrabold">Tailor Your Experience</h1>
                        <h2 className=" text-2xl md:text-3xl font-semibold">Request the Services You Need</h2>
                        <p className="  md:max-w-[400px] pt-7 text-sm text-center font-light">
                            At MoraSpirit 360, we’re committed to delivering exactly what you need. Whether you're looking for event coverage, 
                            marketing expertise, or web development, our easy-to-use request form allows you to select multiple services in one go. 
                            Let us know how we can help bring your vision to life, and we'll take care of the rest.
                        </p>
                    </div>
                    <div className=" absolute bg-black opacity-50 w-full h-full z-10"></div>
                    <img className=" object-cover w-full h-full z-0" src={imgUrl} alt="service request" />
                </div>
            </div>


            <div className="min-h-[100dvh] md:h-[100dvh] flex-1 md:overflow-y-scroll overflow-x-hidden text-white">
                <RequestForm />
            </div>
        </div>
        <Footer />
        </>
    );
}
