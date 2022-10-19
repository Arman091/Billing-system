let arr = [];
export const productarray = [];

//========function to ADD ITEM INTO Array together with DOM==================
export function toArray(product) {
  productarray.push(product);
  //=========updating price array============================================
  arr = [];
  for (const product of productarray) {
    arr.push(JSON.parse(product.price));
  }
  add();
}

/*===============functinality to delete item from array and DOM together=======================
  ==============================================================================================*/
export function UniqueId(name, id) {
  productarray.forEach((product, index) => {
    if (product.name === name && product.id === id) {
      productarray.splice(index, 1);
      //=========updating price array============================================
      arr = [];
      for (const product of productarray) {
        arr.push(JSON.parse(product.price));
      }
      add();
    }

    //functionality for alert remained when invalid product id and name are entered
  });
}

//====================HERE WE ARE ADDING ARRAY PRICES===================
const add = () => {
  let sum = arr.reduce((acc, currv) => {
    return acc + currv;
  }, 0);

  let price = document.getElementById("t_price");
  price.innerText = "$" + sum;
}
