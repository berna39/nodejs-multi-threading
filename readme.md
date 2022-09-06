## Nodejs Multi-threading

Nodejs doesn't have a single thread, in fact the JS code is executed on a single thread, but the I/O interaction happens within a thread-pool handled by libuv. This means that the Nodejs process itself spawns more than one thread, but your JS code will run on a single thread thanks to V8.
itn this procect i did a demo of how we can use mutli-threading into Nodejs app by creating child processes