// 1. Логика для ползунка (Темп прогулки)
const slider = document.getElementById("level");
const output = document.getElementById("level-value");
if (slider && output) {
  slider.addEventListener("input", function() {
    output.textContent = slider.value;
  });
}

// 2. Перехват отправки формы (Задание 22 пары)
const formStatus = document.querySelector("#status");
const form = document.querySelector("form");

if (form) {
  form.addEventListener("submit", function (event) {
    // Отменяем стандартную перезагрузку страницы браузером
    event.preventDefault(); 
    
    // Выводим сообщение на страницу (в абзац id="status")
    if (formStatus) {
      formStatus.textContent = "Форма отправлена!";
    }
    
    // Сбрасываем форму и ползунок в исходное состояние
    form.reset();
    if (output) output.textContent = "3"; 
  });
}