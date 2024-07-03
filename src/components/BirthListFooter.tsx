interface BirthListFooterProps {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsAdding: React.Dispatch<React.SetStateAction<boolean>>;
}

import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import Button from './Button';

import { clearState, resetState } from '../features/slices/birthdaySlice';

export default function BirthListFooter({
  setIsModalOpen,
  setIsAdding,
}: BirthListFooterProps) {
  const dispatch = useDispatch();

  return (
    <>
      <div className="flex flex-col md:flex-row items-center gap-4 border-b-2 border-[#E6E6FA] p-4 w-full">
        <Button
          title="Add Birthday"
          type="button"
          onClick={() => {
            setIsModalOpen(true);
            setIsAdding(true);
          }}
          className="bg-[#f6ed9f] text-[#333333] font-semibold text-lg hover:bg-[#f6e05e] flex items-center justify-center px-4 py-2 rounded-lg shadow-sm hover:shadow-md w-full transition-all duration-300 ease-in-out"
        />
      </div>
      <div className="flex flex-col md:flex-row items-center gap-4 p-4 w-full">
        <Button
          title="Clear All"
          type="button"
          onClick={() => {
            dispatch(clearState());
            toast.success('All birthdays cleared');
          }}
          className="bg-[#F08080] text-white font-semibold text-lg hover:bg-[#E57373] flex items-center justify-center px-4 py-2 rounded-lg shadow-sm hover:shadow-md w-full transition-all duration-300 ease-in-out"
        />
        <Button
          title="Reset"
          type="reset"
          onClick={() => {
            dispatch(resetState());
            toast.success('All birthdays reset');
          }}
          className="bg-[#8ef18e] text-white font-semibold text-lg hover:bg-[#7bea7b]
           flex items-center justify-center px-4 py-2 rounded-lg shadow-sm hover:shadow-md w-full transition-all duration-300 ease-in-out"
        />
      </div>
    </>
  );
}
