export const state = () => ({
  loans: [],
  loanLength: 0,
  selectedLoan: "",

  about: "",
  aboutContent: "",
  aboutLength: 0,

  totalActiveDeposits: 0,
  totalPendingDeposit: 0,
  totalDeposits: 0,
  totalPendingWithdrawal: 0,
  totalWithdrawal: 0,

  wallets: [],
  walletLength: 0,
  selectedWallet: "",

  transactions: [],
  transactionLength: 0,
  isAllTransactionSelected: false,
  selectedTransactions: [],

  history: [],
  historyLength: 0,
  isAllHistorySelected: false,
  selectedHistory: [],

  referralLength: 0,
  referrals: 0,

  emails: [],
  selectedEmails: [],
  emailLength: 0,
  isAllEmailSelected: false,

  referrals: [],
  selectedReferrals: [],
  referralLength: 0,
  isAllReferralsSelected: false,

  users: [],
  selectedUsers: [],
  userLength: 0,
  isAllUsersSelected: false,

  reviews: [],
  selectedReviews: [],
  reviewLength: 0,
  isAllReviewSelected: false,

  banners: [],
  bannerLength: 0,
  selectedBanners: [],
  isAllBannerSelected: false,

  faq: [],
  faqLength: 0,
  selectedFaq: [],
  isAllFaqSelected: false,

  terms: [],
  termsLength: 0,
  selectedTerms: [],
  isAllTermsSelected: false,

  blog: [],
  blogLength: 0,
  selectedBlog: [],
  isAllBlogSelected: false,

  staffs: [],
  staffLength: 0,
  selectedStaffs: [],
  isAllStaffSelected: false,

  notifications: [],
  notificationLength: 0,
  selectedNotifications: [],
  isAllNotificationSelected: false,

  notifications_temp: [],
  notificationTempLength: 0,

  cards: [],
  cardLength: 0,

  currencies: [],
  currencyLength: 0,
  selectedCurrency: "",
  isAllCurrencySelected: false,

  isNotification: false,

  company: "",

  modalMsg: "",
  showModal: false,
  isModalError: false,
  isModalWarning: false,
  isModalSuccess: false,
  modalTable: "",

  modalAction: "",
  modalURL: "",
  modalItem: "",
  fileURL: "",

  navState: false,
});

function unCheckData(data) {
  if (data == undefined) {
    return data;
  }
  for (let i = 0; i < data.length; i++) {
    let el = data[i];
    el.checked = false;
  }
  return data;
}

export const mutations = {
  TOGGLE_ADMIN_NAV(state) {
    state.adminNavState = !state.adminNavState;
  },

  toggleNavBar(state) {
    state.navState = !state.navState;
  },

  hideNavBar(state) {
    state.navState = false;
  },

  HIDE_DASHBOARD_NAV(state) {
    state.dashboardNavState = false;
  },

  HIDE_NAV(state) {
    state.adminNavState = false;
  },

  SET_URL(state, URL) {
    state.fileURL = URL;
  },

  SHOW_CONFIRMATION(state, { msg, status }) {
    state.confirmMsg = msg;
    state.confirmState = status;
  },

  handleCheckedItems(state, payload) {
    const foundIndex = payload.selectedItems.findIndex(
      (obj) => obj.id === payload.item.id
    );

    if (foundIndex === -1) {
      payload.item.checked = true;
      payload.selectedItems.push(payload.item);
    } else {
      payload.item.checked = false;
      payload.selectedItems.splice(foundIndex, 1);
    }

    switch (payload.type) {
      case "class-settings":
        this.isAllClassSelected =
          payload.items.length == payload.selectedItems.length ? true : false;
        break;
      case "email-settings":
        this.isAllEmailsSelected =
          payload.items.length == payload.selectedItems.length ? true : false;
        break;
      case "banner-settings":
        this.isAllBannerSelected =
          payload.items.length == payload.selectedItems.length ? true : false;
        break;
      case "review-settings":
        this.isAllReviewSelected =
          payload.items.length == payload.selectedItems.length ? true : false;
        break;
      case "user-settings":
        state.isAllUsersSelected =
          payload.items.length == payload.selectedItems.length ? true : false;
        break;
      case "history-settings":
        state.isAllHistorySelected =
          payload.items.length == state.selectedHistory.length ? true : false;
        break;
      case "transaction-settings":
        state.isAllTransactionSelected =
          payload.items.length == state.selectedTransactions.length
            ? true
            : false;
        break;
      case "notification-settings":
        state.isAllNotificationSelected =
          payload.items.length == state.selectedNotifications.length
            ? true
            : false;
        break;
      case "currency-settings":
        state.isAllCurrencySelected =
          payload.items.length == state.selectedCurrency.length ? true : false;
        break;
      default:
        break;
    }
  },

  toggleSelectAllItems(state, payload) {
    function unCheckData(data, status) {
      if (data == undefined) {
        return data;
      }
      for (let i = 0; i < data.length; i++) {
        let el = data[i];
        el.checked = status;
      }
      return data;
    }
    switch (payload) {
      case "class-settings":
        this.isAllClassSelected =
          payload.items.length == payload.selectedItems.length ? true : false;
        break;
      case "email-settings":
        this.isAllEmailsSelected =
          payload.items.length == payload.selectedItems.length ? true : false;
        break;
      case "banner-settings":
        this.isAllBannerSelected =
          payload.items.length == payload.selectedItems.length ? true : false;
        break;
      case "review-settings":
        state.isAllReviewSelected = !state.isAllReviewSelected;
        state.selectedReview = state.isAllReviewSelected
          ? JSON.parse(JSON.stringify(state.reviews))
          : [];
        state.reviews = unCheckData(state.reviews, state.isAllReviewSelected);
        break;
      case "user-settings":
        state.isAllUsersSelected = !state.isAllUsersSelected;
        state.selectedUsers = state.isAllUsersSelected ? state.users : [];
        state.users = unCheckData(state.users, state.isAllUsersSelected);
        break;
      case "history-settings":
        state.isAllHistorySelected = !state.isAllHistorySelected;
        state.selectedHistory = state.isAllHistorySelected
          ? JSON.parse(JSON.stringify(state.history))
          : [];
        state.history = unCheckData(state.history, state.isAllHistorySelected);
        break;
      case "transaction-settings":
        state.isAllTransactionSelected = !state.isAllTransactionSelected;
        state.selectedTransactions = state.isAllTransactionSelected
          ? JSON.parse(JSON.stringify(state.transactions))
          : [];
        state.transactions = unCheckData(
          state.transactions,
          state.isAllTransactionSelected
        );
        break;
      case "notification-settings":
        state.isAllNotificationSelected = !state.isAllNotificationSelected;
        state.selectedNotifications = state.isAllNotificationSelected
          ? JSON.parse(JSON.stringify(state.notifications))
          : [];
        state.notifications = unCheckData(
          state.notifications,
          state.isAllNotificationSelected
        );
        break;
      default:
        break;
    }
  },

  setSelectedCurrency(state, payload) {
    state.selectedCurrency = payload;
  },

  showModal(state, payload) {
    state.modalMsg = payload.msg;
    state.isModalWarning = payload.isWarning;
    state.isModalError = payload.isError;
    state.isModalSuccess = payload.isSuccess;
    state.modalAction = payload.action;
    state.modalURL = payload.url;
    state.modalTable = payload.table;
    state.modalItem = payload.item;
    state.showModal = true;
  },

  hideModal(state) {
    state.showModal = false;
    state.isModalError = false;
    state.isModalWarning = true;
    state.isModalSuccess = false;
  },

  setUsers(state, result) {
    function unCheckData(data) {
      if (data == undefined) {
        return data;
      }
      for (let i = 0; i < data.length; i++) {
        let el = data[i];
        el.checked = false;
      }
      return data;
    }
    state.users = unCheckData(result.data);
    state.userLength = result.totalLength;
  },

  setReviews(state, result) {
    function unCheckData(data) {
      if (data == undefined) {
        return data;
      }
      for (let i = 0; i < data.length; i++) {
        let el = data[i];
        el.checked = false;
      }
      return data;
    }
    state.reviews = unCheckData(result.data);
    state.reviewLength = result.totalLength;
  },

  setReferrals(state, result) {
    function unCheckData(data) {
      if (data == undefined) {
        return data;
      }
      for (let i = 0; i < data.length; i++) {
        let el = data[i];
        el.checked = false;
      }
      return data;
    }
    state.referrals = unCheckData(result.data);
    state.referralLength = result.totalLength;
  },

  setBlog(state, result) {
    state.blog = unCheckData(result.data);
    state.blogLength = result.totalLength;
  },

  setEarnings(state, result) {
    function unCheckData(data) {
      if (data == undefined) {
        return data;
      }
      for (let i = 0; i < data.length; i++) {
        let el = data[i];
        el.checked = false;
      }
      return data;
    }
    state.earnings = unCheckData(result.data);
    state.earningLength = result.totalLength;
  },

  setHistory(state, result) {
    function unCheckData(data) {
      if (data == undefined) {
        return data;
      }
      for (let i = 0; i < data.length; i++) {
        let el = data[i];
        el.checked = false;
      }
      return data;
    }
    state.history = unCheckData(result.data);
    state.historyLength = result.totalLength;
  },

  setCurrencies(state, result) {
    state.currencies = unCheckData(result.data);
    state.currencyLength = result.totalLength;
  },

  setCompany(state, result) {
    state.company = result.data[0];
  },

  setTransactions(state, result) {
    state.transactions = unCheckData(result.data);
    state.transactionLength = result.totalLength;
  },

  setStaffs(state, result) {
    state.staffs = unCheckData(result.data);
    state.staffLength = result.totalLength;
  },

  setReferrals(state, result) {
    state.referrals = unCheckData(result.data);
    state.referralLength = result.totalLength;
  },

  setFaq(state, result) {
    state.faq = unCheckData(result.data);
    state.faqLength = result.totalLength;
  },

  setTerms(state, result) {
    state.terms = unCheckData(result.data);
    state.termsLength = result.totalLength;
  },

  setBanners(state, result) {
    state.banners = unCheckData(result.data);
    state.bannerLength = result.totalLength;
  },

  setAbout(state, result) {
    state.about = result.data[0];
    state.aboutContent = result.data[0].content;

    state.aboutLength = result.totalLength;
  },

  setNotificationTemp(state, result) {
    state.notifications_temp = unCheckData(result.data);
    state.notificationTempLength = result.totalLength;
  },

  setCards(state, result) {
    state.cards = unCheckData(result.data);
    state.cardLength = result.totalLength;
  },

  setNotifications(state, result) {
    function checkNotification(data) {
      data.forEach((el) => {
        if (el.adminStatus == 0) {
          state.isNotification = true;
        }
      });
      return data;
    }

    state.notifications = checkNotification(unCheckData(result.data));
    state.notificationLength = result.totalLength;
  },

  setEmails(state, result) {
    function unCheckData(data) {
      if (data == undefined) {
        return data;
      }
      for (let i = 0; i < data.length; i++) {
        let el = data[i];
        el.checked = false;
      }
      return data;
    }
    state.emails = unCheckData(result.data);
    state.emailLength = result.totalLength;
  },

  setLoans(state, result) {
    state.loans = unCheckData(result.data);
    state.loanLength = result.totalLength;
  },

  selectPlan(state, item) {
    state.selectedLoan = item;
  },
};

export const actions = {
  async makeDELETE({ commit }, url) {
    try {
      const result = await this.$axios.delete(url);
      return result;
    } catch (err) {
      console.log(err.response);
    }
  },

  async makeGET({ commit }, url) {
    try {
      const result = await this.$axios.get(url);
      return result;
    } catch (err) {
      console.log(err.response);
    }
  },

  async makePOST({ commit }, payload) {
    try {
      const result = await this.$axios.post(payload.url, payload.form);
      return result;
    } catch (err) {
      return err;
    }
  },

  async getReviews({ commit, dispatch }, url) {
    const result = await dispatch("makeGET", url);
    commit("setReviews", result.data);
  },

  async getStaffs({ commit, dispatch }, url) {
    const result = await dispatch("makeGET", url);
    commit("setStaffs", result.data);
  },

  async getUsers({ commit, dispatch }, url) {
    const result = await dispatch("makeGET", url);
    commit("setUsers", result.data);
  },

  async getEarnings({ commit, dispatch }, url) {
    const result = await dispatch("makeGET", url);
    commit("setEarnings", result.data);
  },

  async getHistory({ commit, dispatch }, url) {
    const result = await dispatch("makeGET", url);
    commit("setHistory", result.data);
  },

  async getReferrals({ commit, dispatch }, url) {
    const result = await dispatch("makeGET", url);
    commit("setReferrals", result.data);
  },

  async getFaq({ commit, dispatch }, url) {
    const result = await dispatch("makeGET", url);
    commit("setFaq", result.data);
  },

  async getEmails({ commit, dispatch }, url) {
    const result = await dispatch("makeGET", url);
    commit("setEmails", result.data);
  },

  async getCurrencies({ commit, dispatch }, url) {
    const result = await dispatch("makeGET", url);
    commit("setCurrencies", result.data);
  },

  async getManagers({ commit, dispatch }, url) {
    const result = await dispatch("makeGET", url);
    commit("setManagers", result.data);
  },

  async getCompany({ commit, dispatch }, url) {
    const result = await dispatch("makeGET", url);
    commit("setCompany", result.data);
  },

  async getLoans({ commit, dispatch }, url) {
    const result = await dispatch("makeGET", url);
    commit("setLoans", result.data);
  },

  async getTerms({ commit, dispatch }, url) {
    const result = await dispatch("makeGET", url);
    commit("setTerms", result.data);
  },

  async getTransactions({ commit, dispatch }, url) {
    const result = await dispatch("makeGET", url);
    commit("setTransactions", result.data);
  },

  async getWallets({ commit, dispatch }, url) {
    const result = await dispatch("makeGET", url);
    commit("setWallets", result.data);
  },

  async getReferrals({ commit, dispatch }, url) {
    const result = await dispatch("makeGET", url);
    commit("setReferrals", result.data);
  },

  async getBlog({ commit, dispatch }, url) {
    const result = await dispatch("makeGET", url);
    commit("setBlog", result.data);
  },

  async getBanners({ commit, dispatch }, url) {
    const result = await dispatch("makeGET", url);
    commit("setBanners", result.data);
  },

  async getAbout({ commit, dispatch }, url) {
    const result = await dispatch("makeGET", url);
    commit("setAbout", result.data);
  },

  async getNotifications({ commit, dispatch }, url) {
    const result = await dispatch("makeGET", url);
    commit("setNotifications", result.data);
  },

  async getNotificationTemp({ commit, dispatch }, url) {
    const result = await dispatch("makeGET", url);
    commit("setNotificationTemp", result.data);
  },

  async getCards({ commit, dispatch }, url) {
    const result = await dispatch("makeGET", url);
    commit("setCards", result.data);
  },

  async getTotalActiveDeposits({ commit, dispatch }, url) {
    const result = await dispatch("makeGET", url);

    commit("setTotalActiveDeposits", result.data);
  },

  async initializeAdminDetails({ commit, dispatch }, user) {
    // await dispatch("getReviews", `/reviews/?limit=10&page=1`);
    await dispatch(
      "getUsers",
      `/users/?limit=10&page=1&sort=-time&status=User`
    );
    await dispatch("getLoans", `/loans/?limit=10&page=1`);
    await dispatch("getCompany", `/company`);
    await dispatch("getCurrencies", `/currencies/?limit=10&page=1`);
    // await dispatch("getReferrals", `/referrals/?limit=10&page=1&sort=-time`);
    // await dispatch("getFaq", `/faq/?limit=10&page=1&sort=-time`);
    // await dispatch("getTerms", `/terms/?limit=10&page=1&sort=-time`);
    // await dispatch("getBanners", `/banners/?limit=10&page=1&sort=-time`);
    // await dispatch("getStaffs", `/staffs/?limit=10&page=1&sort=-time`);
    // await dispatch("getBlog", `/blog/?limit=10&page=1&sort=-time`);
    // await dispatch("getAbout", `/about`);
    await dispatch(
      "getNotifications",
      `/notifications/?limit=10&page=1&sort=-time`
    );
    await dispatch(
      "getNotificationTemp",
      `/notifications/temp/?limit=10&page=1`
    );
    await dispatch("getEmails", `/emails/?limit=10&page=1&sort=-time`);
    await dispatch("getCards", `/cards/?limit=10&page=1`);
    // await dispatch(
    //   "getTransactions",
    //   `/transactions/?limit=10&page=1&status=0&sort=-time`
    // );
    // await dispatch(
    //   "getEarnings",
    //   `/transactions/earnings/?limit=10&page=1&sort=-time`
    // );
    // await dispatch(
    //   "getActiveDeposits",
    //   `/transactions/active-deposits/?limit=10&page=1&sort=-time`
    // );
    // await dispatch(
    //   "getTotalActiveDeposits",
    //   `/transactions/active-deposits/?limit=200&page=1&sort=-time`
    // );
  },
};
