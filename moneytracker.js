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

function oneDayOfUser(){// we parse all transaction list
    var i = 1, 
    TypeA = [],// TypeA because there is an array of Type
    OperationNameA = [],// 
    AmountMinA = [],
    AmountMaxA = [],
    CurrencyA = [],
    RateA = [],// Rate[2] - is the Rate field of the transaction 2
    PeriodA = [],
    AccountA = [],
    StudentH = {},// this is the hash, {TypeH : TypeA, and so on}
    cursor = db.student.find(),
    length;
    cursor.forEach(
        function(obj){
            TypeA[i] = obj.Type;// we find certain field of the certain transaction
            OperationNameA[i] = obj.OperationName;
            AmountMinA[i] = obj.AmountMin;
            AmountMaxA[i] = obj.AmountMax;
            CurrencyA[i] = obj.Currency;
            RateA[i] = obj.Rate;
            PeriodA[i] = obj.Period;
            AccountA[i] = obj.Account;
                i++; 
        }
    );
length = i-1;//after last cycle step i=last step+1
StudentH = {length : length,
            Type : TypeA ,
            OperationName : OperationNameA,
            AmountMin : AmountMinA,
            AmountMax : AmountMaxA,
            AmountMin : AmountMinA,
            Currency : CurrencyA,
            Rate : RateA,
            Period : PeriodA,
            Account : AccountA}
 return StudentH;   
}
/*for(i=1; i<oneDayOfUser().length+1; i++){

print(  "Type"+"--"+ oneDayOfUser().Type[i]+"/"+
        "OperationName"+ "--"+oneDayOfUser().OperationName[i]+"/"+
        "AmountMin"+ "--"+oneDayOfUser().AmountMin[i]+"/"+
        "AmountMax"+ "--"+oneDayOfUser().AmountMax[i]+"/"+
        "Currency"+ "--"+oneDayOfUser().Currency[i]+"/"+
        "Rate"+ "--"+oneDayOfUser().Rate[i]+"/"+
        "Period"+ "--"+oneDayOfUser().Period[i]+"/"+
        "Account"+ "--"+oneDayOfUser().Account[i]+"/"
);
}*/

function standartDate(startDay, finishDay){// this function choose and write the transactions from the firstDay to the finishDay
    var stDate = {};

    var startDayA = startDay.split("/"),// we have got an array of 3 numbers in a string type
        finishDayA = finishDay.split("/");
    
    var startDATE = new Date();
        startDATE.setFullYear(startDayA[2]);// A means Array
        startDATE.setMonth(startDayA[1]-1);// we have months in range of 0...11
        startDATE.setDate(startDayA[0]);// startDATE is in a correct format

    var finishDATE = new Date();
        finishDATE.setFullYear(finishDayA[2]);
        finishDATE.setMonth(finishDayA[1]-1);
        finishDATE.setDate(finishDayA[0]);// finishDATE is in a correct format
    
     stDate.start = startDATE;
     stDate.finish = finishDATE;
    
    return stDate;

}


function plusWeek(nowDay){// function finds a period in 1 week for a transactions
    var pointOne = standartDate(nowDay, nowDay).start//start day
    var day = (pointOne.getDate());// day of a week in range 0...6

    var pointTwo = pointOne;// we assign pointOne to pointTwo because we gonna use a method setDate()
    var x = pointTwo.setDate(day+10);
    return pointTwo;
}    
   print(plusWeek("1/1/2010"));
/*var D = new Date();
var day = D.getDate();
print("old day - " + D);
print("day-" + day);
var newDay = day+40;
var x = D.setDate(newDay);
print("New date- " + D);*/
    
