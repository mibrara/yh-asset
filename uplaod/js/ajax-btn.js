function login(islogin){
    let text="";
    let url="";
    // var stateobj={"page":"login"};
    let username="";
    if(islogin=="login"){
        text="Login";
        url=mainURL+"login/";
        username="Username or Email";
    }else if(islogin=="sign"){
        var sign=new Boolean(1);
        text="SignUp";
        url=mainURL+"signup/";
        username="Username";
    }
    $(".button-nav").removeClass("menu-opened");
    $("ul#menu-main-menu").removeAttr("style");
    // window.history.pushState(stateobj, "" , url);
    // window.history.pushState(stateobj, "" , url);
    $("#main-change").empty();
    let data='<div class="breadcrumbs-area"><div class="row"><ul id="breadcrumbs" class="breadcrumbs"><li class="item-home">';
    data+='<a class="bread-link bread-home" href="'+mainURL+'" title="Homepage">Homepage</a></li><li class="separator separator-home">';
    data+='<i class="fa fa-chevron-right"></i></li><li class="item-current item-12"><strong class="bread-current bread-12">'+text+'</strong></li></ul></div></div>';
    data+='<div id="content" class="site-content row"><div id="primary" class="content-area video-submit-area"><main id="main" class="site-main" role="main">';
    data+='<header class="entry-header"><h1>'+text+' Form</h1></header><form action="" id="login" method="post">';
    data+='<label for="username">'+username;
    data+='<span class="required">*</span></label><input type="text" name="username" id="username" value="" placeholder="'+username+'" required="required" />';
    if(sign==true){
    data+='<label for="Email">Email';
    data+='<span class="required">*</span></label><input type="text" name="email" id="Email" value="" placeholder="Email" required="required" />';
    }
    data+='<div class="clear"></div><button class="small margin-bottom-1" style="margin-left:40%;">'+text+'</button></br><div class="modal-footer">';
    if(sign==true){
        data+='<span class="">Already have an account? <a href="'+mainURL+'login" id="login">Login</a></span></div></main></div></div>'
    }else{
        data+='<span class="">Don\'t have an account? <a href="'+mainURL+'signup" id="register">Sign up</a></span></div></main></div></div>';
    }
    $("#main-change").append(data);
}
    $(".login-btn").click(function(e){
        e.preventDefault();
        login("login");
    });
    $("#register").click(function(e){
        e.preventDefault();
        login("sign");
    });
    // window.addEventListener('popstate', (event) => {
    //     var pg=event.state;
    //     console.log(pg.page);
    //     window.history.pushState({}, "", pg.page);
    // });