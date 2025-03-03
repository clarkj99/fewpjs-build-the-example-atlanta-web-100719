// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

let likeLinks = document.querySelectorAll('.like-glyph');
likeLinks.forEach(likeLink => {
  likeLink.addEventListener('click', function (event) {
    // response = mimicServerCall();
    console.log(event.target.innerText)

    let response = mimicServerCall()
      .then(() => {
        if (event.target.innerText == EMPTY_HEART) {
          event.target.innerText = FULL_HEART
          event.target.classList.add('activated-heart')
        } else {
          event.target.innerText = EMPTY_HEART
          event.target.classList.remove('activated-heart')
        }
      })
      .catch((error) => {
        let modal = document.getElementById('modal');
        modal.className = 'block';
        modal.innerHTML = error
        setTimeout(() => {
          modal.className = 'hidden';
        }, 5000)
        // console.log(error)
      })
  })
})



//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
