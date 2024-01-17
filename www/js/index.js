document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);

    init();
    loadListFromLocalStorage(); // Cargar la lista almacenada al iniciar la aplicación
}

function init() {
    $("#addTask").click(addTask);
}

function addTask() {
    var text = window.prompt("TASK NAME?");
    var newelem = $("<li>" + text + "<button>edit</button> <button class='removeTask'>X</button></li>");
    $("ul").append(newelem);
    $("ul").listview("refresh");
    $(".removeTask").click(removeTask);

    saveListToLocalStorage(); // Guardar la lista en el localStorage después de agregar un elemento
}

function removeTask(e) {
    var caller = e.target;
    $(caller).parent().remove();
    saveListToLocalStorage(); // Guardar la lista en el localStorage después de eliminar un elemento
}

function editTask(e){
    var caller = e.target;
    
}

function saveListToLocalStorage() {
    // Obtener la lista actual y guardarla en el localStorage
    var taskList = $("ul").html();
    localStorage.setItem('taskList', taskList);
}

function loadListFromLocalStorage() {
    // Cargar la lista almacenada en el localStorage
    var storedList = localStorage.getItem('taskList');
    if (storedList) {
        $("ul").html(storedList);
        $(".removeTask").click(removeTask); // Volver a vincular el evento después de cargar la lista
    }
}
