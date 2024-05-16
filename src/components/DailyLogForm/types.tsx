export interface IDailyLogForm {
    dailyLog: string;
    onLogChange: (log: string) => void;
    animate: boolean;
    setAnimate: React.Dispatch<React.SetStateAction<boolean>>;
}
