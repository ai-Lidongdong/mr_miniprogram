<template>
<div class="house">
  <div class="house-wrapper">
    <div class="content">
      <div class="horizontal-cell">金茂湾</div>
      <div class="horizontal-cell separator">2,&nbsp;3栋</div>
    </div>
    <div class="house-text">
      户型选择原则：例：1栋1601户型对应01户型
    </div>
    <div>
     <ul class="clear_float">
       <li class="house-item">
         <div class="mould">01户型</div>
         <div class="number">101-4601</div>
       </li>
       <li class="house-item">
         <div class="mould">01户型</div>
         <div class="number">101-4601</div>
       </li>
       <li class="house-item">
         <div class="mould">01户型</div>
         <div class="number">101-4601</div>
       </li>
      <li class="house-item">
         <div class="mould">01户型</div>
         <div class="number">101-4601</div>
       </li>
     </ul>
    </div>
  </div>
  <div class="house-wrapper">
    <div class="content">
      <div class="horizontal-cell">金茂湾</div>
      <div class="horizontal-cell separator">2,&nbsp;3栋</div>
    </div>
    <div class="house-text">
      户型选择原则：例：1栋1601户型对应01户型
    </div>
    <div>
     <ul class="clear_float">
       <li class="house-item">
         <div class="mould">01户型</div>
         <div class="number">101-4601</div>
       </li>
       <li class="house-item">
         <div class="mould">01户型</div>
         <div class="number">101-4601</div>
       </li>
       <li class="house-item">
         <div class="mould">01户型</div>
         <div class="number">101-4601</div>
       </li>
      <li class="house-item">
         <div class="mould">01户型</div>
         <div class="number">101-4601</div>
       </li>
     </ul>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    
    };
  },

  methods: {
  }
};
</script>

<style  scoped>
.house{
  font-size: 18px;
  margin: 10px 20px;
}
.content{
   font-weight: 600;
   background: #f5f5f5;
   height: 40px;
   border: 1px solid #AFAFAF;
   line-height: 40px;
   border-radius: 5px;
}
.horizontal-cell{
    float: left;    
    width: 25%;
    text-align: center;
}
.separator{   
    position: relative;
}
.separator:after{    
   position: absolute;    
   top:10px;    
   height: calc(100% - 20px);    
   left:0;    
   content: '';    
   width:0;    
   border-left: solid  #979797 2px;
}
.house-text{
  font-size: 12px;
  color: #999999;
  padding: 5px 0;
}
.house-item {
  font-weight: 600;
  float: left;
  height: 40px;
  border: 1px solid #C6C6C6;
  border-radius: 5px;
  color: #333333;
  text-align: center;
  line-height: 40px;
  width: 46%;
  font-size: 14px;
  text-align: center;
  margin: 5px;
}
.mould{
  width: 40%;
  height: 40px;
  float: left;
  border-right: 1px solid #C6C6C6;
}
.number{
  height: 40px;
}
 .active{
  font-weight: 600;
  float: left;
  height: 30px;
  border-radius: 5px;
  text-align: center;
  line-height: 30px;
  width: 46%;
  font-size: 14px;
  border: 1px solid #B30000;
  color: #B30000;
}

.clear_float::after{
    /*只需要给浮动元素的父容器添加上这个类就可以了: clear_float*/
    display: block;/*把::after设置成块级元素*/
    content: "";/*想让伪类起作用, 必须添加这个属性*/
    clear: both;
}
.house-wrapper{
  padding-bottom: 20px;
}

</style>