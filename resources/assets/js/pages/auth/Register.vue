<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-6">
                <div class="card">
                    <div class="card-header">{{ $t('translation.registration') }}</div>

                    <div class="card-body">
                        <div class="form-group">
                            <label for="surname">{{ $t('translation.surname') }}</label>
                            <input type="text" class="form-control" id="surname" name="surname"
                                   :placeholder="$t('translation.placeholderSurname')"
                                   v-validate="'required|min:2|max:255'"
                                   :data-vv-as="$t('translation.surname')"
                                   v-model="surname">
                            <small class="form-text text-danger" v-if="errors.has('surname')">{{ errors.first('surname') }}</small>
                        </div>
                        <div class="form-group">
                            <label for="name">{{ $t('translation.name') }}</label>
                            <input type="text" class="form-control" id="name" name="name"
                                   :placeholder="$t('translation.placeholderName')"
                                   v-validate="'required|min:2|max:255'"
                                   :data-vv-as="$t('translation.name')"
                                   v-model="name">
                            <small class="form-text text-danger" v-if="errors.has('name')">{{ errors.first('name') }}</small>
                        </div>
                        <div class="form-group">
                            <label for="middle_name">{{ $t('translation.middleName') }}</label>
                            <input type="text" class="form-control" id="middle_name" name="middle_name"
                                   :placeholder="$t('translation.placeholderMiddleName')"
                                   v-validate="'required|min:2|max:255'"
                                   :data-vv-as="$t('translation.middleName')"
                                   v-model="middleName">
                            <small class="form-text text-danger" v-if="errors.has('middle_name')">{{ errors.first('middle_name') }}</small>
                        </div>
                        <div class="form-group">
                            <label for="email">{{ $t('translation.email') }}</label>
                            <input type="email" class="form-control" id="email" name="email"
                                   :placeholder="$t('translation.placeholderEmail')"
                                   v-validate="'required|email|max:255'"
                                   :data-vv-as="$t('translation.email')"
                                   v-model="email">
                            <small class="form-text text-danger" v-if="errors.has('email')">{{ errors.first('email') }}</small>
                        </div>
                        <div class="form-group">
                            <label for="password">{{ $t('translation.password') }}</label>
                            <input type="password" class="form-control" id="password" name="password"
                                   :placeholder="$t('translation.placeholderPassword')"
                                   v-validate="'required|min:8|max:24'"
                                   :data-vv-as="$t('translation.password')"
                                   v-model="password">
                            <small class="form-text text-danger" v-if="errors.has('password')">{{ errors.first('password') }}</small>
                        </div>
                        <div class="form-group" style="position: relative">
                            <label for="password_confirmation">{{ $t('translation.passwordConfirmation') }}</label>
                            <input type="password" class="form-control" id="password_confirmation" name="password_confirmation"
                                   :placeholder="$t('translation.placeholderPasswordConfirmation')"
                                   v-validate="'required|min:8|max:24|confirmed:password'"
                                   :data-vv-as="$t('translation.passwordConfirmation')"
                                   v-model="passwordConfirmation">
                            <small class="form-text text-danger" v-if="errors.has('password_confirmation')">{{ errors.first('password_confirmation') }}</small>
                        </div>

                        <button type="button" class="btn btn-success float-right">{{ $t('translation.register') }}</button>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                surname: 'q',
                name: 'q',
                middleName: 'q',
                email: 'q@q.q',
                password: '12345678',
                passwordConfirmation: '12345678',
            };
        },
    };
</script>