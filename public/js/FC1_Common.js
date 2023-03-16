
////////////// YÊU CẦU DỮ LIỆU TỪ SERVER- REQUEST DATA //////////////
var myVar= setInterval(myTimer, 100);
function myTimer(){
    socket.emit("Client-send-data","Request data client");
}
// ham hien thi du lieu len IO Field
function fn_IOFieldDataShow(tag,IOField,tofix){
    socket.on(tag,function(data){
        if(tofix==0){
            document.getElementById(IOField).value=data;   
                   
        } else
        {
            document.getElementById(IOField).value=data.toFixed(tofix);
        }
    
    })
}
function fn_status( st,id){
    socket.on(st,function(data){
        if(data ==0) {
            document.getElementById(id).innerHTML='<p> Quạt không chạy </p>'
        }
        else if(data == 1) {
            document.getElementById(id).innerHTML='<p> Quạt đang chạy</p>'
        }
        
    })
}    


function fn_ScreenChange(scr_1, scr_2, scr_3,scr_4,scr_5,scr_6,scr_7,scr_8,scr_9,scr_10,scr_11)
{
    document.getElementById(scr_1).style.visibility = 'visible';   // Hiển thị trang được chọn
    document.getElementById(scr_2).style.visibility = 'hidden';    // Ẩn trang 1
    document.getElementById(scr_3).style.visibility = 'hidden';    
    document.getElementById(scr_4).style.visibility = 'hidden';   
    document.getElementById(scr_5).style.visibility = 'hidden';    
    document.getElementById(scr_6).style.visibility = 'hidden';
    document.getElementById(scr_7).style.visibility = 'hidden';   
    document.getElementById(scr_8).style.visibility = 'hidden';    
    document.getElementById(scr_9).style.visibility = 'hidden';
    document.getElementById(scr_10).style.visibility = 'hidden';
    document.getElementById(scr_11).style.visibility = 'hidden';
}



function fn_ScreenTemp(t_1, t_2, t_3,t_4,t_5,t_6,t_7,t_8,t_9,t_10,t_11)
{
    document.getElementById(t_1).style.visibility = 'visible';   // Hiển thị trang được chọn
    document.getElementById(t_2).style.visibility = 'hidden';    // Ẩn trang 1
    document.getElementById(t_3).style.visibility = 'hidden';    // Ẩn trang 2
    document.getElementById(t_4).style.visibility = 'hidden';   
    document.getElementById(t_5).style.visibility = 'hidden';    
    document.getElementById(t_6).style.visibility = 'hidden';
    document.getElementById(t_7).style.visibility = 'hidden';   
    document.getElementById(t_8).style.visibility = 'hidden';    
    document.getElementById(t_9).style.visibility = 'hidden';
    document.getElementById(t_10).style.visibility = 'hidden';    
    document.getElementById(t_11).style.visibility = 'hidden';        
}
