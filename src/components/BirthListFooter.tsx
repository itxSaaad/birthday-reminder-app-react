interface BirthListFooterProps {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsAdding: React.Dispatch<React.SetStateAction<boolean>>;
}

import Button from './Button';

export default function BirthListFooter({
  setIsModalOpen,
  setIsAdding,
}: BirthListFooterProps) {
  return (
    <>
      <div className="flex flex-row items-center gap-4 border-b-2 border-[#E6E6FA] p-4 w-full">
        <Button
          title="Add Birthday"
          type="button"
          onClick={() => {
            setIsModalOpen(true);
            setIsAdding(true);
          }}
          className="bg-[#FFFACD] text-[#333333] font-semibold text-lg hover:bg-[#FFF8B7] flex items-center justify-center px-4 py-2 rounded-lg shadow-sm hover:shadow-md w-full transition-all duration-300 ease-in-out"
        />
      </div>
      <div className="flex flex-row items-center gap-4 p-4 w-full">
        <Button
          title="Clear All"
          type="button"
          onClick={() => {}}
          className="bg-[#F08080] text-white font-semibold text-lg hover:bg-[#E57373] flex items-center justify-center px-4 py-2 rounded-lg shadow-sm hover:shadow-md w-full transition-all duration-300 ease-in-out"
        />
        <Button
          title="Reset"
          type="reset"
          onClick={() => {}}
          className="bg-[#98FF98] text-white font-semibold text-lg hover:bg-[#90EE90] flex items-center justify-center px-4 py-2 rounded-lg shadow-sm hover:shadow-md w-full transition-all duration-300 ease-in-out"
        />
      </div>
    </>
  );
}
