var GameBoard = function(){

    /*
     * Game variables
     */
    var player = new Player();



    /*
     * Game Environment
     */

    var height = window.innerHeight;
    var width = window.innerWidth;


    var movement = {
        "left":false,
        "right":false,
        "shoot":false
    };

    /*
     * Event listeners
     */
    document.addEventListener('keydown', function(e) {

        switch(e.keyCode){
            case 37:
                movement.left = true;
                break;
            case 39:
                movement.right = true;
                break;
            case 32:
                movement.shoot = true;
                break;
            default:
        }
    });

    document.addEventListener('keyup', function(e) {
        switch(e.keyCode){
            case 37:
                movement.left = false;
                break;
            case 39:
                movement.right = false;
                break;
            case 32:
                movement.shoot = false;
                break;
            default:
        }
    });


    function render(){
        console.log("game loop");

        player.render(movement);
    }



    function animloop(){
        requestAnimFrame(animloop);
        render();
    }
    animloop();

}

window.requestAnimFrame = (function(){
    return  window.requestAnimationFrame       ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame    ||
        function( callback ){
            window.setTimeout(callback, 1000 / 60);
        };
})();

var gameBoard = new GameBoard();