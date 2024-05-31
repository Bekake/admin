<template>
<mybar mynumber="5"/>
<h1>Bu Rejalar qismi</h1>
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