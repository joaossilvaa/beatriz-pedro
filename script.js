function calculateTimeTogether(startDate) {
    const now = new Date();
    const start = new Date(startDate);

    let years = now.getFullYear() - start.getFullYear();
    let months = now.getMonth() - start.getMonth();
    let days = now.getDate() - start.getDate();
    let hours = now.getHours() - start.getHours();
    let minutes = now.getMinutes() - start.getMinutes();
    let seconds = now.getSeconds() - start.getSeconds();

    if (seconds < 0) {
        seconds += 60;
        minutes--;
    }
    if (minutes < 0) {
        minutes += 60;
        hours--;
    }
    if (hours < 0) {
        hours += 24;
        days--;
    }
    if (days < 0) {
        months--;
        const previousMonth = new Date(now.getFullYear(), now.getMonth(), 0);
        days += previousMonth.getDate();
    }
    if (months < 0) {
        months += 12;
        years--;
    }

    return { years, months, days, hours, minutes, seconds };
}

function displayTimeTogether() {
    const startDate = '2024-06-12'; // Substitua pela data de início do relacionamento
    const timeDisplay = document.getElementById('time-display');

    function updateDisplay() {
        const timeTogether = calculateTimeTogether(startDate);
        timeDisplay.textContent = `${timeTogether.years} anos, ${timeTogether.months} meses, ${timeTogether.days} dias, ${timeTogether.hours} horas, ${timeTogether.minutes} minutos, e ${timeTogether.seconds} segundos`;
    }

    updateDisplay(); // Atualiza imediatamente
    setInterval(updateDisplay, 1000); // Atualiza a cada segundo
}

document.addEventListener('DOMContentLoaded', displayTimeTogether);