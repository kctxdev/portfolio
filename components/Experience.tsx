"use client";

import { useEffect } from "react";
import Image from "next/image";
import { initEngine } from "@/lib/engine";

// Python snippet shown in the hero terminal (pre-highlighted spans).
const TERMINAL_CODE = `<code><span style="color:#ff7b72;">class</span> <span style="color:#d2a8ff;">DevSecOps</span>:
  <span style="color:#ff7b72;">def</span> <span style="color:#d2a8ff;">__init__</span>(<span style="color:#79c0ff;">self</span>):
    <span style="color:#79c0ff;">self</span>.name  = <span style="color:#a5d6ff;">"Johnata"</span>
    <span style="color:#79c0ff;">self</span>.years = <span style="color:#79c0ff;">3+</span>
    <span style="color:#79c0ff;">self</span>.stack = [
      <span style="color:#a5d6ff;">"AWS"</span>,
      <span style="color:#a5d6ff;">"Terraform"</span>,
      <span style="color:#a5d6ff;">"Linux"</span>,
    ]
    <span style="color:#79c0ff;">self</span>.degree = <span style="color:#a5d6ff;">"InfoSec"</span>
    <span style="color:#79c0ff;">self</span>.status = <span style="color:#a5d6ff;">"Cursando"</span>

<span style="color:#ff7b72;">if</span> __name__ == <span style="color:#a5d6ff;">"__main__"</span>:
  DevSecOps()</code>`;

const NAV_SECTIONS = [
  ["about", "About"],
  ["journey", "Journey"],
  ["skills", "Skills"],
  ["leadership", "Leadership"],
  ["projects", "Projects"],
  ["contact", "Contact"],
] as const;

export default function Experience() {
  useEffect(() => {
    // The engine owns the canvas, panel rendering, i18n and the spaceship game.
    initEngine();
  }, []);

  return (
    <>
      <canvas id="neural-canvas" aria-hidden="true" />

      <div className="aura aura-one" />
      <div className="aura aura-two" />

      <header className="topbar">
        <div className="signal-group">
          <a className="signal" href="#" aria-label="Johnata Williamy home">
            <span className="signal__mark" />
            <span>Johnata Williamy</span>
          </a>
          <div className="signal-socials">
            <a
              href="https://github.com/kctxdev/Kctxdev"
              target="_blank"
              rel="noopener"
              className="signal-social"
              aria-label="GitHub"
            >
              <i className="fa-brands fa-github" />
            </a>
            <a
              href="https://www.linkedin.com/in/Johnata-Williamy/"
              target="_blank"
              rel="noopener"
              className="signal-social"
              aria-label="LinkedIn"
            >
              <i className="fa-brands fa-linkedin" />
            </a>
            <a
              href="https://www.instagram.com/kctxns"
              target="_blank"
              rel="noopener"
              className="signal-social"
              aria-label="Instagram"
            >
              <i className="fa-brands fa-instagram" />
            </a>
            <a
              href="{/Johnata-Silva-Resume.pdf"
              download="Johnata-Silva-Resume.pdf"
              className="cv-download"
              data-i18n="downloadCv"
              aria-label="Download CV"
            >
              <i className="fa-solid fa-file-arrow-down" />
              <span>CV</span>
            </a>
          </div>
        </div>
        <nav className="nav" aria-label="Portfolio sections">
          {NAV_SECTIONS.map(([key, label]) => (
            <button key={key} className="nav__item" data-section={key}>
              {label}
            </button>
          ))}
        </nav>
        <div className="lang-toggle" aria-label="Language">
          <button className="lang-toggle__item active" data-lang="en">
            EN
          </button>
          <button className="lang-toggle__item" data-lang="pt">
            PT
          </button>
        </div>
      </header>

      <main className="experience" id="experience">
        <section className="identity" aria-label="Intro">
          <div className="identity__inner">
            <div className="identity__photo">
              <Image src="/avatar.png" alt="Johnata Williamy" width={180} height={180} priority />
            </div>
            <p className="identity__eyebrow" data-i18n="heroEyebrow">
              Cloud & DevSecOps Analyst · AWS & Terraform
            </p>
            <h1 data-i18n="heroTitle">Johnata Williamy</h1>
            <p className="identity__copy">
              Cloud & DevSecOps Expert automating infrastructure & security via AWS and Terraform with full commitment to Security by Design, active data shielding and high resource management.
            </p>
            <div className="identity__stats">
              <div className="istat">
                <strong>3+</strong>
                <span data-i18n="statYears">years building</span>
              </div>
              <div className="istat">
                <strong>10+</strong>
                <span data-i18n="statProjects">projects realized</span>
              </div>
              <div className="istat">
                <strong></strong>
                <span data-i18n=""></span>
              </div>
            </div>

            <div className="identity__languages">
              <span className="lang-badge">
                Portuguese <small>Native</small>
              </span>
              <span className="lang-badge">
                English <small>Intermediate</small>
              </span>
            </div>

            
            <div className="terminal" id="terminal">
              <div className="terminal__bar">
                <span className="terminal__dot" style={{ background: "#ff5f57" }} />
                <span className="terminal__dot" style={{ background: "#febc2e" }} />
                <span className="terminal__dot" style={{ background: "#28c840" }} />
                <span className="terminal__title">~/Johnata/developer.py</span>
              </div>
              <div className="terminal__body">
                <pre
                  style={{
                    margin: 0,
                    padding: 0,
                    lineHeight: 1.4,
                    fontFamily: "var(--mono)",
                    fontSize: "0.85rem",
                  }}
                  dangerouslySetInnerHTML={{ __html: TERMINAL_CODE }}
                />
              </div>
            </div>
          </div>
        </section>

        <aside className="section-panel" id="section-panel" aria-live="polite">
          <button
            className="section-panel__close"
            id="panel-close"
            type="button"
            aria-label="Close section"
          >
            <i className="fa-solid fa-arrow-left" />
            <span data-i18n="backHome">Back to neural map</span>
          </button>
          <div className="section-panel__meta">
            <span id="panel-kicker">Active cluster</span>
            <span className="section-panel__pulse" />
          </div>
          <div id="panel-content" />
        </aside>

        <div className="hint" id="hint">
          <span className="hint__dot" />
          <span data-i18n="hint">Click a neural cluster or use the top navigation</span>
        </div>

        <div className="explore-hud" id="explore-hud" aria-hidden="true">
          <span>Exploration mode</span>
          <strong id="explore-score">0</strong>
          <small>WASD / Setas: Mover &nbsp;·&nbsp; Espaço / Enter: Atirar</small>
        </div>
        <button
          id="explore-exit"
          className="explore-exit-btn"
          data-i18n="exploreExit"
          aria-hidden="true"
        >
          Stop / Exit
        </button>
      </main>

      <div className="modal-overlay" id="project-modal" aria-hidden="true">
        <article
          className="modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <button className="modal__close" id="modal-close" aria-label="Close project">
            <i className="fa-solid fa-xmark" />
          </button>
          <div id="modal-content" />
        </article>
      </div>
    </>
  );
}
