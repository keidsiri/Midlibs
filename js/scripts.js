// $(document).ready(function() {
//   $("#formOne").submit(function(event) {
//     event.preventDefault();
//     const nounInput = $("input#noun").val();
//     const yourNameInput = $("input#yourname").val();
//     const animalInput= $("input#animal").val();
//     const adjectiveInput = $("input#adjective").val();
//     const verbInput = $("input#verb").val();
//     const placeInput = $("input#place").val();

//     $(".noun").text(nounInput);
//     $(".yourname").text(yourNameInput);
//     $(".animal").text(animalInput);
//     $(".adjective").text(adjectiveInput);
//     $(".verb").text(verbInput);
//     $(".place").text(placeInput);

//     $("#story").show();
//     event.preventDefault();
//   });
// });

$(document).ready(function() {
  $("#formOne").submit(function() {
    event.preventDefault();
    const person1Input = $("input#person1").val();
    console.log(person1Input);
    const person2Input = $("input#person2").val();
    const animalInput= $("input#animal").val();
    const exclamationInput = $("input#exclamation").val();
    const verbInput = $("input#verb").val();
    const nounInput = $("input#noun").val();

    let words = [person1Input, person2Input, animalInput, exclamationInput, verbInput, nounInput]
    words.forEach(function(word) {
      alert(word);
    })

    $(".person1").text(person1Input);
    $(".person2").text(person2Input);
    $(".animal").text(animalInput);
    $(".exclamation").text(exclamationInput);
    $(".verb").text(verbInput);
    $(".noun").text(nounInput);

    $("#story").show();
  });
});