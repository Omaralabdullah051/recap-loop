var bottleColor = 'yellow';
var waterQuantity = 1;
var isFull = false;

// array 
var items = ['bottle', 'mug', 'paper', 'pen'];
items.indexOf('logens');
items.push('envelope');
items.push('watch');
items.pop();

// conditional
if (items.length >= 4) {
    console.log('You have too many stuff on your desk');
}
else if (items.length == 4) {
    console.log('You only have one half items');
}
else {
    console.log('WoW!You have a clean desk');
}

