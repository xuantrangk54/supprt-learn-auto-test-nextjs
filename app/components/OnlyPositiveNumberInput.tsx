"use client";
import { useState } from "react";

export default function OnlyNumberInput() {
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    // Cho phép chuỗi rỗng hoặc chỉ toàn số,
    // nhưng KHÔNG cho phép bắt đầu bằng 0 (trừ trường hợp chỉ có một số 0)
    if (/^(0|[1-9]\d*)?$/.test(inputValue)) {
      setValue(inputValue);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <label htmlFor="integer-input" className="mb-2 text-gray-700">
        Nhập số nguyên dương (không có số 0 ở đầu):
      </label>

      <input
        id="positive-integer-input"
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="Chỉ nhập số nguyên dương..."
        className="border border-gray-400 rounded-lg p-2 w-64 text-center text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <p className="mt-4 text-gray-700">Giá trị hiện tại: {value || "—"}</p>
    </div>
  );
}
