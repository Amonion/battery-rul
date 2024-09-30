export default function ({ store, redirect, route }) {
  const protectedRoutes = ["dashboard", "admin"];
  if (route.name == "blog-details" && store.state.selectedBlog == "") {
    return redirect("/blog");
  }

  store.commit("dashboard/setRoute", route.name);
  store.commit("dashboard/hideNavBar");
  store.commit("admin/hideNavBar");
  // if (store.state.auth.loggedIn && store.state.auth.user.status == "Admin") {
  //   return redirect("/admin");
  // }
  // if (
  //   !store.state.auth.loggedIn &&
  //   (route.name.includes("dashboard") || route.name.includes("admin"))
  // ) {
  //   return redirect("/login");
  // }
  // if (
  //   store.state.auth.loggedIn &&
  //   (route.name.includes("login") || route.name.includes("signup"))
  // ) {
  //   return redirect("/dashboard");
  // }

  if (store.state.auth.loggedIn) {
    const path = route.name;
    let redirectAdmin = "";

    if (route.name != null && store.state.auth.loggedIn) {
      if (
        route.name == "login" ||
        route.name == "signup"
        // path.includes("dashboard") &&
        // store.state.auth.user.status == "Staff"
      ) {
        redirectAdmin = "admin";
      }

      if (redirectAdmin == "admin") {
        return redirect("/dashboard");
      }
    }
  }

  if (!store.state.auth.loggedIn) {
    const path = route.name;
    if (route.name != null) {
      protectedRoutes.forEach((el) => {
        if (path.includes(el)) {
          return redirect("/login");
        }
      });
    }
  }
  if (store.state.auth.loggedIn && store.state.auth.user.status == "User") {
    const path = route.name;
    if (route.name == "signup") {
      return redirect("/dashboard");
    }
  }
  if (store.state.auth.loggedIn && store.state.auth.user.status == "Admin") {
    const path = route.name;
    if (route.name == "dashboard") {
      return redirect("/admin");
    }
  }
}
