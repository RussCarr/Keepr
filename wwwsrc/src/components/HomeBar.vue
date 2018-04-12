<template>
    <div class="homebar bgcolor">
        <div class="container-fluid ">
            <div class="row">
                <div class="col-sm-8">
                    <h1 class="h3 text-light font-weight-bold"><i class="fab fa-kickstarter-k"></i>eepr</h1>
                </div>
                <div class="col-sm-4">
                    <button class="btn btn-success " @click="$emit('showSignIn')">Sign in</button>
                    <button class="btn btn-danger " @click="$emit('showRegister')">Register</button>
                </div>
               
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'HomeBar',
        components: {
        },
        data() {
            return {
                userStatus: this.$store.state.userStatus,
                user: this.$store.state.user.username
            }
        },
        computed: {
        },
        methods: {
            logout() {
                this.$store.dispatch('logoutUser')
            },
        }
    }
</script>

<style scoped>
   .homebar{
       display: flex;
       border: 2px solid black;
       margin-bottom: 50px;
   }
    img {
        width: 25px;
        margin-bottom: 0.4rem;
        margin-right: 0.5rem;
    }

    .logout {
        flex-direction: row-reverse;
        align-self: center;
        display: flex
    }

    .menu {
        flex-direction: row;
        align-self: center;
        display: flex
    }

    .bgcolor {
        background-color: teal;
        height: 60px;
        align-items: center;
    }
</style>