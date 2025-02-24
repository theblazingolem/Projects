const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~`!@#$%^&*()_-+={}[],|:;<>.?/".split("");

let p1 = document.getElementById('p1');
let p2 = document.getElementById('p2');

function gen() {
    let s1 = '';
    let s2 = '';

    for (let i = 0; i < 15; i++) {
        s1 += characters[Math.floor(Math.random() * characters.length)];
        s2 += characters[Math.floor(Math.random() * characters.length)];
    }

    p1.innerText = s1;
    p2.innerText = s2;
}

function copyToClipboard(element) {
    if (element.innerText) {
        navigator.clipboard.writeText(element.innerText).then(() => {
            alert("Copied to clipboard: " + element.innerText);
        }).catch(err => {
            console.error("Failed to copy:", err);
        });
    }
}

p1.addEventListener('click', () => copyToClipboard(p1));
p2.addEventListener('click', () => copyToClipboard(p2));
