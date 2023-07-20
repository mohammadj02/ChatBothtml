const chatWindow = document.querySelector('.output');
const inputBox = document.querySelector('#input-box');
const sendBtn = document.querySelector('#send-btn');



// Generate response based on user input
function generateResponse(userInput) {
  let response = 'I am sorry, I do not understand.';
  for (let key in responses) {
    if (userInput.includes(key)) {
      response = responses[key];
    }
  }
  return response;
}

// Add message to chat window
function addMessage(className, message) {
  const div = document.createElement('div');
  div.className = className;
  div.innerHTML = message;
  chatWindow.appendChild(div);
}

// Handle form submission
function handleSubmit(e) {
  e.preventDefault();
  const userInput = inputBox.value.toLowerCase();
  addMessage('user-message', userInput);
  const aiResponse = generateResponse(userInput);
  addMessage('ai-message', aiResponse);
  inputBox.value = '';
}

// Add event listener to send button
sendBtn.addEventListener('click', handleSubmit);

// Add event listener to input box
inputBox.addEventListener('keydown', function(e) {
  if (e.keyCode === 13) {
    handleSubmit(e);
  }
});

