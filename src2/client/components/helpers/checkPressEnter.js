export default ( callback ) => ( e ) => {
    if(e.keyCode !== 13 || e.altKey || e.ctrlKey || e.shiftKey) 
        return;

    callback();
}