
$("button[type='submit']").click(function(event){
  event.preventDefault();
  value = $("#shopping-list-entry").val();
  $(".shopping-list").append('<li><span class="shopping-item">'+ value + '</span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button><button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>');
})

$("ul").on("click",".shopping-item-toggle",function(event){
  $(event.currentTarget).closest("li").find(".shopping-item").toggleClass("shopping-item__checked");
})
$("ul").on("click",".shopping-item-delete",function(event){
  $(event.currentTarget).closest("li").remove();
})