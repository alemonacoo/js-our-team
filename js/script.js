console.log("JS OK!");


const teamMembersArray = 
[
    {name:'Wayne Barnett', role: 'Founder & CEO', picture: 'wayne-barnett-founder-ceo.jpg'},
    {name:'Angela Caroll', role: 'Office Manager', picture: 'walter-gordon-office-manager.jpg'},
    {name:'Angela Lopez', role: 'Social Media Manager', picture: 'angela-lopez-social-media-manager.jpg'},
    {name:'Scott Estrada', role: 'Developer', picture: 'scott-estrada-developer.jpg'},
    {name:'Barbara Ramos', role: 'Graphic Designer', picture: 'barbara-ramos-graphic-designer.jpg'}
]

console.log(teamMembersArray);

const teamContainer = document.getElementById("team-members-container");

for(i=0; i < teamMembersArray.length; i++){
    console.log('name = ' + teamMembersArray[i].name, 'role = ' + teamMembersArray[i].role, 'picture = ' + teamMembersArray[i].picture);
    teamContainer.innerHTML += `<h2> ${teamMembersArray[i].role}</h2>
                                <p> ${teamMembersArray[i].role}</p>
                                <p> ${teamMembersArray[i].picture} = pic path</p>
                                `
}





