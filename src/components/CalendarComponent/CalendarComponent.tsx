import Calendar, { CalendarProps } from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import { ICalendarComponent } from "./types";

const CalendarComponent: React.FC<ICalendarComponent> = ({ selectedDate, onDateChange }) => {
    return (
        <div className="mb-4">
            <Calendar value={selectedDate} onChange={onDateChange as CalendarProps['onChange']} />
        </div>
    );
};

export default CalendarComponent;