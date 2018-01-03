
function queryAllArticle(callback) {
    $.ajax({
        url: '/article/selectAllArticle.json',
        type: 'get',
        contentType: 'application/x-www-form-urlencoded;charset=UTF-8',
        dataType: 'json',
        success: callback
    });
}


module.exports = {
    queryAllArticle: queryAllArticle,
};
