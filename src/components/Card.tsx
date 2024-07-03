export default function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white p-4 rounded-2xl shadow-lg w-1/2 flex flex-col items-center justify-center">
      {children}
    </div>
  );
}
