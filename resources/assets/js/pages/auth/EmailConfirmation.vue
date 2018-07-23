<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-6">

                <div class="card">
                    <div class="card-header">{{ $t('translation.confirmEmailHeader') }}</div>

                    <div class="card-body">
                        {{ $t('translation.confirmEmailBodyStart') }}
                        {{ email }}
                        {{ $t('translation.confirmEmailBodyEnd') }}
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