import { IAnxietyLogForm } from "./types";

const AnxietyLogForm: React.FC<IAnxietyLogForm> = ({ anxietyLog, onAnxietyLogChange }) => {
    return (
        <div className="mb-4">
            <textarea
                className="flex w-full h-40 p-2 border rounded-md"
                value={anxietyLog}
                onChange={(e) => onAnxietyLogChange(e.target.value)}
                placeholder="Por que tu ansiedad mi vida?..."
                />
        </div>
    );
};

export default AnxietyLogForm;
