export interface ICalendarComponent {
    selectedDate: Date | null;
    onDateChange: (date: Date | Date[]) => void;
}