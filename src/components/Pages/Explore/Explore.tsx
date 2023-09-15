import { HEADLINE } from "@/text";
import { StaticImage } from "@/components/Compounds";
import { TextCard } from "@/components/Compounds/TextCard";
import { PageLayout } from "@/components/Templates";

export function Explore() {
  return (
    <PageLayout>
      <div className="flex flex-col items-center gap-4 h-screen my-8 mx-96 overflow-y-auto">
        <TextCard text={HEADLINE} />
        <StaticImage
          name="portrait"
          width="sm:w-[26rem]"
        />
      </div>
    </PageLayout>
  );
}
