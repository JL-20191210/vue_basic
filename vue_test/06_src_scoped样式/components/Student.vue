<template>
    <div class="demo">
        <h2>学生姓名：{{name}}</h2>
        <h2 class="atguigu">学生性别：{{sex}}</h2>
        <input type="text" v-fbind:value="name">
    </div>
</template>

<script>
    export default{
        name:'Student',
        data(){
            return{
                name:'张三',
                sex:'男'
             }
        },
    }
</script>

<style lang="less" scoped>
    .demo{
        background-color: pink;
        .atguigu{
            font-size: 40;
        }
    }
</style>