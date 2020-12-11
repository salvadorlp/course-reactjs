// comments are made like that
// console -> tests are made there (to find out if there are errors )

// variable declaration

// var name = "Liuderas";
// var x = 10;
// alert(x);
// alert("The value of X is: " + x);
// var y;
// y = 20;
// sum = x + y;
// alert("My name is " + name);

// console.log(sum);

// variables are [Case Sensitive]
// nome != Nome
// keywords can't be used to name variables (ex: var, function)

// var idade = prompt("Qual sua idade?");

function enter(){
    var area = document.getElementById('area')
    var text = prompt("What's your name?")

    if( text == "" || text == null){
        alert("Plese, insert your name again.")
        return enter()
    }
    else
        area.innerHTML = "Welcome " + text
}

function nameButton(){
    var button = document.getElementsByClassName('button')[0]
    var buttonName = prompt("Please, give a name to the button.")

    if( buttonName == "" || buttonName == null){
        alert("Plese, insert the name again.")
        return nameButton()
    }
    else
        button.innerHTML = buttonName
}

var list = ["opa", "upa", 16, "ipa", 4];

function ArrayCommands(){
    var array_area = document.getElementById('array_area')

    array_area.innerHTML = "<br> >list.length<br>>lista[1] // return the element in the position 1<br>>lista.indexOf('ipa') // return the position of 'ipa', if returns -1 this element isn't in the array <br>>list.join(',') <br>>list.join(' / ') <br>>list.pop() // remove the last element <br>>list.shift() // remove the first element <br>>list[0] = 'alou' // value atribution <br>>list.push('bora') // insert in the end of array and return the number of elements"

}

function loops(){
    var loops_area = document.getElementById('loops_area')
    x = 0;

    var text = "";

    while(x < 10){
        // document.write("</br> Value of X:" + x);
        text += "Value of X: " + x + "<br>"
		
		x++;
    }
    
    text += "<br><br>"
    x = 5;

    for(a = 0; a < x; a++){
        // document.write("</br></br> Value of A" + a);
        text += "Value of A: " + a + "<br>"
    }

    if (x < 10){
        console.log("x < 10")
        x++
    }

    vector = [1, 2, 3, 4, 5];

    console.log("-----vector-----")
    for(var i in vector){
        console.log(vector[i])
    }

    loops_area.innerHTML = text;
}


function swt(x){
    switch(x){
		case 0:
            alert("X vale 0 !")
            break
		case 1:
            alert("X vale 1 !")
            break
		case 2:
            alert("X vale 2 !")
            break;
    }
}

function action(){
    var interval_area = document.getElementById('interval_area')
    interval_area.innerHTML += "Atualization<br>"
}

function interval(){
    // var interval_area = document.getElementById('interval_area')
    // [CHALLENGE] interval_area.innerHTML += "<button onclick='clearInterval(timer)'>Stop Interval Execution</button> <br>"
    
    
    //setInterval(action, time in miliseconds) // execution (ininterrupta)

    var timer = setInterval(action, 1000) // Execution from time to time
    
    // setTimeout(interval_area.innerHTML = Stop, 3000) // Wait and execute
}

// Webstorage
// Cookies: dados que são salvos no navegador do usuário
//     # Última vez que o usuário entrou no site
//     # Última página acessada em determinado site
//
// Sessions: dados que são salvos no navegador do usuário temporariamente 
//     #os dados são perdidos quando fecha o navegador
// 
// Formas de salvar com WebStorage 
// ----------------------------------------------------------------
// localStorage: ao fechar o navegador os dados ainda ficam salvos (salvo localmente no navegador)
// sessionStorage: ao fechar o navegador os dados são perdidos
// 
// localStorage.setItem("name", "Salvador")
// localStorage.getItem("name", "Salvador")
// localStorage.removeItem("name", "Salvador")

// var nam = localStorage.name
// localStorage.name = "Salvador"

// sessionStorage.setItem("theme", "dark")

function getName(){
    var area = document.getElementById("display_area")
    var name

    if(typeof(localStorage.name) == "undefined"){
        localStorage.name = prompt("What's your name?")
    }

    var name = localStorage.name

    area.innerHTML = "Storage send your name: " + name
}

// difference between [ var ] [ let ] [ const ]
// 
// [ let ] is defined just in his scope as opposed to [ var ]
//
// [ const ] you can't change his value

// Using variables inside of strings
//
let names = "Olivier"
let lastnames = "Liudy"
let ages = 19

let person = "My name is: " + names + " " + lastnames + " and I have " + ages + " years old"

let person1 = `My name is: ${names} ${lastnames} and I have ${ages} years old`

// desconstruct objects and arrays

let individual = {
    name_obj: "Olivier",
    nickname_obj: "Liudy",
    age_obj: 19
}

let friends = ["Liudy", "JP", "VH"]

let { name_obj } = individual // name_obj = individual.name_obj
let { age_obj } = individual // age_obj = individual.age_obj
let { nickname_obj:nickname } = individual // nickname = individual.nickname_obj

let { 0:friend0 } = friends // friend0 = friends[0]
let { 1:friend1 } = friends // friend1 = friends[1]
let { 2:friend2 } = friends // friend2 = friends[2]

let [ fr, fr1, fr2 ] = friends // fr = friends[0] | fr1 = friends[1] | fr2 = friends[2]
let [ f, f1] = friends // f = friends[0] | f1 = friends[1]

// SPREAD operator [ ... ]

var vec1 = [1, 2, 3]

var vec2 = [vec1, 4, 5, 6] // vec2 = [[1, 2, 3], 4, 5, 6]

var vec3 = [...vec1, 4, 5, 6] // vec3 = [1, 2, 3, 4, 5, 6]


function registerStudent(info){
    let newData = {
        ...info,
        course: "Human Medicine",
        courseDuration: "6 years",
        status: 1
    }
    return newData
}

// REST operator [ ... ]

var users = ["Sagi", "Liudy"]

function register(users, ...newUsers){
    // for(user in newUsers)
    // {
    //     users = [...users, newUsers[user]]
    // }
    // return users
    let totalUsers = [
        ...users, ...newUsers
    ]
    return totalUsers
}

console.log("Before register: " + users)
users = register(users, "Salvador", "Bado")
console.log("After register: " + users)

// ARRAY OPERATIONS [ map ] [ reduce ] [ find ]

var larray = [1,2,3,4,5,6]

const mapArray = larray.map( (item) => {
    return item*10
})

const mapArray1 = larray.map( (item, index) => {
    return item + index
})

const mapArray2 = larray.map( (item, index, vector) => {
    return vector[0] * item * index
})

// in [ reduce ] currentValue starts in v[1]
const reduceArray = larray.reduce( (total, next) => {
    return total + next
})

const findArray = larray.find( (item) => {
    return item === 2
})

// Facilities [ includes ] [ endsWith ] [ startsWith ]
console.log("---------- [ INCLUDES ] [ ENDSWITH ] [ STARTSWITH ]----------")
let namesArray = ["Joao", "Maria", "Pedro"]
console.log(namesArray)

console.log(namesArray.includes("Pedro")) // true
console.log(namesArray.includes("Pedr")) // false
console.log(namesArray.includes("Junior")) // false

console.log(namesArray[0].endsWith("ao")) // true
console.log(namesArray[0].endsWith("s")) // false

console.log("---------- [ SOME ] [ EVERY ] ----------")
// Facilities [ some ] [ every ]

console.log(namesArray.some(name => name == "Pedro")) // true

namesObject = [
    {name: "Joao", age: 15},
    {name: "Maria", age: 85},
    {name: "Pedro", age: 20}
]

console.log(namesObject.every(person => person.age >= 18)) // false