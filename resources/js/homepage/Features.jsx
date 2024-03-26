import React, { Component } from "react";
import Icon from "@mdi/react";
import { mdiClockIn, mdiPauseCircleOutline, mdiMonitorEye } from "@mdi/js";
import '/resources/scss/homepage/Features.scss';
import app2 from "/public/app-image/app2.png";


export default function Features() {
    return (
        <section className="features" id="features">
            <article className="features-container">
                <div className="features-all">
                    <div className="features-card">
                        <div className="features-card-background">
                            <Icon
                                path={mdiClockIn}
                                title="User Profile"
                                size={2}
                                color="black"

                            />
                        </div>
                        <h2>Clock-in and Clock-out</h2>
                        <p>
                            Easily record employee arrivals and departures with
                            just one click, ensuring accurate time tracking.
                        </p>
                    </div>
                    <div className="features-card">
                        <div className="features-card-background">
                            <Icon
                                path={mdiPauseCircleOutline}
                                title="User Profile"
                                size={2}
                                color="black"
                            />
                        </div>
                        <h2>Customizable Break Management</h2>
                        <p>
                            Tailor breaks to suit your company's needs, whether
                            it's lunch breaks, short breaks, or designated time
                            for specific activities like smoking.
                        </p>
                    </div>
                    <div className="features-card">
                        <div className="features-card-background">
                            <Icon
                                path={mdiMonitorEye}
                                title="User Profile"
                                size={2}
                                color="black"
                            />
                        </div>
                        <h2>Real-time Monitoring</h2>
                        <p>
                            Stay informed with real-time updates on employee
                            attendance and breaks, allowing for better
                            management of work schedules.
                        </p>
                    </div>
                </div>
                <div className="features-other">
                    <div className="features-text">
                        <h2>
                            Boost Productivity and Efficiency in Your Workplace!
                        </h2>
                        <p>
                            Our app streamlines attendance management, saving
                            you time and resources while enhancing overall
                            productivity.
                        </p>
                    </div>
                    <div className="features-image">
                        <img src={app2} alt="" />
                    </div>
                </div>
            </article>
        </section>
    );
}
