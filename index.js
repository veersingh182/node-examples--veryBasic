var rect = require('./rectangle')

function solveRect(l,b){
    console.log("Solving for rectangle with l =" + l +"and b =" + b);
    
    if (l<=0 || b<= 0) {
        console.log("Rectangle dimensions should be greater than zero.");
    }
    else {
        console.log("Area of the Rectangle is " + rect.area(l,b));
        console.log("Perimeter of the Rectangle is " + rect.perimeter(l,b));
    }
}

solveRect(2,4);
solveRect(3,5);
solveRect(0,5);
solveRect(-3.5);