function up(n){
    for(var i = 1; i <= n; i++){
        for(var k =1; k <= n - i; k++){
            document.write("&ensp;");
        }
        for(var f = 1; f <= 2*i - 1; f++){
            document.write("*");
        }
        document.write("<br>");
    }
    for(var i = n - 1; i >= 1; i--){
        for(var k =1; k <= n - i; k++){
            document.write("&ensp;");
        }
        for(var f = 1; f <= 2*i - 1; f++){
            document.write("*");
        }
        document.write("<br>");
    }
}
up(3);