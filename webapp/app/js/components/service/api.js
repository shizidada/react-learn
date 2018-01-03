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

function queryAllArticle(callback) {
    $.ajax({
        url: '/article/selectAllArticle.json',
        type: 'post',
        contentType: 'application/x-www-form-urlencoded;charset=UTF-8',
        dataType: 'json',
        success: callback
    });
}

function deleteArticleById(id, callback) {
    $.ajax({
        url: '/article/deleteArticleById.json',
        type: 'post',
        contentType: 'application/x-www-form-urlencoded;charset=UTF-8',
        dataType: 'json',
        data: { id },
        success: callback
    });
}

function updateArticleByStatus(id, callback) {
    $.ajax({
        url: '/article/updateArticleByStatus.json',
        type: 'post',
        contentType: 'application/x-www-form-urlencoded;charset=UTF-8',
        dataType: 'json',
        data: { id },
        success: callback
    });
}

function selectRecentlyArticle(callback) {
    $.ajax({
        url: '/article/selectRecentlyArticle.json',
        type: 'post',
        contentType: 'application/x-www-form-urlencoded;charset=UTF-8',
        dataType: 'json',
        success: callback
    });
}

function selectArticleById(id, callback) {
    $.ajax({
        url: '/article/selectArticleById.json',
        type: 'post',
        contentType: 'application/x-www-form-urlencoded;charset=UTF-8',
        dataType: 'json',
        data: { id },
        success: callback
    });
}

module.exports = {
    addArticle,
    queryAllArticle,
    deleteArticleById,
    updateArticleByStatus,
    selectRecentlyArticle,
    selectArticleById,
};
