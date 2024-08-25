function GetQueryString(name){
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if(r!=null)return  unescape(r[2]); return null;
}
pageParams = GetQueryString('page') * 1;

renderPagination()
var initPage = pageParams || 1
var currentPage = initPage
var slide = new slidePage({
    slidePages: '.slide-page',
    slideContainer: '#slidePage-container',
    refresh: true,
    page: initPage,
    before: function (origin, diraction, target) {
        pagepages = document.querySelectorAll('#pagination a')
        pagepages[origin - 1].classList.remove('active')
        pagepages[target - 1].classList.add('active')
        currentPage = target
    },
    after: function (origin, diraction, target) {
    },
})
window.slide = slide

// -- 由于slidePage不提供分页组件，所以以下是当前示例的分页器逻辑
pagination.querySelectorAll('a')[initPage - 1].classList.add('active')
function renderPagination() {
    var pagination = document.querySelector('#pagination');
    var len = document.querySelectorAll('.slide-page').length;
    var paginationContent = ''
    // 渲染页码
    for (var i = 1; i <= len; i++) {
        paginationContent += '<a onclick="slide.slideTo(' + i + ')"></a>';
    }
    pagination.querySelector('.pagination-page').innerHTML = paginationContent;
}
function appendpage() {
    var len = document.querySelectorAll('.slide-page').length;
    el = document.createElement('div');
    el.innerHTML = '<div class="slide-page page6"> <h2>Page' + (len + 1) + ' - 删除Page</h2> <a href="javascript:removepage()" class="remove">删除Page' + (len + 1) + '</a> </div>'
    document.querySelector('#slidePage-container').appendChild(el.children[0])
    // 增加节点后更新页码
    renderPagination()
    pagination.querySelectorAll('a')[currentPage - 1].classList.add('active')
    slide.update()
}
function removepage() {
    var len = document.querySelectorAll('.slide-page').length;
    var page6 = document.querySelectorAll('.slide-page')[len - 1];
    document.querySelector('#slidePage-container').removeChild(page6)
    // 删除节点后更新页码
    renderPagination()
    pagination.querySelectorAll('a')[currentPage === len ? 0 : currentPage - 1].classList.add('active')
    slide.update()
}


