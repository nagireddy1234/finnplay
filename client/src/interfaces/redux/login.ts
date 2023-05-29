export interface ILogin {
    isAuthenticated: boolean
    isLoading: boolean
    userDetails: {
        userName: string
    }
}
