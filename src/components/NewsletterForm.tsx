/* eslint-disable @typescript-eslint/no-unused-vars */

'use client'

import { useRef, useState, ChangeEvent, FormEvent } from 'react'

import { useGSAP } from '@gsap/react'
import { fadeInFromLeft } from '@/animations/gsap/fadeInFromLeft'

import { FormDataNewsletter, StatusNewsletter } from '@/types/newsletterFormInterface'
import Image from 'next/image'

export default function NewsletterForm() {
    const newsletterFormRef = useRef<HTMLFormElement>(null)

    const [formData, setFormData] = useState<FormDataNewsletter>({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: '',
        subscribe: false,
    })

    const [status, setStatus] = useState<StatusNewsletter>({
        loading: false,
        success: false,
        error: null,
    })

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const target = e.target

        const { name, type, value } = target

        setFormData((prev) => ({
            ...prev,
            [name]: type === 'checkbox' && target instanceof HTMLInputElement ? target.checked : value,
        }))
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        setStatus({
            loading: true,
            success: false,
            error: null,
        })

        try {
            console.log('Submitted Data:', formData)

            setStatus({
                loading: false,
                success: true,
                error: null,
            })
        } catch (error) {
            setStatus({
                loading: false,
                success: false,
                error: 'Submission failed',
            })
        }
    }

    useGSAP(() => {
        return fadeInFromLeft(newsletterFormRef)
    }, [])

    return (
        <form
            onSubmit={handleSubmit}
            ref={newsletterFormRef}
            className="NewsletterForm bg-white max-w-122.5 w-full rounded-[20px] p-7.5 mx-auto main-shadow md:mx-[initial]"
        >
            {status.success ? (
                <p role='alert' className="font-bold text-center p-7">Thank you for submitting for our newsletter. We will shortly get in touch with you!</p>
            ) :
                <div>
                    <Image
                        aria-hidden="true"
                        className='mx-auto mb-5'
                        src="/icons/newspaper.svg"
                        width={100}
                        height={100}
                        alt=""
                        style={{
                            objectFit: 'contain'
                        }}
                    />
                    <h3 className="mb-2.5">Stay Connected</h3>

                    <p className="mb-6 md:mb-8.25">We’d love to hear from you! Fill out the form below to send us a message or subscribe to our newsletter.</p>

                    <div className='space-y-4'>
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
                            <div className="flex flex-col gap-1.5">
                                <label htmlFor="firstName">First Name<span aria-hidden="true">*</span></label>
                                <input
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    required
                                    aria-required="true"
                                    type="text"
                                    name="firstName"
                                    id="firstName"
                                />
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <label htmlFor="lastName">Last Name<span aria-hidden="true">*</span></label>
                                <input
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    required
                                    aria-required="true"
                                    type="text"
                                    name="lastName"
                                    id="lastName"
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
                            <div className="flex flex-col gap-1.5">
                                <label htmlFor="email">Email<span aria-hidden="true">*</span></label>
                                <input
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    aria-required="true"
                                    type="email"
                                    name="email"
                                    id="email"
                                />
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <label htmlFor="subject">Subject</label>
                                <input
                                    value={formData.subject}
                                    onChange={handleChange}
                                    type="text"
                                    name="subject"
                                    id="subject"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <label htmlFor="message">Message</label>
                            <textarea
                                value={formData.message}
                                onChange={handleChange}
                                name="message"
                                id="message"
                            ></textarea>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className='custom-checkbox'>
                                <label>
                                    <input checked={formData.subscribe} onChange={handleChange} required aria-required="true" name="subscribe" id="subscribe" type="checkbox" />
                                    <span>Yes, I want to receive updates and news.<span aria-hidden="true">*</span></span>
                                    <span></span>
                                </label>
                            </div>
                        </div>
                        <button
                            className="font-bold text-white bg-main-clr-dark w-full py-2.75 px-3.75 rounded-[100px] cursor-pointer transition-colors duration-200 ease-in-out hover:bg-electric-violet"
                            type="submit"
                        >
                            {status.loading ? 'Sending…' : 'Submit'}
                        </button>
                    </div>
                </div>}
        </form>
    )
}