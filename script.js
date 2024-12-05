const skillInput = document.getElementById('inpskill');
const addSkillBtn = document.getElementById('skillbtn');
const skillList = document.getElementById('listskill');

addSkillBtn.addEventListener('click', () => {
    const skill = skillInput.value.trim();
    if (skill) {
        addSkillToList(skill);
        skillInput.value = '';
    }
});

function addSkillToList(skill) {
    const skillItem = document.createElement('div');
    skillItem.className = 'itemskil';

    const skillName = document.createElement('span');
    skillName.textContent = skill;

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'btnx';
    deleteBtn.textContent = 'x';

    deleteBtn.addEventListener('click', () => {
        skillItem.remove();
    });

    skillItem.appendChild(skillName);
    skillItem.appendChild(deleteBtn);
    skillList.appendChild(skillItem);
}

