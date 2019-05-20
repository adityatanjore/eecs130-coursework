welcomebio = `    <h2 class="welcometext">Welcome!</h2>
    <p class = introtext>
        My name is Aditya Tanjore, and I study economics, political science,
        and business institutions at Northwestern University. My interests lie
        in the investigation of  interstate conflicts around the globe and understanding the
        economics linked to the emergence of right-wing populist sentiments, as well as in leadership
        development in business and beyond. Please feel free to read through my bio, peruse through my work and thoughts,
        or ask me a question!
    </p>


    <ul data-accordion class="bx--accordion">
    	<li data-accordion-item class="bx--accordion__item">
    		<button class="bx--accordion__heading" aria-expanded="false" aria-controls="pane1">
              <svg focusable="false" preserveAspectRatio="xMidYMid meet" style="will-change: transform;" xmlns="http://www.w3.org/2000/svg" class="bx--accordion__arrow" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M11 8l-5 5-.7-.7L9.6 8 5.3 3.7 6 3z"></path></svg>
            <div class="bx--accordion__title">My Background</div>
          </button>
    		<div id="pane1" class="bx--accordion__content">
    			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    		</div>
    	</li>
    	<li data-accordion-item class="bx--accordion__item">
    		<button class="bx--accordion__heading" aria-expanded="false" aria-controls="pane2">
              <svg focusable="false" preserveAspectRatio="xMidYMid meet" style="will-change: transform;" xmlns="http://www.w3.org/2000/svg" class="bx--accordion__arrow" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M11 8l-5 5-.7-.7L9.6 8 5.3 3.7 6 3z"></path></svg>
            <div class="bx--accordion__title">My Interests</div>
          </button>
    		<div id="pane2" class="bx--accordion__content">
    			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    		</div>
    	</li>
    	<li data-accordion-item class="bx--accordion__item">
    		<button class="bx--accordion__heading" aria-expanded="false" aria-controls="pane3">
              <svg focusable="false" preserveAspectRatio="xMidYMid meet" style="will-change: transform;" xmlns="http://www.w3.org/2000/svg" class="bx--accordion__arrow" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M11 8l-5 5-.7-.7L9.6 8 5.3 3.7 6 3z"></path></svg>
            <div class="bx--accordion__title">My Goals</div>
          </button>
    		<div id="pane3" class="bx--accordion__content">
    			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    		</div>
    	</li>
    	<li data-accordion-item class="bx--accordion__item">
    		<button class="bx--accordion__heading" aria-expanded="false" aria-controls="pane4">
              <svg focusable="false" preserveAspectRatio="xMidYMid meet" style="will-change: transform;" xmlns="http://www.w3.org/2000/svg" class="bx--accordion__arrow" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M11 8l-5 5-.7-.7L9.6 8 5.3 3.7 6 3z"></path></svg>
            <div class="bx--accordion__title">Contact</div>
          </button>
    		<div id="pane4" class="bx--accordion__content">
    			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    		</div>
    	</li>
    </ul>



`

askaditya=`

<div id = "postedquestions">
</div>


<div class="bx--form-item">
  <label for="text-area-2" class="bx--label" id = "questionrequest">Please ask me a question!</label>
  <div class="bx--form__helper-text">
    500 character count maximum
  </div>

  <textarea id="question-text-area" class="bx--text-area" rows="4" cols="50" placeholder="Ask away! "></textarea>

</div>
<div class="bx--form-item">
  <div class="bx--select">
    <label for="select-id" class="questionclassifcation">Question Classification: what cateogry does your question fall under?</label>
    <div class="bx--select-input__wrapper">
      <select id="select-id" class="bx--select-input ">

        <option class="bx--select-option" value=""  disabled selected hidden> Choose an option </option>
        <option class="bx--select-option" value="solong" >Consulting / Recruitment Experience </option>
          <option class="bx--select-option" value="option1" >Addressing Northwestern Business Culture </option>           <option class="bx--select-option" value="option2" >Adi's general "Northwestern Journey" </option>  </optgroup>
          <option class="bx--select-option" value="option1" >Global Politics and Political Development</option>           <option class="bx--select-option" value="option2" >Other</option>  </optgroup>   </select>
      <svg focusable="false" preserveAspectRatio="xMidYMid meet" style="will-change: transform;" xmlns="http://www.w3.org/2000/svg" class="bx--select__arrow" width="10" height="6" viewBox="0 0 10 6" aria-hidden="true"><path d="M5 6L0 1 .7.3 5 4.6 9.3.3l.7.7z"></path></svg>
    </div>
  </div>
</div>
<div class="bx--form-item">
  <button class="bx--btn bx--btn--primary" type="button"  id = "submit" >Submit</button>
</div>
`

thoughts = `

<h1 class = thoughts> Thoughts </h1>
<p class = thoughttext> Here are some thoughts that I have collected throughout my undergraduate career that pertain to some of the work I've done, as well as areas of interest that I wish to explore in greater depth</p>

<div class="bx--form-item">
  <label for="text-area-2" class="bx--label">*** the text box below will be where I type out my thoughts ***</label>
  <div class="bx--form__helper-text">
    ~500 character count maximum
  </div>

  <textarea id="question-text-area" class="bx--text-area" rows="4" cols="50" placeholder="Placeholder text. "></textarea>

</div>

<div class="bx--form-item">
  <button class="bx--btn bx--btn--primary" type="button">Submit</button>
</div>
`

mywork = `
<p class = constructionmessage> UNDER CONSTRUCTION! </p>
<p class = checkbackmessage> Please check back in a little bit! </p>

`

const chapter1 = () => {
  document.getElementById("section1").className = "bx--content-switcher-btn bx--content-switcher--selected";
  document.getElementById("section2").className = "bx--content-switcher-btn";
  document.getElementById("section3").className = "bx--content-switcher-btn";
  document.getElementById("section4").className = "bx--content-switcher-btn";
  document.querySelector(".content").innerHTML = welcomebio;

  // document.querySelector(".content").innerHTML = ch1_text;
};


const chapter2 = () => {
  document.getElementById("section2").className = "bx--content-switcher-btn bx--content-switcher--selected";
  document.getElementById("section1").className = "bx--content-switcher-btn";
  document.getElementById("section3").className = "bx--content-switcher-btn";
  document.getElementById("section4").className = "bx--content-switcher-btn";
  document.querySelector(".content").innerHTML = askaditya;


  // document.querySelector(".content").innerHTML = ch2_text;

};

const chapter3 = () => {
  document.getElementById("section3").className = "bx--content-switcher-btn bx--content-switcher--selected";
  document.getElementById("section1").className = "bx--content-switcher-btn";
  document.getElementById("section2").className = "bx--content-switcher-btn";
  document.getElementById("section4").className = "bx--content-switcher-btn";
  document.querySelector(".content").innerHTML = thoughts;


  // document.querySelector(".content").innerHTML = ch3_text;

};


const chapter4 = () => {
  document.getElementById("section4").className = "bx--content-switcher-btn bx--content-switcher--selected";
  document.getElementById("section1").className = "bx--content-switcher-btn";
  document.getElementById("section2").className = "bx--content-switcher-btn";
  document.getElementById("section3").className = "bx--content-switcher-btn";
  document.querySelector(".content").innerHTML = mywork;


  // document.querySelector(".content").innerHTML = ch4_text;

};

document.querySelector("#section1").onclick = chapter1;
document.querySelector("#section2").onclick = chapter2;
document.querySelector("#section3").onclick = chapter3;
document.querySelector("#section4").onclick = chapter4;



const submission = () => {console.log(document.querySelector('#question-text-area').value)
};


const template =
`<div class = "card">
    <p> '${submission}' </p>
</div>`

document.querySelector('#postedquestions').innerHTML += template;
document.querySelector('#submit').onclick = submission;



// Having trouble figuring out how I should then store the message into a database for me to look through and then later publish and answer to
