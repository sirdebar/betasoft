import Styles from './Main.module.css';
import { softwareData } from '../../constants/data';

function Main() {
    return (
        <main className={Styles["main"]}>
            <div className={Styles["about-container"]}>
                <div className={Styles["about-left"]}>
                    <h1>Our site provides <br /> access to <span>free</span> premium <br /> <span>downloads</span> </h1>
                    <p>Our site provides users with absolutely safe cracks of various software so that you can save your money. <br /> For more than 2 years, our website has been providing <br /> the latest versions of software for free. </p>
                </div>
                <div className={Styles["about-right"]}>
                    <div className={Styles["about-card"]}>
                        <h1><strong>15+</strong></h1>
                        <p>The programs are <br />available on our site</p>
                    </div>
                    <div className={Styles["about-card"]}>
                        <h1><strong>150K+</strong></h1>
                        <p>Total number of<br />downloads from our site</p>
                    </div>
                    <div className={Styles["about-card"]}>
                        <h1><strong>600,4K+</strong></h1>
                        <p>The programs are <br />available on our site</p>
                    </div>
                    <div className={Styles["about-card"]}>
                        <h1><strong>$500K+</strong></h1>
                        <p>So much money we<br />helped save our visitors.</p>
                    </div>
                </div>
            </div>
            <div className={Styles["cards-container"]}>
                {softwareData.map(software => (
                    <div key={software.id} className={Styles["card"]}>
                        <img src={software.logo} alt={`${software.name} logo`} className={Styles["card-logo"]} />
                        <h2 className={Styles["card-name"]}>{software.name}</h2>
                        <div className={Styles["downloads"]}>
                            <img src="/images/cloud.png" alt=""/>
                            <p className={Styles["card-downloads"]}>{software.downloads}</p>
                        </div>
                        <p className={Styles["card-description"]}>{software.description}</p>
                        <a href={`/files/${software.downloadLink}`} download className={Styles["card-download-button"]}>Download</a>
                    </div>
                ))}
            </div>
        </main>
    );
}

export default Main;
