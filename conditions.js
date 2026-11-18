// === 1. ИСХОДНЫЕ ДАННЫЕ ===
const itemName = "Берег реки"; // Название выбранной позиции
const quantityText = "3";      // Текст количества (строка)
const unitValue = 460;         // Величина на единицу (число)
const extraValue = 100;        // Общая добавка (число)
const isTraining = true;       // Признак учебных данных; в формулу не входит

// Вывод исходных данных (как просят в пункте 2 задания)
console.log("--- Исходные данные ---");
console.log("Название:", itemName);
console.log("Количество (текст):", quantityText);
console.log("Величина на единицу:", unitValue);
console.log("Общая добавка:", extraValue);
console.log("-----------------------");


// === 2. ФУНКЦИЯ РАСЧЕТА С ПРОВЕРКАМИ ===
function getResult(quantityText, unitAmount, extraAmount) {
  
  // 1. Проверка пустой строки или только пробелов
  if (quantityText.trim() === "") {
    return "Ошибка: укажите количество";
  }

  // Преобразуем текст в число
  const quantity = Number(quantityText);

  // 2. Проверка на нечисловое и бесконечное значение
  if (!Number.isFinite(quantity)) {
    return "Ошибка: введите число";
  }

  // 3. Проверка на неположительное и нецелое количество
  if (quantity <= 0 || !Number.isInteger(quantity)) {
    return "Ошибка: нужно положительное целое количество";
  }

  // Если все проверки пройдены, считаем формулу
  const totalAmount = (quantity * unitAmount) + extraAmount;
  
  return "Итого: " + totalAmount;
}

// === 3. ОСНОВНОЙ ВЫЗОВ (Сохраняем в resultMessage) ===
// Вызов функции и сохранение результата в переменную
const resultMessage = getResult(quantityText, unitValue, extraValue);

console.log("\n--- Основной результат ---");
console.log(resultMessage); // Выводим сохраненное сообщение


// === 4. 11 ПОДПИСАННЫХ ИСПЫТАНИЙ (Меняется только 1-й аргумент) ===
console.log("\n--- 11 испытаний ---");
// Ожидаемые итоги закомментированы, чтобы вы могли сверить
console.log("Мой вариант:", getResult(quantityText, unitValue, extraValue)); // Итого: 1480
console.log("Одна единица:", getResult("1", unitValue, extraValue));          // Итого: 560
console.log("Три единицы:", getResult("3", unitValue, extraValue));           // Итого: 1480
console.log("Пустое поле:", getResult("", unitValue, extraValue));            // Ошибка: укажите количество
console.log("Только пробелы:", getResult("   ", unitValue, extraValue));      // Ошибка: укажите количество
console.log("Слово:", getResult("два", unitValue, extraValue));               // Ошибка: введите число
console.log("Бесконечность:", getResult("Infinity", unitValue, extraValue));  // Ошибка: введите число
console.log("Ноль:", getResult("0", unitValue, extraValue));                  // Ошибка: нужно положительное целое количество
console.log("Отрицательное:", getResult("-1", unitValue, extraValue));        // Ошибка: нужно положительное целое количество
console.log("Дробное:", getResult("1.5", unitValue, extraValue));             // Ошибка: нужно положительное целое количество
console.log("Пробелы вокруг числа:", getResult(" 2 ", unitValue, extraValue));// Итого: 1020


// === 5. ДВА ДОПОЛНИТЕЛЬНЫХ ИСПЫТАНИЯ ===
console.log("\n--- Дополнительные испытания ---");
console.log("Величина на единицу +10:", getResult("2", 470, 100)); // Итого: 1040
console.log("Общая добавка +10:", getResult("2", 460, 110));       // Итого: 1030