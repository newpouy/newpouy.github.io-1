var worldCanvas = document.getElementById('world');
console.log(worldCanvas);
var ctx = worldCanvas.getContext('2d');
ctx.fillStyle = "green";
ctx.fillRect(10, 10, 100, 100);

var mcmj = new Person(ctx, 200, 200, "앰씨민지");
mcmj.drawSelf();
mcmj.sayName();


var mcmj = new Person(ctx, 300, 300, "지아코");
mcmj.drawSelf();
mcmj.sayName();
