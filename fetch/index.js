// // fetch('https://jsonplaceholder.typicode.com/posts')
// // .then(response => {
// //     return response.json();
// // })
// // .then(posts => console.log(posts))
// // .catch(err => console.log(err));


// function getPost(id){
//   return new Promise((resolve, reject) => {
//     fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
//       .then(response => response.json())
//       .then(post => resolve(post))
//       .catch(err => reject(err));
//   });
// }
// getPost(1)
// .then(post => console.log(post));

// function getPost2(id){
//   const [userType, userId] = id.split('-');
//   return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
//   .then(response => response.json()) 
// };
// // getPost2(1).then(post => console.log(post)).catch(err => console.log(err));
// function getPost3(id){
//   return Promise.resolve().then(() => {
//     const [userType, userId] = id.split('-');
//     return fetch(`https://jsonplaceholder.typicode.com/posts/${userId}`)
//     .then(response => response.json());
//   })
// };
// getPost3('user-1').then(post => console.log(post)).catch(err => console.log(err))

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