import { service1, service2, service3, check } from "../assets";
import { brainwaveServices, brainwaveServicesIcons } from "../constants";
import Generating from "./Generating";
import Heading from "./Heading";
import Section from "./Section";
import { PhotoChatMessage, Gradient, VideoBar, VideoChatMessage } from "./design/Services";


const Services = () => {
    return (
        <Section id="how-to-use">
            <div className="container">
                <Heading title="Generative AI Made For Creators" text="Brainwave unlocks the potential of AI-powered applications" />
                <div className="relative">
                    <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
                        <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
                            <img className="w-full h-full object-cover md:object-right" width={800} height={730} src={service1} alt="Smart AI" />
                        </div>
                        <div className="relative z-1 max-w-[17rem] ml-auto">
                            <h4 className="h4 mb-4">Smartest AI</h4>
                            <p className="body-2 mb-[3rem] text-n-3">Brainwave unlocks the potential of AI-powered applications</p>
                            <ul className="body-2">
                                {brainwaveServices.map((item, index) => (
                                    <li key={index} className="flex items-center py-4 border-t border-n-6">
                                        <img className="mr-4" width={24} height={24} src={check} alt="check" />
                                        <p>{item}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <Generating className="absolute left-4 right-4 bottom-4 border-n-1/10 border lg:left-1/2  lg:bottom-8 lg:-translate-x-1/2" />
                    </div>
                    <div className="relative z-1 grid gap-5 lg:grid-cols-2">
                        <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden">
                            <div className="absolute inset-0">
                                <img src={service2} className="h-full w-full object-cover" width={630} height={750} alt="robot" />
                            </div>
                            <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
                                <h4 className="h4 mb-4">Photo Editing</h4>
                                <p className="body-2 mb-[3rem] text-n-3">Automatically enhance your photos using our AI app's photo editing features. Try it now.</p>
                            </div>
                            <PhotoChatMessage />
                        </div>
                        <div className="p-4 bg-n-7 relative rounded-3xl overflow-hidden lg:min-h-[46rem]">
                            <div className="py-12 px-4 xl:px-4">
                                <h4 className="h4 mb-4">Video Generation</h4>
                                <p className="body-2 mb-[2rem] text-n-3">The world's most powerful AI photo and video art generation engine. What will you create?</p>
                                <ul className="flex items-center justify-between">
                                    {brainwaveServicesIcons.map((item, index) => (
                                        <li key={index} className={`flex items-center justify-center rounded-full ${index === 2 ? 'w-12 h-12 p-0.25 bg-conic-gradient md:w-16 md:h-16' : 'flex w-10 h-10 bg-n-6 md:h-15 md:w-15'}`}>
                                            <div className={`flex items-center justify-center ${index === 2 ? 'w-full h-full bg-n-7 rounded-full' : ''}`}>
                                                <img src={item} alt={item} width={24} height={24} />
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="relative h-[20rem] bg-n-8 rounded-xl overflow-hidden md:h-[25rem]">
                                <img className="w-full h-full object-cover" width={520} height={400} src={service3} alt="Video Robot" />
                                <VideoChatMessage />
                                <VideoBar />
                            </div>
                        </div>
                    </div>
                    <Gradient />
                </div>
            </div>
        </Section>
    );
};

export default Services;
