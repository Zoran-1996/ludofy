import PersonCard from "./PersonCard"

import { employees } from "@/data/employeesData"

export default function Employees() {
    return (
        <section aria-label="Team members of Ludofy" className="Employees wrapper py-10 lg:py-25">
            <h2 className="text-center mb-10 lg:mb-20">The People Behind Ludofy</h2>
            <ul className="grid grid-cols-1 gap-10 px-5 xl:px-0 md:grid-cols-2 lg:grid-cols-3">
                {employees.map(employee => (
                    <li key={employee.id}>
                        <PersonCard
                            profileAsset={employee.profileAsset}
                            fullName={employee.fullName}
                            role={employee.role}
                        />
                    </li>
                ))}
            </ul>
        </section>
    )
}