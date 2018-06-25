<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-6">
                <div class="card">
                    <div class="card-header">Confirmed</div>

                    <div class="card-body">
                        <!--<button class="btn btn-success float-right">{{ $t('translation.authorization') }}</button>-->
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
        async mounted() {
            try {
                await this.$store.dispatch('emailConfirmation', {
                    token: this.$route.params.token,
                });
                this.$toasted.show(this.$t('translation.emailConfirmed'), {
                    type: 'success',
                });

            } catch (e) {
                Object.values(e.response.data.errors).forEach((item) => {
                    this.$toasted.show(this.$t(`translation.${camelCase(item[0])}`), {
                        type: 'error',
                    });
                });
            }
        },
    };
</script>
