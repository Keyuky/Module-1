function kiemtra() {
    let weight = parseFloat(document.getElementById("weight").value);
    let height = parseFloat(document.getElementById("height").value);
    let bmi = weight / (height ** 2);
    let result;

    if (bmi < 18.5) { 
        result = ("Gầy độ 3. Ăn thật nhiều vào nhé " + "<img src = 'https://i.pinimg.com/originals/3b/97/63/3b97635b6bd4a5bfc436fbd3908f05e0.gif' width='100' height='100'>");
    }
    else {
        if (18.5 <= bmi < 25.0 ) result = "Normal"
        else {
            if ( 25.0 <= bmi < 30.0 ) result = "Overweight"
            else result = "Obese"
        }
    }
    document.getElementById("result").innerHTML= ("<b>result: </b> " +result)
}    
          