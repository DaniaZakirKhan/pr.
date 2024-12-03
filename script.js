// script.js
document.addEventListener("DOMContentLoaded", () => {
    const chatBox = document.getElementById("chatBox");
    const messageInput = document.getElementById("messageInput");
    const sendMessageButton = document.getElementById("sendMessage");
  
    // Load chat history from localStorage
    const loadChatHistory = () => {
      const chatHistory = JSON.parse(localStorage.getItem("chatHistory")) || [];
      chatHistory.forEach(({ text, className, timestamp }) => {
        appendMessage(text, className, timestamp);
      });
    };
  
    // Save chat history to localStorage
    const saveChatHistory = () => {
      const messages = Array.from(chatBox.querySelectorAll(".message")).map(
        (message) => ({
          text: message.textContent,
          className: message.className.replace("message ", ""),
          timestamp: message.getAttribute("data-timestamp"),
        })
      );
      localStorage.setItem("chatHistory", JSON.stringify(messages));
    };
  
    // Function to format timestamps
    const formatTimestamp = (date) => {
      return `${date.getHours()}:${String(date.getMinutes()).padStart(2, "0")}`;
    };
  
    // Function to append a message to the chat
    const appendMessage = (text, className, timestamp = null) => {
      const messageDiv = document.createElement("div");
      messageDiv.className = `message ${className}`;
      messageDiv.textContent = text;
  
      const time = timestamp || formatTimestamp(new Date());
      messageDiv.setAttribute("data-timestamp", time);
  
      const timestampSpan = document.createElement("span");
      timestampSpan.className = "timestamp";
      timestampSpan.textContent = ` ${time}`;
      messageDiv.appendChild(timestampSpan);
  
      chatBox.appendChild(messageDiv);
      chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the latest message
  
      saveChatHistory(); // Save the updated history
    };
  
    // Simulate bot response
    const botResponse = (message) => {
      const responses = {
        hi: "Hello! How can I help you?",
        hello: "Hi there! How's it going?",
        help: "Sure, I'm here to assist you.",
        default: "I'm not sure how to respond to that.",
      };
      const reply =
        responses[message.toLowerCase()] || responses["default"];
      setTimeout(() => appendMessage(reply, "received"), 1000);
    };
  
    // Handle sending a message
    sendMessageButton.addEventListener("click", () => {
      const message = messageInput.value.trim();
      if (message) {
        appendMessage(message, "sent");
        messageInput.value = ""; // Clear input
        botResponse(message); // Trigger bot response
      }
    });
  
    // Allow pressing "Enter" to send a message
    messageInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        sendMessageButton.click();
      }
    });
  
    // Load chat history on page load
    // loadChatHistory();
  });
  