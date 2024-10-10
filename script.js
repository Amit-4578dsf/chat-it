function sendMessage() {
    const userInput = document.getElementById('userInput');
    const chatBox = document.getElementById('chatBox');

    const userMessage = userInput.value;
    if (userMessage.trim() === '') return;

    // Append user's message to the chat box
    chatBox.innerHTML += `<p><strong>You:</strong> ${userMessage}</p>`;
    
    // Here you can add your AI response logic
    const aiResponse = getAIResponse(userMessage);
    chatBox.innerHTML += `<p><strong>Chat IT:</strong> ${aiResponse}</p>`;

    // Clear the input
    userInput.value = '';
    chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom
}

function getAIResponse(message) {
    // This is a placeholder for AI response logic.
    // You can implement an API call or a simple response logic here.
    return "This is a placeholder response. You said: " + message;
}
