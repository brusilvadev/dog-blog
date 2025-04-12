document.addEventListener("DOMContentLoaded", () => {
    fetch("https://dogapi.dog/api/v2/breeds")
        .then((res) => res.json())
        .then((data) => {
            const breeds = data.data.slice(0, 10); // Pega as 3 primeiras raças
            
            const postsContainer = document.querySelector(".blog-posts");
            postsContainer.innerHTML = ""; // Limpa posts existentes
            
            breeds.forEach(breed => {
                postsContainer.innerHTML += `
                    <div class="post">
                        <img src="img/dog.svg">
                        <h2>${breed.attributes.name}</h2>
                        <p>${breed.attributes.description || "Descrição não disponível"}</p>
                        <button>Saiba Mais</button>
                    </div>
                `;
            });
        });
});