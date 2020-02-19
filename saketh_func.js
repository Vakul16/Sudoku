// global vs function vs block

// global scope
// var text = "SOAL";
// let text2 = "Aquila";

// const

function x(value) {
  // function scope
  // var text = "SOAL";
  // let text2 = "Aquila";
  if (value == "hello") {
    // block scope
    var text = "SOAL";
    let text2 = "Aquila";
  }
  console.log("Hello " + text1);
}

x("hello");