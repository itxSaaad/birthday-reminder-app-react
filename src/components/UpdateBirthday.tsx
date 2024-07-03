interface Birthday {
  id: string;
  name: string;
  age: number;
  dob: string;
  avi: string;
  linkedin: string;
}

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import { updateBirthday } from '../features/slices/birthdaySlice';

import Button from './Button';

export default function UpdateBirthday({
  setIsModalOpen,
}: {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [dob, setDob] = useState('');
  const [linkedin, setLinkedin] = useState('');

  const dispatch = useDispatch();
  const selector = useSelector(
    (state: { birthday: { birthdays: Birthday[] } }) => state.birthday
  );
  const birthdays = selector.birthdays;

  const searchParams = new URLSearchParams(window.location.search);
  const idParam = searchParams.get('id');

  const birthday = birthdays.find((birthday) => birthday.id === idParam);

  useEffect(() => {
    if (!birthday) {
      setIsModalOpen(false);
      window.history.pushState(null, '', window.location.pathname);
      toast.error('Birthday not found');
      return;
    }

    setName(birthday.name);
    setAge(birthday.age);
    setDob(birthday.dob);
    setLinkedin(birthday.linkedin);
  }, [birthday, setIsModalOpen]);

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const dateObj = new Date(e.target.value);
    const year = dateObj.getFullYear();
    const month = dateObj.toLocaleString('default', { month: 'long' });
    const day = dateObj.getDate().toString().padStart(2, '0');
    const formattedDate = `${day} ${month}, ${year}`;

    setDob(formattedDate);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !age || !dob || !linkedin) {
      toast.error('Please fill all the fields');
      return;
    }

    dispatch(
      updateBirthday({
        id: birthday!.id,
        name,
        age,
        dob,
        linkedin,
      })
    );
    toast.success('Birthday Updated successfully');
    window.history.pushState(null, '', window.location.pathname);

    setName('');
    setAge(0);
    setDob('');
    setLinkedin('');
    setIsModalOpen(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col w-1/2 mx-auto mt-10 space-y-4 bg-white p-4 rounded-lg shadow-lg"
    >
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border border-[#E6E6FA] p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFC0CB] focus:border-transparent"
      />
      <input
        type="number"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(Number(e.target.value))}
        className="border border-[#E6E6FA] p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFC0CB] focus:border-transparent"
      />
      <input
        type="date"
        placeholder="Date of Birth"
        value={dob}
        onChange={handleDateChange}
        className="border border-[#E6E6FA] p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFC0CB] focus:border-transparent"
      />
      <input
        type="text"
        placeholder="Linkedin Profile"
        value={linkedin}
        onChange={(e) => setLinkedin(e.target.value)}
        className="border border-[#E6E6FA] p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFC0CB] focus:border-transparent"
      />
      <Button
        type="submit"
        title="Update Birthday"
        onClick={() => {}}
        className="bg-[#FFFACD] text-[#333333] font-semibold text-lg hover:bg-[#FFF8B7] flex items-center justify-center px-4 py-2 rounded-lg shadow-sm hover:shadow-md w-full transition-all duration-300 ease-in-out"
      />
    </form>
  );
}
