<script setup lang="ts">

    
    
</script>

<template>

    <div id="layout">

        <header v-if="$slots.header">

            <div class="container">
                
                <slot name="header" />

            </div>


        </header>



        <main>
            <div class="container">
                <slot name="deafault" />
            </div>

            <slot v-if="$slots.optional" name="optional" />
        </main>

    </div>
</template>



<style scoped>
main {
    min-height: 100vh;
    overflow: hidden;
}

@media (max-width: 768px) {
    main {
        overflow: auto;

    }

   
}

.profile-link {
    color: deepskyblue;
}
</style>