// components/FormField.tsx
import React, { useState } from "react";
import Image from "next/image";

interface FormFieldProps {
  title: string;
  value: string;
  handleChangeText: (text: string) => void;
  otherStyles?: string;
  placeholder?: string;
}

const FormField: React.FC<FormFieldProps> = ({
  title,
  value,
  handleChangeText,
  otherStyles = "",
  placeholder = "",
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={`space-y-2 ${otherStyles}`}>
      <div className="text-base text-start px-2 text-white font-medium border-gray-100">
        {title}
      </div>
      <div className="border-2 flex items-center px-3 h-12 w-full border-[#8619d9b9] rounded-2xl focus-within:border-[#9a2fff]">
        <input
          type={title === "Password" && !showPassword ? "password" : "text"}
          className="flex-1 bg-transparent text-white font-semibold text-base outline-none"
          value={value}
          placeholder={placeholder}
          onChange={(e) => handleChangeText(e.target.value)}
        />
        {title === "Password" && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="ml-2"
          >
            <Image
              src={showPassword ? "/icons/eye-hide.png" : "/icons/eye.png"}
              alt="Toggle password visibility"
              width={24}
              height={24}
            />
          </button>
        )}
      </div>
    </div>
  );
};

export default FormField;
