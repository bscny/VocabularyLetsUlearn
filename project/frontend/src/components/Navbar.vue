<template>
    <nav class="navbar">
        <div class="logo"  @click="GotoHomePage()">
            VocabularyLetULearn
        </div>

        <nav class="icons">
            <div v-if="!isLoggedIn" class="login-button"  @click="$emit('toggleLoginModal')">
                登入
            </div>
            <div v-else class="user-info">
                <span class="username">{{ userName }}</span>
                <button class="logout-button" @click="$emit('logout')">登出</button>
            </div>

            <div v-if="!isLoggedIn" class="register-button"  @click="$emit('toggleRegisterModal')">
                註冊
            </div>

            <i class="icon">
                🏠
            </i>

            <i class="icon">
                📝
            </i>

            <i class="icon">
                💬
            </i>

            <i class="icon">
                ⚙️
            </i>
        </nav>
    </nav>
</template>

<script>
export default {
    props: {
        isLoggedIn: Boolean,
        userName: String,
        userEmail: String
    },

    methods: {
        GotoHomePage() {
            if(this.isLoggedIn){
                this.$router.push({
                    name: 'HomeLoggedIn'
                });
            } else {
                this.$router.push({
                    name: 'Home'
                });
            }
        },
    }
};
</script>

<style scoped>
.navbar {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 50px;
    padding: 0 20px 0 20px;
    background-color: #333;

    z-index: 10000;
}

.logo {
    font-size: 1.5em;
    color: white;

    cursor: pointer;
}

.icons {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

.icon,
.login-button,
.register-button,
.username {
    margin: 0 0px 0 20px;
    padding: 0 0 0 0;
    cursor: pointer;
    line-height: 50px;

    color: white;
}

.logout-button {
    margin: 0 0px 0 20px;
    padding: 0 0 0 0;
    cursor: pointer;
    line-height: 50px;

    border: none;

    background-color: #333;
    color: white;
}

.user-info {
    margin: 0 0px 0 0px;
    padding: 0 0 0 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>