console.log(`This is my RPS project`);


let rock = document.getElementById(`image-rock`)
let paper = document.getElementById(`image-paper`)
let scissor = document.getElementById(`image-scissor`)
let computer = document.getElementById(`computer`)
let a
a = 0
//Random Number generator
let numberRandom
function random() {
    numberRandom = Math.floor((Math.random() * 3) + 1)
    console.log(`The Random Number is ${numberRandom}`)
};

//Time speel function
function Time(a) {
    setTimeout(() => {
        computer.innerHTML = a
    }, 1000);
}

//Loading...(animation)
function loading() {
    computer.innerHTML = ` <div class="col-3"><div class="snippet" data-title=".dot-spin"><div class="stage"><div class="dot-spin"></div></div></div></div>`
}

//Function for rock click
function rockFunction() {
    console.log(`Computer Has coosen Rock`);
    loading()
    Time(`<img src="./rock.png" alt="Stone" srcset="" class="rock-img img-options transformed" id="image-rock">`)

}

//Function for paper click
function paperFunction() {
    console.log(`Computer Has coosen Paper`);
    loading()
    Time(`<img src="./paper.png" alt="Paper" srcset="" class="rock-img img-options transformed" id="image-paper">`)
}

//Function for scissor click
function scissorFunction() {
    console.log(`Computer Has coosen Scissor`);
    loading()
    Time(`<img src="./scissor.png" alt="Scissor" srcset="" class="rock-img img-options transformed" id="image-scissor">`)
}

//Points updater
function pointUpdater() {
    setTimeout(() => {
        document.getElementById(`your-points`).innerText = a
    }, 1000);
}

//--------------------------
// 1 is rock
// 2 is paper
// 3 is scissor
//--------------------------

//Clicking 
//if rock is clicked 
rock.addEventListener(`click`, () => {
    random()
    if (numberRandom == 1) {
        loading()
        rockFunction()
        a = a + 0
        console.log(a);
        pointUpdater()
    }
    else if (numberRandom == 2) {
        loading()
        paperFunction()
        a = a - 5
        console.log(a);
        pointUpdater()
    }
    else if (numberRandom == 3) {
        loading()
        scissorFunction()
        a = a + 20
        console.log(a);
        pointUpdater()
    }
})

//if paper is clicked 
paper.addEventListener(`click`, () => {
    random()
    if (numberRandom == 1) {
        loading()
        rockFunction()
        a = a + 20
        pointUpdater()
    }
    else if (numberRandom == 2) {
        loading()
        paperFunction()
        a = a + 0
        pointUpdater()
    }
    else if (numberRandom == 3) {
        loading()
        paperFunction()
        a = a - 5
        pointUpdater()
    }

})

//if scissor is clicked
scissor.addEventListener(`click`, () => {
    random()
    if (numberRandom == 1) {
        loading()
        rockFunction()
        a = a - 5
        pointUpdater()
    }
    else if (numberRandom == 2) {
        loading()
        paperFunction()
        a = a + 20
        pointUpdater()
    }
    else if (numberRandom == 3) {
        loading()
        scissorFunction()
        a = a + 0
        pointUpdater()
    }
})