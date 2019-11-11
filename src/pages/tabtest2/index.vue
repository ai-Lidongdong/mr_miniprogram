<template>
  <div class="tab-warp">
    <scroll-view class="menu-wrapper" :scroll-into-view="navId" scroll-with-animation="true" scroll-y>
      <ul class="menu-ul">
        <li class="menu-item" v-for="(item,index) in goods" :id="'nav_'+index" :class="index===currentIndex ? 'current' : ''"
          :key="index"  @tap="selectMenu(index)">{{item.name}}</li>
      </ul>
    </scroll-view>
    <scroll-view class="top-wrapper" scroll-x @scroll="onScroll2" :scroll-into-view="topId" scroll-with-animation="true">
      <ul class="top-ul" >
        <li class="top-ul-li" v-for="(item,l) in menu2" :id="'top_'+l" :key="l" :class="l===currentIndex2 ? 'current2' : ''"  @tap="selectMenu2(l)" >
          {{item.name}}
        </li>
      </ul>
    </scroll-view>
    <scroll-view class="foods-wrapper" scroll-y @scroll="onScroll" :scroll-into-view="contentId" scroll-with-animation="true">
      <ul>
        <li v-for="(item,i) in goods" :id="'con_'+i" class="food-list food-list-hook" :key="i">
          <div v-for="(top,j) in item.tops" :id="'con_'+i+j" :key="j" class="last-list">
            <div class="list-item" v-for="(data,k) in top.datas" :key="k">
              {{data}}
            </div>
          </div>
        </li>
      </ul>
    </scroll-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      goods: [],
      menu2: [], //二级菜单数组
      contentId: "", // 每个food-list的id，scroll-into-view滚动到对应的id
      navId: "", // 导航模块对应的id，用来联动内容区域
      topId: "", //二级菜单对应id，用来联动内容区域
      currentIndex: 0,
      currentIndex2: 0,
      navulHeight: 0, // 导航里ul高度
      navItemHeight: 0, // 每个导航高度
      listHeight: [], // foods内部块的高度
      contentHeight: [], // 内容区域scroll-view高度
      lastHeight: [], //最后一级内容高度
      topulWidth: [],// top导航里ul宽度
      topItemWidth: 0, // 每个导航宽度
      // count: 0,
    };
  },
  watch: {
    currentIndex() {
      console.log(this.currentIndex);
      if (this.contentHeight < this.navulHeight) {
        let h = this.currentIndex * this.navItemHeight;
        if (h > this.contentHeight) {
          // 导航滑动
          this.navId = `nav_${this.currentIndex}`;
        } else {
          this.navId = "nav_0";
        }
      };
    }
  },
  computed: {
    // 计算二级滑动的项
    count() {
      let num = 0;
      for(let j = 0; j < this.currentIndex; j++) {
        num = num + this.goods[j].tops.length;
      }
      this.currentIndex2 = this.currentIndex2 - num;
      return num;
    }
  },
  mounted() {
    setTimeout(() => {
      this.goods = [
        { 
          name: '菜单1', 
          tops: [
            {name: '二级1.1', datas:['1.1.1','1.1.2','1.1.3','1.1.4','1.1.5','1.1.6']},
            {name: '二级1.2', datas:['1.2.1','1.2.2','1.2.3','1.2.4','1.2.5','1.2.6']},
            {name: '二级1.3', datas:['1.3.1','1.3.2','1.3.3','1.3.4','1.3.5','1.3.6']},
          ]
        },{ 
          name: '菜单2', 
          tops: [
            {name: '二级2.1', datas:['2.1.1','2.1.2','2.1.3','2.1.4','2.1.5','2.1.6']},
            {name: '二级2.2', datas:['2.2.1','2.2.2','2.2.3','2.2.4','2.2.5','2.2.6']},
            {name: '二级2.3', datas:['2.3.1','2.3.2','2.3.3','2.3.4','2.3.5','2.3.6']},
          ]
        },{ 
          name: '菜单3', 
          tops: [
            {name: '二级3.1', datas:['3.1.1','3.1.2','3.1.3','3.1.4','3.1.5','3.1.6']},
            {name: '二级3.2', datas:['3.2.1','3.2.2','3.2.3','3.2.4','3.2.5','3.2.6']},
            {name: '二级3.3', datas:['3.3.1','3.3.2','3.3.3','3.3.4','3.3.5','3.3.6']},
          ]
        },{ 
          name: '菜单4', 
          tops: [
            {name: '二级4.1', datas:['4.1.1','4.1.2','4.1.3','4.1.4','4.1.5','4.1.6']},
            {name: '二级4.2', datas:['4.2.1','4.2.2','4.2.3','4.2.4','4.2.5','4.2.6']},
            {name: '二级4.3', datas:['4.3.1','4.3.2','4.3.3','4.3.4','4.3.5','4.3.6']},
          ]
        },{ 
          name: '菜单5', 
          tops: [
            {name: '二级5.1', datas:['5.1.1','5.1.2','5.1.3','5.1.4','5.1.5','5.1.6']},
            {name: '二级5.2', datas:['5.2.1','5.2.2','5.2.3','5.2.4','5.2.5','5.2.6']},
            {name: '二级5.3', datas:['5.3.1','5.3.2','5.3.3','5.3.4','5.3.5','5.3.6']},
          ]
        },{ 
          name: '菜单6', 
          tops: [
            {name: '二级6.1', datas:['6.1.1','6.1.2','6.1.3','6.1.4','6.1.5','6.1.6']},
            {name: '二级6.2', datas:['6.2.1','6.2.2','6.2.3','6.2.4','6.2.5','6.2.6']},
            {name: '二级6.3', datas:['6.3.1','6.3.2','6.3.3','6.3.4','6.3.5','6.3.6']},
          ]
        },{ 
          name: '菜单6', 
          tops: [
            {name: '二级6.1', datas:['6.1.1','6.1.2','6.1.3','6.1.4','6.1.5','6.1.6']},
            {name: '二级6.2', datas:['6.2.1','6.2.2','6.2.3','6.2.4','6.2.5','6.2.6']},
            {name: '二级6.3', datas:['6.3.1','6.3.2','6.3.3','6.3.4','6.3.5','6.3.6']},
          ]
        },{ 
          name: '菜单6', 
          tops: [
            {name: '二级6.1', datas:['6.1.1','6.1.2','6.1.3','6.1.4','6.1.5','6.1.6']},
            {name: '二级6.2', datas:['6.2.1','6.2.2','6.2.3','6.2.4','6.2.5','6.2.6']},
            {name: '二级6.3', datas:['6.3.1','6.3.2','6.3.3','6.3.4','6.3.5','6.3.6']},
          ]
        },{ 
          name: '菜单6', 
          tops: [
            {name: '二级6.1', datas:['6.1.1','6.1.2','6.1.3','6.1.4','6.1.5','6.1.6']},
            {name: '二级6.2', datas:['6.2.1','6.2.2','6.2.3','6.2.4','6.2.5','6.2.6']},
            {name: '二级6.3', datas:['6.3.1','6.3.2','6.3.3','6.3.4','6.3.5','6.3.6']},
          ]
        },
      ];
      this.menu2 = this.goods[0].tops;
    }, 500);
  },
  methods: {
    selectMenu(index) {
      // console.log(index)
      this.contentId = `con_${index}`;
      this.navId = `nav_${index}`;
      this.currentIndex = index;
      this.menu2 = this.goods[index].tops; //二级赋值
    },
    selectMenu2(index) {
      // console.log(index);
      this.contentId = `con_${this.currentIndex}${index}`;
      this.topId = `top_${index}`;
      this.currentIndex2 = index;
    },
    onScroll(e) {
      this.contentId = "";
      this.topId = "";
      let scrollTop = e.target.scrollTop;
      // console.log(scrollTop);
      let length = this.listHeight.length;
      let length2 = this.lastHeight.length;
      if (scrollTop >= this.listHeight[length - 1] - this.contentHeight) {
        return;
      } else if (scrollTop > 0 && scrollTop < this.listHeight[0]) {
        this.currentIndex = 0;
      }
      for (let i = 0; i < length; i++) {
        if (scrollTop >= this.listHeight[i - 1] && scrollTop < this.listHeight[i]) {
          this.currentIndex = i;
        }
      }
      setTimeout(() => {
        this.menu2 = this.goods[this.currentIndex].tops; //二级赋值
      }, 50);
      // 最后一级内容区域判断
      if (scrollTop > 0 && scrollTop < this.lastHeight[0]) {
        this.currentIndex2 = 0;
      }
      for (let i = 0; i < length2; i++) { 
        if (scrollTop >= this.lastHeight[i - 1] && scrollTop < (this.lastHeight[i])) { 
          this.currentIndex2 = i;
        }
      }
    },
    getFoodHeight() {
      var query = wx.createSelectorQuery();
      let h = 0;
      let lastH = 0;
      query.selectAll(".food-list-hook").boundingClientRect(rects => {
        rects.forEach(rect => {
          h += rect.height;
          this.listHeight.push(h);
        });
        console.log('listHeight');
        console.log(this.listHeight);
      });
      // 最后一级内容区域高度计算
      query.selectAll(".last-list").boundingClientRect(rects => {
        rects.forEach(rect => {
          lastH += rect.height;
          this.lastHeight.push(lastH);
        });
        console.log('lastHeight');
        console.log(this.lastHeight);
      });
      query.select(".foods-wrapper").boundingClientRect(rect => {
        this.contentHeight = rect.height;
      });
      query.select(".menu-ul").boundingClientRect(rect => {
        this.navulHeight = rect.height;
      });
      query.select(".menu-item").boundingClientRect(rect => {
          this.navItemHeight = rect.height;
      });
      // top宽度计算
      query.select(".top-ul").boundingClientRect(rect => {
        this.topulWidth = rect.width;
      });
      query.select(".top-ul-li").boundingClientRect(rect => {
          this.topItemWidth = rect.width;
      }).exec();
    },
    onScroll2() {

    }
  },
  watch: {
    goods() {
      // 获取模块高度，即food-list
      setTimeout(() => {
        this.getFoodHeight();
      }, 60);
    }
  }
};
</script>

<style>
/* 左侧菜单 */
.menu-wrapper{ position: fixed; left: 0; top: 0; width: 30%; height: 100%; text-align: center; border-top: solid 1px #ddd;}
.menu-ul li{ line-height: 80px;  border: solid 1px #ddd; border-top: 0;}
/* 右侧内容 */
.foods-wrapper{ position: absolute; right: 0; top: 40px; width: 70%; height: 100%; border-left: solid 1px #ddd;}
.list-item{ height: 200rpx; text-align: center; line-height: 200rpx; border-bottom: solid 1px #ddd;}
/* 左侧激活样式 */
.current{ color: #f00;}

/* 顶部菜单 */
.top-wrapper{ position: fixed; height: 40px; top: 0; right: 0; width: 70%; background: #555; z-index: 999999;}
.top-ul{ display: flex; }
.top-ul li{ border: solid 1px #ddd; color: #fff; margin-top: 10rpx;}
/* 顶部激活样式 */
.current2{ color: #f00!important;}
</style>
