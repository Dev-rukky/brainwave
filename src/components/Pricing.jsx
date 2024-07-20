import { smallSphere, stars } from "../assets";
import Heading from "./Heading";
import PricingList from "./PricingList";
import Section from "./Section";
import { LeftLine, RightLine } from "./design/Pricing";

const Pricing = () => {
    return (
        <Section className="overflow-hidden" id="pricing">
            <div className="container relative z-2">
                <div className="hidden relative justify-center mb-[6.5rem] lg:flex">
                    <img className="relative z-1" src={smallSphere} width={255} height={255} alt="small sphere" />
                    <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                        <img src={stars} className="w-full" width={950} height={400} alt="small stars" />
                    </div>
                </div>
                <Heading tag="Get Started With Brainwave" title="Pay Once, Use Forever" />

                <div className="relative">
                    <PricingList />
                    <LeftLine />
                    <RightLine />
                </div>
                <div className="flex justify-center mt-10">
                    <a className="text-xs font-code font-bold tracking-wider uppercase border-b border-n-4/30" href="#">See the full details</a>
                </div>
            </div>
        </Section>
    );
};

export default Pricing;
