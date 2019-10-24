<template>
  <div class="ys-map">
    <p>地图 page</p>
    跨域请求结果：{{msg}}
  </div>
</template>

<script>
import request from '../utils/request.js'
import Velocity from 'velocity-animate'
export default {
  data() {
    return {
      msg: ''
    }
  },
  created () {
    request.get('/file/ajax.php').then((res) => {
      this.msg = res
    })
  }
}
</script>


<style lang="scss" scoped>
.ys-map {
  text-align: center;
  line-height: 50px;
  font-size: 24;
}
</style>