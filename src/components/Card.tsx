export default function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-lg w-full sm:w-[80%] md:w-[60%] lg:w-[50%] xl:w-[40%]">
      {children}
    </div>
  );
}
