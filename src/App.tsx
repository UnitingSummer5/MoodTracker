import React, { useEffect, useState } from 'react';
import { CalendarComponent, DailyLogForm, MoodSelector } from './components';

interface MoodData {
  [date: string]: {
    mood: string;
    dailyLog: string;
  }
}

function App() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [mood, setMood] = useState<string>('');
  const [dailyLog, setDailyLog] = useState<string>('');
  const [moodData, setMoodData] = useState<MoodData>({});

  useEffect(() => {
    const storedData = localStorage.getItem('moodData');
    const initialMoodData = storedData ? JSON.parse(storedData) : {};

    const today = new Date().toDateString();
    if (!initialMoodData[today]) {
      initialMoodData[today] = { mood: '', dailyLog: '' };
    }

    setMoodData(initialMoodData);
  }, []);

  useEffect(() => {
    if (selectedDate) {
      const dateKey = selectedDate.toDateString();
      const dataForDate = moodData[dateKey] || { mood: '', dailyLog: '' };
      setMood(dataForDate.mood);
      setDailyLog(dataForDate.dailyLog);
    }
  }, [selectedDate, moodData]);

  const handleDateChange = (date: Date | Date[]) => {
    if (Array.isArray(date)) {
      setSelectedDate(date[0]);
    } else {
      setSelectedDate(date);
    }
  };

  const handleMoodChange = (newMood: string) => {
    setMood(newMood);
    saveData(newMood, dailyLog);
  };

  const handleLogChange = (newLog: string) => {
    setDailyLog(newLog);
    saveData(mood, newLog);
  };

  const saveData = (mood: string, dailyLog: string) => {
    if (selectedDate) {
      const dateKey = selectedDate.toDateString();
      const newMoodData = { ...moodData, [dateKey]: { mood, dailyLog } };
      setMoodData(newMoodData);
      localStorage.setItem('moodData', JSON.stringify(newMoodData));
    }
  }

  return (
    <div className='min-h-screen bg-gray-100 p-4 flex flex-col items-center'>
      <h1 className='text-3xl font-bold text-center mb-4'>¿Comó te sientes mi amor?</h1>
      <div className='w-full max-w-md'>
        <CalendarComponent selectedDate={selectedDate} onDateChange={handleDateChange} moodData={moodData} />
        <MoodSelector selectedMood={mood} onMoodChange={handleMoodChange} />
        <DailyLogForm dailyLog={dailyLog} onLogChange={handleLogChange} />
      </div>
    </div>
  );
}

export default App;
