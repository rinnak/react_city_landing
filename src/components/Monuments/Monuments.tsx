import "./Monuments.css";
import { useState } from "react";
import type { Monument } from "../../types";

interface Props {
  monuments: Monument[];
}

export function Monuments({ monuments }: Props) {
  const [sortByName, setSortByName] = useState(true);

  const [visibleCount, setVisibleCount] = useState(3);

  const sortedMonuments = [...monuments].sort((a, b) =>
    sortByName ? a.name.localeCompare(b.name) : a.year - b.year,
  );

  const visibleMonuments = sortedMonuments.slice(0, visibleCount);

  return (
    <section id="monuments" className="py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-10 lg:px-16">
        <div className="flex flex-col sm:flex-row justify-between mb-6 gap-4">
          <h2 className="font-bold text-2xl sm:text-3xl">
            Достопримечательности
          </h2>
          <div className="flex items-center gap-4">
            <p>Сортировка по: </p>
            <button
              className="px-4 py-2 bg-blue-500 cursor-pointer text-white rounded-lg hover:bg-blue-600"
              onClick={() => setSortByName(!sortByName)}
            >
              {sortByName ? "По году" : "По названию"}
            </button>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {visibleMonuments.map((m) => (
            <div
              key={m.id}
              className="flex-1 min-w-[280px] max-w-[440px] rounded-xl justify-center transition-all duration-300 hover:scale-101"
            >
              <div className="w-full h-56 overflow-hidden rounded-xl">
                <img
                  src={m.image}
                  alt={m.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{m.name}</h3>
              <p className="text-gray-500 text-sm mb-2"> Год: {m.year}</p>
              <p className="text-gray-700 text-sm">{m.description}</p>
            </div>
          ))}
        </div>
        {visibleCount < monuments.length && (
          <button
            className="mt-6 px-4 py-2 bg-blue-500 cursor-pointer text-white rounded-lg hover:bg-blue-600"
            onClick={() => setVisibleCount(visibleCount + 3)}
          >
            Показать еще
          </button>
        )}
        {visibleCount >= monuments.length && (
          <button
            className="mt-6 px-4 py-2 bg-blue-500 cursor-pointer text-white rounded-lg hover:bg-blue-600"
            onClick={() => setVisibleCount(3)}
          >
            Скрыть
          </button>
        )}
      </div>
    </section>
  );
}
