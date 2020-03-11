const serviceUrl = 'http://jsonplaceholder.typicode.com/posts';
const posts = document.getElementById('posts');
const btn = document.getElementById('get')
let data = null;

btn.addEventListener('click', function() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            data = JSON.parse(this.responseText);
            console.log(data);

            //udskriv de enkelte posts
            for(i = 0; i < data.length; i++) {
                var post = data[i];
                posts.innerHTML += `
                    <div>${post.title}</div>
                `;
            }
        }
    }
    xhttp.open('GET', serviceUrl, true);
    xhttp.send();
})