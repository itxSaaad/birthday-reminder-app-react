interface ModalProps {
  children: React.ReactNode;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Modal({ children, setIsModalOpen }: ModalProps) {
  return (
    <div className="z-20 fixed top-0 left-0 w-full h-screen bg-black bg-opacity-50 flex items-center justify-center p-4 backdrop-blur-sm">
      {children}
      <button
        title="Close Modal"
        className="absolute top-2 right-2 p-2 text-xl text-white bg-[#F08080] rounded-full shadow-lg hover:bg-[#E57373] hover:shadow-md transition-all duration-300 ease-in-out"
        onClick={() => setIsModalOpen(false)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
}
