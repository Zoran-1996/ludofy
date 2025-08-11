'use client'

import { useState } from 'react'

import Modal from '@/components/Modal'

import { careersInterfaceProps } from "@/types/careersInterface"

interface CareerContentProps {
    career: careersInterfaceProps
}

export default function CareerContent({ career }: CareerContentProps) {
    const [activeModal, setActiveModal] = useState(false)

    return (
        <>
            <div className="pt-23 md:pt-25.5 lg:pt-0">
                <div className="wrapper relative px-5 py-10 bg-main-clr-dark text-white lg:p-30">
                    <div className="w-full xl:max-w-[48%] 2xl:max-w-[60%]">
                        <span className="mb-2.5 inline-block text-lg font-bold">Careers</span>
                        <h1 className="mb-5">{career.role}</h1>
                        <div className="text-3xl space-y-1">
                            <p>Location: {career.location}</p>
                            <p>Employment Type: {career.employmentType}</p>
                        </div>
                    </div>
                </div>

                <div className="max-w-225 mx-auto gap-5 px-5 py-10 lg:py-25">
                    <div className="flex flex-col justify-between gap-10 lg:flex-row lg:gap-20">
                        {career.whatYourRoleIs && (
                            <div>
                                <h2 className="mb-5">What You’ll Do</h2>
                                <div className="space-y-5">
                                    {career.whatYourRoleIs.map((role, index) => (
                                        <p key={index}>{role}</p>
                                    ))}
                                </div>
                            </div>
                        )}
                        {career.whoAreYou && (
                            <div>
                                <h2 className="mb-5">Who You Are</h2>
                                <div className="space-y-5">
                                    {career.whoAreYou.map((who, index) => (
                                        <p key={index}>{who}</p>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                    <button aria-label='Apply for role by filling newsletter' aria-haspopup="true" aria-controls='apply-modal' aria-expanded={activeModal} className="btn-purple mt-10" onClick={() => setActiveModal(true)}>
                        Apply Now
                    </button>
                </div>
            </div>

            {activeModal && <Modal id="apply-modal" closeModal={() => setActiveModal(false)} />}
        </>
    )
}
