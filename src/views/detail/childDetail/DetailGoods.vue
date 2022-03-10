<template>
  <div id="DetailGoods">
    <div class="goodsTitle">
      <p>{{title}}</p>
      <div class="price">{{price}}</div>
      <div class="colu">

        <span>{{num}}</span>
        <span>{{add}}</span>
        <span style="  padding-right: 5px;">72小时内发货</span>

      </div>
    </div>

  </div>
</template>

<script>

export default {
  name: 'DetailGoods',
  props: {
    title: String,
    price: '',
    add: '',
    num: ''

  }

}
</script>

<style>
.goodsTitle {
  padding-left: 5px;
  margin-top: 10px;
}
.goodsTitle p {
  font-size: 14px;
  font-weight: bold;
}
.price {
  padding-top: 20px;
  padding-left: 5px;
  color: pink;
  font-size: 20px;
}
.colu {
  color: darkgray;
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  padding-bottom: 5px;
  border-bottom: 1px solid darkgray;
}
</style>
