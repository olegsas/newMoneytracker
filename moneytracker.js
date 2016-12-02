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
StudentH = {length : length,// StudentH is a hash of transactions and the it has .length
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

function standartDate(anyDay){// this function normalize string date into a Date object

    var anyDayA = anyDay.split("/"),// we have got an array of 3 numbers in a string type
    
        anyDATE = new Date();
        anyDATE.setFullYear(anyDayA[2]);// A means Array
        anyDATE.setMonth(anyDayA[1]-1);// we have months in range of 0...11
        anyDATE.setDate(anyDayA[0]);// anyDATE is in a correct format

    
    return anyDATE;

}


function plusWeek(nowDay){// function finds a period in 1 week for a transactions
    var pointOne = standartDate(nowDay)//start day
    var day = (pointOne.getDate());// day of a week in range 0...6

    var pointTwo = pointOne;// we assign pointOne to pointTwo because we gonna use a method setDate()
    var x = pointTwo.setDate(day+10);
    return pointTwo;
}    
   /*print(plusWeek("1/1/2010"));
   /*var now = new Date();*/
  /* print(new Date(2016,12,0).getDate());*/
function RandomAmount(AmountMin, AmountMax, Currency){
    var result ; //we will return a result only, we do not need to return currency
    switch(Currency){
        case Usd:
            result = randomUsd(AmountMin, AmountMax);break;
        
        case Byr:
            result = randomByr(AmountMin, AmountMax);break;
        
        case Byn:
            result.amount = randomByn(AmountMin, AmountMax);break;
    }
    return result;
}//RandomAmount returns random result 

function WriteTransaction(){
    //
}

function makeMonthlyTransactions(start_Day, Month, Year, max_day_month){// we check the list of transactions and if we have a monthly one we generate a random day and make a transaction
    //there are arrays typeA[1]...typeA[length] - for every transaction
    // if we have a full month then start_Day is 1 and if we have the first month we use the start_Day
    for(i=1; i<StudentH.length+1; i++){// we check the transaction list
        if(
            (StudentH.period[i] = "Month") && 
            (StudentH.rate[i] = 1)
        ){
            var randomStartDay = Math.floor(Math.random()*(max_day_month-start_Day) + start_Day);
            RandomAmount(AmountMin[i], AmountMax[i],Currency[i])//returns  amount 
            // make a monthly transaction, we need to call random day
            var Number_of_the_name_of_transaction = Math.floor((Math.random()*NUMBER_OF_CATEGORY_NAMES));//0...NUMBER-1
            // Math.random()<1 that`s why name_of_transactions<NUMBER_OF_CATEGORY_NAMES
            var transactionName = db.student.find({"transaction":StudentH.OperationName[i]});
            print(transactionName);
            WriteTransaction();//we write a transaction and only we need to give a random name for it
        }
    }
}
function run(startDate, finishDate){// global function runs transaction generation
    var NUMBER_OF_CATEGORY_NAMES = 4;//how many names are in one category
    var startDATE = standartDate(startDate),
        start_Day = startDATE.getDate(),
        start_Month = startDATE.getMonth(),// month is in range 0...11
        start_Year = startDATE.getYear(),
        max_day_month = new  Date(start_Year, start_Month+1, 0).getDate();// how many days in month
        
        // we choose a random day between a start day and day max_day_month
        var randomStartDay = Math.floor(Math.random()*(max_day_month-start_Day) + start_Day);
        print("start_Day - "+ start_Day);
        print("start_Month - "+start_Month);
        print("start_Year - "+start_Year);
        print("how-many-in-month - "+max_day_month);
        print("random_day - "+randomStartDay);
        
        makeMonthlyTransactions(start_Day, start_Month, start_Year,max_day_month)// we call this function
            //to make all monthly transactions for the first month


        
        
        finishDATE = standartDate(finishDate);//standart Data objects


}

run("1/11/2010", "3/5/2014");

