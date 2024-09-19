const { EventEmitter } = require('events');
 
const myEventEmitter = new EventEmitter();
 
const makeCoffee = ({ name }) => {
    console.log(`Kopi ${name} telah dibuat!`);
};
 
myEventEmitter.on('coffee-order', makeCoffee);
 
// Memicu event 'coffee-order' terjadi.
myEventEmitter.emit('coffee-order', { name: 'Tubruk' });

// ================= TODO 1, 2, 3 ==============
const birthdayEventListener = (name) => {
    console.log('happy birthday! ' + name);
}

myEventEmitter.on('birthday', birthdayEventListener);

// Memicu event 'birthday' terjadi.
myEventEmitter.emit('birthday', 'Isna');