//js hoisting

const initApp = () => {
    console.log(stepOne)
    stepOne();
}

document.addEventListener("DOMcontentloaded", initApp);

const stepOne = () => {
    console.log('step one');

}



