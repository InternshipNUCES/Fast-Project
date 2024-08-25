const btn = document.getElementById("btnl");
const link = document.getElementById("link");
const p1 = document.getElementById("p1");
const namebox = document.getElementById("namebox");
const rollno = document.getElementById("rollno");
const password = document.getElementById("password");



btn.onclick = function(){
      if(namebox.value == ""){
            p1.textContent = "Please Enter Your Name";
      }
      else if(rollno.value == ""){
            p1.textContent = "Please Enter Your Roll No";
      }
      else if(password.value == ""){
            p1.textContent = "Please Enter The Password";
      }
     else if(password.value != "qv47ds"){
            p1.textContent = "Wrong Password";
            password.textContent = "";
      }else{
        link.href = "index2.html";
      }
     
}
 
