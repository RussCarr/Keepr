<template>
    <div class="topbar bgcolor">
        <div class="container-fluid ">
            <div class="row mt-2">
                <div class="col-sm-6">
                    <h1 class="h3 text-light font-weight-bold">
                        <i class="fab fa-kickstarter-k"></i>eepr</h1>
                </div>
                <div class="col-sm-3 userControls">
                    <button class="btn btn-info" @click="$emit('showDashboard')">
                        <i class="fas fa-tachometer-alt"></i>
                    </button>
                    <button class="btn btn-danger " @click="logout">Logout</button>
                </div>
                <div class="col-sm-3">
                    <h5 class="h5 text-light">User:
                        <span class="h3 text-dark">{{user.username}}</span>
                    </h5>
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
                userStatus: this.$store.state.userStatus,
            }
        },
        computed: {
            user() {
                return this.$store.state.user
            },
        },
        methods: {
            logout() {
                this.$store.dispatch('logoutUser')
            },
        }
    }
</script>

<style scoped>
    .topbar {
        /* display: flex; */
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
    }
</style>