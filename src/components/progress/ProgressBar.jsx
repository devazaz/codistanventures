import React from "react";

const ProgressBar = ({ progress }) => {
  const gradientColor = `linear-gradient(to top, #4CAF50 ${progress}%, transparent ${progress}%)`;

  return (
    <div
      className="flex flex-col flex-nowrap justify-end w-2 h-28 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700"
      role="progressbar"
      aria-valuenow={progress}
      aria-valuemin="0"
      aria-valuemax="100"
    >
      <div
        className="rounded-full overflow-hidden bg-blue-600"
        style={{ height: "100%", background: gradientColor }}
      ></div>
    </div>
  );
};
export default ProgressBar;
