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