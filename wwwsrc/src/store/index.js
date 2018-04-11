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
  baseURL: baseUrl + "auth/",
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
    allSharedKeeps: [],
    allUserVaults: [],
    userStoredVaultKeeps: {},
    userStatus: false
  },

  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setUserStatus(state, payload) {
      state.userStatus = payload;
    },
    setAuthError(state, error) {
      state.authError = {
        error: error.error,
        message: error.message
      };
    },
    setKeeps(state, allSharedKeeps) {
      state.allSharedKeeps = allSharedKeeps;
    },
    setVaults(state, userStoredVaults) {
      state.allUserVaults = userStoredVaults;
    },
    setUserVaultKeeps(state, userVaultKeep) {
      state.userStoredVaultKeeps = userVaultKeep;
    },
  },

  actions: {
    // Auth
    registerUser({ commit, dispatch }, userData) {
      console.log("User:", userData);
      auth
        .post("Account/Register", userData)
        .then(res => {
          var newUser = res.data;
          console.log("newUser:", newUser);
          commit("setUser", newUser);
          commit("setAuthError", { error: false, message: "" });
          commit('setUserStatus', true)
          router.push({
            name: "User"
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
        .post("Account/Login", user)
        .then(res => {
          var newUser = res.data;
          console.log("logged-in user:", newUser);
          commit("setUser", newUser);
          if (newUser == "") {
            console.log ('Im at the gate',newUser)
            commit("setAuthError", { error: true, message: "Log-in failed: Invalid username or password" });
            router.push({
              name: "Home"
            });
          } else {
            // dispatch("getLatestProject", newUser._id);
            commit('setUserStatus', true)
            dispatch('getAllSharedKeeps')
            dispatch('getUserVaults',newUser)
            router.push({
              name: "User"
            });
          }
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
        .get("Account/Authenticate")
        // console.log("returning user:2");
        .then(res => {
          console.log("returning user:", sessionUser);
          var sessionUser = res.data;
          console.log("returning user2:", sessionUser);
          commit("setUser", sessionUser);
          commit('setUserStatus', true)
          dispatch('getAllSharedKeeps')
          router.push({
            name: "User"
          });
        })
        .catch(err => {
          console.error(err);
        });
    },
    logoutUser({ commit, dispatch }) {
      auth
        .delete("Account/Logout")
        .then(() => {
          console.log("User logged out");
          commit("setUser", {});
          commit("setAuthError", { error: false, message: "" });
          commit('setUserStatus', false)
          router.push({
            name: "Home"
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
    //Api
    //Vaults
    getUserVaults({ commit, dispatch },newUser) {
      console.log("logged-in user:@ getUserVaults", newUser.id);
      api
        .get(`/vaults/user/${newUser.id}`)
        .then(res => {
          console.log("Vaults", res.data)
          var userStoredVaults = res.data
          // userStoredVaults.sort((projA, projB) => {
          //   return projB.id - projA.id;
          // });
          commit("setVaults", userStoredVaults)
        })
        .catch(err => {
          console.log(err);
        });
    },
    createVault({ commit, dispatch }, vault) {
      console.log('sending Vault', vault)
      api.post("/vaults", vault).then(res => {
        dispatch("getUserVaults").catch(err => {
          console.log(err);
        });
      });
    },
    updateVault({ commit, dispatch }, payload) {
      api.put(`/vaults/${payload.id}`, payload).then(res => {
        dispatch("getUserVaults").catch(err => {
          console.log(err);
        });
      });
    },
    removeVault({ commit, dispatch }, vault) {
      console.log("id", vault.id);
      api.delete(`/vaults/${vault.id}`)
      .then(res => {
        dispatch("getUserVaults").catch(err => {
          console.log(err);
        });
      });
    },
    addToVault({ commit, dispatch }, stored) {
      console.log("add to vault", stored);
      api.post("/vaults/stored",stored)
      .then(res => {
        console.log("created vault keep", res.data);
        dispatch("getUserStoredKeeps",res.data)
        .catch(err => {
          console.log(err);
        });
      });
    },
    getUserStoredVaultKeeps({ commit, dispatch },id) {
      console.log('i want my vaultkeeps',id)
      api
        .get(`/keeps/storedKeep/${id}`)
        .then(res => {
          console.log("Vaults", res.data);
          var userVaultKeeps = res.data;
          userVaultKeeps.sort((projA, projB) => {
            return projB.createdAt - projA.createdAt;
          });
          commit("setUserVaultKeeps", userVaultKeeps);
        })
        .catch(err => {
          console.log(err);
        });
    },
   
  //Keeps
  getAllSharedKeeps({ commit, dispatch }) {
    api
      .get("/Keeps/sharedKeep")
      .then(res => {
        console.log("Keeps", res.data);
        var allSharedKeeps = res.data;
        allSharedKeeps.sort((projA, projB) => {
          return projB.createdAt - projA.createdAt;
        });
        commit("setKeeps", allSharedKeeps);
      })
      .catch(err => {
        console.log(err);
      });
  },
  createKeep({ commit, dispatch }, keep) {
    api.post("/Keeps", keep).then(res => {
      dispatch("getAllSharedKeeps").catch(err => {
        console.log(err);
      });
    });
  },
  updateKeep({ commit, dispatch }, keep) {
    console.log('Updating keep',keep)
    api.put(`/Keeps/${keep.id}`, keep).then(res => {
      console.log('returing keep',res)
      dispatch("getAllSharedKeeps").catch(err => {
        console.log(err);
      });
    });
  },
  deleteKeep({ commit, dispatch }, payload) {
    console.log("id", payload.id);
    api.delete(`/Keeps/${payload.id}`).then(res => {
      dispatch("getAllSharedKeeps").catch(err => {
        console.log(err);
      });
    });
  },
  changeKeepShared({ commit, dispatch }, payload) {
    var setting = {
      payloadshared: payload[1]
    };
    // clonedProject.shareCount = 0;
    console.log("setting", setting, payload);
    // api
    //   .put(`keeps/${payload[0].id}`, setting)
    //   .then(res => {
    //     dispatch("getUserProjects", payload[0].userId);
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
  },

  }
});
