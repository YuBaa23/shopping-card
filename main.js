var total=document.querySelectorAll('input');
      

      // Function update Tolal  
      function updateTotalPrice() {
        var totalPriceElements = document.querySelectorAll('.total-price');
        var total = 0;

        totalPriceElements.forEach(function(totalPriceElement) {
          // Get the corresponding quantity input field for this item
          var quantityInput = totalPriceElement.parentElement.querySelector('.numInput');
          // Extract the total price and quantity value
          var totalPrice = parseFloat(totalPriceElement.textContent.replace('$', ''));
          var quantity = parseInt(quantityInput.value);
          
          // Multiply the total price by the quantity and add it to the total
          total += totalPrice * quantity;  
       
          console.log( typeof totalPrice )
        });
      
        // Update the total price displayed
        var totalElement = document.getElementById('total');
        totalElement.textContent = `$${total.toFixed(2)}`;
         // Initial update
         updateTotalItems();
       
      }
              // Get all the quantity input elements
          const quantityInputs = document.querySelectorAll('.numInput');
          const totalItemsElement = document.createElement('h3');

          // Update the total number of items whenever the quantity changes
          function updateTotalItems() {
            let totalItems = 0;
            quantityInputs.forEach(input => {
              totalItems += parseInt(input.value);
            });
            totalItemsElement.textContent = ` (${totalItems} items)`;
          }

          // Listen for changes in the quantity inputs
          quantityInputs.forEach(input => {
            input.addEventListener('input', updateTotalItems);
          });

         

          // Add the total items element after the "Shopping Bag" title
          const titleElement = document.querySelector('.scd ' );
          titleElement.appendChild(totalItemsElement);

      function decreaseQuantity(button) {
          var input = button.parentElement.querySelector('.numInput');
          var value = parseInt(input.value);
          if (value > 0) {
            input.value = value - 1;
            updateTotalPrice();
          }
        }

      // // Function to increase quantity
      function increaseQuantity(button) {
          var input = button.parentElement.querySelector('.numInput');
          input.value = parseInt(input.value) + 1;
          updateTotalPrice();
        }
      
 
      // Function to handle like button
      function toggleLike(element) {
        element.classList.toggle('is-active');
      }
      
      // Function to handle delate button
        function deleteItem(button) {
          // Get the parent section element of the delete button
          var itemSection = button.closest('.item');
          // Remove the entire item section from the DOM
          itemSection.remove();
        }