

var createViewModel = require("./translate-view-model").createViewModel;

function onNavigatingTo(args) {
    var _contentInput;
    
    var page = args.object;
    page.bindingContext = createViewModel();

    
}
exports.onNavigatingTo = onNavigatingTo;