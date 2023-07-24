import { useEffect, useState } from "react";

export function useToken() {
  const [token, setToken] = useState<string>("");

  useEffect(() => {
    const setLoad = async () => {
      setTimeout(() => {
        setToken("token");
      }, 2000);
    };
    setLoad();
  });

  return token;
}
