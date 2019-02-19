document.addEventListener("DOMContentLoaded", function(event) {

  /*
   * QUESTION 1
   */

  /* incrementCount() should increment a variable 'count' by 1 each time
     it's called. */
  function incrementCount() {
    let counter = 0;
    counter ++;
  }

  incrementCount();
  incrementCount();
  incrementCount();

  document.getElementById("count").innerText = `Should be 3: "${counter}"`;

  /*
   * QUESTION 2
   */

  /*  The function findSum should take two arguments and store their sum
      in the sum variable. */
  let sum = 0;
  function findSum(x, y) {
    let sum = x + y;
  }

  findSum(10, 20);
  document.getElementById("sum").innerText = `10 + 20 = ${sum}`;

  /*
   * QUESTION 3
   */

   let arr = [];
   function addToArray(arr, element) {
     arr.push(element);
   }

   addToArray([], 1);
   document.getElementById("arr").innerText = `Should be 1: "${arr[0]}"`

  /*
   * QUESTION 4
   */

  /* fib(n) should calculate the nth element in the fibonacci squence */
  function fib(n) {
    /* First two numbers are both 1 */
    if (n < 3) {
      return 1;
    }

    let current;
    /* Iterate from 3 to n. The current element is the sum of the previous
       two elements. */
    for (let i = 3; i < n; i++) {
      /* Store the previous element; Initialize as 1 */
      let previous = 1;
      /* Store the element before the previous one; Initialize as 1 */
      let previous_previous = 1;
      /* Find the current element */
      let current = previous + previous_previous;

      /* Set up for the next iteration */
      previous_previous = previous;
      previous = current;
    }

    /* Should have been set in the loop */
    return current;
  }

  document.getElementById("fib").innerText = `Should be 8: fib(6) = ${fib(6)}`;
});
