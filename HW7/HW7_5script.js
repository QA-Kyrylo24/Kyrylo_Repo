document.getElementById('getUserButton').addEventListener('click', () => {

    const userName = document.getElementById('userNameInput').value.trim();
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    if (!userName) {
        document.getElementById('userCity').textContent = 'Please enter a user name';
        return;
    }

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch users');
            }
            return response.json();
        })
        .then(users => {
            const user = users.find(u => u.name === userName);
            if (!user) {
                document.getElementById('userCity').textContent = 'User not found';
            } else {
                document.getElementById('userCity').textContent = user.address.city;
            }
        })
        .catch(error => {
            document.getElementById('userCity').textContent = `Error: ${error.message}`;
        });
});