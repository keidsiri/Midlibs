$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    const nounInput = $("input#noun").val();
    const yourNameInput = $("input#yourname").val();
    const animalInput= $("input#animal").val();
    const adjectiveInput = $("input#adjective").val();
    const verbInput = $("input#verb").val();
    const placeInput = $("input#place").val();

    $(".noun").text(nounInput);
    $(".yourname").text(yourNameInput);
    $(".animal").text(animalInput);
    $(".adjective").text(adjectiveInput);
    $(".verb").text(verbInput);
    $(".place").text(placeInput);

    $("#story").show();
    event.preventDefault();
  });
});