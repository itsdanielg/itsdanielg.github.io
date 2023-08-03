import { useState } from "react";
import { OverviewModal } from "./OverviewModal";
import { AnimatedButton } from "../../Compounds/AnimatedButton";

export function Overview() {
  const [show, setShow] = useState(false);
  return (
    <>
      <AnimatedButton
        label="Overview"
        onClick={() => setShow(true)}
      />
      <OverviewModal
        show={show}
        setShow={setShow}
      />
    </>
  );
}
