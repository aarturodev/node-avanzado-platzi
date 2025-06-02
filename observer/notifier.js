import EventEmitter from 'node:events';

class Notifier extends EventEmitter {}

const notifier = new Notifier();

export default notifier;

