<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-6">
                <div class="card">
                    <div class="card-header">{{ $t('translation.authorization') }}</div>

                    <div class="card-body">
                        <div class="form-group">
                            <label for="email">{{ $t('translation.email') }}</label>
                            <input type="text" class="form-control" id="email" name="email"
                                   :placeholder="$t('translation.placeholderEmail')"
                                   v-validate="'required|min:2|max:255'"
                                   :data-vv-as="$t('translation.email')"
                                   v-model="email">
                            <small class="form-text text-danger" v-if="errors.has('email')">
                                {{ errors.first('email') }}
                            </small>
                        </div>
                        <div class="form-group">
                            <label for="password">{{ $t('translation.password') }}</label>
                            <input type="password" class="form-control" id="password" name="password"
                                   :placeholder="$t('translation.placeholderPassword')"
                                   v-validate="'required|min:8|max:255'"
                                   :data-vv-as="$t('translation.password')"
                                   v-model="password">
                            <small class="form-text text-danger" v-if="errors.has('password')">
                                {{ errors.first('password') }}
                            </small>
                        </div>
                        <button class="btn btn-success float-right" @click="login">
                            {{ $t('translation.authorization') }}
                        </button>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import MixinUser from '../../mixins/user';

    const camelCase = require('camelcase');

    export default {
        mixins: [
            MixinUser,
        ],
        created() {
            this.$validator.attach({
                name: 'email',
                rules: 'notFound',
            });
        },
        methods: {
            async login() {
                const valid = await this.$validator.validateAll();

                if (valid) {
                    try {
                        await this.$store.dispatch('login', {
                            email: this.email,
                            password: this.password,
                        });

                        this.$router.push({
                            name: 'home',
                        });
                    } catch (e) {
                        if (e.response.data.message === 'emailNotVerified') {
                            this.$router.push({
                                name: 'email.confirmation',
                            });
                        } else if (e.response.data.message === 'userNotFound') {
                            this.$validator.validate('email', 0);
                            this.$toasted.show(this.$t('translation.userNotFound'), {
                                type: 'error',
                            });
                        }

                        Object.values(e.response.data.errors).forEach((item) => {
                            this.$toasted.show(this.$t(`translation.${camelCase(item[0])}`), {
                                type: 'error',
                            });
                        });
                    }
                }
            },
        },
    };
</script>
