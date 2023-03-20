
 //Madriguera information

// Flavors:   price:  Stock:
// natural ------ 14  --- 5
// coconut ------ 14  --- 5
// almond ------- 16  --- 2
// vanilla ------ 16  --- 0


const flavors = ['natural','coconut','almond','vanilla'];
const price = [14000,14000,16000,16000];
const stock = [5,5,2,0];

// the variables 'flavor', 'units' and 'sure' are the data entered by the customer.
let flavor = 'coconut';
let units = 4;
let sure = 'yes';

console.log('\nSELLER : the flavor are  natural, coconut, almond vanilla\n');
console.log('CUSTUMER :  i need to buy '+ units+' '+flavor +' yogurts plis\r\n');


for(i = 0; i < 4; i += 1){
    if( flavor === flavors[i]){
        if(units <= stock[i]){
            console.log('SLLER: the price for unit is : $'+ price[i] +'\n');
            console.log('SELLER: are you sure buy this flavor?\n');
            console.log('CUSTUMER: '+ sure +'\n');
                if(sure === 'yes'){
                    let priceForUnits = units*price[i];
                    console.log('the price for '+ units +' are: $'+ priceForUnits+'\n');
                    console.log('CUSTUMER : ok, thanks\n');
                    console.log('SELLER: ok, your welcome\n');
                }else{
                    console.log('SELLER: RE-ENTER THE FLAVOR\n');// IN THIS LINE THE PROGRAM RESTART 
                }
        }else{
        console.log('we don have this units of this product\n');
        }
    } 
}