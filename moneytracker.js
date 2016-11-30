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

function run(startDay, finishDay){// this function choose and write the transactions from the firstDay to the finishDay
    var now = new Date(2016, 11, 15);
    now.setFullYear(2010); 
    return now;

}

print(run());
