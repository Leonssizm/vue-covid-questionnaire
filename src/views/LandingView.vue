<template>
    <div class="bg-[#B5C0C7] h-screen lg:h-screen flex justify-center items-center text-center">
        <div>
            <IconRocketeer class="mb-4"/>
            <RouterLink to="/personal-info" class="text-xl font-bold font-arial leading-7 text-[#232323]">კითხვარის <br> დაწყება</RouterLink>
        </div>
    </div>
</template>

<script setup>
import IconRocketeer from '@/components/icons/IconRocketeer.vue';
import { RouterLink } from 'vue-router'

</script>
