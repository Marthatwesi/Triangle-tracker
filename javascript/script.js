function triangle() {
  var sideA = parseInt(document.getElementById('a').value);
  // console.log(sideA);
  var sideB = parseInt(document.getElementById('b').value);
  // console.log(sideB);
  var sideC = parseInt(document.getElementById('c').value);
  // console.log(sideC);

  if(((sideA+sideB !=sideC) || (sideA+sideC!=sideB) || (sideB+sideC!=sideA)) && ((sideA+sideB<sideC) || (sideA+sideC<sideB) || (sideB+sideC<sideA))){
      // console.log("so far so good");
      document.getElementById("result").innerHTML = "Not a triangle";
  }else if (sideA != sideB && sideB != sideC && sideA != sideC) {
    // console.log("working")
    document.getElementById("result").innerHTML = "Scalene triangle";
    }else if (sideA === sideB && sideB === sideC && sideA === sideC) {
    // console.log("we are still working")
    document.getElementById("result").innerHTML = "Equilateral triangle";
    }else if ((sideA === sideB != sideC) || (sideB === sideC != sideA) || (sideA === sideC != sideB)) {
    // console.log("ts there")
    document.getElementById("result").innerHTML = "Isosceles triangle"
    }else {
    // console.log("we are done")
    document.getElementById("result").innerHTML = "Not a triangle"
    }
}
