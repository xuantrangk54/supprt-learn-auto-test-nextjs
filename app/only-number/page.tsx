import OnlyNumberInput from "../components/OnlyPositiveNumberInput";

export default function OnlyNumberPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <h1 className="text-2xl font-semibold mb-6">Trang nhập số nguyên</h1>
      <OnlyNumberInput />
    </div>
  );
}
