;(function(window,document,$){
    var  isinit = false,i
         frame,
         src,
         session,
         $context={
            dev:'10.20.26.197',
            test:'pop-stg.paic.com.cn',
            pro:'bro.pab.com.cn',
        }
        var portalutil = function(){

        };
        portalutil.prototype={
            setheight:function(){
                iframe.setattributr('src',src+'?h='+num)
            },
            getsessionid:function(){
                return session
            },
            logout:function(){
                try{
                    iframe.setattributr('src',src+'?online=off')
                }catch(a){
                    console.log("portal:error" + e)
                }
            },
        }
     portalutil.prototype.init = function(option){
         if(isinit){
            return 
         }
         option = option == 'dev' ? $context.dev : option =='test' ?$context.text :$context.pro;
         var activebody = document.getElementsByTagName('body')[0];
         iframe = document.createElement('iframe');
         iframe.setattribute('id',"iframeutil");
         iframe.setattribute ('frameborder',0);
         iframe.setattribute ('style','display:none;');

         activebody.appendChild(iframe);
         isinit = true;
         src = 'http://'+option +'/portal-new/iframeutil.html/';
         getsessionid();
         addpajaxtpjquery();
         return this
     }

        function getsessionid(){
            var href = document.location.href;
            var ticket = href.slice(href.search(/brcpeasessionticket/));
            session = ticket.split('=')[1]
        }
        function addpajaxtpjquery(){
            $.extend({
                pajax:function(option){
                    if(!('data' in option)){
                        option.data={
                            brcpeasessionticket :session
                        }
                    }else{
                        var questdata = option.data;
                        if(typeof questdata =="string" && option.contenttype =="applcation/json") {

                            questdata = JSON.parse(questadata);
                            questdata.brcpeasessionticket = session;
                            questdata = JSON.stringify(questdata)
                        }else{
                            questdata.brcpeasessionticket = session
                        }
                          option.data = questdatas
                    }
                    $.ajax(option) 
                }
                
            })
        }

window.portalutil =new portalutil()


}(window,document,jquery))