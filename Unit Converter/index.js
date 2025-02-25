/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
function convert() {
    let ogVal = document.getElementById('input').value
    let lenVal = document.getElementById('len')
    let volVal = document.getElementById('vol')
    let massVal = document.getElementById('mass')

    lenVal.innerText = `${ogVal} meters = ${Math.round((ogVal * 3.281) * 1000) / 1000} feet | ${ogVal} feet = ${Math.round((ogVal / 3.281) * 1000) / 1000} meters`
    volVal.innerText = `${ogVal} liters = ${Math.round((ogVal * 0.264) * 1000) / 1000} gallons | ${ogVal} gallons = ${Math.round((ogVal / 0.264) * 1000) / 1000} liters`
    massVal.innerText = `${ogVal} kilos = ${Math.round((ogVal * 2.204) * 1000) / 1000} pounds | ${ogVal} pounds = ${Math.round((ogVal / 2.204) * 1000) / 1000} kilos`
}