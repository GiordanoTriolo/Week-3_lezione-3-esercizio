function invia(){
    let dato= document.getElementById('name').value;
    document.getElementById('namespan').innerHTML = dato;

    dato= document.getElementById('surname').value;
    document.getElementById('surnamespan').innerHTML = dato;

    dato= document.getElementById('age').value;
    document.getElementById('agespan').innerHTML = dato;
    dato= 70-dato;
    if( dato>=1){
        document.getElementById('retirespan').innerHTML = dato+', non puoi ancora andare in pensione';
    } else{
        document.getElementById('retirespan2').innerHTML ='Complimenti, puoi già andare in pensione!';
    }

    dato= document.getElementById('city').value;
    document.getElementById('cityspan').innerHTML = dato;
}

function sottrazione(){
    let num1= document.getElementById('number1').value;
    let num2= document.getElementById('number2').value;
    let r= (+num1)-(+num2);
    document.getElementById('result').innerHTML = r;
}

function somma(){
    let num1= document.getElementById('number1').value;
    let num2= document.getElementById('number2').value;
    let r= (+num1)+(+num2);
    document.getElementById('result').innerHTML = r;
}

function moltiplicazione(){
    let num1= document.getElementById('number1').value;
    let num2= document.getElementById('number2').value;
    let r= (+num1)*(num2);
    document.getElementById('result').innerHTML = r;   
}

function divisione(){
    let num1= document.getElementById('number1').value;
    let num2= document.getElementById('number2').value;
    if(num2!=0){
        var r= (+num1)/(+num2);
    } else {
        var r= 'Errore, divisione per 0!';
    }
    document.getElementById('result').innerHTML = r;
}