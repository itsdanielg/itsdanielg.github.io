import { useState } from "react";
import { Button } from "@/components/Atoms";
import { OverviewModal } from "./OverviewModal";

export function Overview() {
  const [show, setShow] = useState(false);
  return (
    <>
      <Button
        onClick={() => setShow(true)}
        animated>
        Overview
      </Button>
      <OverviewModal
        show={show}
        setShow={setShow}
      />
    </>
  );
}
