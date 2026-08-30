type EverythingAppProps = {
  title: string;
  weekly: string;
  uptime: string;
  support: string;
  secure: string;
  icon1: any;
  icon2: any;
  icon3: any;
  icon4: any;
};


function EverythingApp({
  title,
  support,
  secure,
  uptime,
  weekly,
  icon1,
  icon2,
  icon3,
  icon4
}: EverythingAppProps) {
  return (
    <section className="everything-app">
      <div className="everything-app-container">
        <div className="everything-main">
          {title}
        </div>

        <div className="everything-item">
          <span className="everything-icon">◔</span>
          <span>{support}</span>
        </div>

        <div className="everything-item">
          <span className="everything-icon">♻</span>
          <span>{weekly}</span>
        </div>

        <div className="everything-item">
          <span className="everything-icon">♢</span>
          <span>{secure}</span>
        </div>

        <div className="everything-item">
          <span className="everything-icon">◷</span>
          <span>{uptime}</span>
        </div>
      </div>
    </section>
  );
}

export default EverythingApp;