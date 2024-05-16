import React, { useState } from 'react';
import { CalendarComponent, MoodSelector } from './components';


function App() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [mood, setMood] = useState<string>('');

  const handleDateChange = (date: Date | Date[]) => {
    if (Array.isArray(date)) {
      setSelectedDate(date[0]);
    } else {
      setSelectedDate(date);
    }
  };

  return (
    <div className='min-h-screen bg-gray-100 p-4'>
      <h1 className='text-3xl font-bold text-center mb-4'>Mood Tracker</h1>
      <CalendarComponent selectedDate={selectedDate} onDateChange={handleDateChange}/>
      <MoodSelector selectedMood={mood} onMoodChange={setMood} />
    </div>
  );
}

export default App;
