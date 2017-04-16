$(".clickme").on("click", () => {
  $.ajax({
    method: "POST",
    url: "http://localhost:3000/color",
    data: { req: "request" },
    success: (data) => {
      let check = $(".box"+data.number).css("background-color", data.color)
    }
  })
})
