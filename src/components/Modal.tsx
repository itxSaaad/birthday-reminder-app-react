interface ModalProps {
  children: React.ReactNode;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Modal({ children, setIsModalOpen }: ModalProps) {
  return (
    <div className="z-20 fixed top-0 left-0 w-full h-screen bg-black bg-opacity-50 flex items-center justify-center p-4 backdrop-blur-sm">
      {children}

      <button
        className="bg-red-500 text-white px-4 py-2 rounded-lg mt-4"
        onClick={() => setIsModalOpen(false)}
      >
        Close
      </button>
    </div>
  );
}
