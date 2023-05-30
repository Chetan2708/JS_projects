const tagsEl = document.getElementById('tags')
const textarea = document.getElementById('textarea')

textarea.focus()

// Event listener for keyup event in the textarea
textarea.addEventListener('keyup', (e) => { 
    createTags(e.target.value)

    if(e.key === 'Enter') {
        setTimeout(() => {
            e.target.value = ''
        }, 10)

        randomSelect()
    }
})

// Function to create tags based on the input value
function createTags(input) {
    const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim())
    
    tagsEl.innerHTML = ''

    tags.forEach(tag => { 
        const tagEl = document.createElement('span')
        tagEl.classList.add('tag')
        tagEl.innerText = tag
        tagsEl.appendChild(tagEl)
    })
}

// Function to randomly select and highlight tags
function randomSelect() {
    const times = 30

    const interval = setInterval(() => {
        const randomTag = pickRandomTag()
	
	if (randomTag !== undefined) {
            highlightTag(randomTag)

            setTimeout(() => {
                unHighlightTag(randomTag)
            }, 100)
	}
    }, 100);

    setTimeout(() =>  {
        clearInterval(interval)

        setTimeout(() => {
            const randomTag = pickRandomTag()

            highlightTag(randomTag)
        }, 100)

    }, times * 100)
}

// Function to pick a random tag from the list
function pickRandomTag() {
    const tags = document.querySelectorAll('.tag')
    return tags[Math.floor(Math.random() * tags.length)]
}

// Function to highlight a tag
function highlightTag(tag) {
    tag.classList.add('highlight')
}

// Function to remove highlight from a tag
function unHighlightTag(tag) {
    tag.classList.remove('highlight')
}
