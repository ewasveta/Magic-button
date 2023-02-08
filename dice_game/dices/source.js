function magic()
{
    let num1 = Math.ceil(Math.random() * 6);
    let num2 = Math.ceil(Math.random() * 6);

    document.getElementById("dice1").src = num1 + ".jpg";
    document.getElementById("dice2").src = num2 + ".jpg";
}