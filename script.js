const mainSection = document.getElementById('main-section');
const formSection = document.getElementById('form-section');
const bookmarkListSection = document.getElementById('bookrmark-list-section');

const nameEl = document.getElementById('name');
const url = document.getElementById('url');
const categoryDropdown = document.getElementById('category-dropdown');

const addBookmarkButton = document.getElementById('add-bookmark-button');
const addBookmarkButtonForm = document.getElementById('add-bookmark-button-form');
const closeFormButton = document.getElementById('close-form-button');

const categoryNames = document.getElementsByClassName('category-name');

const getBookmarks = () => {
    const raw = localStorage.getItem('bookmarks');
    if (!raw) return [];

    let bookmarks;
    try {
        bookmarks = JSON.parse(raw);
    }
    catch (error) {
        return [];
    }

    if (!Array.isArray(bookmarks)) return [];

    const props = ['name', 'category', 'url'];
    if (!bookmarks.every(obj => props.every(p => Object.hasOwn(obj, p)))) return [];

    return bookmarks;
}

const displaySection = section => {
    const sections = [mainSection, formSection, bookmarkListSection];
    sections.forEach(s => s.classList.add('hidden'));
    section.classList.remove('hidden');
}

const displayOrCloseForm = () => {
    mainSection.classList.toggle('hidden');
    formSection.classList.toggle('hidden');
}

addBookmarkButton.addEventListener('click', (e) => {
    Array.from(categoryNames).forEach(el => el.textContent = categoryDropdown.value);
    displayOrCloseForm();
});

closeFormButton.addEventListener('click', displayOrCloseForm);

const setBookmarks = bookmarks => localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

addBookmarkButtonForm.addEventListener('click', (e) => {
    const bookmarks = getBookmarks();
    bookmarks.push({ name: nameEl.value, url: url.value, category: categoryDropdown.value });
    setBookmarks(bookmarks);
    nameEl.value = '';
    url.value = '';
    displayOrCloseForm();
});

// const displayOrCloseForm = () => displaySection(mainSection.classList.contains('hidden') ? mainSection : formSection);
// const checked = document.querySelector('input[type="radio"]:checked');







