var rect = require('./rectangle');

function solveRect(l,b) {
    console.log("Solving for rectangle with l = " + l +"and b = " + b +"\n");

    rect(l,b, (err,rectangle) => {
        if (err) {
            console.log("ERROR: ", err.message +"\n");
        }
        else{
            console.log("The area of the rectange of dimensions L = " + l + " and b = "+ b + " is " + rectangle.area());
            console.log("The Perimeter of the rectange of dimensions L = " + l + " and b = "+ b + " is " + rectangle.perimeter()+"\n\n");
        }
    });

    console.log("this statement is after the call to rect()\n");

}

solveRect(2,4);
solveRect(3,5);
solveRect(0,5);
solveRect(-3,5);