<template>
  <div class="detail">
    <div class="detail-img">
        <wxParse :content="article" />
    </div>
  </div>
</template>

<script>
import wxParse from 'mpvue-wxparse'
export default {
  data () {
    return {
    article: ""
    }
  },
  onUnload() {
    Object.assign(this.$data, this.$options.data());
  },
onShow(){
    this.article =  decodeURIComponent(this.$root.$mp.query.content);
},
 components: {
    wxParse
  },
}
</script>

<style>
.detail{
  width: 100%;
  height: 100%;
  position: absolute;
}
.detail-img{

}
.detail-img img{
  display: block;
  width: 100%;
}
</style>
