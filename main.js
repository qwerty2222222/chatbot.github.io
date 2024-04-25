let tg = window.Telegram.WebApp;

tg.expand();

let button = document.getElementById('click');

button.onclick = () => {
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide();
    }
    else {
        tg.MainButton.setText('Вы нажали на кнопку!');
        tg.MainButton.show();
    }

}
