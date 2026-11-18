// 1. ФУНКЦИЯ ИЗ ПАРЫ 20 (переносим без изменений)
function getResult(quantityText, unitAmount, extraAmount) {
  if (quantityText.trim() === "") {
    return "Ошибка: укажите количество";
  }
  const quantity = Number(quantityText);
  if (!Number.isFinite(quantity)) {
    return "Ошибка: введите число";
  }
  if (quantity <= 0 || !Number.isInteger(quantity)) {
    return "Ошибка: нужно положительное целое количество";
  }
  const totalAmount = (quantity * unitAmount) + extraAmount;
  return "Итого: " + totalAmount;
}

// 2. ЧИСЛОВЫЕ КОНСТАНТЫ ИЗ ПАРЫ 20
const unitValue = 460;
const extraValue = 100;

// 3. ЛОГИКА ПОЛЗУНКА (чтобы цифра менялась при движении)
const slider = document.getElementById("level");
const output = document.getElementById("level-value");
if (slider && output) {
  slider.addEventListener("input", function() {
    output.textContent = slider.value;
  });
}

// 4. ПЕРЕХВАТ ОТПРАВКИ ФОРМЫ
const form = document.querySelector("form");
const result = document.querySelector("#result");

// Бонусное задание: счетчик отправок
let submitCount = 0;

if (form) {
  form.addEventListener("submit", function (event) {
    // ОТМЕНЯЕМ ПЕРЕЗАГРУЗКУ СТРАНИЦЫ
    event.preventDefault();

    // Читаем количество (возвращает строку)
    const quantityText = document.querySelector("#quantity").value;

    // Читаем выбранный маршрут
    const select = document.querySelector("#route");
    // Берем .text (видимое название), а не .value (служебный код)
    const itemName = select.options[select.selectedIndex].text;

    // Вызываем функцию расчета
    const message = getResult(quantityText, unitValue, extraValue);

    // Увеличиваем счетчик и выводим результат на страницу
    submitCount = submitCount + 1;
    result.textContent = "Проверка " + submitCount + ". " + itemName + ". " + message;
  });
}