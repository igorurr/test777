export default 
    ( callback: () => void ) => 
    ( e: any ) => {
        if(e.keyCode !== 13 || e.altKey || e.ctrlKey || e.shiftKey) 
            return;

        callback();
    }