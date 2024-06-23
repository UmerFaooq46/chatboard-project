document.addEventListener('DOMContentLoaded', function () {
    const chatBox = document.getElementById('chatBox');
    const chatInput = document.getElementById('chatInput');
    const sendButton = document.getElementById('sendButton');

    sendButton.addEventListener('click', sendMessage);
    chatInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });

    function sendMessage() {
        const message = chatInput.value.trim();
        if (message === '') return;

        // Display the sent message
        const sentMessage = document.createElement('div');
        sentMessage.classList.add('message', 'sent');
        sentMessage.textContent = message;
        chatBox.appendChild(sentMessage);

        // Clear the input field
        chatInput.value = '';

        // Generate a dynamic reply
        setTimeout(() => {
            const reply = generateReply(message);
            const receivedMessage = document.createElement('div');
            receivedMessage.classList.add('message', 'received');
            receivedMessage.textContent = reply;
            chatBox.appendChild(receivedMessage);

            // Scroll to the bottom
            chatBox.scrollTop = chatBox.scrollHeight;
        }, 1000);
    }

    function generateReply(userMessage) {
        const lowerCaseMessage = userMessage.toLowerCase();

        if (lowerCaseMessage.includes('hello') || lowerCaseMessage.includes('hi')) {
            return 'Hello! How can I help you today?';
        } else if (lowerCaseMessage.includes('kese ho')) {
            return 'Main aik bot hoon, magar main aapki madad karne ke liye yahan hoon!';
        } else if (lowerCaseMessage.includes('bye')) {
            return 'Khuda hafiz! Aapka din acha guzray!';
        } else if (lowerCaseMessage.includes('muje apse baat karke acha laga')) {
            return 'Jee shukriya, mujhe bhi aap se baat karke maza aya!';
        } else if (lowerCaseMessage.includes('koi sawal wagera karna hai apne mere se hn')) {
            return 'Jee, koi sawal wagera karna hai apne mere se?';
        } else if (lowerCaseMessage.includes('kya hum dost ban skhten hen kya')) {
            return 'Main aik bot hoon, magar main aapki madad karne ke liye yahan hoon!';
        } else if (lowerCaseMessage.includes('mere sota hun our bus khata rehta hun')) {
            return 'Wah! Kya activity hai apki!';
        } else if (lowerCaseMessage.includes('mera naam umer hai')) {
            return 'Jee, aur mera naam AI chatbot hai.';
        } else {
            return 'Mujhe samajh nahi aaya ke main is par kya jawab doon.';
        }
    }
});
