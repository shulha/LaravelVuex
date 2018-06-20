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
                                   :placeholder="$t('translation.email')"
                                   v-validate="'required|min:2|max:255'"
                                   :data-vv-as="$t('translation.email')"
                                   v-model="email">
                            <small class="form-text text-danger" v-if="errors.has('email')">
                                {{ errors.first('email') }}
                            </small>
                        </div>
                        <div class="form-group">
                            <label for="password">{{ $t('translation.password') }}</label>
                            <input type="text" class="form-control" id="password" name="password"
                                   :placeholder="$t('translation.placeholderPassword')"
                                   v-validate="'required|min:2|max:255'"
                                   :data-vv-as="$t('translation.password')"
                                   v-model="password">
                            <small class="form-text text-danger" v-if="errors.has('password')">
                                {{ errors.first('password') }}
                            </small>
                        </div>
                        <button class="btn btn-success float-right">{{ $t('translation.authorization') }}</button>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import MixinUser from '../../mixins/user';

    export default {
        mixins: [
            MixinUser,
        ],
    };
</script>
