import { useRef, useState, ChangeEvent, FormEvent } from "react"
import { useFocusTrap } from "@/hooks/useFocusTrap"
import { ModalProps } from "@/types/modalInterface"
import { careers } from "@/data/careersData"
import { FormDataModal, StatusModal } from "@/types/modalInterface"

export default function Modal({ closeModal, id }: ModalProps) {
    const [formData, setFormData] = useState<FormDataModal>({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        position: '',
        cvURL: '',
        message: ''
    })

    const [status, setStatus] = useState<StatusModal>({
        loading: false,
        success: false,
        error: null,
    })

    const containerRef = useRef<HTMLDivElement | null>(null)
    const firstInputRef = useRef<HTMLInputElement | null>(null) 

    useFocusTrap(containerRef, true, firstInputRef, closeModal)

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setStatus({ loading: true, success: false, error: null })

        try {
            console.log('Submitted Data:', formData)
            setStatus({ loading: false, success: true, error: null })
        } catch {
            setStatus({ loading: false, success: false, error: 'Submission failed' })
        }
    }

    return (
        <div className="Modal fixed top-0 left-0 w-full h-full flex z-50 bg-main-clr-dark/20 py-25 overflow-auto">
            <div
                id={id}
                ref={containerRef}
                role="dialog"
                aria-modal="true"
                aria-labelledby="modal-title"
                className="bg-electric-violet text-white w-[90%] m-auto rounded-3xl p-10 relative z-52 lg:w-187.5"
            >
                {status.success ? (
                    <p role='alert' className="font-bold text-center p-7">
                        Thank you for having interest in our company. We will shortly get in touch with you!
                    </p>
                ) : (
                    <>
                        <div className="max-w-[80%]">
                            <h2 id="modal-title" className="mb-3">Join Our Team</h2>
                            <p>Send us your CV and a brief note. We’ll review and reach out if there’s a fit!</p>
                        </div>
                        <form onSubmit={handleSubmit} className="mt-7.25 flex flex-col gap-6 [&_input]:border-white">
                            <div className="flex flex-col justify-between gap-6 *:flex *:flex-col *:gap-2 *:basis-[50%] md:flex-row">
                                <div>
                                    <label htmlFor="firstName">First Name *</label>
                                    <input
                                        ref={firstInputRef} 
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        id="firstName"
                                        name="firstName"
                                        type="text"
                                        required
                                        aria-required="true"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="lastName">Last Name *</label>
                                    <input
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        id="lastName"
                                        name="lastName"
                                        type="text"
                                        required
                                        aria-required="true"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col justify-between gap-6 *:flex *:flex-col *:gap-2 *:basis-[50%] md:flex-row">
                                <div>
                                    <label htmlFor="email">Email *</label>
                                    <input
                                        value={formData.email}
                                        onChange={handleChange}
                                        id="email"
                                        name="email"
                                        type="email"
                                        required
                                        aria-required="true"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="phone">Phone</label>
                                    <input
                                        value={formData.phone}
                                        onChange={handleChange}
                                        id="phone"
                                        name="phone"
                                        type="tel"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="position">Position</label>
                                <div className="relative after:absolute after:top-1/2 after:transform after:-translate-y-1/2 after:right-5 after:bg-[url('/icons/dropdown-ico.webp')] after:bg-contain after:bg-center after:bg-no-repeat after:w-3 after:h-3">
                                    <select
                                        value={formData.position}
                                        onChange={handleChange}
                                        className="bg-electric-violet"
                                        name="position"
                                        id="position"
                                    >
                                        {careers.map(career => (
                                            <option key={career.id} value={career.role}>
                                                {career.role}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="cvURL">CV URL *</label>
                                <input
                                    value={formData.cvURL}
                                    onChange={handleChange}
                                    id="cvURL"
                                    name="cvURL"
                                    type="url"
                                    required
                                    aria-required="true"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="message">Introduce yourself</label>
                                <textarea
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="border-white"
                                    name="message"
                                    id="message"
                                ></textarea>
                            </div>
                            <button className="btn-dark py-3" type="submit">Submit</button>
                        </form>

                        <button
                            type="button"
                            onClick={closeModal}
                            className="absolute top-10 right-10 w-10 h-10 flex items-center justify-center text-center text-[50px]"
                            aria-label="Close modal"
                        >
                            &times;
                        </button>
                    </>
                )}
            </div>
            <div onClick={closeModal} className="fixed top-0 left-0 z-49 w-full h-full"></div>
        </div>
    )
}
