var firstCol = document.getElementById('colone1');
var secondCol = document.getElementById('colone2');
var thirdCol = document.getElementById('colone3');
var container = document.getElementById('ads');
var imagineFirst = document.getElementById('imgFirst');
var imagineTwo = document.getElementById('imgTwo');
var imagineThird = document.getElementById('imgThird');
var form1 = document.getElementById("colone1");
var form2 = document.getElementById("colone2");
var form3 = document.getElementById("colone3");

function getColor() {
    const colors = ['00', '0F', '5F', 'AF', 'FF'];
    const red = colors[getActiveIndex(firstCol)];
    const green = colors[getActiveIndex(secondCol)];
    const blue = colors[getActiveIndex(thirdCol)];
    return `#${red}${green}${blue}`;
}

function resetColors() {
    firstCol.style.borderColor = 'transparent';
    secondCol.style.borderColor = 'transparent';
    thirdCol.style.borderColor = 'transparent';
}

function getActiveIndex(element) {
    let i = 0;
    const inputs = element.getElementsByTagName('input');
    for (; i < 5; i++) {
        if (inputs.item(i).checked) {
            return i;
        }
    }

    return i < 5 ? i : 0;
}

firstCol.addEventListener('click', () => {
    resetColors();
    firstCol.style.borderColor = getColor();
});
secondCol.addEventListener('click', () => {
    resetColors();
    secondCol.style.borderColor = getColor();
});
thirdCol.addEventListener('click', () => {
    resetColors();
    thirdCol.style.borderColor = getColor();
});

function getImagine1(){
    switch(getActiveIndex(firstCol)){
    case 0:
        imagineFirst.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Flag_of_Poland.svg/2560px-Flag_of_Poland.svg.png";
    break;
    case 1:
        imagineFirst.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Flag_of_Romania.svg/1280px-Flag_of_Romania.svg.png";
    break;
    case 2:
        imagineFirst.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Finland.svg/1920px-Flag_of_Finland.svg.png";
    break;
    case 3:
        imagineFirst.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Bulgaria.svg/1920px-Flag_of_Bulgaria.svg.png";
    break;
    case 4:
        imagineFirst.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Flag_of_Austria.svg/1280px-Flag_of_Austria.svg.png";
    break;
    }
}

function getImagine2(){
    switch(getActiveIndex(secondCol)){
    case 0:
        imagineTwo.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Flag_of_Hungary.svg/1920px-Flag_of_Hungary.svg.png";
    break;
    case 1:
        imagineTwo.src = "https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_France_%281794–1815%2C_1830–1974%2C_2020–present%29.svg";
    break;
    case 2:
        imagineTwo.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Norway.svg/1280px-Flag_of_Norway.svg.png";
    break;
    case 3:
        imagineTwo.src = "https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Spain.svg";
    break;
    case 4:
        imagineTwo.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Portugal.svg/1280px-Flag_of_Portugal.svg.png";
    break;
    }
}

function getImagine3(){
    switch(getActiveIndex(thirdCol)){
    case 0:
        imagineThird.src = "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Greece.svg";
    break;
    case 1:
        imagineThird.src = "https://upload.wikimedia.org/wikipedia/commons/4/49/Flag_of_Ukraine.svg";
    break;
    case 2:
        imagineThird.src = "https://upload.wikimedia.org/wikipedia/commons/9/9c/Flag_of_Denmark.svg";
    break;
    case 3:
        imagineThird.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1920px-Flag_of_the_United_Kingdom.svg.png";
    break;
    case 4:
        imagineThird.src = "https://upload.wikimedia.org/wikipedia/commons/2/20/Flag_of_the_Netherlands.svg";
    break;
    }
}

function reset(){
    location.reload(); 
    return false;
}

function getNume1(){
    switch(getActiveIndex(firstCol)){
    case 0:
        document.getElementById("boxaFlag").innerHTML = "Polonia";
    break;
    case 1:
        document.getElementById("boxaFlag").innerHTML = "Romania";
    break;
    case 2:
        document.getElementById("boxaFlag").innerHTML  = "Finlanda";
    break;
    case 3:
        document.getElementById("boxaFlag").innerHTML  = "Bulgaria";
    break;
    case 4:
        document.getElementById("boxaFlag").innerHTML  = "Austria";
    break;
    }
}

function getNume2(){
    switch(getActiveIndex(secondCol)){
    case 0:
        document.getElementById("boxaFlag").innerHTML = "Ungaria";
    break;
    case 1:
        document.getElementById("boxaFlag").innerHTML = "Franta";
    break;
    case 2:
        document.getElementById("boxaFlag").innerHTML  = "Norvegia";
    break;
    case 3:
        document.getElementById("boxaFlag").innerHTML  = "Spania";
    break;
    case 4:
        document.getElementById("boxaFlag").innerHTML  = "Portugalia";
    break;
    }
}

function getNume3(){
    switch(getActiveIndex(thirdCol)){
    case 0:
        document.getElementById("boxaFlag").innerHTML = "Grecia";
    break;
    case 1:
        document.getElementById("boxaFlag").innerHTML = "Ucraina";
    break;
    case 2:
        document.getElementById("boxaFlag").innerHTML  = "Danemarca";
    break;
    case 3:
        document.getElementById("boxaFlag").innerHTML  = "Marea Britanie";
    break;
    case 4:
        document.getElementById("boxaFlag").innerHTML  = "Netherlands";
    break;
    }
}

