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
StudentH = {length : length, TypeH : TypeA ,
             OperationNameH : OperationNameA,
            AmountMinH : AmountMinA,}
 return StudentH;   
}
for(i=1; i<oneDayOfUser().length+1; i++){

print(  "Type"+ oneDayOfUser().TypeA[i]+
        "OperationName"+ oneDayOfUser().OperationNameA[i]+
        "AmountMin"+ oneDayOfUser().AmountMinA[i]+
        "AmountMax"+ oneDayOfUser().AmountMaxA[i]+
        "Currency"+ oneDayOfUser().CurrencyA[i]+
        "Rate"+ oneDayOfUser().RateA[i]+
        "Period"+ oneDayOfUser().PeriodA[i]+
        "Account"+ oneDayOfUser().AccountA[i]
);
}
/*
    print(oneDayOfUser().TypeH[i]+"--"+oneDayOfUser().OperationNameH[i]);
}*/
