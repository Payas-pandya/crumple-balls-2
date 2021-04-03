class Paper {
constructor(x, y, r, options){
    var options = {
        isStatic : false,
        'restitution' : 0.3,
        'friction' : 0.5,
        'density' : 1.2
    }

   }
   Paper = loadImage("images/paper.png");
   x = 600;
   y = 650;
   r = 70;
   Paper =  Bodies.circle(x, y, r, options);
}
