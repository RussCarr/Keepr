<template>
    <div class="navbar bgcolor">
        <div class="container-fluid ">
            <div class="row">
                <div class="col-sm-8">
                    <h1 class="h3 text-light font-weight-bold">Keepr</h1>
                </div>
                <div class="col-sm-2">
                    <button v-show="userStatus ? false : true" class="btn btn-success " @click="$emit('showSignIn')">Sign in</button>
                    <button v-show="userStatus ? false : true" class="btn btn-alert " @click="$emit('showRegister')">Register</button>
                    <button v-show="userStatus ? true : false" class="btn btn-alert" @click="$emit('showMyKeeps')">MyKeeps</button>
                    <button v-show="userStatus ? true : false" class="btn btn-alert " @click="logout">Logout</button>
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
        name: 'NavBar',
        components: {
        },
        data() {
            return {
                userStatus: this.$store.state.userStatus,
                user: this.$store.state.user.username
            }
        },
        methods: {
            logout() {
                this.$store.dispatch('logoutUser')
            },
        }
    }
</script>

<style scoped>
   .navbar{
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