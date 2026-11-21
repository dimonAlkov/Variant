// 1. МАССИВ КАРТОЧЕК
const catalog = [
  {
    position: 1,
    name: "Берег реки",
    specs: "5 км · средний маршрут",
    description: "Дорожка вдоль воды и место отдыха",
    image: "Lake.jpg" // Добавили картинку
  },
  {
    position: 2,
    name: "Горный обзор",
    specs: "7 км · сложный маршрут",
    description: "Подъём и панорама с высоты",
    image: "glav.jfif" // Добавили картинку
  },
  {
    position: 3,
    name: "Лесная тропа",
    specs: "3 км · лёгкий маршрут",
    description: "Тень деревьев и тихая прогулка",
    image: "forest.jpg" // Добавили картинку
  }
];

// 2. ФУНКЦИЯ ФИЛЬТРАЦИИ
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
  // Очищаем контейнер перед новым выводом
  catalogList.replaceChildren();
  
  for (const item of items) {
    const card = document.createElement("article");
    card.className = "card"; 
    
    // --- ДОБАВЛЕНО: Создаем картинку ---
    const img = document.createElement("img");
    img.src = item.image; // Берем имя файла из массива
    img.alt = item.name;  // Текст, если картинка не загрузится
    img.width = 400;      // Ширина картинки
    img.style.borderRadius = "8px"; // Скругляем углы для красоты
    img.style.marginBottom = "1rem";
    // ------------------------------------

    const title = document.createElement("h2");
    title.textContent = item.name;
    
    const specs = document.createElement("p");
    specs.textContent = item.specs;
    
    const description = document.createElement("p");
    description.textContent = item.description;
    
    // Собираем карточку: картинка вставляется в самое начало (перед заголовком)
    card.append(img, title, specs, description);
    catalogList.append(card);
  }
  
  if (items.length === 0) {
    statusText.textContent = "Ничего не найдено";
  } else {
    statusText.textContent = "Показано: " + items.length + " из " + catalog.length;
  }
}

// 5. ПЕРВЫЙ ВЫВОД
renderCatalog(catalog);

// 6. СВЯЗЫВАЕМ ПОИСК
const searchInput = document.querySelector("#search");

searchInput.addEventListener("input", function () {
  const found = filterByText(catalog, searchInput.value);
  renderCatalog(found); 
});
