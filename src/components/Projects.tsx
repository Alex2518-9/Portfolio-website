"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import TerminalWindow from "./TerminalWindow";
import { projects, type Project } from "@/data/projects";
import { usePortfolioPreferences } from "./PortfolioPreferences";

export default function Projects() {
  const { language, theme } = usePortfolioPreferences();
  const japanese = language === "ja";
  const [activeVideo, setActiveVideo] = useState<Project | null>(null);
  const videoDialog = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (activeVideo && videoDialog.current && !videoDialog.current.open) {
      videoDialog.current.showModal();
    }
  }, [activeVideo]);

  function closeVideo() {
    videoDialog.current?.close();
  }

  return (
    <section id="work" className="border-t border-line bg-surface/40">
      <div className="mx-auto max-w-4xl px-6 py-20 sm:py-24">
        <p className="font-mono text-sm text-accent">
          {japanese
            ? "制作実績"
            : theme === "light"
              ? "A selection of my work"
              : "# work"}
        </p>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight text-text sm:text-3xl">
          {japanese ? "これまでの仕事" : "Selected work"}
        </h2>

        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {projects.map((project) => (
            <TerminalWindow
              key={project.name}
              title={project.file}
              className={project.featured ? "sm:col-span-2" : ""}
            >
              {project.image && project.video ? (
                <button
                  type="button"
                  className="project-video-preview"
                  onClick={() => setActiveVideo(project)}
                  aria-label={
                    japanese
                      ? `${project.jaName ?? project.name}の動画を見る`
                      : `Play ${project.name} video`
                  }
                >
                  <Image
                    src={project.image}
                    alt=""
                    width={project.imageWidth ?? 2642}
                    height={project.imageHeight ?? 1108}
                    className="aspect-[2.38] w-full object-cover"
                  />
                  <span
                    className="project-preview-play project-play-icon"
                    aria-hidden="true"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5.8c0-.7.8-1.1 1.4-.7l10.1 6.2a.8.8 0 0 1 0 1.4L9.4 18.9c-.6.4-1.4 0-1.4-.7V5.8Z" />
                    </svg>
                  </span>
                </button>
              ) : project.image ? (
                <Image
                  src={project.image}
                  alt={project.imageAlt ?? project.name}
                  width={project.imageWidth ?? 2642}
                  height={project.imageHeight ?? 1108}
                  className="mb-5 aspect-[2.38] w-full rounded-lg border border-line object-cover"
                />
              ) : null}
              <h3 className="text-base font-semibold text-text">
                {japanese ? (project.jaName ?? project.name) : project.name}
              </h3>
              <p className="mt-2 max-w-lg text-sm leading-relaxed text-text-muted">
                {japanese ? project.jaDescription : project.description}
              </p>
              {(project.video || project.github || project.website) && (
                <div className="project-actions mt-5">
                  {project.video && !project.image && (
                    <button
                      type="button"
                      className="project-video-trigger"
                      onClick={() => setActiveVideo(project)}
                      aria-label={
                        japanese
                          ? `${project.jaName ?? project.name}の動画を見る`
                          : `Play ${project.name} video`
                      }
                    >
                      <span className="project-play-icon" aria-hidden="true">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                          <path d="M8 5.8c0-.7.8-1.1 1.4-.7l10.1 6.2a.8.8 0 0 1 0 1.4L9.4 18.9c-.6.4-1.4 0-1.4-.7V5.8Z" />
                        </svg>
                      </span>
                      <span>{japanese ? "動画を見る" : "Watch video"}</span>
                    </button>
                  )}
                  {project.github && (
                    <a
                      className="project-github-link"
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span>
                        {japanese ? "コードを見てみる" : "Explore the code"}
                      </span>
                      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <path d="M7 17 17 7M8 7h9v9" />
                      </svg>
                    </a>
                  )}
                  {project.website && (
                    <a
                      className="project-github-link"
                      href={project.website}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span>{japanese ? "サイトを見る" : "Visit website"}</span>
                      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <path d="M7 17 17 7M8 7h9v9" />
                      </svg>
                    </a>
                  )}
                </div>
              )}
              <ul className="mt-4 flex flex-wrap gap-2 font-mono text-xs">
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-md border border-line bg-surface-alt px-2 py-1 text-text-muted"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </TerminalWindow>
          ))}
        </div>
      </div>
      <dialog
        ref={videoDialog}
        className="project-video-dialog"
        aria-labelledby="project-video-title"
        onClose={() => setActiveVideo(null)}
        onCancel={(event) => {
          event.preventDefault();
          closeVideo();
        }}
        onKeyDown={(event) => {
          if (event.key === "Escape") {
            event.preventDefault();
            closeVideo();
          }
        }}
        onClick={(event) => {
          if (event.target === event.currentTarget) closeVideo();
        }}
      >
        {activeVideo && (
          <div className="project-video-modal">
            <div className="project-video-modal-header">
              <h3 id="project-video-title">
                {japanese
                  ? (activeVideo.jaName ?? activeVideo.name)
                  : activeVideo.name}
              </h3>
              <button
                type="button"
                className="project-video-close"
                onClick={closeVideo}
                aria-label={japanese ? "動画を閉じる" : "Close video"}
              >
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="m6 6 12 12M18 6 6 18" />
                </svg>
              </button>
            </div>
            <video
              key={activeVideo.video}
              className="project-video-player"
              controls
              autoPlay
              playsInline
              preload="metadata"
              aria-label={
                japanese
                  ? `${activeVideo.jaName ?? activeVideo.name}の動画`
                  : `${activeVideo.name} video`
              }
            >
              <source src={activeVideo.video} />
              {japanese
                ? "お使いのブラウザでは動画を再生できません。"
                : "Your browser does not support video playback."}
            </video>
          </div>
        )}
      </dialog>
    </section>
  );
}
