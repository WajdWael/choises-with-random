const tagsEl = document.querySelector('.tags')
const textArea = document.getElementById('textarea')

textArea.focus()

textArea.addEventListener('keyup', (e) => {
    createTags(e.target.value)

    if (e.key === "Enter") {
        setTimeout(() => {
            e.target.value = ''
        }, 10);
        randomeSelect()
    }
})

function createTags(input) {
    const tags = input.split(',').filter(tag => tag.trim() !== "").map(tag => tag.trim())
    
    tagsEl.innerHTML = ""
    tags.forEach(tag => {
        const tagEle = document.createElement('span')
        tagEle.classList.add('tag')
        tagEle.innerText = tag
        tagsEl.appendChild(tagEle)
    });
}

function randomeSelect() {
    const times = 30;
    const interval = setInterval(() => {
        const randomTag = pickRandomTag()
        lighted(randomTag)
        setTimeout(() => {
            unLighted(randomTag)
        }, 100)

    }, 100);

    setTimeout(() => {
        clearInterval(interval)
        setTimeout(() => {
            const randomTag = pickRandomTag();
            lighted(randomTag)
        }, 100)
    }, times * 100)
}

function pickRandomTag() {
    const tags = document.querySelectorAll(".tag")
    return tags[Math.floor(Math.random() * tags.length)]
}

function lighted(tag) {
    tag.classList.add('lighted')
}
function unLighted(tag) {
    tag.classList.remove('lighted')
}