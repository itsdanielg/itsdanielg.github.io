import portrait from "../../../assets/portraitTransparent.png";
import { HEADLINE } from "../../../text/headline";
import { StaticImage } from "../../Compounds/StaticImage";
import { TextCard } from "../../Compounds/TextCard";
import { PageLayout } from "../PageLayout";

export function Explore() {
  return (
    <PageLayout>
      <div className="flex flex-col items-center gap-4 h-screen my-8 mx-96 overflow-y-auto">
        <TextCard text={HEADLINE} />
        <StaticImage
          url={portrait}
          width="sm:w-[26rem]"
        />
      </div>
    </PageLayout>
  );
}
