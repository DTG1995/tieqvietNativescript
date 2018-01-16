var Observable = require("data/observable").Observable;
var tieqViet = require('tieqviet');

function onChangeSource(viewModel,value){
    viewModel.contentInput = viewModel.get("contentInput");
    viewModel.set("resultText",tieqViet(viewModel.contentInput));
}
function createViewModel() {
    var viewModel = new Observable();
    viewModel.contentInput;
    
    viewModel.addEventListener(Observable.propertyChangeEvent, function(event){
        console.log(JSON.stringify(event));
        if(event.eventName=="propertyChange" && event.propertyName=="contentInput"){
            onChangeSource(viewModel,  event.value);
        }
    });

    return viewModel;
}

exports.createViewModel = createViewModel;