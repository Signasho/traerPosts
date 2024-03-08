const getPosts = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');

        if (!response.ok) {
            throw new Error(`Error al obtener los posts. Error: ${response.status}`);
        }

        const posts = await response.json();
        const ulElement = document.createElement('ul');

        posts.forEach(post => {
            const liElement = document.createElement('li');

            const ulStrong = document.createElement('strong');
            ulStrong.textContent = post.title;

            const spanElement = document.createElement('span');
            spanElement.textContent = ` ${post.body}`;

            liElement.appendChild(ulStrong);
            liElement.appendChild(spanElement);
            ulElement.appendChild(liElement);
        });

        const finalPost = document.getElementById('post-data');
        finalPost.appendChild(ulElement);

    } catch (error) {
        console.error('Error:', error.message);
    }
}
const boton = document.getElementById('boton')
boton.addEventListener('click', getPosts)

