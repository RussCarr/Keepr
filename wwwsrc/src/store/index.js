// Vuex 'store': Sets and maintains front-end application 'state'

import vue from "vue";
import vuex from "vuex";
import axios from "axios";
import router from "../router";

var production = !window.location.host.includes("localhost");
var baseUrl = "//localhost:5000/";

var api = axios.create({
  baseURL: baseUrl + "api/",
  timeout: 3000,
  withCredentials: true
});

var auth = axios.create({
  baseURL: baseUrl + "Account/",
  timeout: 3000,
  withCredentials: true
});

var unconventionalRoutes = axios.create({
  baseURL: baseUrl,
  timeout: 3000,
  withCredentials: true
});

vue.use(vuex);

export default new vuex.Store({
  state: {
    user: {},
    authError: {
      error: false,
      message: ""
    },
    allkeeps: []
  },

  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setAuthError(state, error) {
      state.authError = {
        error: error.error,
        message: error.message
      };
    },
    setkeeps(state, allkeeps) {
      state.allkeeps = allkeeps;
    }
  },

  actions: {
    // Auth
    registerUser({ commit, dispatch }, userData) {
      console.log("User:", userData);
      auth
        .post("Register", userData)
        .then(res => {
          var newUser = res.data;
          console.log("newUser:", newUser);
          commit("setUser", newUser);
          commit("setAuthError", { error: false, message: "" });
          router.push({
            name: "Home"
          });
        })
        .catch(err => {
          console.log(err);
          commit("setAuthError", {
            error: true,
            message:
              "Register failed: Invalid username, email, or password given"
          });
        });
    },

    loginUser({ commit, dispatch }, user) {
      auth
        .post("login", user)
        .then(res => {
          var newUser = res.data;
          console.log("logged-in user:", newUser);
          commit("setUser", newUser);
          commit("setAuthError", { error: false, message: "" });
          // dispatch("getUserProjects");
          router.push({
            name: "Home"
          });
        })
        .catch(err => {
          console.log(err);
          commit("setAuthError", {
            error: true,
            message: "Log-in failed: Invalid username or password"
          });
        });
    },

    authenticateUser({ commit, dispatch }) {
      auth;
      console.log("returning user:1");
      auth
        .get("authenticate")
        // console.log("returning user:2");
        .then(res => {
          console.log("returning user:", sessionUser);
          var sessionUser = res.data;
          console.log("returning user2:", sessionUser);
          commit("setUser", sessionUser);
          router.push({
            name: "Home"
          });
        })
        .catch(err => {
          console.error(err);
        });
    },
    logoutUser({ commit, dispatch }) {
      auth
        .delete("logout")
        .then(() => {
          console.log("User logged out");
          commit("setUser", {});
          commit("setAuthError", { error: false, message: "" });
          router.push({
            name: "Welcome"
          });
        })
        .catch(err => {
          console.log(err);
        });
    },
    getAllUsers({ commit, dispatch }, user) {
      api
        .get("/private/users", user)
        .then(res => {
          console.log("User data", res.data);
          var allUsers = res.data;
          allUsers.sort((projA, projB) => {
            return projB.createdAt - projA.createdAt;
          });
          commit("setUsers", allUsers);
        })
        .catch(err => {
          console.log(err);
        });
    },
    getAllkeeps({ commit, dispatch }) {
      api
        .get("/keeps")
        .then(res => {
          console.log("keeps", res.data);
          var allkeeps = res.data;
          allkeeps.sort((projA, projB) => {
            return projB.createdAt - projA.createdAt;
          });
          commit("setkeeps", allkeeps);
        })
        .catch(err => {
          console.log(err);
        });
    },
    sendkeep({ commit, dispatch }, payload) {
      api.post("/keeps", payload).then(res => {
        dispatch("getAllkeeps").catch(err => {
          console.log(err);
        });
      });
    },
    updatekeep({ commit, dispatch }, payload) {
      api.put(`/keeps/${payload.id}`, payload).then(res => {
        dispatch("getAllkeeps").catch(err => {
          console.log(err);
        });
      });
    },
    deletekeep({ commit, dispatch }, payload) {
      console.log("id", payload.id);
      api.delete(`/keeps/${payload.id}`)
      .then(res => {
        dispatch("getAllkeeps").catch(err => {
          console.log(err);
        });
      });
    }

    // API
  }
});
