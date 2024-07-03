interface BirthdayCardProps {
  birthday: {
    id: string;
    name: string;
    age: number;
    dob: string;
    avi: string;
    linkedin: string;
  };
}

import { useEffect, useState } from 'react';

export default function BirthdayCard({ birthday }: BirthdayCardProps) {
  const [remainingDays, setRemainingDays] = useState(0);

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
  }, []);

  return (
    <div className="flex flex-row items-center gap-4 border-b-2 border-[#E6E6FA] p-4 w-full">
      <div className="border-r-2 border-[#E6E6FA] pr-4">
        <img
          src={birthday.avi}
          alt={birthday.name}
          className="w-24 h-24 rounded-full object-cover"
        />
      </div>
      <div className="flex flex-col items-start justify-center">
        <h2 className="text-xl font-bold text-[#333333]">{birthday.name}</h2>
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
    </div>
  );
}
