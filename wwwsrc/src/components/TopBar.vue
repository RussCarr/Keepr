<template>
    <div class="topbar bgcolor">

        <div class="container-fluid d-flex align-items-center justify-content-between pt-3 pb-2 px-4">
            <div>
                <h1 class="h3 d-inline text-light font-weight-bold">Keepr</h1>
            </div>
            <div>
                <button v-show="userStatus ? false : true" class="btn btn-success px-4" @click="$emit('showSignIn')">Sign in</button>
                <button v-show="userStatus ? false : true" class="btn btn-alert px-4" @click="$emit('showRegister')">Register</button>
                <button v-show="userStatus ? true : false" class="btn btn-alert px-4" @click="$emit('showMyKeeps')">MyKeeps</button>
                <button v-show="userStatus ? true : false" class="btn btn-alert px-4" @click="logout">Logout</button>
                <div>
                    <span class="h5 text-light">{{user.name}}</span>
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

            }
        },
        computed: {
            user() {
                return this.$store.state.user

            },
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
    }
</style>