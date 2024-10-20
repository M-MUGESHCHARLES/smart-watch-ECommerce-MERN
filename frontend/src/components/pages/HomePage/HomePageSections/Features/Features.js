import React from "react";
import { ReactComponent as HealthIcon } from "../../../../images/icons/health-svgrepo-com.svg";
import { ReactComponent as NotificationIcon } from "../../../../images/icons/notification-unread-lines-svgrepo-com.svg";
import { ReactComponent as WaterIcon } from "../../../../images/icons/water-svgrepo-com.svg";
import { ReactComponent as BatteryIcon } from "../../../../images/icons/battery-bolt-alt-svgrepo-com.svg";
import { ReactComponent as ConnectivityIcon } from "../../../../images/icons/signal-strong-svgrepo-com.svg";
import { ReactComponent as NavigationIcon } from "../../../../images/icons/navigation-svgrepo-com.svg";
import { MdSettingsSuggest } from "react-icons/md";


const featuresList = [
  {
    icon: HealthIcon,
    title: `Health and Fitness`,
    content: `Equipped with sensors to track various health metrics such
                    as heart rate, steps taken, calories burned, sleep patterns,
                    and sometimes even blood oxygen levels`,
  },
  {
    icon: NotificationIcon,
    title: `Notifications`,
    content: `Sync with your smartphone to deliver notifications for
                    calls, messages, emails, and app alerts directly to your
                    wrist`,
  },
  {
    icon: WaterIcon,
    title: `Water Resistance`,
    content: `Designed to be water-resistant, making them suitable for
                    everyday use and activities like swimming or showering
                    without worrying about damage`,
  },
  {
    icon: BatteryIcon,
    title: `Battery Life `,
    content: `Can last multiple days on a single charge, with more
                    high-end performance offering even longer battery life`,
  },
  {
    icon: ConnectivityIcon,
    title: `Connectivity and Compatibility`,
    content: `Typically connect to your smartphone via Bluetooth and are
                    compatible with both iOS and Android devices.`,
  },
  {
    icon: NavigationIcon,
    title: `Gps and Navigation`,
    content: `GPS allow users to accurately track their location in
                    real-time,Built-in compass functionality helps users by
                    providing voice-guided navigation`,
  },
  
];

export default function Features() {
  return (
    <div>
      <section id="features-section">
        <div className=".features-section mb-5">
          <div className="row head-row mb-4 mt-5">
            <div className="col-8 mx-auto text-center" data-aos="fade-up">
              <h3 className="mb-3 mt-49  ">
                {/* <span className="material-symbols-outlined fs-1 align-middle">
                  settings_motion_mode
                </span> */}
                <MdSettingsSuggest />
                &nbsp; Features & specifications
              </h3>
              <p>
                Our smartwatches offer a multifunctional experience, and
                seamless connectivity to smartphones, they provide users with
                convenience, style, and enhanced productivity on the go.
              </p>
            </div>
          </div>
          <br />

          <div className="row mx-auto features-row justify-content-center mb-4 pb-3 px-4 px-md-0">
            {featuresList.map((feature, i) => {
              return (
                <div className="col-lg-3 col-md-5 col-sm-10 feature1 mx-2 my-2 rounded-5" data-aos="zoom-in">
                  <div className="row">
                    <div className="col-12 mt-3">
                      <feature.icon className="feature-icon zoom-effect" />
                    </div>
                    <div className="col-12 mt-3">
                      <h4>{feature.title}</h4>
                    </div>
                    <div className="col-12 mt-3">
                      <p>{feature.content}</p>
                    </div>
                    <div className="col-12 mt-3">
                      <a
                        className="icon-link icon-link-hover link-warning link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover zoom-effect"
                        href="/"
                      >
                        Read more
                        <i className="fa-solid fa-arrow-right bi "></i>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="light-bg-hr">
          <hr />
        </div>
      </section>
    </div>
  );
}
