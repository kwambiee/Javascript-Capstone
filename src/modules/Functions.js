// import AddComentEventListener from '../index.js';
import { modal, Cards } from './Dom.js';

function DisplayPopup(data, examples) {
  modal.innerHTML = ` <div class="closeBtn">X</div>
  <div class="popup">
            <div class="popup-header" >
                
                    <div class="img-popcontainer">
                        <div class="img-pophold">
                            <div class="img">
                                <img src="${data.strCategoryThumb}">
                            </div>
                        </div>
                    </div>
                <div class="popup-title">${data.strCategory}</div>
            </div>

            <div class="popup-details">
              
                <div class="details">
                    <div class="images">
                    </div>
                    <hr />
                   <div class="details-text">
                   ${data.strCategoryDescription}
                    </div>
                </div>
                <div class="popup-comments">
                    <div class="container-comments">
                        <form >
                    
                    <textarea id="comment" type="text" placeholder="Comment"/></textarea>
                    <div class="form-header"><input id="name" type="text" placeholder="Name" /> <button class="submit">submit</button></div>
                        </form>
                     <hr/>
                    <div class="comment-list">
                        <ul class="comments">
                           <li class="single-comment">
                               <img class="user" src="https://www.w3schools.com/howto/img_avatar.png" alt="user" >
                               <b class="user-comment">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus consectetur architecto quidem molestiae deserunt vero voluptas odit asperiores nemo laborum cum laudantium eaque voluptate esse nobis voluptatem iusto, est maxime!</b>
                           </li>             
                        </ul>
                    </div>
                </div>
            </div>
        </div>
   
   
   </div>`;
  const images = document.querySelector('.images');
  examples.meals.slice(0, 3).forEach((element) => {
    const div = document.createElement('div');
    div.classList.add('single-product-example');
    div.innerHTML = ` 
    <div class="img-popholdpop">
        <div class="imgex">
            <img src=${element.strMealThumb}>
        </div>
    </div>
    <p class="title-example">${element.strMeal.substr(0, 15)}</p>
`;
    images.appendChild(div);
  });

  const closeBtn = document.querySelector('.closeBtn');

  closeBtn.addEventListener('click', () => {
    modal.classList.toggle('hide');
  });
}

function DisplayCards(data) {
  data.forEach((element) => {
    Cards.innerHTML += `
          <div class="card">
          <div class="img-container">
              <div class="img-hold">
                  <div class="img">
                      <img src="${element.strCategoryThumb}">
                  </div>
              </div>
          </div>
          <div class="title-container">
              <h3>${element.strCategory}</h3>
              <div class="interactions">
              <div><i id="${element.idCategory}" class="fa-solid fa-comment fa-lg"></i>  355  </div>       <div><i class="fa-solid fa-heart fa-lg"></i> <b id="${element.idCategory}" class="likes-counter">355</b> </div>
              </div>
              <div>
              ${element.strCategoryDescription.substr(0, 50)}...
              </div>
              
          <button id="${element.idCategory}" class="button comment"><i class="fa-solid fa-comments"></i> Comments</button>
          </div>
  
      </div>
          `;
  });
//   AddComentEventListener();
}

export { DisplayPopup, DisplayCards };
