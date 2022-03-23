

  $(document).ready(function(){
  $(".card-img-top").hover(function(){
    $(".card-text").toggle();
  });

    // $("#text10").click(function(){
    //   $(".cart1").show();
    
    // });
    // // $(".mainimage").click(function(){
    //   $("#image1").hide();
    
    // });
  });
    
 
 
   
    // $(".skincare1").mouseout(function(){
    //     $(".skincare1 .cart1").toggle();
    //   });




  // let image = document.querySelector(".mainimage");
  

  // image.addEventListener("click", (e)=>{
  //   // skin.style.display = "flex"
  //   alert("this is working")
  // }
  // )
  // let cart = document.querySelector(".cart");
  // cart.addEventListener("click", (e)=>{
  //   // skin.style.display = "flex"
  //   alert("yes try me")
  // }
  // )
  // let skin = document.querySelector(".skincare5");
  // skin.addEventListener("click", (e)=>{
  //   // skin.style.display = "flex"
  //   alert("yes try me please")
  // }
  // )

  // $(".mainimage").mouseover(function(){
  //   $(".cart1").show()
  // });
  
  let zoom = document.querySelector(".card-img-top")

  zoom.addEventListener("mouseover", (e)=>{
    // bname.style.color = "pink";
    zoom.style.fontSize = '40px';
})

function imageEnlarge() {
  document.getElementById(".card-img-top").style.height="100%";
  document.getElementById(".card-img-top").style.width="100%";
  document.getElementById(".card-img-top").style.position='absolute';
  }
 function imageReset() {
 
  document.getElementById(".card-img-top").style.height="80%";
  document.getElementById(".card-img-top").style.width="80%";
  document.getElementById(".card-img-top").style.position='absolute';
  }


