import { Link } from "react-router-dom";
import profilePicture from "../../../assets/images/profile.png";
import { StaticImage } from "../../Compounds/StaticImage";
import { Contact } from "../../Pages/Contact";
import { NavigationLink } from "./NavigationLink";
import { Hamburger } from "../../Atoms/Hamburger";
import { useState } from "react";

export function Navigation() {
  const [show, setShow] = useState(false);

  return (
    <div className="flex items-center justify-between w-full p-4 border-b-2">
      <Link to={"/"}>
        <div className="flex items-center gap-2 p-2 rounded-lg cursor-pointer hover:bg-blue-1 transition-all">
          <StaticImage
            url={profilePicture}
            width="w-12 md:w-[3rem]"
          />
          <span>Daniel Garcia</span>
        </div>
      </Link>
      <div className=" md:flex flex gap-3">
        <NavigationLink
          label="Resume"
          url={"/overview"}
        />
        <Contact />
      </div>
      {/* <div className="md:hidden flex items-center gap-4">
        <Hamburger
          toggle={show}
          onClick={() => setShow(!show)}
        />
      </div> */}
    </div>
  );
}
