import { useState } from "react";
import type { City } from "../../types";
import "./Information.css";

interface Props {
  city: City;
}

export function Information({ city }: Props) {
  const [showMore, setShowMore] = useState(false);
  return (
    <section id="info" className="py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-10 lg:px-16">
        <h2 className="text-3xl font-bold mb-10"> О городе {city.name}</h2>
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="w-full md:w-1/2">
            <img
              src={city.image}
              alt={city.name}
              className="rounded-xl object-cover"
            />
          </div>
          <div className="w-full md:w-1/2">
            <p className="text-lg">
              {showMore
                ? city.description
                : city.description.slice(0, 550) + "..."}
            </p>
            <p className="mt-4 text-gray-600">
              Население: {city.population.toLocaleString()}
            </p>
            <button className="btn mt-6" onClick={() => setShowMore(!showMore)}>
              {" "}
              Читать больше
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
