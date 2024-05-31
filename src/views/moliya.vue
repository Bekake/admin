<template>
    <mybar mynumber="4"/>
    <h1>Bu To'lovlar uchun page</h1>
    </template>
    <script>
    import mybar from '@/components/mybar.vue'
    export default{
        components: {mybar},
    }
    </script>
    <style scoped>
    h1{
        text-align: center;
    }
    </style>