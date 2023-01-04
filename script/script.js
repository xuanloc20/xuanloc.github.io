"use strict"
const getEmail = document.getElementById(`email`);
const btn = document.querySelector(".buttoninputemail");

// const regex =  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g;

const regex1 = /^\w+@+[a-zA-Z]+.com$/i;

// Click button, if the email is invalid, show a alert. else save email in a constain with the name is emailName and show personal-info, 

let emailName= "";
btn.addEventListener("click" , function () {
    if (getEmail.value==="" || regex1.test(getEmail.value)===false){
      console.log("Invalue");
      document.getElementById("email").title= "Email is Invalible, please enter gain as abc@gmail.com";

      alert("Input is invalible as a email, please input gain, as xxxx@email.com with x can be digit or char ");

    } else {
      emailName = getEmail.value;
      console.log(emailName);
      document.querySelector(".inputemail").classList.add("hide");
      document.getElementById("personal-info").classList.remove("hide");
    }
});

/* 10. Chức năng ẩn thông tin nghề nghiệp   */
// 1.for job-exp
const viewmoreexp = document.querySelector(".viewmoreexp");
const viewlessexp = document.querySelector(".viewlessexp");
const exph1 =document.querySelector(".exp-h1");
// mouse over and mouse out>> viewmoreexp class will show and hidden
// mouse over >> show
exph1.addEventListener("mouseover" , function() {
  viewmoreexp.classList.remove("hide");
  viewmoreexp.addEventListener("click" , function(){
    viewmoreexp.classList.add("hide");
    viewlessexp.classList.remove("hide");
    document.querySelector(".expmore").classList.remove("hide");
  });
  viewlessexp.addEventListener("click" , function (){
    viewmoreexp.classList.remove("hide");
    viewlessexp.classList.add("hide");
    document.querySelector(".expmore").classList.add("hide");

  });
});
// mouse out>>  hidden
exph1.addEventListener("mouseout" , function (){
  viewmoreexp.classList.add("hide");
});
// 2.for job-know
const viewmorekno = document.querySelector(".viewmorekno");
const viewlesskno = document.querySelector(".viewlesskno");
const knoh1 =document.querySelector(".kno-h1");
// mouse over and mouse out>> viewmorekno class will show and hidden
knoh1.addEventListener("mouseover" , function() {
  viewmorekno.classList.remove("hide");
  viewmorekno.addEventListener("click" , function(){
    viewmorekno.classList.add("hide");
    viewlesskno.classList.remove("hide");
    document.querySelector(".knomore").classList.remove("hide");
  });
  viewlesskno.addEventListener("click" , function (){
    viewmorekno.classList.remove("hide");
    viewlesskno.classList.add("hide");
    document.querySelector(".knomore").classList.add("hide");

  });
});
knoh1.addEventListener("mouseout" , function (){
  viewmorekno.classList.add("hide");
});

// 3.for job-act
const viewmoreact = document.querySelector(".viewmoreact");
const viewlessact = document.querySelector(".viewlessact");
const acth1 =document.querySelector(".act-h1");
// mouse over and mouse out>> viewmoreact class will show and hidden
acth1.addEventListener("mouseover" , function() {
  viewmoreact.classList.remove("hide");
  viewmoreact.addEventListener("click" , function(){
    viewmoreact.classList.add("hide");
    viewlessact.classList.remove("hide");
    document.querySelector(".actmore").classList.remove("hide");
  });
  viewlessact.addEventListener("click" , function (){
    viewmoreact.classList.remove("hide");
    viewlessact.classList.add("hide");
    document.querySelector(".actmore").classList.add("hide");

  });
});
acth1.addEventListener("mouseout" , function (){
  viewmoreact.classList.add("hide");
});

// 4.for job-hob
const viewmorehob = document.querySelector(".viewmorehob");
const viewlesshob = document.querySelector(".viewlesshob");
const hobh1 =document.querySelector(".hob-h1");
// mouse over and mouse out>> viewmorehob class will show and hidden
hobh1.addEventListener("mouseover" , function() {
  viewmorehob.classList.remove("hide");
  viewmorehob.addEventListener("click" , function(){
    viewmorehob.classList.add("hide");
    viewlesshob.classList.remove("hide");
    document.querySelector(".hobmore").classList.remove("hide");
  });
  viewlesshob.addEventListener("click" , function (){
    viewmorehob.classList.remove("hide");
    viewlesshob.classList.add("hide");
    document.querySelector(".hobmore").classList.add("hide");

  });
});
hobh1.addEventListener("mouseout" , function (){
  viewmorehob.classList.add("hide");
});

// 5.for job-lan
const viewmorelan = document.querySelector(".viewmorelan");
const viewlesslan = document.querySelector(".viewlesslan");
const lanh1 =document.querySelector(".lan-h1");
// mouse over and mouse out>> viewmorelan class will show and hidden
lanh1.addEventListener("mouseover" , function() {
  viewmorelan.classList.remove("hide");
  viewmorelan.addEventListener("click" , function(){
    viewmorelan.classList.add("hide");
    viewlesslan.classList.remove("hide");
    document.querySelector(".lanmore").classList.remove("hide");
  });
  viewlesslan.addEventListener("click" , function (){
    viewmorelan.classList.remove("hide");
    viewlesslan.classList.add("hide");
    document.querySelector(".lanmore").classList.add("hide");

  });
});
lanh1.addEventListener("mouseout" , function (){
  viewmorelan.classList.add("hide");
});

// 6.for job-ski
const viewmoreski = document.querySelector(".viewmoreski");
const viewlessski = document.querySelector(".viewlessski");
const skih1 =document.querySelector(".ski-h1");
// mouse over and mouse out>> viewmoreski class will show and hidden
skih1.addEventListener("mouseover" , function() {
  viewmoreski.classList.remove("hide");
  viewmoreski.addEventListener("click" , function(){
    viewmoreski.classList.add("hide");
    viewlessski.classList.remove("hide");
    document.querySelector(".skimore").classList.remove("hide");
  });
  viewlessski.addEventListener("click" , function (){
    viewmoreski.classList.remove("hide");
    viewlessski.classList.add("hide");
    document.querySelector(".skimore").classList.add("hide");

  });
});
skih1.addEventListener("mouseout" , function (){
  viewmoreski.classList.add("hide");
});