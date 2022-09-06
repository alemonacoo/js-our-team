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
    let card = document.createElement("div");
    card.classList.add("card");
    teamContainer.append(card);
    card.innerHTML += ` <h2> ${teamMembersArray[i].name}</h2>
                        <p> ${teamMembersArray[i].role}</p>
                        <img src="img/${teamMembersArray[i].picture}" alt="">
    `
}






