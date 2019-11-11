<template>
  <div class="tab-warp">
    <scroll-view class="menu-wrapper" :scroll-into-view="navId" scroll-with-animation="true" scroll-y>
      <ul class="menu-ul">
        <li class="menu-item" v-for="(item,index) in goods" :id="'nav_'+index" :class="index===currentIndex ? 'current' : ''"
          :key="index"  @tap="selectMenu(index)">{{item.name}}</li>
      </ul>
    </scroll-view>
    <scroll-view class="foods-wrapper" scroll-y @scroll="onScroll" :scroll-into-view="contentId" scroll-with-animation="true">
      <ul>
        <li v-for="(item,i) in goods" :id="'con_'+i" class="food-list food-list-hook" :key="i">
          <div class="list-item" v-for="list in item.data" :key="list+item">{{list}}</div>
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
      contentId: "", // 每个food-list的id，scroll-into-view滚动到对应的id
      navId: "", // 导航模块对应的id，用来联动内容区域
      currentIndex: 0,
      navulHeight: 0, // 导航里ul高度
      navItemHeight: 0, // 每个导航高度
      listHeight: [], // foods内部块的高度
      contentHeight: [] // 内容区域scroll-view高度
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
      }
    }
  },
  mounted() {
    setTimeout(() => {
      this.goods = [
        { name: '菜单1', data: ['1.1', '1.2', '1.3', '1.4', '1.5']},
        { name: '菜单2', data: ['2.1', '2.2', '2.3', '2.4', '2.5', '2.6']},
        { name: '菜单3', data: ['3.1', '3.2', '3.3', '3.4', '3.5']},
        { name: '菜单4', data: ['4.1', '4.2', '4.3', '4.4', '4.5']},
        { name: '菜单5', data: ['5.1', '5.2', '5.3', '5.4', '5.5', '5.6', '5.7', '5.8']},
        { name: '菜单6', data: ['6.1', '6.2', '6.3', '6.4', '6.5']},
        { name: '菜单7', data: ['7.1', '7.2', '7.3', '7.4', '7.5','7.6']},
        { name: '菜单8', data: ['8.1', '8.2']},
      ];
    }, 500);
  },
  methods: {
    selectMenu(index) {
      console.log(index)
      this.contentId = `con_${index}`;
      this.navId = `nav_${index}`;
      this.currentIndex = index;
    },
    onScroll(e) {
      this.contentId = "";
      let scrollTop = e.target.scrollTop;
      // console.log(scrollTop);
      let length = this.listHeight.length;
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
      // console.log(this.currentIndex)
    },
    getFoodHeight() {
      var query = wx.createSelectorQuery();
      let h = 0;
      query.selectAll(".food-list-hook").boundingClientRect(rects => {
        // console.log(rects)
        rects.forEach(rect => {
          h += rect.height;
          this.listHeight.push(h);
        });
        console.log(this.listHeight)
      });
      query.select(".foods-wrapper").boundingClientRect(rect => {
        this.contentHeight = rect.height;
      });
      query.select(".menu-ul").boundingClientRect(rect => {
        this.navulHeight = rect.height;
      });
      query
        .select(".menu-item")
        .boundingClientRect(rect => {
          this.navItemHeight = rect.height;
        })
        .exec();
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
/* 左侧 */
.menu-wrapper{ position: fixed; left: 0; top: 0; width: 30%; text-align: center; border-top: solid 1px #ddd;}
.menu-ul li{ line-height: 40px;  border: solid 1px #ddd; border-top: 0;}
/* 右侧 */
.foods-wrapper{ position: absolute; right: 0; top: 0; width: 70%; height: 100%; border-left: solid 1px #ddd;}
.list-item{ height: 200rpx; text-align: center; line-height: 200rpx; border-bottom: solid 1px #ddd;}
/* 左侧激活样式 */
.current{ color: #f00;}
</style>
