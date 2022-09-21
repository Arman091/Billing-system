/*=================================================================
  in this module we will handle our UI ralated functions and classes */


 export class UI {
    
    
    //=============== function to display row in our table===========================
    static add_ProductToList(product) {

        let list = document.querySelector('#student_list')
        let row = document.createElement('tr');
        row.innerHTML = `
        
                    <td class="data" id="pname">${product.name}</td>
                    <td class="data" id="pid">${product.id}</td>
                    <td class="data" id="pprice">${product.price}</td>
                    <td class="data cross" id="pcross">X</td>
        `
        list.appendChild(row);

       //===== here we will call our function to append total in the list
        
     }
     
    //==================== function to clear a field after adding item to list===============
    static clear() {


        document.getElementById("name").value = '';
        document.getElementById("id").value = '';
        document.getElementById("price").value = '';


    }
    // function to remove a list from our table on click

    static delete(node) {
        if (node.classList.contains('cross')) {

            node.parentElement.remove();

        }
    }

}


    //================ code to delete a list from a table======================== 
     let cross = document.getElementById("student_list");
    cross.addEventListener("click", (e) => {

    UI.delete(e.target);
     })

     //========method to append total column in the end of list==================

 
