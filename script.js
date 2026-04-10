const mainSection = document.getElementById('main-section');
const formSection = document.getElementById('form-section');
const bookmarkListSection = document.getElementById('bookrmark-list-section');

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

debugger;
const displayOrCloseForm = () => displaySection(mainSection.classList.contains('hidden') ? mainSection : formSection);