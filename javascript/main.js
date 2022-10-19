import { UI } from "./UI_class.js";
import { toArray } from "./total.js";
//our class to create  a new Product

class Product {
  constructor(pname, pid, pprice) {
    this.name = pname;
    this.id = pid;
    this.price = pprice;
  
  }
}

//====================methods to intantiate objects==================================
const submit = document.getElementById("submit");

submit.addEventListener("click", () => {
  let pname = document.getElementById("name").value;
  let pid = document.getElementById("id").value;
  let pprice = document.getElementById("price").value;

  if (pname == "" || pid == "" || pprice == "") {
    // opening our pop window
    let alert = document.querySelector(".alert");
    alert.classList.add("open-popup");

    // closing our popup window for alert
    let btn = document.getElementById("btn2");
    btn.addEventListener("click", () => {
      let alert = document.getElementById("alert1");

      alert.classList.remove("open-popup");
    });
  }

  //==================================================================================================
  // instantiating our new object
  else {
    const new_product = new Product(pname, pid, pprice);
    //method to display product in list
    UI.add_ProductToList(new_product);
    //method to store our elements in some array
    toArray(new_product);

    //method to append a row in table end

    //====================================================================================================
    // method to clear our input fields after adding an item to list

    UI.clear();
  }
});
