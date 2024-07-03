import BirthListFooter from './components/BirthListFooter';
import BirthdayCard from './components/BirthdayCard';
import Card from './components/Card';

function App() {
  const birthdays = [
    {
      id: '1',
      name: 'Hassaan Muneer',
      age: 21,
      dob: '22 September, 2003',
      avi: '/assets/images/hassaan-avi.jpg',
      linkedin: 'https://linkedin.com/hassaan-muneer-37990b250',
    },
    {
      id: '2',
      name: 'Moiz Nadeem',
      age: 21,
      dob: '11 April, 2003',
      avi: `https://avatar.iran.liara.run/username?username=Moiz Nadeem`,
      linkedin: 'https://linkedin.com/mirza-moiz',
    },
    {
      id: '3',
      name: 'Muhammad Umair',
      age: 24,
      dob: '13 July, 2000',
      avi: '/assets/images/umair-avi.jpg',
      linkedin: 'https://linkedin.com/umair-chughtai-4b096324b',
    },
  ];

  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-[#FFC0CB] p-8">
      <Card>
        <h1 className="text-2xl font-bold text-center text-[#333333] border-b-2 border-[#E6E6FA] p-2 w-full">
          Birthday Reminder
        </h1>

        {birthdays.map((birthday) => (
          <BirthdayCard key={birthday.id} birthday={birthday} />
        ))}

        <BirthListFooter />
      </Card>
    </section>
  );
}

export default App;
