function withdraw(){
    return (
      <h1>withdraw</h1>
    )
  }

  export const Withdraw = () => {
    document.addEventListener('DOMContentLoaded', function () {
      // Create and append the stylesheet link for Bootstrap
      let link = document.createElement('link');
      link.href = 'https://stackpath.bootstrapcdn.com/bootstrap/5.3.3/css/bootstrap.min.css'; // Updated to Bootstrap 5.3.3
      link.rel = 'stylesheet';
      link.integrity = 'sha384-0j7lV+Fg9dZGd/1LBQi/q5YmO+t1tbqSe5UlgEUs0RZP5qZ+YNYBZoaCB3nbiuX0'; // Correct integrity hash for Bootstrap 5.3.3
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    
      // Create style tag for custom styles
      let style = document.createElement('style');
      style.innerHTML = `
        .card {
          max-width: 400px;
          margin: 50px auto;
          padding: 20px;
          box-shadow: 0 4px 8px rgba(0,0,0,0.1);
        }
      `;
      document.head.appendChild(style);
    
      // Create container div
      let container = document.createElement('div');
      container.className = 'container';
    
      // Create card div
      let card = document.createElement('div');
      card.className = 'card';
    
      // Create card body div
      let cardBody = document.createElement('div');
      cardBody.className = 'card-body';
    
      // Create card title
      let cardTitle = document.createElement('h5');
      cardTitle.className = 'card-title';
      cardTitle.innerText = 'Bank Account';
    
      // Create balance paragraph
      let cardText = document.createElement('p');
      cardText.className = 'card-text';
      cardText.innerText = 'Your current balance: $5000';
    
      // Create form element
      let form = document.createElement('form');
    
      // Create form group div
      let formGroup = document.createElement('div');
      formGroup.className = 'form-group';
    
      // Create label element
      let label = document.createElement('label');
      label.setAttribute('for', 'withdrawAmount');
      label.innerText = 'withdraw Amount';
    
      // Create input element
      let input = document.createElement('input');
      input.type = 'number';
      input.className = 'form-control';
      input.id = 'withdrawAmount';
      input.placeholder = 'Enter amount';
    
      // Create submit button
      let button = document.createElement('button');
      button.type = 'submit';
      button.className = 'btn btn-primary';
      button.innerText = 'withdraw';
    
      // Append elements to form group
      formGroup.appendChild(label);
      formGroup.appendChild(input);
    
      // Append form group and button to form
      form.appendChild(formGroup);
      form.appendChild(button);
    
      // Append card title, balance info, form, and messages to card body
      cardBody.appendChild(cardTitle);
      cardBody.appendChild(cardText);
      cardBody.appendChild(form);
    
      // Append card body to card
      card.appendChild(cardBody);
    
      // Append card to container
      container.appendChild(card);
    
      // Append container to body
      document.body.appendChild(container);
    
      // Load Bootstrap JS
      let bootstrapScript = document.createElement('script');
      bootstrapScript.src = 'https://stackpath.bootstrapcdn.com/bootstrap/5.3.3/js/bootstrap.bundle.min.js'; // Updated to Bootstrap 5.3.3
      bootstrapScript.integrity = 'sha384-Piv4xVNRyMGpqk1aKuGmE8CU6kKIF0bA2x2hXQhsAoJt5w/yt+JtfImRzG/eYx9t'; // Correct integrity hash for Bootstrap 5.3.3
      bootstrapScript.crossOrigin = 'anonymous';
      document.body.appendChild(bootstrapScript);
    
      // Add event listener to handle form submission
      form.addEventListener('submit', function(event) {
        event.preventDefault();
        let withdrawAmount = parseFloat(input.value);
        let currentBalance = 5000; // Assuming a static balance for demonstration
    
        if (isNaN(withdrawAmount) || withdrawAmount <= 0) {
          alert('Please enter a valid positive number for the withdraw amount.');
        } else if (withdrawAmount > currentBalance) {
          alert('Insufficient balance. Please enter a smaller amount.');
        } else {
          currentBalance -= withdrawAmount;
          cardText.innerText = 'Your current balance: $' + currentBalance.toFixed(2);
          alert('withdrawal successful! Your new balance is $' + currentBalance.toFixed(2));
        }
      });
    });
  };