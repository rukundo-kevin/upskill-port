import {viewArticles, viewBlog} from './viewArticles.js';
import {fetchUpdateArticle,updateArticle} from './updateArticle.js';
import {deleteArticle} from './deleteArticle.js'
import {viewQueries} from './viewQueries.js'
import { viewBlogArticle } from './viewBlogArticle.js';
// import {addLike,addDislike,getLikes,getDislike} from './addLike.js'
// import { addComment,viewComments } from './addComment.js';

function  isLoggedIn() {
     let signIn = document.querySelector("#signIn");
       if (localStorage.getItem("token")) {
          signIn.href = 'sign-out.html';
          signIn.childNodes[1].childNodes[1].innerHTML = 'Sign out';    
          return true;       
       }
    else{
     return false;
    }  
}

function  getUserId() {
     let users = JSON.parse(localStorage.getItem('users'));
     let userId ;
      if (users && users.length > 0) {
        users.forEach(user =>{
            if (user.loggedIn ) {
              userId=   user.userId;
            }
        })
     }     
     return userId;
}

function redirect() {
     if(isLoggedIn()){

     }else{
          window.location = '../index.html';
     }
}

document.addEventListener("DOMContentLoaded",function(){
   isLoggedIn();
    switch (document.body.id) {
         case 'updateArticleFile':
          redirect();
          let img ;
                 
               document.querySelector("#article-image").addEventListener("change",function(){
               const reader = new FileReader();

               reader.addEventListener("load",() =>{
                    img = reader.result;
               });

               reader.readAsDataURL(this.files[0]);
               })
               
              fetchUpdateArticle();   
               document.querySelector("#update-article-form").addEventListener("submit",function (e) {
                     e.preventDefault();
                     updateArticle(img);
               })
         break;
         
         case 'viewArticlesFile':
              redirect();
              viewArticles();
            document.addEventListener("click",function (e) {
                 if(e.target.id == 'deleteArticle'){
                    deleteArticle( e.target.value);
                 }
            })
         break;
         case 'home':
             viewBlog();
         break;
         case 'viewQueriesFile':
             redirect();
              viewQueries();
         break;
         case 'blogArticleFile':
              viewBlogArticle();
 
         break;
         default:
              break;
    }

  })

export {getUserId}