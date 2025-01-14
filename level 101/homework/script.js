document.addEventListener("DOMContentLoaded", () => {
    const peopleList = JSON.parse(localStorage.getItem("people")) || [];
    const peopleListContainer = document.getElementById("peopleList");

    function renderPeople() {
        peopleListContainer.innerHTML = "";
        peopleList.forEach(person => {
            const personCard = document.createElement("div");
            personCard.classList.add("person-card");

            personCard.innerHTML = `
                <h3>${person.firstName} ${person.lastName}</h3>
                <p>Age: ${person.age}</p>
                <p>ID: ${person.idNumber}</p>
                <p>Height: ${person.height} cm</p>
                <p>Description: ${person.description}</p>
                <p>Email: ${person.email}</p>
            `;

            peopleListContainer.appendChild(personCard);
        });
    }

    function generateEmail(firstName, lastName, age) {
        return `${firstName.toLowerCase()}.${lastName.toLowerCase()}${age}@example.com`;
    }

    function addPerson() {
        const firstName = document.getElementById("firstName").value.trim();
        const lastName = document.getElementById("lastName").value.trim();
        const age = parseInt(document.getElementById("age").value.trim());
        const idNumber = document.getElementById("idNumber").value.trim();
        const height = parseInt(document.getElementById("height").value.trim());
        const description = document.getElementById("description").value.trim();

        if (firstName && lastName && age && idNumber && height && description) {
            const email = generateEmail(firstName, lastName, age);

            const person = {
                firstName,
                lastName,
                age,
                idNumber,
                height,
                description,
                email
            };

            peopleList.push(person);

            localStorage.setItem("people", JSON.stringify(peopleList));

            document.getElementById("firstName").value = "";
            document.getElementById("lastName").value = "";
            document.getElementById("age").value = "";
            document.getElementById("idNumber").value = "";
            document.getElementById("height").value = "";
            document.getElementById("description").value = "";

            renderPeople();
        } else {
            alert("Please fill all fields!");
        }
    }

    document.getElementById("addPersonBtn").addEventListener("click", addPerson);

    renderPeople();
});