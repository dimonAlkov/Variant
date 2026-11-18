// 1. МАССИВ КАРТОЧЕК (переносим из catalog.js)
const catalog = [
  {
    position: 1,
    name: "Берег реки",
    specs: "5 км · средний маршрут",
    description: "Дорожка вдоль воды и место отдыха"
  },
  {
    position: 2,
    name: "Горный обзор",
    specs: "7 км · сложный маршрут",
    description: "Подъём и панорама с высоты"
  },
  {
    position: 3,
    name: "Лесная тропа",
    specs: "3 км · лёгкий маршрут",
    description: "Тень деревьев и тихая прогулка"
  }
];

// 2. ФУНКЦИЯ ФИЛЬТРАЦИИ (из пары 22)
function filterByText(items, query) {
  const normalized = query.trim().toLowerCase();
  if (normalized === "") return items;
  return items.filter(item => item.name.toLowerCase().includes(normalized));
}

// 3. НАХОДИМ ЭЛЕМЕНТЫ СТРАНИЦЫ
const catalogList = document.querySelector("#catalog-list");
const statusText = document.querySelector("#status");

// 4. ФУНКЦИЯ СОЗДАНИЯ КАРТОЧЕК
function renderCatalog(items) {
  // Очищаем контейнер перед новым выводом (чтобы не дублировались)
  catalogList.replaceChildren();
  
  // Перебираем массив и создаем HTML-элементы
  for (const item of items) {
    const card = document.createElement("article");
    card.className = "card"; // Применяем ваш класс для красоты
    
    const title = document.createElement("h2");
    title.textContent = item.name;
    
    const specs = document.createElement("p");
    specs.textContent = item.specs;
    
    // Дописываем то, чего не хватало в задании:
    const description = document.createElement("p");
    description.textContent = item.description;
    
    // Собираем карточку и вставляем её на страницу
    card.append(title, specs, description);
    catalogList.append(card);
  }
  
  // Обновляем счетчик
  if (items.length === 0) {
    statusText.textContent = "Ничего не найдено";
  } else {
    statusText.textContent = "Показано: " + items.length + " из " + catalog.length;
  }
}

// 5. ПЕРВЫЙ ВЫВОД ВСЕХ КАРТОЧЕК (при загрузке страницы)
renderCatalog(catalog);

// 6. СВЯЗЫВАЕМ ПОИСК С ФИЛЬТРОМ
const searchInput = document.querySelector("#search");

searchInput.addEventListener("input", function () {
  const found = filterByText(catalog, searchInput.value);
  renderCatalog(found); // Передаем отфильтрованные данные
});