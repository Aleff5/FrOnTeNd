const words = ["best", "funniest", "coolest"];
let wordIndex = 0;

// Função para alternar as palavras do subtítulo
function changeWord() {
    wordIndex = (wordIndex + 1) % words.length;
    document.getElementById("word").textContent = words[wordIndex];
}

// Chamada da função a cada segundo para alterar a palavra
setInterval(changeWord, 1000);

// Função para gerar a imagem
async function generateImage() {
    try {
        const response = await axios.get('http://localhost:8080/generate');
        if (response.status === 200) {
            const imageUrl = response.data.url;
            const imageContainer = document.getElementById('imageContainer');
            imageContainer.innerHTML = `<img src="${imageUrl}" alt="Generated Image">`;
        } else {
            alert(`Error: ${response.data}`);
        }
    } catch (error) {
        if (error.response) {
            alert(`Error: ${error.response.data}`);
        } else if (error.request) {
            alert('Error: No response from server');
        } else {
            alert(`Error: ${error.message}`);
        }
    }
}
