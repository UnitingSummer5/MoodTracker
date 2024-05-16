import React, { useEffect, useState } from 'react';
import { AnxietyLogForm, AnxietySlider, CalendarComponent, DailyLogForm, MoodSelector } from './components';

interface MoodData {
  [date: string]: {
    mood: string;
    dailyLog: string;
    anxietyLog: string;
    anxietyLevel: number;
  }
}

function App() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [mood, setMood] = useState<string>('');
  const [dailyLog, setDailyLog] = useState<string>('');
  const [anxietyLevel, setAnxietyLevel] = useState<number>(5);
  const [anxietyLog, setAnxietyLog] = useState<string>('');
  const [moodData, setMoodData] = useState<MoodData>({});

  useEffect(() => {
    const storedData = localStorage.getItem('moodData');
    const initialMoodData = storedData ? JSON.parse(storedData) : {};

    const today = new Date().toDateString();
    if (!initialMoodData[today]) {
      initialMoodData[today] = { mood: '', dailyLog: '', anxietyLog: '', anxietyLevel: 1 };
    }

    setMoodData(initialMoodData);
  }, []);

  useEffect(() => {
    if (selectedDate) {
      const dateKey = selectedDate.toDateString();
      const dataForDate = moodData[dateKey] || { mood: '', dailyLog: '', anxietyLog: '', anxietyLevel: 1 };
      setMood(dataForDate.mood);
      setDailyLog(dataForDate.dailyLog);
      setAnxietyLevel(dataForDate.anxietyLevel !== undefined ? dataForDate.anxietyLevel : 5)
      setAnxietyLog(dataForDate.anxietyLog);
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
    saveData(newMood, dailyLog, anxietyLevel, anxietyLog);
  };

  const handleLogChange = (newLog: string) => {
    setDailyLog(newLog);
    saveData(mood, newLog, anxietyLevel, anxietyLog);
  };

  const handleAnxietyChange = (newLevel: number) => {
    setAnxietyLevel(newLevel);
    saveData(mood, dailyLog, newLevel, anxietyLog);
  }

  const handleAnxietyLogChange = (newAnxietyLog: string) => {
    setAnxietyLog(newAnxietyLog);
    saveData(mood, dailyLog, anxietyLevel, newAnxietyLog);
  }

  const saveData = (mood: string, dailyLog: string, anxietyLevel: number, anxietyLog: string) => {
    if (selectedDate) {
      const dateKey = selectedDate.toDateString();
      const newMoodData = { ...moodData, [dateKey]: { mood, dailyLog, anxietyLevel, anxietyLog } };
      setMoodData(newMoodData);
      localStorage.setItem('moodData', JSON.stringify(newMoodData));
    }
  }

  return (
    <div className='min-h-screen bg-gradient-to-b from-blue-500 to-blue-0 p-4 flex flex-col items-center'>
      <h1 className='text-3xl font-bold text-center mb-4'>¿Comó te sientes mi amor?</h1>
      <div className='w-full max-w-md'>
        <CalendarComponent selectedDate={selectedDate} onDateChange={handleDateChange} moodData={moodData} />
        <MoodSelector selectedMood={mood} onMoodChange={handleMoodChange} />
        <DailyLogForm dailyLog={dailyLog} onLogChange={handleLogChange} />
        <AnxietySlider anxietyLevel={anxietyLevel} onAnxietyChange={handleAnxietyChange} />
        <AnxietyLogForm anxietyLog={anxietyLog} onAnxietyLogChange={handleAnxietyLogChange}/>
      </div>
    </div>
  );
}

export default App;
