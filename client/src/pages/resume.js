import React from "react";
import BodyDiv from "../Components/Navigation/bodyDiv"
import NavBar from "../Components/Navigation/NavBar";

import "./resume.css"


function Resume() {
    return (
        <div>
            <NavBar />
            <BodyDiv>
                <div className="main-panel" id="resume">
                    <h3>Resume</h3>
                    <a href="https://drive.google.com/file/d/1OYGGSyVE35UBwBu_RaFr1sw3RbDqow5d/view?usp=sharing">link</a>
                    <div id="resume-summary" className="resume-section">
                        <h4 className="resume-heading">SUMMARY</h4>
                        <p className="centered-text">HR professional experienced in working at hyper growth organizations interested
                            in applying strong analytics foundation and project management skills to partner with business
                    leaders in delivering world class strategic employee experience. </p>
                    </div>

                    <div id="resume-skills" className="resume-section">
                        <h4 className="resume-heading">SKILLS</h4>
                        <ul className="highlights-section">
                            <li className="highlights"> Technical Languages: CSS, Javascript, HTML, Firebase Database</li>
                            <li className="highlights"> Language: Native speaker in written and spoken Spanish and English</li>
                            <li className="highlights"> Business Tools: Microsoft Suite, Google Suite, Platfora. Some experience
                        with Workday, Greenhouse, Tableau</li>
                            <li>Analysis Tools: Some experience with Python Pandas, Web Analytics, and SQL</li>
                            <li>HRIS: Workday (Report Writer Trained) and strong HCM knowledge; some experience as ADP Admin
                        </li>
                        </ul>
                    </div>

                    <div id="resume-experience" className="resume-section">
                        <h4 className="resume-heading">RELEVANT EXPERIENCE</h4>
                        <p className="company">GRAND ROUNDS INC</p>
                        <p className="timing">Jan 2018 – August 2019</p>
                        <p className="title">Senior People Analytics Manager (Apr ’19 - Present) | People Analytics Manager (Jan
                            ’18
                        - Mar ’19)</p>

                        <div className="work-div"> Talent Management: Enabled talent management by single handedly creating
                            google sheet tooling to collect performance reviews
                        <ul className="highlights-section">
                                <li className="highlights"> Over 3 cycles, created over 200 performance sheets that seamlessly
                                    allowed
                                    managers to provide ratings
                                for their employees.</li>
                                <li className="highlights">
                                    Drafted and launched internal content and communications that clarified intent of new
                                process and set clear expectations.</li>
                                <li className="highlights">
                                    Utilized third party compensation data to generate focal statements that recommended pay
                                    and
                                equity increases dynamically.</li>
                                <li className="highlights">
                                    Generated about 600 compensation statements by bringing disparate sources of data into
                                    one
                                    single clean
                                source.</li>
                                <li className="highlights">
                                    Analyzed and presented talent management findings to Executive Staff, highlighting key
                                    wins
                                    and
                                    focus
                                    areas.
                            </li>
                            </ul>
                        </div>


                        <div className="work-div"> Organizational Health Insights: Partnered with CHRO to develop and answer key
                            organizational questions
                            in quarterly reviews
                        <ul className="highlights-section">
                                <li className="highlights"> Evolved analytics capability from a few reportable metrics to a
                                    standard
                                    set of quarterly metrics used
                                to inform org health.</li>
                                <li className="highlights">
                                    Launched new hire survey and expanded scope of engagement survey to ensure actionable
                                    insights.
                            </li>
                                <li className="highlights">
                                    Scaled quarterly reporting to become monthly reporting in interim to Workday launch.
                            </li>
                            </ul>
                        </div>




                        <p className="company">APTTUS</p>
                        <p className="timing">June 2017 – Jan 2018</p>
                        <p className="title">Manager, HR Analytics & Systems</p>

                        <div className="work-div"> The Voice of Apttus Survey: Launched first-ever engagement survey to 1,200
                            employees through Glint
                            survey platform
                        <ul className="highlights-section">
                                <li className="highlights"> Created benchmark criteria to select vendor and identified product
                                    with
                                    the highest long term value to
                                the company.</li>
                                <li className="highlights">
                                    Identified key outcome variables to measure, gained stakeholder buy-in. Selected and
                                    modified questions
                                with user in mind.</li>
                                <li className="highlights">
                                    Analyzed 972 responses and 2,600 open text responses to produce C-Suite, Executive and
                                    Manager level
                                    summary reports for a total of 109 managers. Built framework to assist managers identify
                                    areas to focus
                                their energy.</li>
                            </ul>
                        </div>

                        <div className="work-div"> Data Collection & Optimization: Identified data gaps, root cause of gap and
                            implemented processes to
                            improve data quality
                        <ul className="highlights-section">
                                <li className="highlights"> India Compensation Data: Improved India data quality matches from less
                                    than 30% to over 95% across India
                                Payroll and HRIS.</li>
                                <li className="highlights">
                                    Exit Survey: Created Exit Questionnaire to better understand what is driving people’s
                                    decision to leave
                                    Apttus
                            </li>
                            </ul>
                        </div>

                        <div className="work-div"> Workday Implementation: Part of lean HR Team working to migrate from ADP to
                            Workday
                        <ul className="highlights-section">
                                <li className="highlights"> Participated in design sessions and highlighted opportunities for
                                    process
                                optimization and simplicity.</li>
                                <li className="highlights">
                                    Organized the team to ensure timely development of key deliverables: data loads, User
                                    Acceptance Testing
                                    and E2E Testing.
                            </li>
                            </ul>
                        </div>




                        <p className="company">UBER TECHNOLOGIES</p>
                        <p className="timing">August 2014 – May 2017</p>
                        <p className="title">People Development Analytics Lead & HR Special Projects (1 year), Strategic
                            Insights
                        Analyst (2 years)</p>

                        <div className="work-div"> Performance Nudges: Scaled Tech HR Business Partners’ ability to coach
                            managers
                            through performance
                            management nudges.
                        <ul className="highlights-section">
                                <li className="highlights"> Worked with Engineering team to automate survey creation enabling a
                                    scalable way to email managers,
                                    share content on next steps and collect data on how they would address the development
                                    needs
                                    of low
                                performers.</li>
                                <li className="highlights">
                                    Nudges gave HRPs and leadership visibility into how first line managers were managing
                                    performance issues
                                and allowed HRPs to focus their energy on the most complex performance issues.</li>
                            </ul>
                        </div>




                        <div className="work-div"> The Meridian Project: Developed key manager competencies and behaviors based
                            on
                            mixed research methods
                        <ul className="highlights-section">
                                <li className="highlights"> Led survey design using themes from external management research.
                                    Reviewed
                                    deliverables with CHRO,
                                People Leadership Team and Harvard Business School Professor Frances Frei.</li>
                                <li className="highlights">
                                    Launched a fully anonymous survey to ~14,000 employees to understand management
                                    behaviors
                                    that drive
                                    perceptions that one has a great manager that allowed us to stack rank manager
                                    qualities.
                            </li>
                            </ul>
                        </div>


                        <div className="work-div"> People Development Analytics: Partnered with Learning & Development
                            Leadership
                            and Program Managers to
                            develop program strategy, design, execution and evaluation.
                        <ul className="highlights-section">
                                <li className="highlights"> Onboarding Program Revamp: Recommended changes to existing program
                                    that
                                    would reduce operational costs
                                while addressing dips in engagement, sense of belonging, and intent to stay.</li>
                                <li className="highlights">2017 Strategy: Validated hypotheses developed through initial needs
                                    assessment based on biggest people
                                    challenges HR Business Partners saw in their client groups. Identified levers to address
                                    problem areas.
                            </li>
                            </ul>
                        </div>

                        <div className="work-div"> Additional Projects: Used data and storytelling to bring to light existing
                            employee challenges,
                            highlighted potential risks and issues to HR Directors and Business Leaders.
                        <ul className="highlights-section">
                                <li className="highlights"> Executive Performance and Organizational Health: Identified CEO and
                                    Execs’
                                    strengths and weaknesses by
                                    reading and summarizing 360 Performance Feedback, Culture Survey Responses, Manager
                                    Survey
                                    findings and
                                interviews with HR leadership.</li>
                                <li className="highlights">Diversity Report: Worked with head of Diversity & Inclusion to design
                                    and
                                    create Uber’s first diversity
                                    report
                            </li>
                                <li className="highlights">Performance Analysis: Ran correlations to understand the impact of
                                    performance calibrations on final
                                    ratings of employees. Used Natural Language Processing tools to identify differentiating
                                    traits of Top
                                    Performers.
                            </li>
                                <li className="highlights"> Attrition Analysis: Used cohorting technique to understand how
                                    attrition
                                    at Uber was trending over time.
                                    Used Exit Surveys and demographic data to understand what was driving the attrition.
                            </li>
                            </ul>
                        </div>






                        <p className="company">ACCENTURE</p>
                        <p className="timing">July 2013 - August 2014</p>
                        <p className="title">Senior Business Analyst</p>

                        <div className="work-div">
                            <ul className="highlights-section">
                                <li className="highlights"> Established meeting cadence; assisted in creating governance
                                    framework;
                                    and developed program reporting
                                    tools that allowed Program Operations team to effectively manage the team despite
                                    increasing
                                    sevenfold
                                in size.</li>
                                <li className="highlights">
                                    As sales operations consultant, developed pipeline management and reporting tools which
                                    assessed the
                                    state of the project and framed strategic conversations during weekly management and
                                executive meetings.</li>
                            </ul>
                        </div>

                    </div>



                    <div id="resume-education" className="resume-section">
                        <h4 className="resume-heading">EDUCATION</h4>
                        <div>
                            <p className="company">Berkeley, Extension School</p>
                            <p className="timing">2020</p>
                            <p className="title">Full Stack Developer Program
                        </p>
                        </div>
                        <div>
                            <p className="company">Wellesley College</p>
                            <p className="timing">August 2009 - May 2013</p>
                            <p className="title">Bachelor in Economics, cross registered at MIT Sloan School of Management (2
                                yrs)
                        </p>
                        </div>

                    </div>


                </div>
            </BodyDiv>
        </div>

    )
}

export default Resume;