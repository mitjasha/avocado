import React from "react";

export interface DailyEventData {
  data: string[];
}

const DailyEventEditWrapper: React.FC<DailyEventData> = ({ data }) => {
  return (
    <div>
      {data.map((item) => (
        <div>{item}</div>
      ))}
    </div>
  );
};

export default DailyEventEditWrapper;
