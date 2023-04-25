function last_updated(){
    const date = new Date(document.lastModified);
    const options = {month: "long", day: "numeric", year: "numeric", }
    document.querySelector('#last-updated').textContent = date.toLocaleString();
}

last_updated();
const today = new Date();
document.querySelector('#year').textContent = today.getFullYear();