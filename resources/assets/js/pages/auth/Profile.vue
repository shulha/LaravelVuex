<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">
                            {{ $t('translation.name')}}: <strong>{{ name }}</strong>
                        </li>
                        <li class="list-group-item">
                            {{ $t('translation.email')}}: <strong>{{ email }}</strong>
                        </li>
                    </ul>
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