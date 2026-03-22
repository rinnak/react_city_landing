import "./EntertainmentPlaces.css";
import { useState } from "react";
import type { Place } from "../../types";

interface Props {
  places: Place[];
}
export function EntertainmentPlaces({ places }: Props) {
  const [asceding, setAsceding] = useState(true);

  const sortedPlaces = [...places].sort((a, b) =>
    asceding ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name),
  );

  return (
    <section id="places" className="py-10 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-10 lg:px-16">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
          <h2 className="text-3xl mb-4 font-bold">Развлечения</h2>
          <button
            className="px-4 py-2 border-none cursor-pointer bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            onClick={() => setAsceding(!asceding)}
          >
            {" "}
            Сортировка: {asceding ? "А-Я" : "Я-А"}
          </button>
        </div>
        <div className="flex flex-wrap gap-6 justify-center">
          {sortedPlaces.map((place) => (
            <div
              key={place.id}
              className="rounded-lg min-w-[280px] max-w-[440px] flex-1 overflow-hidden duration-300 hover:shadow-lg hover:-translate-y-2"
            >
              <div className="w-full h-56 overflow-hidden rounded-xl">
                <img
                  src={place.image}
                  alt={place.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-2">
                <h3 className="text-xl font-semibold mb-2">{place.name}</h3>
                <p className="text-gray-600 text-sm">{place.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
