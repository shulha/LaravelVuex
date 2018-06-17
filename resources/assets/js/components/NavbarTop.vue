<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-white mb-3">
        <a class="navbar-brand" href="#">{{ $t('translation.logoName') }}</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <router-link :to="{ name: 'home' }" class="nav-link ">{{ $t('translation.home') }}</router-link>
                </li>
                <li class="nav-item">
                    <router-link :to="{ name: 'login' }" class="nav-link">{{ $t('translation.login') }}</router-link>
                </li>
                <li class="nav-item">
                    <router-link :to="{ name: 'register' }" class="nav-link">{{ $t('translation.register') }}</router-link>
                 </li>
            </ul>

            <form class="form-inline my-2 my-lg-0">
                <select class="form-control mr-2" v-model="locale">
                    <option value="ru">{{ $t('translation.ru') }}</option>
                    <option value="en">{{ $t('translation.en') }}</option>
                </select>
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        </div>
    </nav>
</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted NavbarTop');
        },
        data() {
            return {
                locale: 'ru',
            };
        },
        watch: {
            locale (val) {
                this.$i18n.locale = val;
            },
        },
    };
</script>