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
                                   v-model="surname">
                        </div>
                        <div class="form-group">
                            <label for="name">{{ $t('translation.name') }}</label>
                            <input type="text" class="form-control" id="name" name="name"
                                   :placeholder="$t('translation.placeholderName')"
                                   v-model="name">
                        </div>
                        <div class="form-group">
                            <label for="middle_name">{{ $t('translation.middleName') }}</label>
                            <input type="text" class="form-control" id="middle_name" name="middle_name"
                                   :placeholder="$t('translation.placeholderMiddleName')"
                                   v-model="middleName">
                        </div>
                        <div class="form-group">
                            <label for="email">{{ $t('translation.email') }}</label>
                            <input type="email" class="form-control" id="email" name="email"
                                   :placeholder="$t('translation.placeholderEmail')"
                                   v-model="email">
                        </div>
                        <div class="form-group">
                            <label for="password">{{ $t('translation.password') }}</label>
                            <input type="password" class="form-control" id="password" name="password"
                                   :placeholder="$t('translation.placeholderPassword')"
                                   v-model="password">
                        </div>
                        <div class="form-group">
                            <label for="password_confirmation">{{ $t('translation.passwordConfirmation') }}</label>
                            <input type="password" class="form-control" id="password_confirmation" name="password_confirm"
                                   :placeholder="$t('translation.placeholderPasswordConfirmation')"
                                   v-model="passwordConfirm">
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
                passwordConfirm: '12345678',
            };
        },
    };
</script>