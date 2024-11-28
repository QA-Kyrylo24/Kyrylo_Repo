document.getElementById('get-emails').addEventListener('click', () => {
    const apiUrl = 'https://fakestoreapi.com/users';
    
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(users => {
            const emailList = document.getElementById('email-list');
            emailList.innerHTML = '';

            users.forEach(user => {
                const listItem = document.createElement('li');
                listItem.textContent = user.email;
                emailList.appendChild(listItem);
            });
        })
        .catch(error => {
            alert('Failed to fetch emails: ' + error.message);
        });
});