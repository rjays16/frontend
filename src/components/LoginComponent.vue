<template>

  <div class="min-h-screen flex flex-col items-center justify-center bg-gray-300">
    <div class="flex flex-col bg-white shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-md w-full max-w-md">
      <div class="font-medium self-center text-xl sm:text-2xl uppercase text-gray-800">Login To Your Account</div>
      <button class="relative mt-6 border rounded-md py-2 text-sm text-gray-800 bg-gray-100 hover:bg-gray-200">
        <span class="absolute left-0 top-0 flex items-center justify-center h-full w-10 text-blue-500"><i class="fab fa-github"></i></span>
        <span>Login with Github</span>
      </button>

      <div class="relative mt-10 h-px bg-gray-300">
        <div class="absolute left-0 top-0 flex justify-center w-full -mt-2">
          <span class="bg-white px-4 text-xs text-gray-500 uppercase">Or Login With Email</span>
        </div>
      </div>

      <div class="mt-10">
        <form action="#" @submit.prevent="submitLogin">
          <div class="flex flex-col mb-6">
            <label for="email" class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">E-Mail Address:</label>
            <div class="relative">
              <div class="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                <svg class="h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                </svg>
              </div>
              <input id="email" type="text" name="email" class="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400" placeholder="E-Mail Address"
              v-model="LoginForm.email"/>
            </div>
            <b v-if="!emailvalid">Please enter your email</b>
            <b v-if="!validemail && emailvalid" id="req">Please enter valid email address</b>
          </div>

          <div class="flex flex-col mb-6">
            <label for="password" class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">Password:</label>
            <div class="relative">
              <div class="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
              <span>
                <svg class="h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </span>
              </div>

              <input id="password" type="password" name="password" class="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400" placeholder="Password"
              v-model="LoginForm.password"/>
            </div>
            <b v-if="!passvalid">Please enter your Password</b>
          </div>

          <div class="flex items-center mb-6 -mt-4">
            <div class="flex ml-auto">
              <a href="#" class="inline-flex text-xs sm:text-sm text-blue-500 hover:text-blue-700">Forgot Your Password?</a>
            </div>
          </div>

          <div class="flex w-full">
            <button type="submit" class="flex items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-blue-600 hover:bg-blue-700 rounded py-2 w-full transition duration-150 ease-in">
              <span class="mr-2 uppercase">Login</span>
              <span>
              <svg class="h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </span>
            </button>
          </div>
        </form>
      </div>
      <div class="flex justify-center items-center mt-6">
        <div id="app">
        <button target="_blank" class="inline-flex items-center font-bold text-blue-500 hover:text-blue-700 text-xs text-center" @click="gotoSignup">
        <span>
          <svg class="h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
          </svg>
        </span>
          <span class="ml-2">You don't have an account?</span>
        </button>
      </div>
      </div>
    </div>
  </div>
</template>

<script>

import axios from 'axios';
import Swal from 'sweetalert2';

export default {
  name: 'LoginComponent',

  data() {
    return {
      LoginForm: {
        email: null,
        password: null,
      },
    }
  },
  computed: {
    passvalid(){
      return !!this.LoginForm.password
    },

    emailvalid(){
      return !!this.LoginForm.email
    },

    validemail() {
      return !!this.validEmailcheck(this.LoginForm.email)
    },

  },
  methods: {
    submitLogin() {
      const formvalid = this.emailvalid && this.validemail && this.passvalid

      if (formvalid) {
        this.login_user();
      } else {
                Swal.fire({
                  title: 'OPPS',
                  text: "Some Fields are required",
                  icon: 'warning',
                });
      }
    },

    gotoSignup(){
      this.$router.push({path: '/signup/'})
    },
    login_user() {
      if(localStorage.getItem('token') != null) {
        const url = 'http://localhost/'
        //   const response = await axios.post(url +'api/login', {
        //     email: this.LoginForm.email,
        //     password: this.LoginForm.password,
        //
        //     headers:{
        //       Authorization: 'Bearer ' + localStorage.getItem('token')
        //     }
        //   });
        //    localStorage.setItem('token', response.data.token);
        //   await this.$router.push({ path : '/dashboard/' });
        // },
        axios.get(url + 'sanctum/csrf-cookie').then(response => {
          console.log(response);
          axios.post(url + 'api/login', this.LoginForm).then((resp) => {
            this.LoginForm.email = '';
            this.LoginForm.password = '';
            if (resp["data"]["status"] == "error") {
              Swal.fire({
                title: 'OPPS',
                text: "Invalid email/password Please try again",
                icon: 'warning',
              });
            } else {
              Swal.fire({
                title: 'Success',
                text: "You have been logged-in successfully",
                icon: 'success',
              });
              if (resp.status === 200) {
                console.log(resp)
                localStorage.setItem('name', resp["data"]["data"]["name"]);
                localStorage.setItem('token', resp["data"]["data"]["token"]);
                localStorage.setItem('created_at', resp["data"]["data"]["created_at"]);
                localStorage.setItem('id', resp["data"]["data"]["id"])
                this.$router.push({path: '/dashboard/'});
              }
            }
          }).catch((e) => {
            console.log(e);
            Swal.fire({
              title: 'Hurry',
              text: e,
              icon: 'warning',
            });
          })

          axios.post(url + 'api/count_user').then((resp) => {
            console.log(resp);
            if (resp.status === 200) {
              localStorage.setItem('count_user', resp["data"]["data"]);
            }
          }).catch((e) => {
            console.log(e);
            Swal.fire({
              title: 'Hurry',
              text: e,
              icon: 'warning',
            });
          })
        })
      }else {
        this.$router.push({path: '/'});
      }
    },

    validEmailcheck: function (emailsignValid) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(emailsignValid);
    },
  // beforeRouterEnter(to, from, next){
  //   if (window.Laravel.isLoggedin){
  //     return next('/dashboard/')
  //   }
  //   next();
  // },
},
  // methods: {
  //   handleLogin()
  //   {
  //     const url = 'http://localhost/';
  //     axios.get(url + 'sanctum/csrf-cookie').then(response => {
  //       console.log(response)
  //       axios.post(url +'api/login',this.formData, {
  //         headers: {"Access-Control-Allow-Origin": "*"}
  //       }).then(response => {
  //           console.log(response["data"]["status"]);
  //       })
  //     });
  //   }
  // }

}

</script>

<style scoped>
#marginon{
  margin-left: 600px;
  margin-top: 80px;
}

b {
  color: red;
}
</style>

