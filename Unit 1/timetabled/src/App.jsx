import "./App.css";
import Calendar from './components/Calender'

const App = () => {
  return (
    <>
      <h1>Itinerary for 7 Days in Chicago&#127747;</h1>
      <h3>
        Welcome to Chicago, Natalia! Check out this calendar to get to know the
        city and see all the sights during your stay.
      </h3>

      <Calendar />
    </>
  );
};

export default App;
