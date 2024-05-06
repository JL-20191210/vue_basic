<template>
    <div>
        <Student name="罗老师" sex="男" :age="18"></Student>
    </div>
</template>

<script>
    // 引入School组件
    import Student from './components/Student'

    export default{
        name:'App',
        components:{Student},
    }
</script>