<template>
  <div>
    <div class="container allPag p-4">
      <form @submit.prevent="postCreateMalteada" class="mt-5">
      <div class="row">
          <div class="col-md-7 mt-5">
            <div class="form-group container mt-5 ">
           <h3 class="display-5 ">Nombre de su Malteada</h3>
            <input type="text" placeholder="Nombre de batido" v-model="nombreMalteada" class="form-control">
          </div>
            </div>  
            <div class="col-md-4">
                 <h1 class="display-4 text-center my-5 texto">SweetMilk<svg id="color" height="100" viewBox="0 0 64 64" width="200" xmlns="http://www.w3.org/2000/svg">
<path d="m28 52h4v6h-4z" fill="#b9d5ee"/>
<path d="m38.983 16.179-1.966-.358 2-11a.994.994 0 0 1 .709-.782l7-2 .548 1.922-6.4 1.83z" fill="#e6e6e6"/>
<path d="m18 16h24l-1.46 27.015a10.556 10.556 0 0 1 -10.54 9.985 10.556 10.556 0 0 1 -10.54-9.985z" fill="#d8e6f1"/>
<path d="m22.094 16 .128 4 1.232 22.8a6.556 6.556 0 0 0 13.092 0l1.232-22.8.222-4z" fill="#ef5e99"/>
<path d="m28 57-11 4h26l-11-4z" fill="#d8e6f1"/><g fill="#b9d5ee">
<path d="m33 45a1 1 0 0 1 -1-1v-21h-4v21a1 1 0 0 1 -2 0v-22a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v22a1 1 0 0 1 -1 1z"/>
<path d="m37 21a1 1 0 0 0 -1 1v22a1 1 0 0 0 2 0v-21h3.622l.108-2z"/>
<path d="m22 44a1 1 0 0 0 2 0v-22a1 1 0 0 0 -1-1h-4.73l.108 2h3.622z"/></g>
<path d="m39.646 16a3.993 3.993 0 1 0 -5.69-5.568 3.854 3.854 0 0 0 .044-.432 4 4 0 0 0 -8 0 3.854 3.854 0 0 0 .044.432 3.992 3.992 0 1 0 -5.69 5.568" fill="#ff7bac"/>
<circle cx="30" cy="6" fill="#de0000" r="3"/></svg></h1>
            </div>
        
      </div>
   
    
      
      <div class="row">
           <div class="form-group  col-md-4">
        
          </div>
      
  
      </div>
    
        <div class="row">
          
          <div class="form-group col-md-4 mt-4 ">
            <h3>Frutas:</h3>
            <select class="form-control col-md-12" v-model="nombreFruta">
              <option v-for="frut in fruta" :key="frut._id" >
                {{ frut.nombre }}
              </option>
            </select>
            
          </div>
         
          <div class="form-group col-md-4 mt-4">
            <h3>Liquidos:</h3>
            <select class="form-control col-md-12 "  v-model="nombreLiquido">
              <option v-for="liq in liquido" :key="liq._id" >
                {{ liq.nombre }}
              </option>
            </select>
          </div>
          <div class=" form-group col-md-4 mt-4">
            <h3>Proteina:</h3>
            <select class="form-control col-md-12"  v-model="nombreProteina">
              <option v-for="prote in proteina" :key="prote._id">
                {{ prote.nombre }}
              </option>
            </select>
          </div>
          <div class="form-group container col-md-3 mt-5">
            <input type="submit" value="Guardar." class="btn btn-primary btn-block form-control">
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fruta: [],
      liquido: [],
      proteina: [],
      baseURL: "http://localhost:4000",
       
       
          nombreMalteada :'',
          nombreFruta:'',
          nombreLiquido:'',
          nombreProteina:''
        
    };
  },
  created() {
    this.getShowAll();
  },
  methods: {
    async getShowAll() {
      const res = await this.axios.get(`${this.baseURL}/`);
      this.fruta = res.data.fruta;
      this.liquido = res.data.liquido;
      this.proteina = res.data.proteina;
    },
    async postCreateMalteada(){
 
 
     console.log(this.nombreMalteada,
     this.nombreFruta,
     this.nombreProteina,
     this.nombreLiquido
     )
   
     
       await this.axios.post(`${this.baseURL}/addMerengada`,);
     

      
    }
  },
};
</script>



<style lang="scss" scoped></style>
