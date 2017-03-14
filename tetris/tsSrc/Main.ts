/**
 * @author anlun214 QQ:58529016
 */
////////////////////////////很重要///////////////////////////////////////////////
//如果要编译成js预览调试，请打开命令窗口指定到项目目录 执行tsc命令就行了            /////
//然后再在服务器环境下打开index.html就可以看到内容了.nodejs typeScrip必有安装     ////
///////////////////////////////////////////////////////////////////////////////
window.addEventListener("load",function(){
    annie.debug=false;
    /**
     * 最上层div的id,可以在一个页面同时放多个stage.
     * 设计尺寸的宽
     * 设计尺寸的高
     * FPS刷新率
     * 缩放模式
     * 渲染模式
     */
    var stage=new annie.Stage("annieEngine",640,1040,30,annie.StageScaleMode.EXACT_FIT,0);
    stage.addEventListener(annie.Event.INIT_TO_STAGE,function(e:Event):void{
        Flash2x.loadScene("tetris",function(per){
            //加载进度
            trace("加载进度:"+per+"%");
        },function(result:any){
            //单个场景加载完成后都会调用
            //加载完成 result 里包含了当前加载完成的是哪个场景序号，以及总加载场景数有多少，所以
            //需要同时加载多个模块时可以判断已经加载好的后直接出内容，其他偷偷在后台加载
            if(result.sceneId==result.sceneTotal) {
                stage.addChild(new tetris.Tetris());
            }
        });
    });
});