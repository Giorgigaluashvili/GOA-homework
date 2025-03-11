fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => {
    users.sort((a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();
      return nameA < nameB ? -1 : nameA > nameB ? 1 : 0;
    });

    const usersList = document.getElementById('users-list');

    users.forEach(user => {
      const listItem = document.createElement('li');
      listItem.textContent = user.name; 
      usersList.appendChild(listItem);
    });
  })
  .catch(error => {
    console.error('Error fetching the user data:', error);
  });