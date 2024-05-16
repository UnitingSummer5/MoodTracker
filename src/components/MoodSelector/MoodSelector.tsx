import { IMoodSelector } from "./types";

const moods = [
    { label: 'Happy', icon: '😊' },
    { label: 'Neutral', icon: '😐' },
    { label: 'Sad', icon: '😢' },
];

const MoodSelector: React.FC<IMoodSelector> = ({ selectedMood, onMoodChange }) => {
    return (
        <div className="flex justify-around mb-4 animate__animated animate__fadeIn">
            {moods.map((mood) => (
                <button
                    key={mood.label}
                    className={`text-4xl ${selectedMood === mood.label ? 'scale-150' : 'scale-100 opacity-50'}`}
                    onClick={() => onMoodChange(mood.label)}
                >
                    {mood.icon}
                </button>
            ))}
        </div>
    );
};

export default MoodSelector;
