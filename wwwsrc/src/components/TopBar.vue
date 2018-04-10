<template>
    <div class="topbar bgcolor">
        <div class="container-fluid ">
            <div class="row">
                <div class="col-sm-8">
                    <h1 class="h3 text-light font-weight-bold">Keepr</h1>
                </div>
                <div class="col-sm-2">
                    
                    <button  class="btn btn-alert" @click="$emit('showDashboard')">Dashboard</button>
                    <button  class="btn btn-alert " @click="logout">Logout</button>
                </div>
                <div class="col-sm-2">
                    <p class="h5 text-light">User: <span class="h3 text-dark">{{user}}</span></p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'TopBar',
        components: {
        },
        data() {
            return {
                // showWelcome: true,
                userStatus: this.$store.state.userStatus,
                user: this.$store.state.user.username
            }
        },
        // props: ['user'],
        computed: {
            // user() {
            //     return this.$store.state.user

            // },
        },
        methods: {
            // signIn() {
            //     console.log('stage 1')
            //     this.$emit('signIn', true)

            // },
            logout() {
                this.$store.dispatch('logoutUser')
            },
        }
    }
</script>

<style scoped>
   .topbar{
       display: flex;
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
        background-color: #015249;
        height: 60px;
        align-items: center;
    }
</style>