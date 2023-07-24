import profilePicture from "../../../assets/images/profile.png";
import { HEADLINE } from "../../../text/headline";
import { Card } from "../../Atoms/Card";
import { HoverableImage } from "../../Compounds/HoverableImage";
import { StaticImage } from "../../Compounds/StaticImage";
import { TextCard } from "../../Compounds/TextCard";
import { PageLayout } from "../PageLayout";

export function Explore() {
  return (
    <PageLayout>
      <div className="flex flex-col items-center gap-4 h-screen my-8 mx-96 overflow-y-auto">
        <TextCard text={HEADLINE} />
        <StaticImage
          url={profilePicture}
          width="sm:w-[26rem]"
        />
      </div>
    </PageLayout>
  );
}
