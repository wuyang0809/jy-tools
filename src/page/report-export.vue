<template>
    <b-container fluid>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
        <b-row>
            <b-col>
                <b-form-group id="exampleInputGroup1"
                            label="Will be executed:"
                            label-for="exampleInput1"
                            description="We'll never share your email with anyone else.">
                    <b-form-textarea id="textarea1"
                                 v-model="text"
                                 placeholder="Please enter SQL"
                                 :rows="3"
                                 :max-rows="6">
                    </b-form-textarea>
                    <pre class="mt-3">{{ text }}</pre>
                </b-form-group>            
            </b-col>
            <b-col align-self="center" class="text-center" md="1">
                <b-button type="submit" variant="primary">Go</b-button>
            </b-col>
            <b-col>
                <b-form-group id="exampleInputGroup2"
                            label="Your Results:"
                            label-for="exampleInput2">
                    <b-form-textarea id="textarea1"
                                 v-model="text"
                                 placeholder=""
                                 :rows="3"
                                 :max-rows="6">
                    </b-form-textarea>
                </b-form-group>             
            </b-col>
        </b-row>
    </b-form>
</b-container>
</template>

<script>
    export default {
  data () {
    return {
      form: {
        email: '',
        name: '',
        food: null,
        checked: []
      },
      foods: [
        { text: 'Select One', value: null },
        'Carrots', 'Beans', 'Tomatoes', 'Corn'
      ],
      show: true
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset (evt) {
      evt.preventDefault();
      /* Reset our form values */
      this.form.email = '';
      this.form.name = '';
      this.form.food = null;
      this.form.checked = [];
      /* Trick to reset/clear native browser form validation state */
      this.show = false;
      this.$nextTick(() => { this.show = true });
    }
  }
}
</script>