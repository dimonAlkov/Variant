// === 1. ИСХОДНЫЕ ДАННЫЕ ===
const quantityText = "3";      
const unitValue = 460;         
const extraValue = 100;        

// === 2. ФУНКЦИЯ РАСЧЕТА ===
function getResult(quantityText, unitAmount, extraAmount) {
  if (quantityText.trim() === "") return "Ошибка: укажите количество";
  const quantity = Number(quantityText);
  if (!Number.isFinite(quantity)) return "Ошибка: введите число";
  if (quantity <= 0 || !Number.isInteger(quantity)) return "Ошибка: нужно положительное целое количество";
  return "Итого: " + ((quantity * unitAmount) + extraAmount);
}

// === 3. МАССИВ КАРТОЧЕК ===
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

// === 4. ФУНКЦИЯ ФИЛЬТРАЦИИ ===
function filterByText(items, query) {
  const normalized = query.trim().toLowerCase();
  if (normalized === "") return items;
  return items.filter(item => item.name.toLowerCase().includes(normalized));
}


// ==========================================
// ПАРА 22: DOM и СОБЫТИЯ (Работа со страницей)
// ==========================================

// 1. Находим элементы на главной странице
const status = document.querySelector("#status");
const namesList = document.querySelector("#names");
const showButton = document.querySelector("#show-names");

// 2. Выводим количество записей (Пункт 3 задания)
if (status) {
  status.textContent = "Записей в каталоге: " + catalog.length;
}

// 3. Функция для вывода списка названий (Пункт 5)
function renderNames() {
  if (!namesList) return; // Защита, если элемента нет
  
  // Очищаем список перед новым выводом
  namesList.replaceChildren(); 
  
  // Перебираем массив и создаем элементы <li>
  for (const item of catalog) {
    const line = document.createElement("li");
    line.textContent = item.name;
    namesList.append(line);
  }
}

// 4. Обработчик клика по кнопке (Пункт 6)
if (showButton) {
  // ВАЖНО: renderNames передается БЕЗ скобок!
  showButton.addEventListener("click", renderNames);
}

// ==========================================
// ВЫВОД В КОНСОЛЬ (для проверок из прошлых пар)
// ==========================================
console.log("--- 1. Проверки из прошлых пар ---");
console.log("filterByText('реки'):", filterByText(catalog, "реки").length);
console.log(getResult(quantityText, unitValue, extraValue));
console.log("DOM успешно загружен!");