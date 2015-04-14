$(document).ready(function(){
  // var table = $.csv.toObjects("/design_class_spreadsheet.csv");
  // console.log(table);

  $(window).scroll(function(){
    if($(window).scrollTop() > window.innerHeight-70){ // position of menu from the top 
      $('#category-list').addClass('fixed-nav');
    } else{
      $('#category-list').removeClass('fixed-nav');
    }
  });


  $.ajax({
    url: "/classes.csv",
    async: false,
    success: function (csvd) {
        data = $.csv.toObjects(csvd);
    },
    dataType: "text",
    complete: function () {
        // call a function on complete 
    }
  });

  var design_categories = ["Computer Graphics and Animation", "Digital Product Design", "Engineering Design", "Enterprise Design", "Environmental Design", "Game Design", "Human-Centered Design", "Interdisciplinary", "Physical Product Design", "Visual Design"];

  var cat_div = "";
  for(var i = 0; i < design_categories.length; i++) {
    cat_div += "<a data-scroll-nav='"+i+"'><li>" + design_categories[i] + "</li></a>";
  }
  $('#category-list').html(cat_div);

  var div = ""
  /** Always do i < design_categories because there is an empty line **/
  for (var i = 0; i < design_categories.length; i++) {
    div += "<div id='" + design_categories[i].replace(/ /g, "-") + "' data-scroll-index='"+i+"'><h3>" + design_categories[i] + "</h3></div>";
  }
  $('#course-list').html(div);

  var url = "http://guide.berkeley.edu/search/?P=";
  var str = "";
  for (var i = 0; i < data.length; i++) {
    var course = data[i];
    var category = course.Category;
    var dept = course.Dept;
    var number = course["Number"];
    var title = course.Title;

    var div_id = "#"+category.replace(/ /g, "-");
    var current_div_html = $(div_id).html();

    str += current_div_html + "<li>";
    if (number === "98 / 198") {
      str += "<a href='http://www.decal.org/' target = '_blank'>" + dept + " " + number + "</a>"
    } else {
      str += "<a href='http://guide.berkeley.edu/search/?P=" + dept + " " + number + "' target = '_blank'>" + dept + " " + number + "</a>";
    }
    str += ": " + title;
    str +="</li>";
    $(div_id).html(str);
    str = "";
  }



   /*$(document).scroll(function() {
    if ($(this).scrollTop() > scroll_graphics) {
      //$("#Computer-Graphics-and-Animation").addClass('active');
    }
   })*/




  // console.log(data)
  // [
  //   {
  //     Category: "Computer Graphics and Animation",
  //     Dept: "Center for New Media / CS",
  //     Number: "190 / 194",
  //     Title: "Advanced Digital Animation"
  //   }
  // ]

});