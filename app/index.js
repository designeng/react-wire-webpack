import wire from 'wire'

wire({
    test: 123
}).then(function(context){
    console.log("CONTEXT::::12345", context);
})