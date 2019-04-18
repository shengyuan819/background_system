<template>   
       <div class='demo'>
              <!--  {{ count }}
               <p>
                <button @click="increment">+</button>
                <button @click="decrement">-</button>
              </p>    -->   
              <input v-model="value1"  name="">
              <button @click="encode">加密</button><br>
              <input v-model="value2"  name="">
              <button @click="decode">解密</button>  

       </div>
  
</template>
<script type="text/javascript">
    import {Base64} from '../assets/js/base64'
    let base = new Base64;
    export default{
        name:'demo',
        data(){
            return{
              value1: '',
              value2: '',
            }
        },
        methods:{
            // increment(){
            //   this.$store.commit('increment')
            // },
            // decrement(){
            //   this.$store.commit('decrement')
            // },

            encode(){  
              // base64加密          
              console.info(base.encode(this.value1))              
            },
            decode(){
              // base64解密
              console.info(base.decode(this.value2))
            },
        },
        mounted(){
          console.info(33333333333)
          console.info(this.$md5('1824490'))
        },
        computed:{
            count(){
                return this.$store.state.count
            },
        }


    }

</script>