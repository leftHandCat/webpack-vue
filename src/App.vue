<template>
  <div class="vue-box">
    <header>
      <div class="ys-header-top">
        <span class="pop-1"></span>
        <span class="pop-2"></span>
        <span class="pop-3"></span>
        <span class="pop-4"></span>
      </div>
      <div class="ys-header-bottom">
        <p class="nav-title">可视化集</p>
        <div class="nav-tabs">
          <ul>
            <li v-for="(item, index) in tabs" :key="index"
                @click="tabChangeClick(index)" 
                :class="index === currIndex ? 'li__active' : ''">
              <router-link :to="item.path">{{item.name}}</router-link>
            </li>
          </ul>
        </div>
      </div>
    </header>

    <main>
      <router-view></router-view>
    </main>

    <footer></footer>

  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      currIndex: 0,
      tabs: [
        {name: '地图', path: '/map'},
        {name: 'D3', path: '/d3'}
      ]
    };
  },
  methods: {
    tabChangeClick(idx) {
      this.currIndex = idx;
    }
  }
};
</script>

<style lang="scss" scoped>

$headerHeight: 200px;
.vue-box {
  height: 100%;
  position: relative;
}
header {
  position: relative;
  height: $headerHeight;
}
.ys-header-top {
  height: 100%;
  position: relative;
  background: linear-gradient(150deg,#281483 15%,#8f6ed5 70%,#d782d9 94%);
}
.ys-header-bottom {
  position: absolute;
  width: 100%;
  height: 100%;
  bottom: 0;
  color: #fff;
  display: flex;
  a {
    display: block;
    width: 100%;
    height: 100%;
    color: #fff;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  > p.nav-title {
    width: 20%;
    text-align: center;
    font-size: 24px;
    line-height: $headerHeight;
  }
  .nav-tabs {
    align-items: center;
    font-size: 20px;
    display: flex;
    ul {
      display: flex;
    }
    li {
      position: relative;
      width: 100px;
      height: 100px; 
      border-radius: 50%;
      background:  rgba(255, 255, 255, 0.3);
      &:not(:first-child) {
        margin-left: 40px;
      }
      &.li__active {
        background-color: rgba(255, 165, 0, 0.7);
      }
    }
  }
}
footer {
  width: 100%;
  text-align: center;
  position: absolute;
  bottom: 0;
}
</style>