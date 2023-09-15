import { HoverableImage } from "@/components/Compounds";
import { Contact, Overview } from "@/components/Pages";

const HEADLINE_TITLE = "Hey there,";
const HEADLINE_DESCRIPTION = "I'm Daniel, a software engineer and web developer based in New York.";

export function Landing() {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="flex flex-col md:flex-row items-center gap-4 p-12">
        <HoverableImage
          name="portraitTransparent"
          width="md:w-[26rem]"
        />
        <div className="flex flex-col items-center md:items-start gap-8">
          <div className="flex flex-col text-center md:text-left">
            <span className="text-6xl">{HEADLINE_TITLE}</span>
            <p className="text-lg">{HEADLINE_DESCRIPTION}</p>
          </div>
          <div className="flex items-center gap-4">
            <Overview />
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
}
