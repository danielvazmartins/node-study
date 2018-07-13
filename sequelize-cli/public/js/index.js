'use strict';

(function init() {
    getTeams();
})()

// Busca todas as equipes
function getTeams() {
    fetch('/teams')
    .then(function(response) {

        response.json()
        .then(function(data) {
            document.getElementById('list-teams').innerHTML = '';
            data.forEach(team => {
                document.getElementById('list-teams').insertAdjacentHTML('beforeend', 
                    `<li class="list-group-item">
                        <input type="radio" class="form-check-input" name="radioTeam" value="${team.tea_id}" id="radioTeam${team.tea_id}" onclick="getUsers(${team.tea_id})">
                        <label for="radioTeam${team.tea_id}">${team.tea_name}</label>                        
                        <span href="javascript:deleteTeam(${team.tea_id})" class="glyphicon glyphicon-trash btn pull-right"></span>
                        <span class="glyphicon glyphicon-pencil btn pull-right"></span>
                        <span class="clearfix"></span>
                    </li>`);
            });            
            let firstListItem = document.querySelector('#list-teams .list-group-item .form-check-input');
            firstListItem.setAttribute('checked', 'true');
            getUsers(data[0].tea_id);
        });
    });
}

// Busca usuários de uma equipe
function getUsers(teamId) {
    fetch(`/users/team/${teamId}`)
    .then(function(response) {        
        response.json()
        .then(function(data) {
            document.querySelector('#table-users tbody').innerHTML = '';
            data.forEach(user => {
                document.querySelector('#table-users tbody').insertAdjacentHTML('beforeend', 
                    `<tr>
                        <td>
                            <input type="radio" class="form-check-input" name="radioUser" value="${user.use_id}" id="radioUser${user.use_id}" onclick="getUserDetail(${user.use_id})">
                            <label for="radioUser${user.use_id}">${user.use_name}</label>
                        </td>
                        <td>${user.use_email}</td>
                    </tr>`);
            })
            let firstTableItem = document.querySelector('#table-users tbody .form-check-input');
            firstTableItem.setAttribute('checked', 'true');
            getUserDetail(data[0].use_id);
        });
    });
}

// Insere uma nova equipe
function insertTeam() {
    let teamName = document.getElementById('team-name').value;
    fetch('/teams', {
        method: 'post',
        headers: {
          "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
        },
        body: `teamName=${teamName}`
    })
    .then(function(response) {
        getTeams();
    });
}

// Remove uma equipe
function deleteTeam(teamId) {
    fetch(`/teams/${teamId}`, {
        method: 'delete'
    })
    .then(function(response) {
        getTeams();
    });
}

// Busca os detalhes de um usuário
function getUserDetail(userId) {
    fetch(`/users/${userId}`)
    .then(function(response) {
        console.log(response);

        response.json()
        .then(function(data) {
            document.querySelector('#panel-user .panel-body').innerHTML = '';
            document.querySelector('#panel-user .panel-body').insertAdjacentHTML('beforeend', `
                <div>
                    <label>Equipe: </label>
                    <span>${data.team.tea_name}</span>
                </div>
                <div>
                    <label>Nome: </label>
                    <span>${data.use_name}</span>
                </div>
                <div>
                    <label>Email: </label>
                    <span>${data.use_email}</span>
                </div>
            `);
        })        
    });
}