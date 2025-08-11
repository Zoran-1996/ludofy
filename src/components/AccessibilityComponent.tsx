export default function AccessibilityComponent() {
    return (
        <section className="AccessibilityComponent pt-23 [&_a]:underline [&_a:hover]:opacity-50 [&_a]:transition-opacity [&_a]:duration-300 md:pt-25.5 lg:pt-0">
            <div className="bg-main-clr-dark py-8.75 lg:py-12.5">
                <div className="max-w-237.5 mx-auto w-full px-5 text-white text-lg space-y-7.5 lg:text-xl">
                    <p>This template is designed to help you create an accessibility statement for your website. Please remember, it is your responsibility to ensure that the statement complies with the relevant laws and regulations applicable in your location.</p>
                    <p><i>*Note: This page contains two parts. After you finish customizing the Accessibility Statement below, please remove this introductory section.</i></p>
                    <p>For additional information, refer to our article on “<a href="#" target="_blank" rel="noopener noreferrer">Accessibility: Including an Accessibility Statement on Your Website.</a>”</p>
                </div>
            </div>
            <div className="py-8 lg:py-5.5">
                <div className="max-w-237.5 mx-auto w-full px-5 flex flex-col gap-10 lg:gap-15">
                    <div className="space-y-4 relative after:absolute after:bg-main-clr-dark after:left-1/2 after:transform after:-translate-x-1/2 after:-bottom-5 after:lg:-bottom-7.5 after:h-[1px] after:w-[100vw] after:xl:w-[80vw] lg:space-y-6">
                        <h1>Accessibility Statement</h1>
                        <p>This statement was most recently updated on [insert date].</p>
                        <p>At [insert organization or business name], we are committed to ensuring that our website, [insert website name and URL], is accessible to everyone, including individuals with disabilities.</p>
                    </div>
                    <div className="space-y-4 lg:space-y-6">
                        <h2>What is web accessibility?</h2>
                        <p>A website is considered accessible when it enables all users, including those with disabilities, to navigate and use the site with equal ease and satisfaction as others. Achieving this involves both the features built into the system hosting the website and the use of assistive technologies.</p>
                    </div>
                    <div className="space-y-4 lg:space-y-6">
                        <h2>Accessibility Improvements on This Website</h2>
                        <p>This website has been updated in line with the WCAG [2.0 / 2.1 / 2.2 – please select the applicable version] standards and meets the accessibility level of [A / AA / AAA – please select the applicable conformance level]. The site’s content is designed to function effectively with assistive tools such as screen readers and keyboard navigation. As part of these efforts, we have also [remove any irrelevant items]:</p>
                        <ul className="list-disc pl-7">
                            <li>Utilized an Accessibility Wizard to identify and resolve possible accessibility challenges</li>
                            <li>Specified the website’s primary language</li>
                            <li>Organized the content flow on each page for logical navigation</li>
                            <li>Established clear and consistent heading structures throughout the site</li>
                            <li>Provided descriptive alternative text for all images</li>
                            <li>Applied color schemes that adhere to the necessary contrast requirements</li>
                        </ul>
                    </div>
                    <div className="space-y-4 lg:space-y-6">
                        <h2>Declaration of Partial Compliance Due to Third-Party Content</h2>
                        <p>Some pages on this website include content that is not controlled by our organization but is provided by [insert relevant third-party name]. These pages include: [list the affected URLs]. Because of this third-party content, we declare that these pages are only partially compliant with the applicable accessibility standards.</p>
                        <p>This means that while we strive to meet accessibility requirements on all other parts of the site, the content provided by third parties may not fully conform to these standards.</p>
                    </div>
                    <div className="space-y-4 lg:space-y-6">
                        <h2>Accessibility Arrangements in Our Organization</h2>
                        <p><i>Our physical offices and branches are designed to be accessible to all visitors and staff, including individuals with disabilities. Accessibility features cover the entire user journey, starting from parking areas or public transit access points, continuing through building entrances, and extending to service locations such as reception desks, meeting rooms, restrooms, cafeterias, and classrooms.</i></p>
                        <p>Some specific accessibility arrangements include:</p>
                        <ul className="list-disc pl-7">
                            <li><i>Accessible parking spaces located close to building entrances with clear signage</i></li>
                            <li><i>Barrier-free pathways and entrances equipped with ramps or lifts to accommodate wheelchair users and individuals with limited mobility</i></li>
                            <li><i>Clearly marked routes and signage, including wayfinding aids that are easy to see and understand</i></li>
                            <li><i>Reception and service desks designed to be approachable for people using mobility aids</i></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}