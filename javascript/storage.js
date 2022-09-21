
const arr = [];
export function toArray(product) {


    arr.push(product.price);
    
}


   
    


let check = document.getElementById("check");
check.addEventListener("click", () => {

    
    const sum = arr.reduce((acc, currv) => {
        return parseInt(acc,10) + parseInt(currv,10) 
    }, 0);
      

    console.log(sum)
        
    
    
});
