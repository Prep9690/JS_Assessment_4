//1.Create one function with zero parameter having a console statement;
function display(){
    console.log("I am zero parameter having a console statement");
}
display();


//2.Create one function which takes two values as a parameter and print the sum of them as "Sum of 3, 4 is 7"
function add(a,b){
    let res=0;
    res=a+b;
    console.log(res);
}
add(3,4);


//3. Create one arrow function
const AddTwoNumbers = (a,b) => {
    return a+b;
};
console.log(AddTwoNumbers(4,5));

//4.Print output: 
var x = 21;
var girl = function () {
    console.log(x);
    var x = 20;
};
girl ();

ans: undefined


//5.Print output: 
var x = 21;
girl ();
console.log(x)
function girl() {
    console.log(x);
    var x = 20;
};
 ans: 21


 //6.  "Print output
var x = 21;
a();
b();
//console.log(a);
a = function() {
    
   x = 20;
  console.log(x);
};
b = function() {
    
    x = 40;
   console.log(x);
};

Ans: ReferenceError: a is not defined

//7. Write a function that accepts parameter n and returns factorial of n

function factorial(n){
    let answer = 1;
    if (n == 0 || n == 1){
      return answer;
    }else{
      for(var i = n; i >= 1; i--){
        answer = answer * i;
      }
      return answer;
    }  
  }
  console.log(factorial(7));