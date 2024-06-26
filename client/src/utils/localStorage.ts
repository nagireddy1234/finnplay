export const saveDataInLocalStorage = (key: string, value: unknown) => {
    localStorage.setItem(key, JSON.stringify(value))
}

export const getDataFromLocalStorage = (key: string) => {
    try {
        const data = localStorage.getItem(key)
        if (data) {
            return JSON.parse(data)
        }
        return null
    } catch (err) {
        console.log(err)
        return {}
    }
}

export const removeDataFromLocalStorage = (key: string) => {
    localStorage.removeItem(key)
}

export const localStorageKeys = {
    login: "login",
    userLoggin:'userLoggin',
  };
