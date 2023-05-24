
const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {
    counter.innerText = "0";
    const target = Number( counter.dataset.target );
    const increment = target / 500;

    function updateCounter() {
        const currentValue = Number( counter.innerText );

        if (currentValue < target) {
            counter.innerText = `${Math.ceil(currentValue + increment)}`
            setTimeout(updateCounter, 1);
        }
        else {
            counter.innerText = target;
        }
    }

    updateCounter();
});