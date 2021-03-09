const btn = document.querySelector('button');
const container = document.querySelector('.container');
function getUsers(name){
  return Promise.resolve().then(() => {
     const [userType, userId] = name;
     return fetch('https://jsonplaceholder.typicode.com/users')
     .then(response => response.json());
    })
  };
  function renderNames(response){
    const fragment = document.createDocumentFragment();
    response.forEach(user =>{
      const card = document.createElement('div');
      card.classList.add('card');
      const cardBody = document.createElement('div');
      cardBody.classList.add('card-body');
      const title = document.createElement('h3');
      title.classList.add('card-title');
      title.textContent = user.name;
      title.style.border = ' 2px solid #000';
      cardBody.appendChild(title);
      card.appendChild(cardBody);
      fragment.appendChild(card);
    });
      container.appendChild(fragment);   
};
btn.addEventListener('click', e =>{
 getUsers(name).then(renderNames).catch(err => alert('Ooops, error!'));
});
