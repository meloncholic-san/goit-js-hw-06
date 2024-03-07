const refs = {
    category: document.querySelector('#categories')
};

let categoryNumber = 0;

[...refs.category.children].forEach(() => {
    categoryNumber += 1;
});
console.log(`Number of categories: ${categoryNumber}`);
console.log("");



const child = [...refs.category.children];

child.forEach(child => {
    const headingElement = child.querySelector('h2');
    console.log(`Category: ${headingElement.innerText}`);

    const liElement = child.querySelectorAll('li').length;
    console.log(`Number of elements: ${liElement}`);
    console.log("");
});
