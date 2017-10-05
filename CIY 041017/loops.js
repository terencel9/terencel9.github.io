var mul = function (n, m) {
    return (n* m);
}

//outer
for (var outer = 2; outer <13; outer++){
    for (var inner = 2; inner <13; inner++){
        console.error("Multiplication table: %d, outer")
        //console.log(outer + " * " + inner + " = " + mul (outer, inner));
        console.log("%d * %d = %d", outer, inner, + mul (outer, inner));
    }
}

//for (var i= 1; i<13; i++){
  //  console.log(i+ "* 3 = " + mul (i));
//}

var i = 0;

while (i<10) {
console.log ("i+ %d", i);
i++;
}