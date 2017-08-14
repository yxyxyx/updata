/**
 * Created by Administrator on 2017/8/11 0011.
 */
var prepage = 2;
var page = 1;
var pages = 0;
var comments = [];
// 提交评论
$('#messageBtn').on('click',function(){
    $.ajax({
        type:'POST',
        url:'/api/comment/post',
        data:{
            contentid:$('#contentId').val(),
            content:$('#messageContent').val()
        },
        success:function (responseData) {
            $('#messageContent').val('');
            comments = responseData.data.comments.reverse();
            renderComment();
        }
    })
});
$.ajax({
    url:'/api/comment',
    data:{
        contentid:$('#contentId').val()
    },
    success:function (responseData) {
        comments = responseData.data.reverse();
        renderComment()
    }
})
$('.pager').delegate('a','click',function(){
    if($(this).parent().hasClass('previous')){
        page--
    }else{
        page++
    }
    renderComment();
})
function renderComment(){
    $('#messageCount').html(comments.length);
    pages = Math.max(Math.ceil(comments.length / prepage),1);
    var start = Math.max(0,(page - 1)*prepage);
    var end = Math.min(start + prepage,comments.length);
    var $lis = $('.pager li');
    $lis.eq(1).html( page + '/' + pages );
    if(page <= 1){
        page = 1;
        $lis.eq(0).html('<span>没有上一页</span>')
    }else{
        $lis.eq(0).html('<a href="javascript:;">上一页</a>')
    }
    if(page >= pages){
        page = pages;
        $lis.eq(2).html('<span>没有下一页</span>')
    }else{
        $lis.eq(2).html('<a href="javascript:;">下一页</a>')
    }
    if(comments.length == 0){
        $('.messageList').html('<div class="messageBox"><p>还没有评论</p></div>')
    }else{
        var html = '';
        for(var i = start;i < end; i++){
            html += '<div class="messageBox">'+
                '<p class="name"><span class="fl">'+comments[i].username+'</span><span class="fr">'+formatDate(comments[i].postTime)+'</span></p><p>'+comments[i].content+'</p>'+
                '</div>'
        }
        $('.messageList').html(html);
    }
}
function formatDate(d){
    var datel = new Date(d);
    return datel.getFullYear() + '-' + datel.getMonth() + '-' + datel.getDate() + ' ' + datel.getHours() + ':' + datel.getMinutes() + ':' + datel.getSeconds();
}