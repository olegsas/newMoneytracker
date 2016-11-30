function randomUsd(min, max){
    var minCent = min*100;
    var maxCent = max*100;
    var amount = Math.floor(Math.random()*(maxCent-minCent) + minCent);
    return amount/100;// we work with cents
}

function randomByn(min, max){
    var minByn = min*100;
    var maxByn = max*100;
    var amount =  Math.floor(Math.random()*(maxByn-minByn) + minByn);
    return amount/100; // we work with cents
}

function randomByr(min, max){
    var minByr = min/100;
    var maxByr = max/100;
    var amount = Math.floor(Math.random()*(maxByr - minByr) + minByr);
    return amount*100; // we work with 100 rub minimum

}

function matrixArray(rows){ // function to create двумерный массив
  var arr = new Array();
  var i="type";
    arr[i] = new Array();
    for(var j=0; j<rows; j++){
      arr[i][j] = null;//пишем любой наполнитель. В простейшем случае - null
    }
  var i="OperationName";
    arr[i] = new Array();
    for(var j=0; j<rows; j++){
      arr[i][j] = null;//пишем любой наполнитель. В простейшем случае - null
    }
  var i="amountMin";
    arr[i] = new Array();
    for(var j=0; j<rows; j++){
      arr[i][j] = null;//пишем любой наполнитель. В простейшем случае - null
    }
  var i="amountMax";
    arr[i] = new Array();
    for(var j=0; j<rows; j++){
      arr[i][j] = null;//пишем любой наполнитель. В простейшем случае - null
    }
    var i="Currency";
    arr[i] = new Array();
    for(var j=0; j<rows; j++){
      arr[i][j] = null;//пишем любой наполнитель. В простейшем случае - null
    }
    var i="Rate";
    arr[i] = new Array();
    for(var j=0; j<rows; j++){
      arr[i][j] = null;//пишем любой наполнитель. В простейшем случае - null
    }
    var i="Period";
    arr[i] = new Array();
    for(var j=0; j<rows; j++){
      arr[i][j] = null;//пишем любой наполнитель. В простейшем случае - null
    }
    var i="Account";
    arr[i] = new Array();
    for(var j=0; j<rows; j++){
      arr[i][j] = null;//пишем любой наполнитель. В простейшем случае - null
    }
  return arr;
}
var userDay = matrixArray(24);// sorry this is magic constants
print(userDay["OperationName"][3]);



/*function oneDayOfUser(){
    var i = 0;
    db.student.find().forEach(
        function(myName){
            i++;
            userDay[OperationName][i] = myName.OperationName;
            print("Operation Name: " + myName.OperationName);
            print("i= " + i);
        }

    );
    print(userDay);
    
}

oneDayOfUser();*/