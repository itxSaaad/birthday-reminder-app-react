import Button from './components/Button';

function App() {
  return (
    <section>
      <h1>Birthday Reminder</h1>
      <div>
        <div>
          <img src="/assets/images/hassaan-avi.jpg" alt="avi" />
          <div>
            <h2>Name</h2>
            <h3>Age</h3>
            <p>22 July, 2003</p>
            {/* if(remainingDays > 0) { */}
            <p>20 Days days left 🤩</p>
            {/* } else { */}
            <p>Happy Birthday 🎉</p>
            {/* } */}
          </div>
        </div>
        <hr />
        <div>
          <img src="/assets/images/umair-avi.jpg" alt="avi" />
          <div>
            <h2>Name</h2>
            <h3>Age</h3>
            <p>22 July, 2003</p>
            {/* if(remainingDays > 0) { */}
            <p>20 Days days left 🤩</p>
            {/* } else { */}
            <p>Happy Birthday 🎉</p>
            {/* } */}
          </div>
        </div>
        <hr />
        <Button title="Add Birthday" type="button" onClick={() => {}} />
        <hr />
        <div>
          <Button title="Clear All" type="button" onClick={() => {}} />
          <Button title="Reset" type="reset" onClick={() => {}} />
        </div>
      </div>
    </section>
  );
}

export default App;
