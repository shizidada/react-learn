
function queryAllCategory(callback) {
    $.ajax({
        url: '/category/selectAllCategory.json',
        type: 'get',
        async: false,
        contentType: 'application/x-www-form-urlencoded;charset=UTF-8',
        dataType: 'json',
        success: callback
    });
}


module.exports = {
    queryAllCategory: queryAllCategory,
};
