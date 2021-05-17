export class AuthService {
  loggedIn = false;

  isAuthenticated() {
    return new Promise((res, rej) => {
      setTimeout(() => res(this.loggedIn), 250);
    });
  }

  login() {
    this.loggedIn = true;
  }

  logout() {
    this.loggedIn = false;
  }
}