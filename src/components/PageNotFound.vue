<script>
</script>

<template>
    <div class="not-found">
        <h1 class="four-oh-four green">404</h1>
        <h1>Page Not Found</h1>
        <RouterLink to="/" class="green">Back Home</RouterLink>
    </div>
</template>

<style>

.four-oh-four {
    font-size: 4rem;
    text-align: center;
}
.not-found {
    height: 100vh;
    display: grid;
    align-content: center;
    justify-content: center;
}

.not-found a {
    text-align: center;
}
</style>