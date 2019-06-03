var pages = ["welcomebio", "askaditya", "thoughts", "mywork"];
let questions = null ;

// function to switch content
function contentSwitcher(page) {

  // sets all children to hidden
  var child = document.getElementById("content").children;

  child[0].className = pages[0] + " hiddenDiv";
  child[1].className = pages[1] + " hiddenDiv";
  child[2].className = pages[2] + " hiddenDiv";
  child[3].className = pages[3] + " hiddenDiv";

  // sets all navbars to default
  document.getElementById("section1").className = "bx--content-switcher-btn";
  document.getElementById("section2").className = "bx--content-switcher-btn";
  document.getElementById("section3").className = "bx--content-switcher-btn";
  document.getElementById("section4").className = "bx--content-switcher-btn";


  // sets content to display
  document.getElementById("content").children[page].className = pages[page];

  // sets navbar highlight
  if (page == 0) {
      console.log("switching to page 1");
      document.getElementById("section1").className = "bx--content-switcher-btn bx--content-switcher--selected"}
  if (page == 1) {
      console.log("switching to page 2");
      document.getElementById("section2").className = "bx--content-switcher-btn bx--content-switcher--selected"}
  if (page == 2) {
      console.log("switching to page 3");
      document.getElementById("section3").className = "bx--content-switcher-btn bx--content-switcher--selected"}
  if (page == 3) {
      console.log("switching to page 4");
      document.getElementById("section4").className = "bx--content-switcher-btn bx--content-switcher--selected"}
}

// add click functions to each navbar
document.querySelector("#section1").addEventListener('click', function(){contentSwitcher(0);}, false);
document.querySelector("#section2").addEventListener('click', function(){contentSwitcher(1);}, false);
document.querySelector("#section3").addEventListener('click', function(){contentSwitcher(2);}, false);
document.querySelector("#section4").addEventListener('click', function(){contentSwitcher(3);}, false);

// Having trouble figuring out how I should then store the message into a database for me to look through and then later publish and answer to













const myAPIEndpoint = 'https://eecs130-final-project.herokuapp.com/photos';
const mySecondAPIEndpoint = 'https://eecs130-final-project.herokuapp.com/comments';


const addVote = (ev) => {
  console.log("addVote");
  console.log(ev.target.getAttribute("entry_id"));
  const entry_id = parseInt(ev.target.getAttribute("entry_id"));
  console.log(questions);
  console.log(entry_id);
  const question = questions.find(x => x.id === entry_id);
  console.log(question);
  question.votes += 1;
  fetch('https://eecs130-final-project.herokuapp.com/photos/' + entry_id, {
        method: 'PATCH',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "votes": question.votes
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        getData();
    });


  //const upvote = document.querySelector(#formUpvote).??????;
  // fetch(myAPIEndpoint, {
  //   method: 'POST',
  //   headers: {
  //       'Accept': 'application/json',
  //       'Content-Type': 'application/json'
  //   },
  //
  // }
  //
  //
  // )

};







const addNewQuestion = () => {
    console.log("addNewQuestion");
    // 1. get user-generated data:
    const question = document.querySelector('#formQuestion').value;
    const category = document.querySelector('#formCategory').textContent;


    // 2. post it to the endpoint:
    fetch(myAPIEndpoint, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "question": question,
            "category": category,
            "votes" : 0,
            // HOW DO I ADD A COUNTER FOR THE UPVOTE BUTTON HERE?
        })
    })
    .then(response => response.json())
    .then(data => {
        // 3. print the results to the screen
        console.log(data);
    })
    .catch(error => {
      console.log(error);
    });
};



//////////////////////////////////////////////////////////////////////////


const addNewThought = () => {
    console.log("addNewThought");
    // 1. get user-generated data:
    const thought = document.querySelector('#formThought').value;

    // 2. post it to the endpoint:
    fetch(mySecondAPIEndpoint, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "thought": thought,
            // "votes" : 0,
            // HOW DO I ADD A COUNTER FOR THE UPVOTE BUTTON HERE?
        })
    })
    .then(response => response.json())
    .then(data => {
        // 3. print the results to the screen
        console.log(data);
    })
    .catch(error => {
      console.log(error);
    });
};


// 4. attach function to button:
// document on load to make sure all html is preloaded before we attach button handlers.
  document.querySelector("#userFormSubmit").addEventListener('click', function(){addNewQuestion();}, false);
  document.querySelector("#userThoughtSubmit").addEventListener('click', function(){addNewThought();}, false);


const getThought = () => {
  fetch(mySecondAPIEndpoint)
      .then(response => response.json())
      .then(data => {
          thoughts = data;
          // 3. print the results to the screen
          const container = document.querySelector('#thoughtresults');
          container.innerHTML = '';
          for (item of data) {
              container.innerHTML += generateThoughtEntryHTML(item);
          }
          attachDeleteEventHandlers();
      });
};

const getData = () => {
    fetch(myAPIEndpoint)
        .then(response => response.json())
        .then(data => {
            questions = data;
            // 3. print the results to the screen
            const container = document.querySelector('#questionresults');
            container.innerHTML = '';
            for (item of data) {
                container.innerHTML += generateEntryHTML(item);
            }
            attachDeleteEventHandlers();
        });
};

const generateThoughtEntryHTML = (entry) => {
    return `
    <div class="card">
        <p class = "cardquestion">${entry.thought}</p>
        <p class = "cardquestionid"> Question ID #: ${entry.id}</p>
        <button entry_id = "${entry.id}" class = formUpvote type="button"> Upvote! ${entry.votes} </button>
        <p>
            <a data-id="${entry.id}" href="#" class="delete">delete</a>
        </p>
    </div>
    `;
}


const generateEntryHTML = (entry) => {
    return `
    <div class="card">
        <p class = "cardcategory"><strong>${entry.category}</strong></p>
        <p class = "cardquestion">${entry.question}</p>
        <p class = "cardquestionid"> Question ID #: ${entry.id}</p>
        <button entry_id = "${entry.id}" class = formUpvote type="button"> Upvote! ${entry.votes} </button>
    </div>
    `;
};

const attachDeleteEventHandlers = () => {
    for (link of document.querySelectorAll('.delete')) {
        link.onclick = deleteEntry;
    }
    for (button of document.querySelectorAll('.formUpvote')) {
        button.onclick = addVote;
    }

};

const deleteEntry = (ev) => {
    const id = ev.target.getAttribute('data-id');
    fetch(myAPIEndpoint + '/' + id, {
        method: 'DELETE'
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        getData();
    });
    return ev.preventDefault();
}

getData();
getThought();
