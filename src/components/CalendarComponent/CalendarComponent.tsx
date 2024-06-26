import Calendar, { CalendarProps } from "react-calendar";
import { isToday, startOfTomorrow } from "date-fns";
import 'react-calendar/dist/Calendar.css';
import { ICalendarComponent } from "./types";

import './styles.css';

const CalendarComponent: React.FC<ICalendarComponent> = ({ selectedDate, onDateChange, moodData }) => {
    const getTileClassName = ({ date }: { date: Date }) => {
        const dateKey = date.toDateString();
        const dataForDate = moodData[dateKey];

        if (dataForDate) {
            if (isToday(dateKey)) {
                return 'todayTile';
            }
            switch (dataForDate.mood) {
                case 'Happy':
                    return 'happyTile';
                case 'Neutral':
                    return 'neutralTile';
                case 'Sad':
                    return 'sadTile';
                default:
                    return '';
            }
        }
        return '';
    };

    const tileDisabled = ({ date, view }: { date: Date, view: string }) => {
        return view === 'month' && date > new Date();
      };

    return (
        <div className="flex mb-4 justify-center">
            <Calendar value={selectedDate} onChange={onDateChange as CalendarProps['onChange']} tileClassName={getTileClassName} tileDisabled={tileDisabled}/>
        </div>
    );
};

export default CalendarComponent;
