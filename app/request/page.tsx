import RequestForm from "../Components/RequestForm/RequestForm";

const imgUrl = "https://s3-alpha-sig.figma.com/img/2ea7/fbc0/42abf1df5b20e13ba880d44753493949?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XfDILOc-5ESQwRvk6vLbvTktRAeU07GDC-bmDc6oqmm399IVMKGogkTwacFsXV2gqpQRwor8p9XgAxvRxhREkcJ26qZCla6RjKN7BRZ6~NcqAcnk~rVatJScwA8plfaVdERwkMX5auGwTTjD0Rp3iqgLwU9LOUPaDXJeCsw~v1jlMBDnqRKi2o93hIX5BATT4~9YfNAzb9G-67PtFfizWYHBDA0-8xEKR2iWojDmCgRoFJzSFyIKDzKKc34Rmu9ESgkQRy9fC9IeWC-TqX8JlLp5JIn6NSbhAYvEE2ax6Y4fKxIuxQ5O1anJp~653-dyIoclKjkqwWhwCL6oIqF94A__"

export default function Home() {
    return (
        <div className=" w-full overflow-hidden flex flex-col md:flex-row">

            <div className="h-[100dvh] flex-1">
                <div className=" w-full h-full relative">
                    <div className=" absolute first-letter w-full h-full text-white flex flex-col items-center justify-center gap-2 z-20">
                        <h1 className=" text-4xl md:text-5xl font-extrabold">Tailor Your Experience</h1>
                        <h2 className=" text-2xl md:text-3xl font-semibold">Request the Services You Need</h2>
                        <p className=" w-[350px] md:w-[400px] pt-7 text-sm text-center font-light">
                            At MoraSpirit 360, we’re committed to delivering exactly what you need. Whether you're looking for event coverage, 
                            marketing expertise, or web development, our easy-to-use request form allows you to select multiple services in one go. 
                            Let us know how we can help bring your vision to life, and we'll take care of the rest.
                        </p>
                    </div>
                    <div className=" absolute bg-black opacity-50 w-full h-full z-10"></div>
                    <img className=" object-cover w-full h-full z-0" src={imgUrl} alt="service request" />
                </div>
            </div>


            <div className="h-[100dvh] flex-1 overflow-y-scroll overflow-x-hidden">
                <RequestForm />
            </div>
        </div>
    );
}
