import { useState } from "react";
import { OverviewCard } from "./OverviewCard";
import { AnimatedButton } from "../../Compounds/AnimatedButton";

export function Overview() {
  const [show, setShow] = useState(false);
  return (
    <>
      <AnimatedButton
        label="Overview"
        onClick={() => setShow(true)}
      />
      {show && (
        <OverviewCard
          show={show}
          setShow={setShow}
        />
      )}
    </>
  );
}
