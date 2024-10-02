export const state = () => ({
  navState: false,
  features: "",
  confirmMsg: "",
  confirmState: true,
});

export const getters = {
  isAuthenticated(state) {
    return state.auth.loggedIn; // auth object as default will be added in vuex state, when you initialize nuxt auth
  },

  getUserInfo(state) {
    return state.auth.user;
  },
};

export const mutations = {
  TOGGLE_NAV(state) {
    state.navState = !state.navState;
  },

  setFeatures(state, form) {
    state.features = form;
  },

  setUser(state, data) {
    state.auth.user = data;
  },

  HIDE_NAV(state) {
    state.navState = false;
  },

  SET_URL(state, URL) {
    state.fileURL = URL;
  },

  SHOW_CONFIRMATION(state, { msg, status }) {
    state.confirmMsg = msg;
    state.confirmState = status;
  },

  TOGGLE_DASHBOARD_NAV(state) {
    state.showDashboardNav = !state.showDashboardNav;
  },
};

export const actions = {};
