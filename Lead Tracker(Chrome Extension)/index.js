let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const delBtn = document.getElementById('del-btn')
const tabBtn = document.getElementById('tab-btn')
const ulEl = document.getElementById("ul-el")

const leadsFromLS = JSON.parse(localStorage.getItem('myLeads'))

if (leadsFromLS){
    myLeads = leadsFromLS
    renderList(myLeads)
}

const tabs = [
    {url: "https://www.linkedin.com/in/per-harald-borgen/"}
]
// 2. Listen for clicks on tabBtn. Log Per's LinkedIn URL to the consol


function renderList(leads){
    let listItems = ''
    for (let i=0;i<leads.length;i+=1){
        listItems += `
                <li>
                    <a href ='${leads[i]}' target='_blank'>${leads[i]}</a>
                </li>
                `
    }
    ulEl.innerHTML = listItems
}
inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ''
    localStorage.setItem('myLeads', JSON.stringify(myLeads))
    renderList(myLeads)
})

delBtn.addEventListener('dblclick', function(){
    localStorage.clear()
    myLeads = []
    renderList(myLeads)
})

tabBtn.addEventListener('click', function(){
    myLeads.push(tabs[0].url)
    localStorage.setItem('myLeads', JSON.stringify(myLeads))
    renderList(myLeads)
})