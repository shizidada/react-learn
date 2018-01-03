export function set(key, value) {
    var currentTime = new Date().getTime();
    localStorage.setItem(key, JSON.stringify({ data: value, time: currentTime }));
}

export function get(key, timeout) {
    var data = JSON.parse(localStorage.getItem(key));
    if (data=== null || data.time === null) {
    	return -1;
    } else if (new Date().getTime() - data.time > timeout) {
        return -1;
    } else {
    	var dataObjDatatoJson = JSON.parse(data.data)
        return dataObjDatatoJson;
    }
}