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

function oneDayOfUser(){
    var i = 0, 
    TypeA = [],
    OperationNameA = []
    AmountMinA = [],
    AmountMaxA = [],
    CurrencyA = [],
    RateA = [],
    PeriodA = [],
    AccountA = [],
    StudentH = {};
    db.student.find().forEach(
        function(obj){
            i++;
            TypeA[i] = obj.Type;
            OperationNameA[i] = obj.OperationName;
            AmountMinA[i] = obj.AmountMin;
            AmountMaxA[i] = obj.AmountMax;
            CurrencyA[i] = obj.Currency;
            RateA[i] = obj.Rate;
            PeriodA[i] = obj.Period;
            AccountA[i] = obj.Account;
        }

    );
 StudentH = {TypeH : TypeA ,
             OperationNameH : OperationNameA,
            AmountMinH : AmountMinA,}
 return StudentH;   
}

for(i=0; i<10; i++){
    print(oneDayOfUser().TypeH[i]+"--"+oneDayOfUser().OperationNameH[i]);
}
