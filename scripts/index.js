window.onload=function(){
    //基础部分 数据存储 逻辑操作
    //javascript特定用途部分 必须能做到的事 

    //--------------------------------------------------
    //表达页面中的任何元素
    //（所有的页面元素对象都定义在window这个对象中）

    //选取页面中的元素 
    // var el=document.getElementById('test');
    // var els=document.getElementsByClassName('temp');
    // console.log(els);
    // console.log(el);
    // el.style.width='100px';
    // console.log(el);//null
    //can't read property of null
    //获取元素的信息 
    //对元素进行操作
    // el.style.border='1px solid red';
    // els[0].style.backgroundColor='green';
    var 
    el=document.getElementById('test'),
    els=document.getElementsByClassName('temp'),
    colors=['red','green','blue','pink','yellow'],
    trans=[[-500,-200],[-230,-100],[0,0],[230,-100],[500,-200]],
    index=[1,2,3,2,1],
    aa=function(){
        for(var i=0;i<els.length;i++){
            els[i].style.backgroundColor=colors[i];
            els[i].style.webkitTransform='translate3D('+trans[i][0]+'px,0,'+trans[i][1]+'px)';
            els[i].style.zIndex=index[i];
        } 
        trans.unshift(trans.pop());
        index.unshift(index.pop());
        colors.unshift(colors.pop());
    };
    aa();

    setInterval(aa,1000);
    
    //这个函数接受两个参数，第一个是个回调函数，第二个是时间s
    //功能：每个s就自动调用一次传入的回调函数

    // els.style.border='1px solid red';
    //相当于数组
    //并不是所有的对象都有style这个属性

    //和浏览器配合检测用户行为(事件)
    //
    //var el=document.getElementById();
    //document.getElementsByClassName();
    //el.style.marginLeft='';
    //setInterval(fn,1000);
    //el.onclick=function(){console.log(this.innerHTML);}

    // var cc=document.getElementsByClassName('temp');
    // cc[0].style.width='400px';
    // cc[0].innerHTML='aaa';

    // cc[0].onclick=function(){
    //     alert(this.innerHTML);
    // }






};