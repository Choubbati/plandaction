

function getPersonne() {
  const storage = localStorage.getItem("joueur")

  if (storage) {
    try{
      return JSON.parse(storage)

    }catch (e){
      console.error("error parse JSON : ",e)
      return []
    }
  }
  return []
}


function SavePersonne(list) {
    localStorage.setItem('joueur', JSON.stringify(list))
}


function renderPerssone() {
    const list = getPersonne()
    const container = document.getElementById("personList");
    container.innerHTML = ""

    if (list.length  === 0) {
      container.innerHTML = "pas de personne"
      return
    }

    list.forEach((p , index) => {
        const el = document.createElement("div")
        el.className = 'person'
        
    const text = document.createElement('span');
    text.textContent = `${index + 1}. ${p.name} — ${p.age} ans`;

    el.appendChild(text)
container.appendChild(el)
    });

    
}



document.getElementById("personForm").addEventListener("submit", function(e) {
  e.preventDefault()

  const name = document.getElementById("nameInput").value.trim()
  const age = document.getElementById('ageInput').value.trim()


  if(!name || age === ''){
    alert('remplir name et age')
    return
  }

  const pep = getPersonne()
  pep.push({name: name , age: parseInt(age ,10)})

  SavePersonne(pep)
  this.reset()

  renderPerssone()

})

window.addEventListener("DOMContentLoaded", renderPerssone)