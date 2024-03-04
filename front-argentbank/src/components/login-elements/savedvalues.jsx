export function getLocalStorageValues(keys) {
  const values = {};
  keys.forEach((key) => {
    values[key] = localStorage.getItem(key);
  });
  return values;
}

export function saveLoginCredentials(email, password) {
  localStorage.setItem("rememberedEmail", email);
  localStorage.setItem("rememberedPassword", password);
  localStorage.setItem("rememberMe", "true");
}

export function deleteLoginCredentials() {
  localStorage.removeItem("rememberedEmail");
  localStorage.removeItem("rememberedPassword");
  localStorage.removeItem("rememberMe");
}
