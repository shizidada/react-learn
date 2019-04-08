
const TIME_OUT = 60 * 1000 * 30;

export function set(key, value) {
    var currentTime = new Date().getTime();
    localStorage.setItem(key, JSON.stringify({ data: value, time: currentTime }));
}

export function get(key, timeout = TIME_OUT) {
    var data = JSON.parse(localStorage.getItem(key));
    if (data=== null || data.time === null) {
    	return -1;
    } else if (new Date().getTime() - data.time > timeout) {
        return -1;
    } else {
        return JSON.parse(data.data);
    }
}