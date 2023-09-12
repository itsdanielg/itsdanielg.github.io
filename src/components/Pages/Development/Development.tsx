import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Loader } from "Atoms/";

export function Development() {
  const [timer, setTimer] = useState(2);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((timer) => timer - 1);
    }, 1000);
    setTimeout(() => {
      navigate(-1);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col items-center justify-center gap-2 text-center p-12">
        <p>This page is under development. Please check back later!</p>
        <br />
        <p>{`Redirecting in ${timer}...`}</p>
        <Loader width="w-12" />
      </div>
    </div>
  );
}
