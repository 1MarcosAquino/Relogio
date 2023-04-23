function time() {
    const currentTime = new Date();

    const second = document.querySelector('.second');
    second.style.rotate = `${currentTime.getSeconds() * 6}deg`;

    const minute = document.querySelector('.minute');
    minute.style.rotate = `${currentTime.getMinutes() * 6}deg`;

    const hour = document.querySelector('.hour');
    hour.style.rotate = `${currentTime.getHours() * 30}deg`;
}
//
setInterval(() => time(), 1000);
