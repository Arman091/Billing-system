

  const arr = []
    
  export function toArray(product) {


      arr.push(product.price);
     
  }

let btn = document.getElementById("check");
btn.addEventListener("click", () => {
    let sum = arr.reduce((acc, currv) => {
        return parseInt(acc, 10) + parseInt(currv, 10)
    }, 0);
    

    //=============funtionality to change total==================
   let price=document.getElementById("t_price")
    price.innerText = "$"+sum;
})
      

