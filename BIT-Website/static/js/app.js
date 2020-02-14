$(document).ready(function() {

    $("#v1").html('<source src="/home.mp4" type="video/mp4">' );
    $("#kanrules").click(function() {
        window.open("/C_and_R/kan_rules.pdf", '_blank');
        
    });
    $("#engrules").click(function() {
        window.open("/C_and_R/eng_rules.pdf", '_blank');
        
    });
    $("#kansch2").click(function() {
        window.open("/C_and_R/kan_sch2.pdf", '_blank');
        
    });
    $("#kansch3").click(function() {
        window.open("/C_and_R/kan_sch3.pdf", '_blank');
        
    });
    $("#kansch4").click(function() {
        window.open("/C_and_R/kan_sch4.pdf", '_blank');
        
    });
    $("#engsch1").click(function() {
        window.open("/C_and_R/eng_sch1.pdf", '_blank');
        
    });
    $("#engsch2").click(function() {
        window.open("/C_and_R/eng_sch2.pdf", '_blank');
        
    });
    $("#engsch3").click(function() {
        window.open("/C_and_R/eng_sch3.pdf", '_blank');
        
    });
    $("#engsch4").click(function() {
        window.open("/C_and_R/eng_sch4.pdf", '_blank');
        
    });
    $("#pd2019").click(()=>{window.open("/placement/Placemnet-Details-2019-2019-final-1.pdf",'_blank')});
    $("#pd2018").click(()=>{window.open("/placement/Placemnet-Details-2018-Final-.pdf",'_blank')});
    $("#pd2017").click(()=>{window.open("/placement/Placement-Details-2017-Sheet1.pdf",'_blank')});
    $("#pd2016").click(()=>{window.open("/placement/Placement-Details-2016-Sheet1.pdf",'_blank')});
    $("#2020b").click(()=>{window.open("/placement/Companies-during-2020.pdf",'_blank')});
    $("#2019b").click(()=>{window.open("/placement/Company-List-for-Placement-Oct-2019-2019-.pdf",'_blank')});
    $("#2018b").click(()=>{window.open("/placement/Companies-dirng-2018.pdf",'_blank')});
    $("#2017b").click(()=>{window.open("/placement/Companies-dirng-2017-.pdf",'_blank')});
    $("#2016b").click(()=>{window.open("/placement/Companies-dirng-2016.pdf",'_blank')});
    $("#alumni").click(()=>{window.open("https://bitalumni.org/",'_blank')});
    $(window).scroll(function() {
      $('video').each(function() {
          if ($(this).visible(true)) {
              $(this)[0].play();
          } else {
              $(this)[0].pause();
          }
      })
  });
    
  });


  // Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function goHome()
{
  window.location = "/";
}

function getRes(dept,res)
{
  $('#popup-content').load('/getRes/'+dept+'/'+res);
}