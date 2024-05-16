export interface IMoodSelector {
    selectedMood: string;
    onMoodChange: (mood: string) => void;
}