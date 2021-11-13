/*This is a function to find f(x) = 0 with the Newton Method
*Input of the function are the given function f(x), its derivative d, the approximation of the root p0,
*the number of maximum Iterations N0, and the Tolerance  TOL
*the return value is the approximated root
*/
import {abs, derivative} from 'mathjs'

//This is the function that needs to be evaluated
function f(x){
    return(x*x);
}

//Find the derivative of the given function through the derivative function from mathjs
//derivative(expr, variable, options) - option is by default set to true and simplyfies the expression
var d = derivative('x*x','x');

//Initialize the variable for the maximum number of Iterations
var N0 = 30;

//Inizialize the variable for the initial guess
var p0 = 1.2;

//Inizialize the variable with the Tolerance. This tells the method up to what decimal number 
//you want your result to be correct
var TOL = 0.001


//function definition
function newton_method(f, d, p0, TOL, N0){

    //Iterator that iterates up to N0 inside the while loop if not ended beforehand
    var iter = 0;
    //While loop that keeps looping until either the root has been found within the tolerance
    //or it ends with an error message
    while(iter < N0){ 
    //Increase the iterator by 1 each loop
    iter++;  
    //Evaluate the derivative with p0
     var fp = d.evaluate({x:p0});
    //Evaluate the function f(x) with the initial guess as input
    var func = f(p0);
    //calculate the next root approximation with Newtons Method p = p0 - f(p0)/f'(p0)
    var p = p0 - func/fp;
    //Check if the tolerance has been reached
    if(abs(p-p0)<TOL){
        //if yes, return the result
        return p;
        //exit the while loop
        break;
    }
    // Update p0 
    p0 = p;
}
//Output if the calculation failed
console.log("The method failed after N0 iterations:  " + N0);

}

//calling the newton_method function with the predefined parameters
var root = newton_method(f,d,p0, TOL, N0);

//Generate a console output to display the result
console.log("The root is " + root);