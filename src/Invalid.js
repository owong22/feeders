import { useEffect } from "react";

const Invalid = ({ setShowAlert, alertValue }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowAlert(false);
    }, 3000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <h1 className="flex justify-center p-3 text-2xl text-red-600 ">
      {alertValue}
    </h1>
  );
};

export default Invalid;
