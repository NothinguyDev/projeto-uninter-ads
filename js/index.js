// Create the paragraph
const paragraph = document.createElement('p');
paragraph.textContent = 'Bem-vindo à página!';
paragraph.style.textAlign = 'center';

// Create the button
const button = document.createElement('button');
button.textContent = 'Clique para ver uma mensagem!';
button.style.display = 'block';
button.style.margin = '20px auto';

// Create the element for the message
const message = document.createElement('div');
message.style.textAlign = 'center';
message.style.marginTop = '20px';

// Add click event to the button
button.addEventListener('click', () => {
    message.textContent = 'Você é capaz de conquistar grandes coisas!';
});

// Add elements to the page
document.body.appendChild(paragraph);
document.body.appendChild(button);
document.body.appendChild(message);