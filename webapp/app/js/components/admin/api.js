
function addArticle(data, callback) {
    $.ajax({
        url: '/article/addArticle.json',
        type: 'post',
        contentType: 'application/x-www-form-urlencoded;charset=UTF-8',
        dataType: 'json',
        data: data,
        success: callback
    });
}


module.exports = {
    addArticle: addArticle,
};
