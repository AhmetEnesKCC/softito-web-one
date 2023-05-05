import React, { useEffect, useRef, useState } from "react";
import { DateTime } from "luxon";
const Date = () => {
  const [date, setDate] = useState<null | DateTime>(null);
  const intervalRef = useRef<NodeJS.Timer>();
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setDate(DateTime.now());
    }, 1000);
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);
  return (
    <div className="fixed bottom-3 right-3 bg-white px-3 py-1">
      {date
        ?.setLocale("tr")
        .toLocaleString(DateTime.DATETIME_FULL_WITH_SECONDS)}
    </div>
  );
};

export default Date;
