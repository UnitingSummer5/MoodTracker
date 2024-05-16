export interface IMoodSelector {
    selectedMood: string;
    onMoodChange: (mood: string) => void;
    animate: boolean;
    setAnimate: React.Dispatch<React.SetStateAction<boolean>>;
}
