'use client'

import { useState } from "react"

import Modal from "./Modal"

export default function SubmitCVModal() {
    const [activeModal, setActiveModal] = useState(false)

    return (
        <div className="SubmitCVModal py-10 px-5 lg:py-30">
            <div className="max-w-245 w-full mx-auto flex flex-col text-center items-center">
                <h2 className="mb-4.5 lg:mb-7.5">Interested but No Match? Drop Your CV Here!</h2>
                <button aria-label="Submit your CV" aria-haspopup="dialog" aria-expanded={activeModal} aria-controls="submit-cv-modal" onClick={() => setActiveModal(!activeModal)} className="btn-purple">Apply Now</button>
            </div>
            {activeModal && <Modal id="submit-cv-modal" closeModal={() => setActiveModal(false)} />}
        </div>
    )
}