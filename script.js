// меняем название страницы
document.querySelector('title').innerText = 'Print';

// заголовок
document.querySelector('h1').innerText = '"Киевский торт"';

//кнопка
/*
let bt1 = document.querySelector('#bt1');
bt1.onclick = style2;

function style2 ()
{
document.querySelector('link').href = 'style2.css';
};*/

bt1.onclick = function ()
{
	document.querySelector('link').href = 'style2.css';
};