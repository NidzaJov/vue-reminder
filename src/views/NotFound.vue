<template>
    <div>
        404 Not Found
        <router-link
        :to="{name: 'TaskList'}"
        tag="button">
        </router-link>
    </div>
</template>

<script>
export default {
  name: 'NotFound'
}
</script>

<style>

</style>
