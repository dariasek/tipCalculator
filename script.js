function func(){
    let bill = document.getElementById('bill').value;
    let satisfactionRate = document.getElementById('tip').value;
    let numberofPeople = document.getElementById('people').value;
    let resultTip = bill * satisfactionRate / numberofPeople;
    document.getElementById('txt').innerHTML = resultTip.toFixed(2);
    document.getElementById('result').style.visibility = "visible";

}

document.getElementById('sub').addEventListener('click', func);
