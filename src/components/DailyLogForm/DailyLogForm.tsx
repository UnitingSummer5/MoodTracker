import { useEffect } from "react";
import { IDailyLogForm } from "./types";

const DailyLogForm: React.FC<IDailyLogForm> = ({ dailyLog, onLogChange, animate, setAnimate }) => {
    useEffect(() => {
        if (animate) {
          const timer = setTimeout(() => setAnimate(false), 1000);
          return () => clearTimeout(timer);
        }
      }, [animate, setAnimate]);

    return (
        <div className={`mb-4 ${animate ? 'animate__animated animate__fadeIn' : ''}`}>
            <textarea
                className="flex w-full h-40 p-2 border rounded-md"
                value={dailyLog}
                onChange={(e) => onLogChange(e.target.value)}
                placeholder="Cuentame tu dia..."
            />
        </div>
    );
};

export default DailyLogForm;
