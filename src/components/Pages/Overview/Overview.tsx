import { useState } from "react";
import { Button } from "../../Atoms";
import { OverviewModal } from "./OverviewModal";

export function Overview() {
  const [show, setShow] = useState(false);
  return (
    <>
      <Button
        label="Overview"
        animated
        onClick={() => setShow(true)}
      />
      <OverviewModal
        show={show}
        setShow={setShow}
      />
    </>
  );
}
