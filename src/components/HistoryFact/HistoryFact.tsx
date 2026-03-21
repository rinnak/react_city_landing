import "./HistoryFact.css";
import { useState } from "react";
import type { HistoryFact } from "../../types";
import { historyFact } from "../../data/data";

export function HistoryFact() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const nextFact = () => {
    setCurrentIndex((prev) => (prev === historyFact.length - 1 ? 0 : prev + 1));
  };
  const prevFact = () => {
    setCurrentIndex((prev) => (prev === 0 ? historyFact.length - 1 : prev - 1));
  };

  return (
    <section id="history" className="py-10 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-10 lg:px-16">
        <h2 className="text-3xl font-bold mb-8">Исторические факты</h2>
        <div className="bg-white mx-auto flex flex-col p-6 mb-6 rounded-xl shadow-md min-h-[310px] w-full max-w-[550px]">
          <p className="font-semibold text-xl mb-4 text-left">
            {historyFact[currentIndex].name}
          </p>
          <p className="text-lg text-left">
            {historyFact[currentIndex].description}
          </p>
        </div>
        <div className="flex gap-4 justify-center">
          <button
            className="border-none px-4 py-2 cursor-pointer bg-gray-200 rounded-lg hover:bg-gray-300"
            onClick={prevFact}
          >
            Назад
          </button>
          <button
            className="border-none px-4 py-2 cursor-pointer bg-gray-200 rounded-lg hover:bg-gray-300"
            onClick={nextFact}
          >
            Далее
          </button>
        </div>
        <p className=" flex justify-center mt-4 text-sm text-gray-500">
          {currentIndex + 1} / {historyFact.length}
        </p>
      </div>
    </section>
  );
}
