<template>
  <div class="row">
    <div class="col-md-6 offset-md-3">
   <template v-if="error">
     <p class="text-danger">
       Error Form
     </p>
   </template>
      <form @submit.prevent="sendForm" >
        <div class="row">
          <div class="col">
            <input v-model="$v.name.$model" type="text" class="form-control"/>
            <p class="text-danger" v-if="!$v.name.minLength">Nombre debe ser mayor a {{$v.name.$params.minLength.min}}</p> 
          </div>
          <div class="col"> 
            <button class="btn btn-success float-rigth">Enviar</button>
          </div>
        </div>
      </form>
  </div>
  </div>
</template>

<script>
import  {  required, minLength} from 'vuelidate/lib/validators'
export default {
  data() {
    return {
      name: "",
      error:false
    };
  },
  validations: {
    name: {
      required,
      minLength: minLength(6)
    }
  },
  methods: {
    sendForm: function(){
      this.$v.$touch();
      if(this.$v.$invalid){
        this.error = true;
      }else{
        alert('Valid')
      }
    }
  },
  
      
};
</script>
