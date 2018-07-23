<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-12">
                <div class="card">

                    <div class="card-body text-center">
                        {{ $t('translation.successConfirmEmailBody') }}
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
