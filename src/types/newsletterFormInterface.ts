export interface FormDataNewsletter {
    firstName: string
    lastName: string
    email: string
    subject?: string
    message?: string
    subscribe: boolean
}

export interface StatusNewsletter {
    loading: boolean
    success: boolean
    error: string | null
}