<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-white mb-3">
            <router-link :to="{ name: 'home' }" class="navbar-brand">
                {{ $t('translation.logoName') }}
            </router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <template v-if="!logged">
                    <li class="nav-item">
                        <router-link :to="{ name: 'auth.login' }" class="nav-link">{{ $t('translation.login') }}</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{ name: 'auth.register' }" class="nav-link">{{ $t('translation.register') }}</router-link>
                    </li>
                </template>
            </ul>

            <div class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="search" v-if="logged"
                       :placeholder="$t('translation.search')">
                <select class="form-control mr-2"
                        v-model="lang">
                    <option value="ru">{{ $t('translation.ru') }}</option>
                    <option value="en">{{ $t('translation.en') }}</option>
                </select>
            </div>
        </div>
    </nav>
</template>

<script>
    import MixinUser from '../mixins/user';

    export default {
        mixins: [
            MixinUser,
        ],
        watch: {
            lang (val) {
                this.$i18n.locale = val;
                this.$nextTick(() => {
                    this.$validator.locale = val;
                });
            },
        },
    };
</script>