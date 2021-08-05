<!--
 * @Author: your name
 * @Date: 2021-08-04 21:56:03
 * @LastEditTime: 2021-08-04 23:07:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /myproject/src/views/login.vue
-->
<template>
<div>
  <el-form ref="form" v-model="form" class="login_box">
        <el-form-item > 
          <el-input v-model="form.userName" type="text" placeholder="请输入">

          </el-input>
          <el-input v-model="form.userPwd" type="password" placeholder="请输入"></el-input>
        </el-form-item>
      </el-form>
</div>
      
</template>

<script>
export default {
    name:'Login',
    data(){
      return{
        form:{
            userName:'',
            userPwd:''
        }
      }
    }
    
}
</script>
    
<style lang="scss" scoped>
  .login_box{
    width: 350px;
  }
</style>