document.getElementById('search-input').addEventListener('input', async (e) => {
    const searchValue = e.target.value;
    const res = await fetch(`http://localhost:8000/?search=${searchValue}`);
    const json = await res.json();
    console.log('JSON.stringify(resultsList)', json)

    const resultsList = document.getElementById('results');
    resultsList.innerHTML = '';
    if (Array.isArray(json)) {
        json.forEach(comment => {
            const listItem = document.createElement('li');
            listItem.textContent = comment.name;
            resultsList.appendChild(listItem);
        });
    } else {
        console.error('Unexpected JSON response:', json);
    }
});
