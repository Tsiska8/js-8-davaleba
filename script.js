function gamotvla() {
    var input1 = document.getElementById("number1").value;
    var input2 = document.getElementById("number2").value;

    document.getElementById("result").innerHTML = Number(input1) / Number(input2);
    document.getElementById("result1").innerHTML = Number(input1) * Number(input2);
    document.getElementById("result2").innerHTML = Number(input1) + Number(input2);
    document.getElementById("result3").innerHTML = Number(input1) - Number(input2);
    
    return false;
}