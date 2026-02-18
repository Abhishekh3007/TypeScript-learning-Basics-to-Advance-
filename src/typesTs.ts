let drink="tea";
   // drink=0; // Error: Type 'number' is not assignable to type 'string'.
    let cups=Math.random() >0.5 ? 10 : 5;
    let name="hon";
    //name=10; // Error: Type 'number' is not assignable to type 'string'.
    let isActive=true;
    //isActive="yes"; // Error: Type 'string' is not assignable to type 'boolean'.

    //variable overiding allowed 
    let tea:string="green";
    tea="black"; // No error, 'tea' is still of type 'string'
   // tea=10; // Error: Type 'number' is not assignable to type 'string'.
   let teaOrder:number=1;
    teaOrder=2; // No error, 'teaOrder' is still of type 'number'
    // teaOrder="first"; // Error: Type 'string' is not assignable to type 'number'.
    //also we can have two type of datatype if we are not sure about what kind of data is coming 
    