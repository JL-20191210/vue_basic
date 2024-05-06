<template>
    <div class="demo">
        <h1 class="title">你好啊</h1>
        <School></School>
        <hr>
        <Student></Student>
    </div>
</template>

<script>
    // 引入School组件
    import Student from './components/Student'
    import School from './components/School'

    export default{
        name:'App',
        components:{Student,School},
    }
</script>

<style scoped>
    .title{
        color: red;
    }
</style>