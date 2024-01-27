document.addEventListener('DOMContentLoaded', function () {
    const username = 'Kyncer'; // Replace with the GitHub username you want to fetch details for

    // Fetch and display user information
    fetch(`https://api.github.com/users/${username}`)
        .then(response => response.json())
        .then(data => {
            const userInfoElement = document.getElementById('user-info');
            userInfoElement.innerHTML = `
                <h2>User Information:</h2>
                <p><strong>Username:</strong> ${data.login}</p>
                <p><strong>Name:</strong> ${data.name}</p>
                <p><strong>Bio:</strong> ${data.bio}</p>
                <p><strong>Followers:</strong> ${data.followers}</p>
                <p><strong>Following:</strong> ${data.following}</p>
            `;
        })
        .catch(error => console.error('Error fetching user information:', error));

    // Fetch and display repository list
    fetch(`https://api.github.com/users/${username}/repos`)
        .then(response => response.json())
        .then(data => {
            const repoListElement = document.getElementById('repo-list');
            repoListElement.innerHTML = `
                <h2>Repository List:</h2>
                <ul>
                    ${data.map(repo => `<li>${repo.name}</li>`).join('')}
                </ul>
            `;
        })
        .catch(error => console.error('Error fetching repository list:', error));
});
