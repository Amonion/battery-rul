export const state = () => ({
  loans: [],
  loanLength: 0,
  selectedLoan: "",

  notifications: [],
  notificationLength: 0,
  isRead: false,

  transactions: [],
  transactionLength: 0,

  currencies: [],
  currencyLength: 0,
  selectedCurrency: "",
  isAllCurrencySelected: false,

  cards: [],
  cardLength: 0,
  selectedCard: "",

  accounts: [],
  selectedAccount: "",

  isNotification: false,

  company: "",
  transactionDetails: "",

  modalMsg: "",
  showModal: false,
  isModalError: false,
  isModalWarning: false,
  isModalSuccess: false,

  modalAction: "",
  modalURL: "",
  modalItem: "",
  fileURL: "",
  route: "",

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

  setRoute(state, route) {
    state.route = route;
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

  setTransactionDetails(state, details) {
    state.transactionDetails = details;
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
    for (let i = 0; i < state.accounts.length; i++) {
      const el = state.accounts[i];
      if (el.currencyId == payload.id) {
        state.selectedAccount = el;
      }
    }
  },

  setAccounts(state, result) {
    state.accounts = result.data;
    for (let i = 0; i < state.accounts.length; i++) {
      const el = state.accounts[i];
      if (el.currencyId == state.selectedCurrency.id) {
        state.selectedAccount = el;
      }
    }
  },

  showModal(state, payload) {
    state.modalMsg = payload.msg;
    state.isModalWarning = payload.isWarning;
    state.isModalError = payload.isError;
    state.isModalSuccess = payload.isSuccess;
    state.modalAction = payload.action;
    state.modalURL = payload.url;
    state.modalTalbe = payload.table;
    state.modalItem = payload.item;
    state.showModal = true;
  },

  hideModal(state) {
    state.showModal = false;
    state.isModalError = false;
    state.isModalWarning = true;
    state.isModalSuccess = false;
  },

  unCheckData(state, data) {
    if (data == undefined) {
      return data;
    }
    for (let i = 0; i < data.length; i++) {
      let el = data[i];
      el.checked = false;
    }
    return data;
  },

  setCompany(state, result) {
    state.company = result.data[0];
  },

  setTransactions(state, result) {
    state.transactions = unCheckData(result.data);
    state.transactionLength = result.totalLength;
  },

  setCards(state, result) {
    const cards = unCheckData(result.data);
    let first = cards[0];
    first.checked = true;
    cards[0] = first;
    state.cards = cards;
    state.selectedCard = first;
    state.cardLength = result.totalLength;
  },

  setNotifications(state, result) {
    let isRead = false;
    for (let i = 0; i < result.data.length; i++) {
      const el = result.data[i];
      if (el.isRead == 0) {
        isRead = true;
        break;
      }
    }
    state.isRead = isRead;
    state.notifications = result.data;
    state.notificationLength = result.totalLength;
  },

  setCurrencies(state, result) {
    const currencies = unCheckData(result.data);
    let first = currencies[0];
    first.checked = true;
    currencies[0] = first;
    state.selectedCurrency = first;
    state.currencies = currencies;
    state.currencyLength = result.totalLength;

    for (let i = 0; i < state.accounts.length; i++) {
      const el = state.accounts[i];
      if (el.currencyId == first.id) {
        state.selectedAccount = el;
      }
    }
  },

  selectCurrency(state, item) {
    const currencies = unCheckData(state.currencies);
    let first = item;
    first.checked = true;
    state.currencies = currencies;

    for (let i = 0; i < state.accounts.length; i++) {
      const el = state.accounts[i];
      if (el.id == item.id) {
        state.selectedAccount = el;
      }
    }

    for (let i = 0; i < state.currencies.length; i++) {
      const el = state.currencies[i];
      if (el.id == item.id) {
        state.currencies[i] = item;
      }
    }
    state.selectedCurrency = item;

    for (let i = 0; i < state.accounts.length; i++) {
      const el = state.accounts[i];
      if (el.currencyId == item.id) {
        state.selectedAccount = el;
      }
    }
  },

  setLoans(state, result) {
    const loans = unCheckData(result.data);
    let first = loans[0];
    first.checked = true;
    loans[0] = first;
    state.loans = loans;
    state.loanLength = result.totalLength;

    state.selectedLoan = first;
  },

  selectLoan(state, item) {
    const loans = unCheckData(state.loans);
    let first = item;
    first.checked = true;
    state.loans = loans;
    for (let i = 0; i < state.loans.length; i++) {
      const el = state.loans[i];
      if (el.id == item.id) {
        if (item.max == 0) {
          item.max = "Unlimited";
        }
        state.loans[i] = item;
      }
    }
    state.selectedLoan = item;
  },

  selectCard(state, item) {
    const cards = unCheckData(state.cards);
    let first = item;
    first.checked = true;
    state.cards = cards;
    for (let i = 0; i < state.cards.length; i++) {
      const el = state.cards[i];
      if (el.id == item.id) {
        if (item.max == 0) {
          item.max = "Unlimited";
        }
        state.cards[i] = item;
      }
    }
    state.selectedCard = item;
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

  async getCurrencies({ commit, dispatch }, url) {
    const result = await dispatch("makeGET", url);
    commit("setCurrencies", result.data);
  },

  async getCompany({ commit, dispatch }, url) {
    const result = await dispatch("makeGET", url);
    commit("setCompany", result.data);
  },

  async getAccounts({ commit, dispatch }, url) {
    const result = await dispatch("makeGET", url);
    commit("setAccounts", result.data);
  },

  async getLoans({ commit, dispatch }, url) {
    const result = await dispatch("makeGET", url);
    commit("setLoans", result.data);
  },

  async getTransactions({ commit, dispatch }, url) {
    const result = await dispatch("makeGET", url);
    commit("setTransactions", result.data);
  },

  async getCards({ commit, dispatch }, url) {
    const result = await dispatch("makeGET", url);
    commit("setCards", result.data);
  },

  async getNotifications({ commit, dispatch }, url) {
    const result = await dispatch("makeGET", url);
    commit("setNotifications", result.data);
  },

  async getNotificationState({ commit, dispatch }, url) {
    const result = await dispatch("makeGET", url);
    commit("setNotificationState", result.data);
  },

  async initializeAdminDetails({ commit, dispatch }, user) {
    await dispatch("getLoans", `/loans/?limit=10&page=1`);
    await dispatch("getCompany", `/company`);
    await dispatch(
      "getAccounts",
      `/accounts/?limit=10&page=1&username=${user.username}`
    );
    await dispatch(
      "getTransactions",
      `/transactions/?limit=10&page=1&username=${user.username}&sort=time`
    );
    await dispatch("getCurrencies", `/currencies/?limit=10&page=1&sort=name`);
    await dispatch("getCards", `/cards/?limit=10&page=1`);
    await dispatch(
      "getNotifications",
      `/notifications/?limit=10&page=1&sort=-time&username=${user.username}`
    );
    // await dispatch("getEmails", `/emails/?limit=10&page=1&sort=-time`);
    // await dispatch(
    //   "getHistory",
    //   `/transactions/?limit=10&page=1&status=1&sort=-time`
    // );
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
