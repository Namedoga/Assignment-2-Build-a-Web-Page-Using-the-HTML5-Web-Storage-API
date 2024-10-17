

const usernameInput = document.getElementById('username'); 
const saveButton = document.getElementById('save-btn');
const clearButton = document.getElementById('clear-btn');
const displayName = document.getElementById('display-name');
console.log(usernameInput);  
console.log(saveButton);
console.log(clearButton);
console.log(displayName);


const savedName = localStorage.getItem('username');
if (savedName) {
     displayName.textContent = `Saved Name: ${savedName}`;
}


saveButton.addEventListener('click', () => {
    const username = usernameInput.value.trim();
    if (username) {
        localStorage.setItem('username', username);
        displayName.textContent = `Saved Name: ${username}`;
        usernameInput.value = '';
    }
});

clearButton.addEventListener('click', () => {
    localStorage.removeItem('username');
    displayName.textContent = '';
    usernameInput.value = '';
});