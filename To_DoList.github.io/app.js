
$("#myInput").on("keyup",function(e){
    //13  means enter button
    if(e.keyCode == 13 && $("#myInput").val() != "")
    {
        console.log($("#myInput").val());
    var task = $("<div class='task'></div>").text($("#myInput").val());
    var del = $("<i class='fas fa-trash-alt'></i>").click(function(){
        var p = $(this).parent();
        p.fadeOut(function(){
        p.remove();
        });
});
   
    var check = $("<i class='fas fa-check'></i>").click(function(){
        var p = $(this).parent();
        p.fadeOut(function(){
          $(".work1").append(p);
          console.log(p);
          p.fadeIn();
        });
        $(this).remove();
      });

    task.append(del,check);
      $(".work2").append(task);
        //to clear the #myInput
      $("#myInput").val("");

}
});
            
