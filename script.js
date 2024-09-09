document.addEventListener('DOMContentLoaded', function() {
    const daysOfWeek = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    const today = new Date();
    const dayName = daysOfWeek[today.getDay()];

    document.getElementById('day-of-week').textContent = `Hoy es ${dayName}`;
});

window.addEventListener('load', () => {
    const photo = document.querySelector('.photo');
    photo.classList.add('enlarged');
});


<script>
window.onload = function() {
    document.getElementById("logo").style.animation = "spin 2s linear infinite";
};
</script>