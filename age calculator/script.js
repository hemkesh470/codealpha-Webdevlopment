document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('age-calculator-form');
    const dayInput = document.getElementById('day');
    const monthInput = document.getElementById('month');
    const yearInput = document.getElementById('year');
    const yearsResult = document.getElementById('years');
    const monthsResult = document.getElementById('months');
    const daysResult = document.getElementById('days');
    const hoursResult = document.getElementById('hours');
    const secondsResult = document.getElementById('seconds');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const day = parseInt(dayInput.value);
        const month = parseInt(monthInput.value) - 1;
        const year = parseInt(yearInput.value);

        const currentDate = new Date();
        const userBirthDate = new Date(year, month, day);

        if (isNaN(userBirthDate.getTime())) {
            clearResults();
            return;
        }

        const age = calculateAge(currentDate, userBirthDate);
        displayAgeResults(age);
    });

    function calculateAge(currentDate, birthDate) {
        const ageInMilliseconds = currentDate - birthDate;
        const ageInSeconds = ageInMilliseconds / 1000;
        const ageInMinutes = ageInSeconds / 60;
        const ageInHours = ageInMinutes / 60;
        const ageInDays = ageInHours / 24;
        const ageInMonths = ageInDays / 30.44; // Average days in a month
        const ageInYears = ageInMonths / 12;

        return {
            years: Math.floor(ageInYears),
            months: Math.floor(ageInMonths),
            days: Math.floor(ageInDays),
            hours: Math.floor(ageInHours),
            seconds: Math.floor(ageInSeconds),
        };
    }

    function displayAgeResults(age) {
        yearsResult.textContent = `${age.years} years`;
        monthsResult.textContent = `${age.months} months`;
        daysResult.textContent = `${age.days} days`;
        hoursResult.textContent = `${age.hours} hours`;
        secondsResult.textContent = `${age.seconds} seconds`;
    }

    function clearResults() {
        yearsResult.textContent = '0 years';
        monthsResult.textContent = '0 months';
        daysResult.textContent = '0 days';
        hoursResult.textContent = '0 hours';
        secondsResult.textContent = '0 seconds';
    }
});
