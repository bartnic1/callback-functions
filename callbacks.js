// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  var index = 0;
  arr.forEach(function(element){
    if(element === "Waldo"){
      found(index);
    }
    index++;
  })
}

function actionWhenFound(i) {
  console.log("Found Waldo at index " + i + "!");

}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);