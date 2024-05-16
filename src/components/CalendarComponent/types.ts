export interface ICalendarComponent {
    selectedDate: Date | null;
    onDateChange: (date: Date | Date[]) => void;
    moodData: { [date: string]: { mood: string; dailyLog: string } };
}
