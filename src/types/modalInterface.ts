export interface ModalProps {
    id?: string
    closeModal: () => void
}

export interface FormDataModal {
    firstName: string
    lastName: string
    email: string
    phone?: string
    position?: string
    cvURL: string
    message?: string
}

export interface StatusModal {
    loading: boolean
    success: boolean
    error: string | null
}