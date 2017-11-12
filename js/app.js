
document.addEventListener("DOMContentLoaded", function () {

    var picArr = document.querySelectorAll('li');
    var body = document.getElementsByTagName('body');
    var div = document.createElement('div');
    div.className = 'fullScreen';
    var img = document.createElement('img');
    var button = document.createElement('button');
    button.className = 'close';
    button.innerText = 'Close';

    function createFullScreenPic() {

        body[0].appendChild(div);

        img.setAttribute('src', this.firstElementChild.src);
        div.appendChild(button);

        div.insertBefore(img, button);
    }

    function deleteFullScreenPic() {

        div.parentElement.removeChild(div);

    }

    button.addEventListener('click', deleteFullScreenPic);

    for(var i =0; i<picArr.length; i++){
        picArr[i].addEventListener("click", createFullScreenPic );
    }
});