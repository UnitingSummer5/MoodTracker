import { IDailyLogForm } from "./types";

const DailyLogForm: React.FC<IDailyLogForm> = ({ dailyLog, onLogChange }) => {
    return (
        <div className="mb-4">
            <textarea
                className="flex w-full h-40 p-2 border rounded-md"
                value={dailyLog}
                onChange={(e) => onLogChange(e.target.value)}
                placeholder="Cuentame tu dia mi amor..."
            />
        </div>
    );
};

export default DailyLogForm;
