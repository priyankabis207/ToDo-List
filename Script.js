let olTasks = $('#olTasks')
let btnAdd = $('#btnAdd')
let btnClear = $('#btnClear')
let inpNewTask = $('#inpNewTask')
let btnCleanup = $('#btnCleanup')
let btnSort= $('#btnSort')


function addItem() {
    if(inpNewTask.val() == ''){
        alert ("Please enter some text!")
    }
    else{
    let listItem = $('<li>', {
        'class': 'list-group-item',
        text: inpNewTask.val()
    })
    listItem.on('dblclick', ()=>{listItem.remove()})
    listItem.click(() => {
        listItem.toggleClass('checked')
    })
   //listItem.append('<span class="ms-2"><div align="right" class="btn-group me-2" role="group" aria-label="Second group"><button type="button" class="btn btn-secondary">5</button><button type="button" class="btn btn-secondary">6</button><button type="button" class="btn btn-secondary">7</button></div></span>')
    olTasks.append(listItem)
    inpNewTask.val('')
    toggleButtons()
}}

function clearDone() {
    $('#olTasks .checked').remove()
    toggleButtons()
}

function sortTasks() {
    $('#olTasks .checked').appendTo(olTasks)
}

function toggleButtons(){
    btnClear.prop('disabled', inpNewTask.val() == '')
    btnAdd.prop('disabled', inpNewTask.val() == '')
    btnSort.prop('disabled', olTasks.children().length < 1)
    btnCleanup.prop('disabled', olTasks.children().length < 1)
}

inpNewTask.keypress((e) => {
    if(e.which==13) addItem()
})  

inpNewTask.on('input', toggleButtons )
btnAdd.click(addItem)
btnClear.click(() => {
    inpNewTask.val('')
    toggleButtons()
})
btnCleanup.click(clearDone) 
btnSort.click(sortTasks)
