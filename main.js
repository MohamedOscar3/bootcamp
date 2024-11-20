
function getPrime(n,m) {
    for (let i = n; i <= m;i++) {
        if (i >= 2) {
	  isPrime(i);
        } 
    }
}

function isPrime(num) {
    let getSqureRootForNum = parseInt(Math.sqrt(num));
    for (let i = 2; i <= getSqureRootForNum;i++) {
        if (num % i == 0) {
            return;
        }
    }
    
    console.log(num);
}

getPrime(1,1000)