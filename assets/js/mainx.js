// we simulate getting data from DB/Server/API
function getDataFromDB() {
    return [{
            id: '1',
            title: 'JS is amazing',
            body: 'JS is amazing and so easy to learn. I like it a lot!',
            author: 'CB',
            remove: 'Remove'
        },
        {
            id: '2',
            title: 'DOM manipulation is easy',
            body: 'DOM Manipulation using JS is straightforward and fun! You can intercept user actions and change things in the HTML and also in CSS.',
            author: 'Anonymous',
            remove: 'Remove'
        },
        {
            id: '3',
            title: 'CSS is nice',
            body: 'To style your HTML page is so much fun! I like playing with colosand images!',
            author: 'AB',
            remove: 'Remove'
        },
        {
            id: '4',
            title: 'Ana are mere',
            body: 'this is my awesome comment',
            author: 'John',
            remove: 'Remove'
        },
    ];
}


// we set a convention
// All variables that contain a DOM element
// should start with $
var $comments = document.querySelector('.comments');

function createCommentElement(title, comment, author, remove) {
    // we create an article element
    var $article = document.createElement('article');
    // console.dir($article);

    // 1. create header element with text
    var $header = document.createElement('header');
    $header.innerText = title;

    // 2. add header element to $article
    $article.appendChild($header);

    // 3. create p element with class comment and text
    var $p = document.createElement('p');
    $p.innerText = comment;
    $p.classList.add('comment');

    // 4. add p element to $article
    $article.appendChild($p);

    // 5. create footer element with text
    var $footer = document.createElement('footer');
    $footer.innerText = author;

    // 6. add footer element to $article
    $article.appendChild($footer);

    // 7. create a button element with class delete and text
    var $removebutton = document.createElement('button');
    $removebutton.innerText = remove;
    $removebutton.classList.add('remove');
    // 8. add remove button to $article
    $article.appendChild($removebutton);

    return $article;
}

function listComments(comments) {
    for (var i = 0; i < comments.length; i++) {
        var comment = comments[i];
        console.log(comment);

        var $article = createCommentElement(comment.title, comment.body, comment.author, comment.remove);

        // parent.appendChild(element) will insert element at the end of parent
        $comments.appendChild($article);

    }
}

var $title = document.querySelector('input[name="title"]');
var $comment = document.querySelector('textarea[name="comment"]');
var $author = document.querySelector('input[name="author"]');

function addComment(event) {
    console.log('add comment');
    // we stop the submit event form happening
    event.preventDefault();
    console.dir(event);
    console.log($title.value); //  
    console.log($comment.value); //  se afiseaza valoarea din input
    console.log($author.value); //

    var $article = createCommentElement($title.value, $comment.value, $author.value);
}

$searchInput = document.querySelector('input[name="search"]');

function onSearch(event) {
    console.log(event);
    console.log($searchInput.value);
}

function onSearchInputChange(event) {
    console.log(event);
    console.log($searchInput.value);
}



// event witch triggers document is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('document is loaded');
    // get comments from DB
    var comments = getDataFromDB();
    console.log(comments);
    // list comments in dom
    listComments(comments);

    var $form = document.querySelector('form');
    $form.addEventListener('submit', addComment);

    $searchbutton = document.querySelector('.search');
    ind
    $searchbutton.addEventListener('click', onSearch);

    // input event triggers when typing in the input field or when it changes
    $searchInput.addEventListener('input', onSearchInputChange);

    // the remove button removes the entire content in the article

    $removebutton = document.querySelector('.remove');
    $removebutton.addEventListener('click', function() {
        var parent = document.querySelector('#handle');

        if (parent.classList.contains('d-none')) {
            parent.classList.remove('d-none');
            $removebutton.textContent = 'REMOVE';
        } else {
            parent.classList.add('d-none');
            $removebutton.textContent = 'RESTORE';
        }
    });
});

//Între 141 și 153 am încercat să sterg conținutul articolului printr-un buton REMOVE,
//iar când conținutul dispare butonul devine RESTORE și când îl apăs apare conținutul de dinainte.
//Am izolat cazul în alt fișier html și js și a mers. Aici nu a mai mers.