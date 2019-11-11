<template>
 <div>
   <!-- <map 
 id="map" 
 :markers="markers" 
 :scale="scale"
 :latitude="latitude"
 :longitude="longitude"
 @callouttap="goToClass" 
 @end="regionchange"
 @begin="regionchange"
 @regionchange="regionchange"
 show-location 
 style="width: 100%; height: 100vh">
   </map> -->
      <map
      id="myMap"
      style="width: 100%; height:100vh;"
      :latitude="latitude"
      :longitude="longitude"
      :markers="markers"
      :covers="covers"
       @callouttap="goToClass" 
      show-location
    ></map>
<!-- <button @click="getCenterLocation()">按钮</button> -->
 </div>
</template>
<script>
export default {
  data() {
    return {
      latitude:28.12854295392475,
      longitude:113.02313244907377,
      markers: [{
        id: 1,
        latitude: 28.12854295392475,
        longitude:113.02313244907377,
        name: 'T.I.T 创意园'
      }],
      covers: [{
        latitude:28.12854295392475,
        longitude:113.02313244907377,
      }, {
        latitude:28.12854295392475,
        longitude:113.02313244907377,
      }]
  }
  },
   onReady(e) {
    this.mapCtx = wx.createMapContext('myMap');
    console.log(this.mapCtx);
      wx.openLocation({  
      latitude: 28.12854295392475,  
      longitude:113.02313244907377,  
      scale: 18,  
      name: '华乾大厦',  
      address:'金平区长平路93号'  
    })
  },
  methods: {
     getCenterLocation() {
      this.mapCtx.getCenterLocation({
        success: function(res){
          console.log(res.longitude)
          console.log(res.latitude)
        }
      })
  },
  },
  onUnload() {
    Object.assign(this.$data, this.$options.data());
  },
//   methods: {
// //    regionchange: (e) => {
// //        wx.getLocation({
// //         type: 'gcj02', //返回可以用于wx.openLocation的经纬度
// //         success (res) {
// //           console.log(res)
// //           const latitude = res.latitude
// //           const longitude = res.longitude
// //           wx.openLocation({
// //             latitude,
// //             longitude,
// //             scale: 18
// //           })
// //  }
// //    })
// // }
// // regionchange(e) {
// //     console.log(e.type)
// //       wx.getLocation({
// //         type: 'gcj02', //返回可以用于wx.openLocation的经纬度
// //         success (res) {
// //           console.log(res)
// //           const latitude = res.latitude
// //          const longitude = res.longitude
// //          wx.openLocation({
// //             latitude,
// //            longitude,
// //             scale: 18
// //           })
// //   }
// //   },
// //   markertap(e) {
// //     console.log(e.markerId)
// //   },
// //   controltap(e) {
// //     console.log(e.controlId)
// //   }
//   }
}
</script>

<style  scoped>

</style>