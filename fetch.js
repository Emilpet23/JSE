const serviceUrl = 'http://jsonplaceholder.typicode.com/posts';
const posts = document.getElementById('posts');
const btn = document.getElementById('get')
let data = null;

btn.addEventListener('click', function() {
    fetch(serviceUrl)
    .then(Response => Response.json())
        .then(function(data) {
            for(i = 0; i < data.length; i++) {
                posts.innerHTML += `
                    <div><a href="post.html">${data[i].title}</a></div>
                `;
            }
        })
        .catch(function(error) {

        })
})