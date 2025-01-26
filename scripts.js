// functions for calculator
let screen = document.getElementById('screen');

function appendToScreen(value) {
    screen.value += value;
}

function clearScreen() {
    screen.value = '';
}

function calculate() {
    try {
        let result = eval(screen.value);
        // Randomly show premium message
        if (Math.random() < 0.3) {
            result = 'Для получения точного результата купите премиум-версию калькулятора!';
        }
        screen.value = result;
    } catch (e) {
        screen.value = 'Error';
    }
}

function triggerRandomFeature() {
    alert('Вы нажали бесполезную кнопку. Ваши данные переданы ФСБ');
}

function randomQuote() {
    let quotes = [
        "Не переживай, даже если ты ошибся — это калькулятор, а не реальная жизнь.",
        "Совет дня: попробуй не жать на кнопки случайным образом!",
        "Не нужно пытаться вычислить число Пи с помощью этого калькулятора.",
        "Секрет успешных людей: купи премиум и забудь об ошибках!",
	"Calculator сделан пользователем - @ewinnery",
    ];
    alert(quotes[Math.floor(Math.random() * quotes.length)]);
}

function buyPremium() {
    alert("Хотите решить все свои проблемы? Купите премиум-версию!");
}
