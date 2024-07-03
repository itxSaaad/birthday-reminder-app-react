interface BirthdayCardProps {
  birthday: {
    id: string;
    name: string;
    age: number;
    dob: string;
    avi: string;
    linkedin: string;
  };
  setIsEditing: (isEditing: boolean) => void;
  setIsModalOpen: (isModalOpen: boolean) => void;
}

import { useEffect, useState } from 'react';
import { FaLinkedin, FaPen, FaTrash } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import { deleteBirthday } from '../features/slices/birthdaySlice';
import Button from './Button';

export default function BirthdayCard({
  birthday,
  setIsEditing,
  setIsModalOpen,
}: BirthdayCardProps) {
  const [remainingDays, setRemainingDays] = useState(0);

  const dispatch = useDispatch();

  useEffect(() => {
    const Dob = new Date(birthday.dob);
    const today = new Date();
    const nextBirthday = new Date(
      today.getFullYear(),
      Dob.getMonth(),
      Dob.getDate()
    );

    if (today > nextBirthday) {
      nextBirthday.setFullYear(nextBirthday.getFullYear() + 1);
    }

    const oneDay = 1000 * 60 * 60 * 24;
    const remainingDays = Math.ceil(
      (nextBirthday.getTime() - today.getTime()) / oneDay
    );

    setRemainingDays(remainingDays);
  }, [birthday.dob]);

  return (
    <div className="flex flex-col md:flex-row items-center gap-4 border-b-2 border-[#E6E6FA] p-4 w-full">
      <div className="md:border-r-2 border-[#E6E6FA] md:pr-4">
        <img
          src={birthday.avi}
          alt={birthday.name}
          className="w-24 h-24 rounded-full object-cover"
        />
      </div>
      <div className="flex flex-col items-center md:items-start justify-center">
        <h2 className="text-xl font-bold text-[#333333] flex items-center gap-2">
          {birthday.name}
          <a
            title="LinkedIn Profile"
            href={birthday.linkedin}
            target="_blank"
            rel="noreferrer noopener"
          >
            <FaLinkedin className="text-[#0077B5] text-2xl" />
          </a>
        </h2>

        <h3 className="text-lg font-semibold text-[#333333]">
          {birthday.age} years old
        </h3>
        <p className="text-[#333333]">{birthday.dob}</p>
        {remainingDays > 0 ? (
          <p className="text-[#333333]">{remainingDays} Days days left 🤩</p>
        ) : (
          <p className="text-[#333333]">Happy Birthday 🎉</p>
        )}
      </div>
      <div className="flex md:flex-col items-center justify-center gap-4 md:ml-auto">
        <Button
          title={<FaTrash />}
          type="button"
          onClick={() => {
            dispatch(deleteBirthday(birthday.id));
            toast.success('Birthday Deleted successfully');
          }}
          className="bg-[#F08080] text-white font-semibold text-lg hover:bg-[#E57373] flex items-center justify-center px-4 py-2 rounded-lg shadow-sm hover:shadow-md w-full transition-all duration-300 ease-in-out"
        />
        <Button
          title={<FaPen />}
          type="button"
          onClick={() => {
            setIsEditing(true);
            setIsModalOpen(true);
            window.history.pushState(null, '', `?id=${birthday.id}`);
          }}
          className="bg-[#c5c5f9] text-white font-semibold text-lg hover:bg-[#a9a9f7]
          flex items-center justify-center px-4 py-2 rounded-lg shadow-sm hover:shadow-md w-full transition-all duration-300 ease-in-out"
        />
      </div>
    </div>
  );
}
