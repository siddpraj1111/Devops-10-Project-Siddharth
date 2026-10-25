
import { useState } from "react";
import "./styles.css";

const services = [
  { name: "React Web App", detail: "Frontend container", port: "8081", status: "Running" },
  { name: "Jenkins", detail: "CI/CD automation", port: "8080", status: "Running" },
  { name: "Docker Engine", detail: "Image and container runtime", port: "—", status: "Running" },
  { name: "Monitoring", detail: "Metrics integration", port: "9090", status: "Planned" },
];

const stages = [
  { number: "01", name: "Source", detail: "Fetch code from GitHub", state: "Ready" },
  { number: "02", name: "Build", detail: "Install dependencies and build React", state: "Ready" },
  { number: "03", name: "Package", detail: "Create a Docker image", state: "Next" },
  { number: "04", name: "Deploy", detail: "Run the container on EC2", state: "Next" },
];

function App() {
  const [page, setPage] = useState("Overview");
  const [notice, setNotice] = useState("");

  function showDeployment() {
    setPage("Pipeline");
    setNotice("Pipeline preview opened. Live Jenkins integration will be configured separately.");
  }

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <a className="brand" href="#overview" onClick={() => setPage("Overview")}>
          <span className="brand-icon">P</span>
          <span>pulse<span className="brand-light">board</span></span>
        </a>

        <p className="nav-caption">WORKSPACE</p>
        <nav className="nav-menu">
          {["Overview", "Pipeline", "Services"].map((item) => (
            <button
              key={item}
              className={`nav-link ${page === item ? "selected" : ""}`}
              onClick={() => {
                setPage(item);
                setNotice("");
              }}
            >
              <span className="nav-symbol">
                {item === "Overview" ? "◫" : item === "Pipeline" ? "⇢" : "▤"}
              </span>
              {item}
              {item === "Services" && <span className="nav-count">{services.length}</span>}
            </button>
          ))}
        </nav>

        <div className="sidebar-bottom">
          <span className="live-dot" />
          <div>
            <strong>EC2 workspace</strong>
            <small>Deployment target</small>
          </div>
        </div>
      </aside>

      <main className="main-area">
        <header className="topbar">
          <div className="breadcrumb">Workspace <span>/</span> {page}</div>
          <div className="topbar-right">
            <span className="environment"><span className="live-dot" /> DEVELOPMENT</span>
            <span className="user-avatar">SP</span>
          </div>
        </header>

        <div className="content">
          <section className="page-title">
            <div>
              <p className="eyebrow">DEPLOYMENT CONTROL CENTER</p>
              <h1>{page === "Overview" ? "The Devops Code Has been Changed 2nd time." : page}</h1>
              <p className="subtitle">A workspace for your React, Docker and Jenkins learning project.</p>
            </div>
            <button className="primary-button" onClick={showDeployment}>
              View pipeline <span>↗</span>
            </button>
          </section>

          {notice && <div className="notice">{notice}</div>}

          {page === "Overview" && (
            <>
              <section className="hero">
                <div className="hero-copy">
                  <span className="hero-tag">YOUR DEVOPS JOURNEY</span>
                  <h2>From commit<br />to container.</h2>
                  <p>Build your frontend, package it with Docker, and deliver it through a Jenkins pipeline to EC2.</p>
                  <button className="hero-button" onClick={showDeployment}>Explore workflow <span>→</span></button>
                </div>
                <div className="terminal-card">
                  <div className="terminal-bar"><i /><i /><i /><span>deploy.sh</span></div>
                  <div className="terminal-code">
                    <p><b>$</b> git push origin main</p>
                    <p className="terminal-ok">✓ Source ready</p>
                    <p className="terminal-ok">✓ Dockerfile configured</p>
                    <p><b>$</b> deploy --target ec2</p>
                    <p className="terminal-muted">Waiting for Jenkins pipeline...</p>
                  </div>
                </div>
                <div className="hero-orbit orbit-a" />
                <div className="hero-orbit orbit-b" />
              </section>

              <section className="metrics-grid">
                <article className="metric-card">
                  <span className="metric-icon purple">⌘</span>
                  <p>Pipeline stages</p>
                  <strong>04</strong>
                  <small>Source to deployment</small>
                </article>
                <article className="metric-card">
                  <span className="metric-icon green">✓</span>
                  <p>Configured services</p>
                  <strong>03</strong>
                  <small>Demo configuration</small>
                </article>
                <article className="metric-card">
                  <span className="metric-icon orange">▣</span>
                  <p>Container port</p>
                  <strong>8081</strong>
                  <small>Planned web access</small>
                </article>
                <article className="metric-card">
                  <span className="metric-icon blue">⌁</span>
                  <p>Deployment state</p>
                  <strong className="metric-text">I AM SIDDHARTH PRAJAPATI THIRD YEAR IT B 26</strong>
                  <small>Pipeline setup pending</small>
                </article>
              </section>

              <div className="two-column">
                <section className="panel">
                  <div className="panel-heading">
                    <div><h2>Release workflow</h2><p>The planned delivery path</p></div>
                    <button className="text-button" onClick={() => setPage("Pipeline")}>View all ↗</button>
                  </div>
                  <div className="stage-list">
                    {stages.map((stage) => (
                      <div className="stage-row" key={stage.number}>
                        <span className="stage-number">{stage.number}</span>
                        <div className="stage-copy"><strong>{stage.name}</strong><small>{stage.detail}</small></div>
                        <span className={`stage-state ${stage.state === "Ready" ? "ready" : ""}`}>{stage.state}</span>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="panel">
                  <div className="panel-heading">
                    <div><h2>Environment services</h2><p>Illustrative service inventory</p></div>
                    <button className="text-button" onClick={() => setPage("Services")}>View all ↗</button>
                  </div>
                  <div className="service-list">
                    {services.slice(0, 3).map((service) => (
                      <div className="service-row" key={service.name}>
                        <span className="service-symbol">◇</span>
                        <div className="service-copy"><strong>{service.name}</strong><small>{service.detail}</small></div>
                        <span className={`service-status ${service.status === "Running" ? "running" : ""}`}>{service.status}</span>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            </>
          )}

          {page === "Pipeline" && (
            <section className="panel detail-panel">
              <div className="panel-heading">
                <div><h2>CI/CD delivery stages</h2><p>How your code will travel from GitHub to EC2</p></div>
                <span className="demo-label">PIPELINE PLAN</span>
              </div>
              {stages.map((stage, index) => (
                <div className="pipeline-detail" key={stage.number}>
                  <span className="stage-number">{stage.number}</span>
                  <div className="stage-copy">
                    <strong>{stage.name}</strong>
                    <small>{stage.detail}</small>
                    <p>{[
                      "Jenkins checks out the source code from your GitHub repository.",
                      "Node.js installs the dependencies and creates the production build.",
                      "Docker packages the production files into an image served by Nginx.",
                      "Jenkins replaces the previous container and checks the health endpoint."
                    ][index]}</p>
                  </div>
                  <span className={`stage-state ${stage.state === "Ready" ? "ready" : ""}`}>{stage.state}</span>
                </div>
              ))}
              <p className="disclaimer">This is a project plan, not live Jenkins build data. We will connect the actual pipeline later.</p>
            </section>
          )}

          {page === "Services" && (
            <section className="panel detail-panel">
              <div className="panel-heading">
                <div><h2>Service inventory</h2><p>Planned components for this project</p></div>
                <span className="demo-label">DEMO DATA</span>
              </div>
              {services.map((service) => (
                <div className="service-row service-row-large" key={service.name}>
                  <span className="service-symbol">◇</span>
                  <div className="service-copy"><strong>{service.name}</strong><small>{service.detail} · Port {service.port}</small></div>
                  <span className={`service-status ${service.status === "Running" ? "running" : ""}`}>{service.status}</span>
                </div>
              ))}
              <p className="disclaimer">These are example labels, not verified live health checks. The Monitoring service is planned, not installed.</p>
            </section>
          )}

          <footer className="footer">
            <span><b>PulseBoard</b> · React + Vite + Docker + Nginx</span>
            <span>Built as a DevOps learning project</span>
          </footer>
        </div>
      </main>
    </div>
  );
}

export default App;
