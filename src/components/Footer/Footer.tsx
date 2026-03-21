import "./Footer.css";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-10">
      <div className="max-w-7xl mx-auto px-4 py-10 sm:px-10 lg:px-16">
        <div className="flex flex-wrap gap-8 gap-8 justify-center text-center">
          <div className="min-w-[220px] max-w-[350px]">
            <h3 className="text-lg font-bold mb-3text-center">О городе</h3>
            <p className="text-sm mb-2 text-center md:text-left">
              Столица Чувашской Республики, расположенная на берегу Волги. Город
              с богатой историей и культурой, где гармонично сочетаются древние
              традиции и современность.
            </p>
            <ul className="text-sm text-gray-300 space-y-1">
              <li>Основан: 1469 год</li>
              <li>Население: 497 061</li>
              <li>Река: Волга</li>
            </ul>
          </div>

          <div className="min-w-[220px] max-w-[250px]">
            <h3 className="text-lg font-bold mb-3">Быстрые ссылки</h3>
            <ul className="text-sm text-gray-300 space-y-1">
              <li>
                <a href="#info" className="hover:underline">
                  Информация
                </a>
              </li>
              <li>
                <a href="#places" className="hover:underline">
                  Развлечения
                </a>
              </li>
              <li>
                <a href="#monuments" className="hover:underline">
                  Достопримечательности
                </a>
              </li>
              <li>
                <a href="#history" className="hover:underline">
                  История
                </a>
              </li>
            </ul>
          </div>
          <div className="min-w-[220px] max-w-[250px]">
            <h3 className="text-lg font-bold mb-3">Контакты</h3>
            <ul className="text-sm text-gray-300 space-y-1">
              <li>Телефон: +7 835 00-00-00</li>
              <li>Email: info@cheboksary.ru</li>
              <li>Адрес: Чебоксары, Россия</li>
              <li>Пн-Пт: 9:00–18:00</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-gray-800 py-1 text-center text-sm text-gray-400">
        © Сделано с любовью для любимых горожан и гостей столицы
      </div>
    </footer>
  );
}
