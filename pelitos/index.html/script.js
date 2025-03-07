const btnSignIn = document.getElementById("sign-in");
      btnSignIn = document.getElementById("sign-up");
      formRegistrer = document.querySelector(".Register");
      formLogin = document.querySelector(".login");

      btnSignIn.addEventListener("click" , e=> {
        formRegistrer.classLista.add("hide");
        formLogin.classLista.remove("hide");
      })

      
      btnSignUp.addEventListener("click" , e=> {
        formLogin.classLista.add("hide");
        formRegistrer.classLista.remove("hide");
      })