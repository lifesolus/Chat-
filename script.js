const nicknameInput = document.getElementById('nickname-input');
const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');
const userChat = document.getElementById('user-chat');
const chat = document.getElementById('chat');
const toggleButton = document.getElementById('toggle-floating');
const chatContainer = document.getElementById('chat-container');
const dragHandle = document.getElementById('drag-handle');

// Отправка сообщения
sendButton.addEventListener('click', () => {
    const nickname = nicknameInput.value.trim() || 'Аноним';
    const message = userInput.value.trim();
    if (message !== '') {
        const fullMessage = `<b>${nickname}:</b> ${message}`;
        addMessage(fullMessage);
        userInput.value = '';
    }
});

// Показать сообщение
function addMessage(message) {
    const msgDiv = document.createElement('div');
    msgDiv.classList.add('message');
    msgDiv.innerHTML = message;
    chat.appendChild(msgDiv);
    userChat.appendChild(msgDiv.cloneNode(true));

    chat.scrollTop = chat.scrollHeight;
    userChat.scrollTop = userChat.scrollHeight;
}

// Перемещение окна
let isDragging = false;
let offsetX, offsetY;

dragHandle.addEventListener('mousedown', (e) => {
    isDragging = true;
    offsetX = e.clientX - chatContainer.offsetLeft;
    offsetY = e.clientY - chatContainer.offsetTop;
    chatContainer.style.cursor = 'grabbing';
});

document.addEventListener('mouseup', () => {
    isDragging = false;
    chatContainer.style.cursor = 'grab';
});

document.addEventListener('mousemove', (e) => {
    if (isDragging) {
        chatContainer.style.left = `${e.clientX - offsetX}px`;
        chatContainer.style.top = `${e.clientY - offsetY}px`;
    }
});

// Переключатель окна
toggleButton.addEventListener('click', () => {
    chatContainer.style.display = chatContainer.style.display === 'none' ? 'flex' : 'none';
});
