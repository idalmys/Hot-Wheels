$(".rentMe").on("click", function() {
  var carMake = $(this).attr("data-make");
  var carModel = $(this).attr("data-model");
  $(".modal-title").text(carMake + " " + carModel);
  $(".rentalCar").attr("src", "/img/" + carModel + ".jpg");
});

// The API object contains methods for each kind of request we'll make
// Note needed but keeping for reference
// var API = {
//   saveExample: function(example) {
//     return $.ajax({
//       headers: {
//         "Content-Type": "application/json"
//       },
//       type: "POST",
//       url: "api/examples",
//       data: JSON.stringify(example)
//     });
//   },
//   getExamples: function() {
//     return $.ajax({
//       url: "api/examples",
//       type: "GET"
//     });
//   },
//   deleteExample: function(id) {
//     return $.ajax({
//       url: "api/examples/" + id,
//       type: "DELETE"
//     });
//   }
// };