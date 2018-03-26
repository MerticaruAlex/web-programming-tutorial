
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
     for(; b>0; ){
         b--;
         a++;
         console.info( a +'-au mai ramas ' + b +  ' degetele ');
     }
     console.info('Suma este:',a);
 }
 var count= addNumbers(6,8);