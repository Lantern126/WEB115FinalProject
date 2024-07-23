$(document).ready(function() {
  
  //--remove the formatting from the top left table cell
  $("#blankcell").css("background-color","white");
  $("#blankcell").css("border-width", "0px");
  $("#blankcell").css("opacity","100");
  
//--Save button function--start--------------------------------------------------------------------
  $("#saveButton").on("click", function() {
    let lunchboxPlan = {};

    $(".lunchboxDay").each(function() {
      let day = $(this).data("day");
      lunchboxPlan[day] = {};

      $(this).find(".dailyMeals").each(function() {
          let lunchboxType = $(this).data("meal");
          lunchboxPlan[day][lunchboxType] = $(this).val();
      });
    });

    fnDisplayLunchbox (lunchboxPlan);
  });
//--Save Button function--end----------------------------------------------------------------------
    
//--:)--function to clear lunchbox--START-------------------------------------------------------------
  // .meals from days of the week
  $("#clearButton").on("click",function() {
      $(".dailyMeals").val("");
  });
//--:)--function to clear lunchbox--END-----------------------------------------------------------------------------------------

//--:)--function to print lunchbox--START-------------------------------------------------------------
  $("#printButton").on("click", function() {
    window.print();
  });
  // v001: prints the main screen success
//--:)--function to print lunchbox--END-----------------------------------------------------------------------------------------

//--download the lunchbox--START-------------------------------------------------------------------

  $("#downloadButton").on("click", function() {
    let lunchboxPlan = {};

    $(".lunchboxDay").each(function() {
      let day = $(this).data("day");
      lunchboxPlan[day]={};

      $(this).find(".dailyMeals").each(function() {
        let lunchboxType = $(this).data("meal");
        lunchboxPlan[day] [lunchboxType] = $(this).val();
      });
    });

    let lunchboxText = JSON.stringify(lunchboxPlan, null, 2);
    let lunchboxDetails = new lunchboxDetails([lunchboxText], {type: "text/plain"});
    let link = document.createElement('a'); //<a> tag to create link to current page
    link.href = URL.createObjectURL(lunchboxDetails); 
    // test:  link.href=url.createObjectURL(lunchboxDetails);
    link.download = "lunchbox_Details.txt";
    link.click();
  });

//--download the lunchbox--END-------------------------------------------------------------------

//--function to display lunchbox--START-------------------------------------------------------------
  function fnDisplayLunchbox(lunchboxPlan) {
    let lunchboxDisplayTableTbody = $("#lunchboxDisplayTableTbody");
    lunchboxDisplayTableTbody.empty();

    $.each(lunchboxPlan, function(day, meals) {
      let row = $("<tr></tr>");
      row.append("<td>" + day + "</td>");
      row.append("<td>" + meals.breakfast + "</td>");
      row.append("<td>" + meals.snack1 + "</td>");
      row.append("<td>" + meals.lunch + "</td>");
      row.append("<td>" + meals.snack2 + "</td>");
      row.append("<td>" + meals.dinner + "</td>");
      lunchboxDisplayTableTbody.append(row);
    });
  }
//--function to display lunchbox--END---------------------------------------------------------------------------------------------
});



//-------------------------------------------------------------------------------------------------
// document.getElementById("myButton").addEventListener('click',myWindow)
// function myWindow()
// {
//     visitorName = document.getElementById("myInput").value;
//     myText = ("<html>\n<head>\n<title>Welcome</title>\n</head>\n<body>\n");
//     myText += ("Hello " + visitorName + ", this page was created on-the-fly!");
//     myText += ("</body>\n</html>");

//     flyWindow = window.open('about:blank','myPop','width=400,height=200,left=200,top=200');
//     flyWindow.document.write(myText);
// }
//-------------------------------------------------------------------------------------------------

//-------------------------------------------------------------------------------------------------
/*
                            ******
                        **************
                  ********          ********
                ****                      ****
            ****                              ****
          ****                                  ****
        ****  **********************************  ****
      ****    **********************************    ****
      **      **********************************      **
    **                ******************                **
  ****            **************************            ****
  **              **********      **********              **
  **            ********              ********            **
****            ******                  ******            **** 
**            ********                  ********            **
**            ******                      ******            **
**            ******                      ******            **
**            ******                      ******            **
**            ********                  ********            **
****            ******                  ******            ****
  **            ********              ********            **
  **              **********      **********              **
  ****            **************************            ****
    **                ******************                **
      **      **********************************      **
      ****    **********************************    ****
        ****  **********************************  ****
          ****                                  ****
            ****                              ****
                ****                      ****
                  ********          ********
                        **************
                            ******
*/
//----------------------------------------------------------------------------
