// components/Costombtn.tsx
import React from "react";

interface CostombtnProps {
  title: string;
  styles?: string;
  isLoading?: boolean;
}

const Costombtn: React.FC<CostombtnProps> = ({
  title,
  styles = "",
  isLoading = false,
}) => {
  return (
    <div className={`${styles} p-3 flex justify-center items-center`}>
      <span className="text-3xl font-medium text-[#ffffffb2]">
        {isLoading ? "Loading..." : title}
      </span>
    </div>
  );
};

export default Costombtn;
