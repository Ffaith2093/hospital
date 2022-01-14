<!--
 * @Description: to check and modify user's infomation
 * @Author: y
-->
<template>
    <div id="web">
        <Hearder />
        <div class="middle_content">
        </div>
        <Footer />
    </div>
</template>
<script>
    import Hearder from "../components/header.vue";
    import CardList from "../components/cardList.vue";
    import Footer from "../components/footer.vue";
    export default {
    name: "UserInfo",
    components: {
      Hearder,
      CardList,
      Footer,
    },
    data() {
    return {}
    }
}
</script>
<style lang="less" scoped>
.middle_content{
    width: 100%;
    height: 730px;
    background: #FFFFFF;
}
</style>