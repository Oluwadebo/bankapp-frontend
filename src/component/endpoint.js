import { io } from "socket.io-client";
let baseUrl;
if (process.env.NODE_ENV == 'production') {
	baseUrl = 'http://localhost:5011/';
} else {
	baseUrl = 'http://localhost:5011/';
}
const socket = io(baseUrl)
export { baseUrl, socket };