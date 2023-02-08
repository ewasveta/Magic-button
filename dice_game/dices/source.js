function magic()
{
    let num1 = Math.ceil(Math.random() * 6);
    let num2 = Math.ceil(Math.random() * 6);

    document.getElementById("dice1").src = num1 + ".jpg";
    document.getElementById("dice2").src = num2 + ".jpg";

    console.log(parseInt(document.getElementById('counter').innerText.split(":")[1]));

    if(num1 == num2)
    {
        let value = 
        parseInt(document.getElementById('counter').innerText.split(":")[1]); 
            value = isNaN(value) ? 0 : value;
            
        value++; 

        document.getElementById('counter').innerText =
            "כמות הפעמים שיצא לך דאבל : " + value;    
       
    }
}