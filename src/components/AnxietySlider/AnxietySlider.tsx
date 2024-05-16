// src/components/AnxietySlider.tsx
import React from 'react';

interface AnxietySliderProps {
  anxietyLevel: number;
  onAnxietyChange: (level: number) => void;
}

const AnxietySlider: React.FC<AnxietySliderProps> = ({ anxietyLevel, onAnxietyChange }) => {
  const getColor = (level: number) => {
    if (level <= 3) return 'green';
    if (level <= 6) return 'yellow';
    return 'red';
  };

  const sliderColor = getColor(anxietyLevel);

  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="anxietyLevel">
        Anxiety Level: {anxietyLevel}
      </label>
      <input
        id="anxietyLevel"
        type="range"
        min="1"
        max="10"
        value={anxietyLevel}
        onChange={(e) => onAnxietyChange(Number(e.target.value))}
        className="w-full h-2 rounded-lg appearance-none cursor-pointer transition-all duration-300 ease-in-out"
        style={{
          background: `linear-gradient(to right, green, yellow, red)`,
          WebkitAppearance: 'none',
          appearance: 'none',
        }}
      />
      <style>{`
        input[type='range']::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: white;
          border: 2px solid ${sliderColor};
          cursor: pointer;
          transition: background-color 0.3s ease-in-out, border-color 0.3s ease-in-out;
        }

        input[type='range']::-moz-range-thumb {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: white;
          border: 2px solid ${sliderColor};
          cursor: pointer;
          transition: background-color 0.3s ease-in-out, border-color 0.3s ease-in-out;
        }

        input[type='range'] {
          outline: none;
        }
      `}</style>
    </div>
  );
};

export default AnxietySlider;
