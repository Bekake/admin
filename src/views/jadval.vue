<template>
    <mybar mynumber="6"/>
    <h1>Bu Oquv ishlari uchun page</h1>
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