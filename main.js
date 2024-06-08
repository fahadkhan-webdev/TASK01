const tablinks = document.getElementsByClassName("tab-links")
const tabcontents = document.getElementsByClassName("tab-contents")
const sideMenuEl = document.getElementById("sideMenu");
const scriptURL = 'https://script.google.com/macros/s/AKfycbzr14FQW9_aOJx5Elpj2tzBqaS38ShEthkR7omSInjYrtR0Sr0Fi-Oq5uMmSiBkMC4/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Message sent successfully!"
        setTimeout(function(){
            msg.innerHTML = ""
        }, 5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })


function openMenu(){
    sideMenuEl.style.right = "0";
}
function closeMenu(){
    sideMenuEl.style.right = "-200px";
}



function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link")
    }

    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab")
    }
    event.currentTarget.classList.add("active-link")
    document.getElementById(tabname).classList.add("active-tab")
}
