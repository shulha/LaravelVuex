<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-white mb-3 border-bottom">
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
                <template v-else>
                    <li class="nav-item dropdown">
                        <a
                                class="nav-link dropdown-toggle"
                                href="#" id="user-dropdown"
                                role="button"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                        >
                            {{ name }} {{ surname }}
                        </a>
                        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="user-dropdown">
                            <router-link
                                    :to="{ name: 'auth.profile' }"
                                    class="dropdown-item"
                            >
                                {{ $t("translation.profile") }}
                            </router-link>
                            <div class="dropdown-divider"></div>
                            <a href="#" class="dropdown-item" @click.prevent="logout">
                                {{ $t("translation.logout") }}
                            </a>
                        </div>
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
    import MixinAuth from '../mixins/auth';
    import MixinUser from '../mixins/user';

    export default {
        mixins: [
            MixinAuth,
            MixinUser,
        ],
    };
</script>