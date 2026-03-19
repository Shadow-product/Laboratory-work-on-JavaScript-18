/*
Используем событие DOMContentLoaded, чтобы гарантировать,
что все HTML-теги уже превратились в DOM-узлы.
*/
document.addEventListener('DOMContentLoaded', () => {

// Данные вынесены в константу (Логика)
const skills = ["HTML", "CSS", "JavaScript", "GitHub", "LocalStorage"];

// Поиск элемента в DOM
const list = document.querySelector('#skills-list');
console.log("Переменная list сейчас:", list);
// Проверка на наличие элемента (защита от ошибок)
if (list) {
    renderSkills(skills, list);
}
});

/*
Функция отрисовки (UI)
Разделяем логику данных и логику отображения
*/
function renderSkills(data, container) {
    // Очищаем контейнер перед отрисовкой (хорошая привычка)
    container.innerHTML = '';

    data.forEach(skill => {
        const li = document.createElement('li');
        li.textContent = skill; // Используем textContent вместо innerText для безопасности
        container.appendChild(li);
        console.log("Итерация цикла для элемента: " + skill);
    });
}   