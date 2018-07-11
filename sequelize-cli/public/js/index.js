console.log('index.js');

getTeams();
getUsers();

function getTeams() {
    fetch('/teams')
    .then(function(response) {
        console.log('getTeams', response);

        response.json()
        .then(function(data) {
            document.getElementById('list-teams').innerHTML = '';
            data.forEach(team => {
                document.getElementById('list-teams').insertAdjacentHTML('beforeend', `<li class="list-group-item">${team.tea_name}</li>`);
            });            
        });
    });
}

function getUsers() {
    fetch('/users')
    .then(function(response) {
        console.log('getUsers', response);

        response.json()
        .then(function(data) {
            console.log('getUsers - data', data);
            data.forEach(user => {
                document.querySelector('#table-users tbody').insertAdjacentHTML('beforeend', 
                    `<tr>
                        <td>${user.use_name}</td>
                        <td>${user.use_email}</td>
                    </tr>`);
            })
        });
    });
}

function insertTeam() {
    let teamName = document.getElementById('team-name').value;
    fetch('teams', {
        method: 'post',
        headers: {
          "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
        },
        body: `teamName=${teamName}`
    })
    .then(function(response) {
        getTeams();
        console.log(response);
    });
}