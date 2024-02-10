export const initFacebookSdk = () => {
  const clientId = "1562768337851537";
  return new Promise((resolve, reject) => {
    // Load the Facebook SDK asynchronously
    window.fbAsyncInit = () => {
      window.FB.init({
        appId: clientId,
        cookie: true,
        xfbml: true,
        version: "v19.0",
      });
      // Resolve the promise when the SDK is loaded
      resolve();
    };
  });
};

export const getFacebookLoginStatus = () => {
  return new Promise((resolve, reject) => {
    window.FB.getLoginStatus((response) => {
      resolve(response);
    });
  });
};

export const fbLogin = () => {
  return new Promise((resolve, reject) => {
    window.FB.login(
      (response) => {
        resolve(response);
      },
      {
        scope:
          "pages_manage_engagement,pages_manage_metadata,pages_read_engagement,pages_messaging",
      }
    );
  });
};

export const fbLogout = () => {
  return new Promise((resolve, reject) => {
    window.FB.logout((response) => {
      resolve(response);
    });
  });
};
