function ChangeMoney() {

    let dauVao = document.getElementById('Amount').value;
    let select_1 = document.getElementById('From').value;
    let select_2 = document.getElementById('To').value;
    let ketQua;


    if (select_1 == select_2){
        ketQua = dauVao;

    }else if (select_1 == "VND" && select_2 =="USD"){
        ketQua = dauVao / 24000 + " $";
    }else {
        ketQua = dauVao * 24000 + " Đ";
    }document.getElementById("Result").innerHTML = 'Result = ' + ketQua;
    }
    function changeValue(option) {
    let toOption = document.getElementById('To');
    if (option.value === "VND"){
        toOption.value = "USD";
    }
    else
        toOption.value = "VND";

    }