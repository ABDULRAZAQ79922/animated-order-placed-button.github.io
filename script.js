

const orderBtn = document.getElementById('orderBtn');
const congratsText = document.getElementById('congratsText');

orderBtn.addEventListener('click', function() {
    orderBtn.textContent = 'Processing...';
    orderBtn.classList.add('processing');
    orderBtn.disabled = true;

    setTimeout(() => {
        orderBtn.textContent = 'Order Placed';
        orderBtn.classList.remove('processing');
        orderBtn.classList.add('confirmed');
        displayConfetti();

        setTimeout(() => {
            congratsText.style.display = 'block';
            orderBtn.classList.remove('confirmed');
            setTimeout(() => {
                congratsText.style.display = 'none';
                orderBtn.textContent = 'Confirm Order';
                orderBtn.disabled = false;
            }, 2000);
        }, 2000);
    }, 3000);
});

function displayConfetti() {
   
    const confettiCount = 100;
    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        document.body.appendChild(confetti);

        confetti.style.left = `${Math.random() * 100}%`;
        confetti.style.animationDelay = `${Math.random() * 2}s`;
        confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;

        setTimeout(() => {
            confetti.remove();
        }, 3000);
    }
}
