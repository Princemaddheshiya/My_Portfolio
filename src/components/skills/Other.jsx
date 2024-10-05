import React from "react";
import { HiCheckBadge } from "react-icons/hi2";

const Other = () => {
    return(
        <div className="skills__content">
        <h3 className="skills__title">Other Technology</h3>
        <div className="skills__box">
            <div className="skills__group">
                <div className="skills__data">
                    <HiCheckBadge />
                    <div>
                        <h3 className="skills__name">Python</h3>
                        <span className="skills__level">Basic</span>
                    </div>
                </div>
                <div className="skills__data">
                    <HiCheckBadge />
                    <div>
                        <h3 className="skills__name">Numpy</h3>
                        <span className="skills__level">Basic</span>
                    </div>
                </div>
                <div className="skills__data">
                    <HiCheckBadge />
                    <div>
                        <h3 className="skills__name">Pandas</h3>
                        <span className="skills__level">Basic</span>
                    </div>
                </div>
            </div>
            <div className="skills__group">
                <div className="skills__data">
                    <HiCheckBadge />
                    <div>
                        <h3 className="skills__name">Matplotlib</h3>
                        <span className="skills__level">Basic</span>
                    </div>
                </div>
                <div className="skills__data">
                    <HiCheckBadge />
                    <div>
                        <h3 className="skills__name">Seaborn</h3>
                        <span className="skills__level">Basic</span>
                    </div>
                </div>
                <div className="skills__data">
                    <HiCheckBadge />
                    <div>
                        <h3 className="skills__name">C/C++</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Other;