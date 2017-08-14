/**
 * Created by Administrator on 2017/7/14 0014.
 */
$(function(){
    $("#registerBox a").on('click',function(e){
        e.stopPropagation();
        $("#loginBox").show();
        $("#registerBox").hide();
    });
    $("#loginBox a").on('click',function(e){
        e.stopPropagation();
        $("#registerBox").show();
        $("#loginBox").hide();
    });
    $("#registerBox button").on('click',function(e){
        e.stopPropagation();
        $.ajax({
            type:"post",
            url:"/api/user/register",
            data:{
                username:$("#registerBox").find('[name="username"]').val(),
                password:$('#registerBox').find('[name="password"]').val(),
                repassword:$('#registerBox').find('[name="repassword"]').val()
            },
            dataType:"json",
            success:function(result){
                $("#registerBox .colWarning").html(result.message);
                if(!result.code){
                    // 注册成功
                    setTimeout(function(){
                        $("#loginBox").show();
                        $("#registerBox").hide();
                    })
                }
            }
        })
    })
    $("#loginBox button").on('click',function(e){
        e.stopPropagation();
        $.ajax({
            type:"post",
            url:"/api/user/login",
            data:{
                username:$("#loginBox").find('[name="username"]').val(),
                password:$('#loginBox').find('[name="password"]').val()
            },
            dataType:"json",
            success:function(result){
                $("#loginBox .colWarning").html(result.message);
                if(!result.code){
                    // 登录成功
                    window.location.reload();
                }
            }
        })
    });
    // 退出
    $('.logout').on('click',function(){
        $.ajax({
            url:'/api/user/logout',
            success:function(result){
                if(!result.code){
                    window.location.reload();
                }
            }
        })
    })
})