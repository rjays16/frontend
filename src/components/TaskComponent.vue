<template>
  <nav class="fixed z-30 w-full bg-white border-b-2 border-indigo-600">
    <div class="px-6 py-3">
      <div class="flex items-center justify-between">
        <div class="flex items-center justify-start">
          <button class="p-2 text-gray-600 rounded cursor-pointer lg:hidden ">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24"
                 stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <a href="#" class="flex items-center text-xl font-bold">
            <span class="text-blue-800">Logo</span>
          </a>

        </div>
        <div class="flex items-center">
          <div class="hidden mr-6 lg:block">
            <form @submit.prevent="logout_user">
              <label class="sr-only">Search</label>
              <div class="relative mt-1 lg:w-64">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3">
                  <svg class="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20"
                       xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                          clip-rule="evenodd"></path>
                  </svg>
                </div>
                <input type="text" name="name" class=" border  text-gray-900 sm:text-sm rounded-lg focus:outline-none focus:ring-1 block w-full pl-10 p-2.5" placeholder="Search">
              </div>
            </form>
          </div>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24"
                 stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </div>

          <div class="relative inline-block">
            <!-- Dropdown toggle button -->
            <button class="relative flex items-center p-2 text-sm text-gray-600 bg-white border border-transparent rounded-md focus:border-blue-500 focus:ring-opacity-40 dark:focus:ring-opacity-40 focus:ring-blue-300 dark:focus:ring-blue-400 focus:ring dark:text-white dark:bg-gray-800 focus:outline-none"  @click="logout = !logout">
              <svg style="margin-top: 5px; margin-left: 5px" class="h-8 w-8 text-red-500"  width="24" height="24" viewBox="0 0 34 34" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="12" cy="7" r="4" />  <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" /></svg>
              <span class="mx-1">
                {{username}}</span>
              <svg class="w-5 h-5 mx-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 15.713L18.01 9.70299L16.597 8.28799L12 12.888L7.40399 8.28799L5.98999 9.70199L12 15.713Z"
                      fill="currentColor"></path>
              </svg>

            </button>

            <!-- Dropdown menu -->
            <div class="absolute right-0 z-20 w-56 mt-2 hidden bg-white rounded-md" v-if="logout === false">
              <ul class="py-1" aria-labelledby="dropdownButton">
                <li>
                  <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Logout</a>
                </li>
              </ul>
            </div>

            <div class="absolute right-0 z-20 w-56 mt-2 overflow-hidden bg-white rounded-md" v-else>
              <ul class="py-1" aria-labelledby="dropdownButton">
                <li>
                  <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Logout</a>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </div>
  </nav>
  <div class="pt-12 lg:flex">
    <div class="flex flex-col w-full px-4 py-8 overflow-y-auto border-b lg:border-r lg:h-screen lg:w-64">

      <div class="flex flex-col justify-between mt-6">
        <aside>
          <ul>
            <li>
              <a class="flex items-center px-4 py-2 mt-5 text-gray-600 rounded-md hover:bg-gray-200">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24"
                     stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
<!--                <span class="mx-4 font-medium">Dashboard</span>-->
                <router-link to="/dashboard" class="mx-4 font-medium">Dashboard</router-link>
              </a>
            </li>

            <li>
              <a class="flex items-center px-4 py-2 text-gray-700 bg-gray-100 rounded-md " >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">

                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                  <path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd" />
                </svg>

                <!--                <span class="mx-4 font-medium">Task</span>-->
                <router-link to="/task" class="mx-4 font-medium">Task</router-link>
              </a>
            </li>
          </ul>

        </aside>
      </div>
    </div>
    <div class="w-full h-full p-4 m-8 overflow-y-auto">
      <div class="flex items-center justify-center p-16 mr-8 border-4 border-dotted lg:p-40">
        <div id="marginon">
          <h3 class="text-3xl font-medium text-gray-700">Task</h3>
          <div class="mt-4">
            <div class="flex flex-wrap -mx-6">
              <div class="w-full px-6 sm:w-1/2 xl:w-1/3">
                <div class="flex items-center px-5 py-6 bg-white rounded-md shadow-sm">
                  <div class="p-3 bg-indigo-600 bg-opacity-75 rounded-full">
                    <svg
                        class="w-8 h-8 text-white"
                        viewBox="0 0 28 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                      <path
                          d="M18.2 9.08889C18.2 11.5373 16.3196 13.5222 14 13.5222C11.6804 13.5222 9.79999 11.5373 9.79999 9.08889C9.79999 6.64043 11.6804 4.65556 14 4.65556C16.3196 4.65556 18.2 6.64043 18.2 9.08889Z"
                          fill="currentColor"
                      />
                      <path
                          d="M25.2 12.0444C25.2 13.6768 23.9464 15 22.4 15C20.8536 15 19.6 13.6768 19.6 12.0444C19.6 10.4121 20.8536 9.08889 22.4 9.08889C23.9464 9.08889 25.2 10.4121 25.2 12.0444Z"
                          fill="currentColor"
                      />
                      <path
                          d="M19.6 22.3889C19.6 19.1243 17.0927 16.4778 14 16.4778C10.9072 16.4778 8.39999 19.1243 8.39999 22.3889V26.8222H19.6V22.3889Z"
                          fill="currentColor"
                      />
                      <path
                          d="M8.39999 12.0444C8.39999 13.6768 7.14639 15 5.59999 15C4.05359 15 2.79999 13.6768 2.79999 12.0444C2.79999 10.4121 4.05359 9.08889 5.59999 9.08889C7.14639 9.08889 8.39999 10.4121 8.39999 12.0444Z"
                          fill="currentColor"
                      />
                      <path
                          d="M22.4 26.8222V22.3889C22.4 20.8312 22.0195 19.3671 21.351 18.0949C21.6863 18.0039 22.0378 17.9556 22.4 17.9556C24.7197 17.9556 26.6 19.9404 26.6 22.3889V26.8222H22.4Z"
                          fill="currentColor"
                      />
                      <path
                          d="M6.64896 18.0949C5.98058 19.3671 5.59999 20.8312 5.59999 22.3889V26.8222H1.39999V22.3889C1.39999 19.9404 3.2804 17.9556 5.59999 17.9556C5.96219 17.9556 6.31367 18.0039 6.64896 18.0949Z"
                          fill="currentColor"
                      />
                    </svg>
                  </div>

                  <div class="mx-5" v-if="condition===2">
                    <button @click="condition = 1">Users</button>
                  </div>

                  <div class="mx-5" v-if="condition === 3">
                    <button @click="condition = 2">Task</button>

                  </div>
                  <div class="mx-3" v-if="condition === 1">
                    <button @click="condition = 3" class="text-2xl font-semibold text-gray-700">{{count_task}}</button>
                    <div class="text-gray-500">List of Task</div>
                  </div>
                </div>
              </div>

              <div class="w-full px-6 mt-6 sm:w-1/2 xl:w-1/3 sm:mt-0">
                <div
                    class="flex items-center px-5 py-6 bg-white rounded-md shadow-sm">
                  <div class="p-3 bg-blue-600 bg-opacity-75 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                    </svg>
                  </div>

                  <div class="mx-5">
                    <h4 class="text-2xl font-semibold text-gray-700">10</h4>
                    <div class="text-gray-500">List Task Done</div>
                  </div>
                </div>
              </div>

              <div class="w-full px-6 mt-6 sm:w-1/2 xl:w-1/3 xl:mt-0">
                <div
                    class="flex items-center px-5 py-6 bg-white rounded-md shadow-sm">

                </div>
              </div>
            </div>
          </div>

          <div class="mt-8">
<!--                        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">-->
<!--                          Create Task-->
<!--                        </button>-->
            <button class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" data-modal-toggle="default-modal">
              Create Task
            </button>

            <!-- Main modal -->
            <form action="#" @submit.prevent="submitTask" autocomplete="off">
            <div id="default-modal" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-4 z-50 justify-center items-center h-modal md:h-full md:inset-0">
              <div class="relative px-4 w-full max-w-2xl h-full md:h-auto">
                <!-- Modal content -->
                <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                  <!-- Modal header -->
                  <div class="flex justify-between items-start p-5 rounded-t border-b dark:border-gray-600">
                    <h3 class="text-xl font-semibold text-gray-900 lg:text-2xl dark:text-white">
                      Add Task
                    </h3>
                    <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="default-modal">
                      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </button>
                  </div>
                  <!-- Modal body -->
                  <div class="p-6 space-y-6">
                    <div class="flex flex-col mb-6">

                      <label for="tasktitle" class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">Task Title</label>
                      <div class="relative">
                        <div class="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">

                            <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                            <path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd" />
                          </svg>
                        </div>
                        <input id="tasktitle" type="text" name="tasktitle" class="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400" placeholder="Task Title"
                        v-model="Taskform.tasktitle"/>
                      </div>
                      <b v-if="!tasktitlevalid">Please Enter the task title</b>
                    </div>

                    <div class="flex flex-col mb-6">

                      <label for="taskdescription" class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">Task Description</label>
                      <div class="relative">
                        <div class="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">

                            <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                            <path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd" />
                          </svg>
                        </div>
                        <input id="taskdescription" type="text" name="taskdescription" class="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400" placeholder="Task Description"
                        v-model="Taskform.taskdescription"/>
                      </div>
                      <b v-if="!taskdescriptionvalid">Please Enter the task description</b>
                    </div>
                  </div>
                    <div class="flex flex-col mb-6">
                      <div class="flex justify-center">
                        <div class="mb-3 xl:w-96" style="width: 590px">
                          <label for="task_select" class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">Assign to</label>
                          <select class="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example"
                                  v-model="Taskform.task_select">
                            <option disabled>Select assign of this task:</option>
                            <option id="task_select" name="task_select"
                                    v-for="lou in list_of_user" :value="lou.name" :key="lou.name">{{lou.name}}</option>
                          </select>
                          <b v-if="!taskselectvalid">Please Select assign of this task</b>
                        </div>
                      </div>
                  </div>


                  <!-- Modal footer -->
                  <div class="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
                    <button data-modal-toggle="default-modal" type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Save</button>
                    <button data-modal-toggle="default-modal" type="button" class="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Close</button>
                  </div>
                </div>
              </div>
            </div>
            </form>
          </div>

          <div class="flex flex-col mt-8">
            <div class="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
              <div
                  class="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg">
                <table class="min-w-full table-fixed" v-if="condition === 1" style="width:975px">
                  <thead>
                  <tr>
                    <th style="width: 10px" class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-200 uppercase border-b border-gray-200 bg-gray-50">
                    </th>
                    <th style="width: 150px" class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                      Task Title
                    </th>

                    <th class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                      Created Task Date</th>
                    <th class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                      Assign by
                    </th>

                    <th class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50" width="150px">
                      Assign to
                    </th>
                    <th class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">

                    </th>
                  </tr>
                  </thead>

                  <tbody class="bg-white">
                  <tr v-if="!list_of_task.length">
                    <td class="px-6 py-4 border-b border-gray-200 whitespace-nowrap">
                      <div class="flex items-center">
                        <div class="flex-shrink-0 w-10 h-10">
                          <p>No available of Task</p>
                        </div>
                        <div class="ml-4">
                          <div class="text-sm font-medium leading-5 text-gray-900">
                          </div>
                          <div class="text-sm leading-5 text-gray-500">
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr v-for="lot in list_of_task" :key="lot.id">
                    <td class="px-6 py-4 border-b border-gray-200 whitespace-nowrap">
                      <div class="flex items-center">
                        <div class="flex-shrink-0 w-10 h-10">
                          <svg class="h-8 w-8 text-red-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="12" cy="7" r="4" />  <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" /></svg>
                        </div>
                        <div class="ml-4">
                          <div class="text-sm font-medium leading-5 text-gray-900">
                          </div>
                          <div class="text-sm leading-5 text-gray-500">
                          </div>
                        </div>
                      </div>
                    </td>

                    <td class="px-6 py-4 border-b border-gray-200 whitespace-nowrap" style="width: 200px">
                      <div class="flex items-center">
                        <div class="flex-shrink-0 w-10 h-10">
                          <p v-if="lot.title.length>=20">{{lot.title.substring(0,20)+".."}}</p>
                          <p v-else>{{lot.title}}</p>
                        </div>
                        <div class="ml-4">
                          <div class="text-sm font-medium leading-5 text-gray-900">
                          </div>
                          <div class="text-sm leading-5 text-gray-500">
                          </div>
                        </div>
                      </div>
                    </td>
                    <td class="px-6 py-4 border-b border-gray-200 whitespace-nowrap">
                      <div class="flex items-center">
                        <div class="flex-shrink-0 w-10 h-10">
                          <p>{{lot.created_at}}</p>
                        </div>
                        <div class="ml-4">
                          <div class="text-sm font-medium leading-5 text-gray-900">
                          </div>
                          <div class="text-sm leading-5 text-gray-500">
                          </div>
                        </div>
                      </div>
                    </td>
                    <td class="px-6 py-4 border-b border-gray-200 whitespace-nowrap" style="width: 200px">
                      <div class="flex items-center">
                        <div class="flex-shrink-0 w-10 h-10">
                          <p>{{lot.assign_by}}</p>
                        </div>
                        <div class="ml-4">
                          <div class="text-sm font-medium leading-5 text-gray-900">
                          </div>
                          <div class="text-sm leading-5 text-gray-500">
                          </div>
                        </div>
                      </div>
                    </td>

                    <td class="px-6 py-4 border-b border-gray-200 whitespace-nowrap">
                      <div class="flex items-center">
                        <div class="flex-shrink-0 w-10 h-10">
                          <p>{{lot.assign_to}}</p>
                        </div>
                        <div class="ml-4">
                          <div class="text-sm font-medium leading-5 text-gray-900">
                          </div>
                          <div class="text-sm leading-5 text-gray-500">
                          </div>
                        </div>
                      </div>
                    </td>

                    <td class="px-6 py-4 border-b border-gray-200 whitespace-nowrap">
                      <div class="flex items-center">
                        <div class="flex-shrink-0 w-10 h-10">
                          <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" data-modal-toggle="default-modals" @click="displayModal(lot.id)">Edit</button>
                          <button @click="this.delete(lot.id)" type="button" class="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Delete</button>
                          <button type="button" class="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">View</button>
                        </div>
                        <div class="ml-4">
                          <div class="text-sm font-medium leading-5 text-gray-900">
                          </div>
                          <div class="text-sm leading-5 text-gray-500">
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                  </tbody>
                </table>

                <form action="#" @submit.prevent="submitTaskupdate" autocomplete="off">
                  <div id="default-modals" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-4 z-50 justify-center items-center h-modal md:h-full md:inset-0">
                    <div class="relative px-4 w-full max-w-2xl h-full md:h-auto">
                      <!-- Modal content -->
                      <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <!-- Modal header -->
                        <div class="flex justify-between items-start p-5 rounded-t border-b dark:border-gray-600">
                          <h3 class="text-xl font-semibold text-gray-900 lg:text-2xl dark:text-white">
                           Edit Task
                          </h3>
                          <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="default-modals" @click="closeModal">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                          </button>
                        </div>
                        <!-- Modal body -->
                        <div class="p-6 space-y-6">
                          <div class="flex flex-col mb-6">

                            <label for="tasktitle" class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">Task Title</label>
                            <div class="relative">
                              <div class="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">

                                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                                  <path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd" />
                                </svg>
                              </div>
                              <input id="tasktitle" type="text" name="tasktitle" class="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400" placeholder="Task Title"
                               v-model="Taskform.tasktitle"/>
                            </div>
                            <b v-if="!tasktitlevalid">Please Enter the task title</b>
                          </div>

                          <div class="flex flex-col mb-6">

                            <label for="taskdescription" class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">Task Description</label>
                            <div class="relative">
                              <div class="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">

                                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                                  <path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd" />
                                </svg>
                              </div>
                              <input id="taskdescription" type="text" name="taskdescription" class="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400" placeholder="Task Description"
                              v-model="Taskform.taskdescription"/>
                            </div>
                            <b v-if="!taskdescriptionvalid">Please Enter the task description</b>
                          </div>
                        </div>
                        <div class="flex flex-col mb-6">
                          <div class="flex justify-center">
                            <div class="mb-3 xl:w-96" style="width: 590px">
                              <label for="task_select" class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">Assign to</label>
                              <select class="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example"
                                      v-model="Taskform.task_select">
                                <option disabled>Select assign of this task:</option>
                                <option id="task_select" name="task_select"
                                        v-for="lou in list_of_user" :value="lou.name" :key="lou.name">{{lou.name}}</option>
                              </select>
                              <b v-if="!taskselectvalid">Please Select assign of this task</b>
                            </div>
                          </div>
                        </div>


                        <!-- Modal footer -->
                        <div class="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
                          <button data-modal-toggle="default-modals" type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" @click="closeModal">Update</button>
                          <button data-modal-toggle="default-modals" type="button" class="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900" @click="closeModal">Close</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import 'flowbite';
import moment from 'moment';
import axios from "axios";
import Swal from "sweetalert2";

export default {
  name: "DashboardComponent",
  condition: 1,
  data() {
    return {
      list_of_user: {},
      list_of_task: {},
      username: localStorage.getItem('name'),
      count_task: localStorage.getItem('count_task'),
      created_at: moment(String(localStorage.getItem('created_at'))).format('MM/DD/YYYY'),
      id: localStorage.getItem('id'),
      condition: 1,
      count_user: localStorage.getItem('count_user'),
      logout: false,
      Taskform: {
        status: "pending",
        task_id: null,
        tasktitle: null,
        taskdescription: null,
        task_select: null,
      },
    }
  },
  computed: {
    tasktitlevalid(){
      return !!this.Taskform.tasktitle
    },
    taskdescriptionvalid(){
      return !!this.Taskform.taskdescription
    },
    taskselectvalid(){
      return !!this.Taskform.task_select
    },
  },

  created() {
    const url = "http://localhost/"
    axios.post(url + 'api/list_user').then((resp) => {
      if (resp) {
        this.list_of_user = resp["data"]["data"];
        console.log(this.list_of_user);
      }

    }).catch((e) => {
      console.log(e);
      Swal.fire({
        title: 'Hurry',
        text: e,
        icon: 'warning',
      });
    })

    axios.post(url + 'api/list_task').then((resp) => {
      if (resp) {
        this.list_of_task = resp["data"]["data"];
        console.log(this.list_of_task);
      }

    }).catch((e) => {
      console.log(e);
      Swal.fire({
        title: 'Hurry',
        text: e,
        icon: 'warning',
      });
    })
  },

  methods: {
    displayModal(id) {
      document.getElementById('default-modals').style.display = 'block';
      const url = "http://localhost/"
      axios.get(url + 'api/edit_id/' + id).then(resp => {
        this.Taskform.task_id = resp["data"]["data"]["id"];
        this.Taskform.tasktitle = resp["data"]["data"]["title"];
        this.Taskform.taskdescription = resp["data"]["data"]["title_description"];
        this.Taskform.task_select = resp["data"]["data"]["assign_to"]
      })
    },
    closeModal() {
      document.getElementById('default-modals').style.display = 'none';
      window.location.reload();
    },

    logout_user(){
      if (this.logout === true && localStorage.getItem('token') === null){
        const url = "http://localhost/"
        axios.post(url + 'api/logout').then((resp) => {
          console.log(resp)
          localStorage.removeItem('name');
          localStorage.removeItem('created_at');
          localStorage.removeItem('count_user');
          localStorage.removeItem('id');
          this.$router.push({path: '/'});
        })
      }
    },

    submitTask() {
      const formvalid = this.taskselectvalid && this.tasktitlevalid && this.taskdescriptionvalid
      if (formvalid) {
         this.store();
      } else {
        Swal.fire({
          title: 'Error',
          text: 'There some error in submit task form',
          icon: 'error',
        });
      }
    },

    submitTaskupdate() {
      const formvalid = this.taskselectvalid && this.tasktitlevalid && this.taskdescriptionvalid
       if (formvalid) {
        this.update();
        window.location.reload()
      } else {
         Swal.fire({
           title: 'Error',
           text: 'There some error in update task form',
           icon: 'error',
        });
       }
    },
   store() {
      const url = 'http://localhost/'
      axios.post(url + 'api/store',
          {
            title:this.Taskform.tasktitle,
            title_description:this.Taskform.taskdescription,
            user_id: this.id,
            assign_by: this.username,
            assign_to: this.Taskform.task_select,
            status: this.Taskform.status,
            uri_code: encodeURI(this.Taskform.task_select)
          })
          .then((res) => {
            //success message alert
            Swal.fire({
              title: 'Succesfully',
              text: "Task is succesfully registered successfully",
              icon: 'success',
            });
            this.count();
            window.location.reload();
            console.log(res);
          })
          .catch((e) => {
            console.log(e);
            Swal.fire({title: 'Hurry', text: e, icon: 'warning',});
          })
    },
     update(){
       const url = "http://localhost/"
       axios.get(url + 'sanctum/csrf-cookie').then(response => {
         console.log(response);
         axios.put(url + "api/update/" + this.Taskform.task_id, {
           title: this.Taskform.tasktitle,
           title_description: this.Taskform.taskdescription,
           assign_to: this.Taskform.task_select,
         })
       })
     },
    delete(id){
      const url = "http://localhost/"
      axios.get(url + 'sanctum/csrf-cookie').then(response => {
        console.log(response);
        axios.delete(`${url}api/delete/${id}`).then(response => {
          console.log(response);
          this.count();
          window.location.reload();
          Swal.fire({
            title: 'Success',
            text: "Successfully deleted",
            icon: 'success'
          });
          let i = this.list_of_task.map(item => item.id).indexOf(id);
          this.list_of_task.splice(i, 1)
        }).catch((e) => {
          Swal.fire({
            title: 'Hurry',
            text: e,
            icon: 'warning',
          });
        });
      });
    },
    
    count(){
      const url = "http://localhost/"
      axios.post(url + 'api/count_task').then((resp) => {
        console.log(resp);
        if (resp.status === 200) {
          localStorage.setItem('count_task', resp["data"]["data"]);
          console.log(resp);
        }
      }).catch((e) => {
        console.log(e);
        Swal.fire({
          title: 'Hurry',
          text: e,
          icon: 'warning',
        });
      })
    },
  },
}
</script>

<style scoped>
button:hover{
  color: blue;
}
#marginon{
  margin-right: 200px;
}

b{
  color: red;
}

table {
  display: block;
  overflow-x: auto;
  white-space: nowrap;
}

#default-modals {
  margin-left: 500px;
  margin-top: 100px;
}

</style>