/** Ajax call 
 * @param url endpoint
 * @param callback function to be executed when we get a real answer from server. This callback always get the real response as parameter
*/

function get(url,callback){
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onload = function() {
       
        if (this.readyState===4 && this.status === 200) {
            callback(this.response);
        }else {
            alert('Request failed.  Returned status of ' + this.status);
        }
    };
    xhr.send();
}

export {get};