
function  countTo(n)
{
    for(var i=1; i<=n; i++){
        console.info(i);

    }
}
 function addNumbers(a,b)
 {
     console.info('Primul numar este', +a);
     console.info('Al doilea numar este', +b);
     var suma = a ;// nr cel mai mare
     var degete= b ; // nr cel mai mic
     if(a<b){
         suma =b;
         degete = a;
     }
     while(; degete>0; ){
         degete--;
         suma++;
         console.info( suma +'-au mai ramas ' + degete +  ' degetele ');
     }
     console.info('Suma este:',suma);
 }
 var count= addNumbers(2,6);