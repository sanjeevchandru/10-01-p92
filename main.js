document.write("56. to divide two positive numbers and return the result as string with properly formatted commas."+"<br>");
function test56(x,y){
    var a=Math.round(x/y).toString();
    return a.split("");
}
document.write("The numbers are :12345460,2  ,Ans :"+test56(12345460,2)+"<br>");