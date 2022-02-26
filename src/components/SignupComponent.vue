<template>
  <div class="min-h-screen flex flex-col items-center justify-center bg-gray-300">
    <div class="flex flex-col bg-white shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-md w-full max-w-md">
      <div class="font-medium self-center text-xl sm:text-2xl uppercase text-gray-800">Sign up Page</div>
      <div class="mt-10">

        <form action="#" @submit.prevent="submitSignup" autocomplete="off">
          <div class="flex flex-col mb-6">

            <label for="fullname" class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">Fullname</label>
            <div class="relative">
              <div class="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                <!--                <svg class="h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">-->
                <!--                  <path d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />-->
                <!--                </svg>-->
                <svg class="w-6 h-6 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"></path></svg>
              </div>
              <input id="fullname" type="text" name="fullname" class="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400" placeholder="Fullname"
              v-model="Signupform.fullname"/>
            </div>
            <b v-if="!fullnamevalid">Please Enter your Fullname</b>
          </div>

          <div class="flex flex-col mb-6">
            <label for="email" class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">E-Mail Address:</label>
            <div class="relative">
              <div class="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                <svg class="h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                </svg>
              </div>

              <input id="email" type="text" name="email" class="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400" placeholder="E-Mail Address"
              v-model="Signupform.email"/>
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
              v-model="Signupform.password"/>
            </div>
            <b v-if="!passvalid">Please enter your Password</b>
          </div>

          <div class="flex flex-col mb-6">
            <label for="repassword" class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">Re-type Password:</label>
            <div class="relative">
              <div class="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
              <span>
                <svg class="h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </span>
              </div>

              <input id="repassword" type="password" name="repassword" class="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400" placeholder="Re-type Password"
              v-model="Signupform.retypepass"/>
            </div>
            <b v-if="!Signupform.retypepass">Please enter your re-type password</b>
            <b v-if="Signupform.retypepass !== Signupform.password && Signupform.retypepass ">Password Not Match</b>
          </div>

          <div class="flex w-full">
            <button type="submit" class="flex items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-blue-600 hover:bg-blue-700 rounded py-2 w-full transition duration-150 ease-in">
              <span class="mr-2 uppercase">Sign Up</span>
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
        <router-link to="/" target="_blank" class="inline-flex items-center font-bold text-blue-500 hover:text-blue-700 text-xs text-center">
        <span>
<!--          <svg class="h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">-->
<!--            <path d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />-->
<!--          </svg>-->
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
        </span>
          <span class="ml-2">Have account already?</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Swal from 'sweetalert2'
export default {
  name: "SignupComponent",
  data() {
    return {
      Signupform: {
            fullname: null,
            email: null,
            password: null,
            retypepass:null,
      }
    }
  },
  computed: {

    fullnamevalid(){
      return !!this.Signupform.fullname
    },
     emailvalid(){
      return !!this.Signupform.email
     },
      validemail() {
        return !!this.validEmailcheck(this.Signupform.email)
      },
      passvalid(){
      return !!this.Signupform.password
     },

      retypevalid(){
      return !!this.Signupform.retypepass
      },

    valid2pass () {
      return !!this.validMatchpassword(this.password, this.retypepass)
    }
  },
  methods: {
    submitSignup() {
      const formvalid =  this.fullnamevalid && this.emailvalid && this.passvalid && this.retypevalid && this.validemail && this.valid2pass;
      if (formvalid) {
        this.create_user();
      } else {
        Swal.fire({
          title: 'Error',
          text: 'There some error in signup form',
          icon: 'error',
        });
      }
    },

    create_user() {
        const url = 'http://localhost/'

      axios.post(url + 'api/register',
          {
            name:this.Signupform.fullname,
            email:this.Signupform.email,
            password:this.Signupform.retypepass})
          .then((res) => {
            //success message alert
            Swal.fire({
              title: 'Succesfully',
              text: "User has been registered successfully",
              icon: 'success',
            });
            console.log(res)
          })
          .catch((e) => {
            console.log(e);
            Swal.fire({title: 'Hurry', text: e, icon: 'warning',});
          })
    },

    validEmailcheck: function (emailsignValid) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(emailsignValid);
    },
    validMatchpassword: function (password, repass){
      var match = password === repass;
      return match
    }
  },
}
</script>

<style scoped>
b {
  color: red;
}
</style>