<template>
    <div class="w-[100%] p-6 bg-gray-lighter">
        <div class="dashboard-widg-bar mb-5">
            <Banner />
            <div class="row">
                <div class="col-xl-12 col-lg-12 col-md-12">
                    <div class="mb-4 rounded overflow-hidden">
                        <div class="max-w-5xl mx-auto mt-10 p-6 bg-gray-50 rounded-lg shadow-md">
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Form />
                                <List />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
import Banner from '../../../components/candidate/userExperienceComponents/Banner.vue';
import Form from '../../../components/candidate/userExperienceComponents/Form.vue';
import List from '../../../components/candidate/userExperienceComponents/List.vue';
export default {
    components: {
        Banner,
        Form,
        List
    }
}
</script>
