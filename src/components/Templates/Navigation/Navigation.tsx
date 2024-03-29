import { Link } from "react-router-dom";
import { StaticImage } from "@/components/Compounds";
import { Overview, Contact } from "@/components/Pages";

export function Navigation() {
  return (
    <div className="flex items-center justify-between w-full p-4 border-b-2">
      <Link to={"/"}>
        <div className="flex items-center gap-2 p-2 rounded-lg cursor-pointer hover:bg-blue transition-all duration-300">
          <StaticImage
            asset="portraitTransparent"
            className="w-12 md:w-[3rem]"
          />
          <span>Daniel Garcia</span>
        </div>
      </Link>
      <div className=" md:flex flex gap-3">
        <Overview />
        <Contact />
      </div>
    </div>
  );
}
