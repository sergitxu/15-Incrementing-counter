const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
    counter.innerText = '0';

    const updateCounter = () => {
        const target = parseInt(counter.getAttribute('data-target'));
        const c = parseInt(counter.innerText);
        const increment = target / 300;

        if (c < target) {
            counter.innerHTML = `${Math.ceil(c + increment)}`;
            setTimeout(updateCounter, 1)
        } else {
            counter.innerHTML = target;
        }
    }
    updateCounter();
});