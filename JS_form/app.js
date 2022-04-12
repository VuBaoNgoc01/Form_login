function sendForm(){
    var arr = document.getElementsByTagName("input");
    var f_name = arr[0].value;
    var l_name = arr[1].value;
    var age = arr[2].value;
    var address = arr[3].value;
    var exp_1 = arr[6].checked;
    var exp_2 = arr[7].checked;
    var exp_3 = arr[8].checked;
    var gender = "";
    var exp = "";


    if(f_name == "" || l_name == "" || age == "" || address == ""){
        alert("Information cannot be left blank!");
        return;
    }
    if (age <= 0) {
        alert("Invalid age!");
        return;
    }
    if (arr[4].checked) {
        gender = "Male";
    } else {
        gender = "Female";
    }
    if (exp_1||exp_2||exp_3) {
        
    } else {
        alert("failed experience!");
        return;
    }
    for (let i = 6; i <= 8; i++){
      if(arr[i].checked){
          exp = exp + arr[i].value + " ";
      }
    }
    var  cf = confirm("Registrant Information"+ f_name + "\n" + l_name + "\n" + age + "\n" + address + "\n" + gender + "\n" + exp);
    if (cf == 1) {
        alert("Information sent")
    }
}

function resetForm(){
    document.getElementsByTagName("form")[0].reset();
}