<template>
    <div class="row">
    <div class="col-md-6 offset-md-3">
        <button  @click="show =! show" class="btn btn-info">Toggle</button>
        <transition     name="fade">
            <p v-if="show"> "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"</p>
        </transition>
        
    </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            show:true
        }
    },
}
</script>
<style scoped>
    .fade-enter-active, .fade-leave-active{
        transition:opacity 2s;
    }
    .fade-enter, .fade-leave-to{
        opacity:0;
    }
</style>