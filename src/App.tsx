interface Birthday {
  id: string;
  name: string;
  age: number;
  dob: string;
  avi: string;
  linkedin: string;
}

import { useState } from 'react';
import { useSelector } from 'react-redux';

import AddBirthday from './components/AddBirthday';
import BirthListFooter from './components/BirthListFooter';
import BirthdayCard from './components/BirthdayCard';
import Card from './components/Card';
import Modal from './components/Modal';
import UpdateBirthday from './components/UpdateBirthday';

function App() {
  const selector = useSelector((state) => state.birthday);
  const birthdays = selector.birthdays;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [isAdding, setIsAdding] = useState(false);

  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-[#FFC0CB] p-8">
      <Card>
        <h1 className="text-2xl font-bold text-center text-[#333333] border-b-2 border-[#E6E6FA] p-2 w-full">
          Birthday Reminder
        </h1>

        {birthdays.map((birthday: Birthday) => (
          <BirthdayCard
            key={birthday.id}
            birthday={birthday}
            setIsEditing={setIsEditing}
          />
        ))}

        <BirthListFooter
          setIsModalOpen={setIsModalOpen}
          setIsAdding={setIsAdding}
        />
      </Card>

      {isModalOpen &&
        (isAdding ? (
          <Modal setIsModalOpen={setIsModalOpen}>
            <AddBirthday />
          </Modal>
        ) : isEditing ? (
          <Modal setIsModalOpen={setIsModalOpen}>
            <UpdateBirthday />
          </Modal>
        ) : null)}
    </section>
  );
}

export default App;
