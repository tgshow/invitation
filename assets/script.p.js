const buttonSim = document.getElementById('button-sim')
buttonSim.addEventListener('click', () => {
    alert('Vamos marcar! =) clique em ok')
    window.location.href = 'https://youtu.be/izGwDsrQ1eQ?si=IcE5HWByl1ja3sTY'
})


const buttonNao = document.getElementById('button-nao');
buttonNao.addEventListener('click', () => {
    const container = document.querySelector('.container');
    const maxWidth = container.clientWidth - buttonNao.clientWidth;
    const maxHeight = container.clientHeight - buttonNao.clientHeight;

    const randomX = Math.random() * maxWidth;
    const randomY = Math.random() * maxHeight;

    buttonNao.style.position = 'absolute';
    buttonNao.style.left = `${randomX}px`;
    buttonNao.style.top = `${randomY}px`;
});