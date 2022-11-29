import OriginalBlogPostItem from "@theme-original/BlogPostItem";
import React, { useEffect, useRef } from "react";
// @ts-expect-error internal code
import { useColorMode } from "@docusaurus/theme-common";
import { useBlogPost } from "@docusaurus/theme-common/internal";

const utterancesSelector = "iframe.utterances-frame";

function BlogPostItem(props) {
  const { colorMode } = useColorMode();
  const { isBlogPostPage } = useBlogPost();
  const utterancesTheme = colorMode === "dark" ? "github-dark" : "github-light";
  const containerRef = useRef(null);

  useEffect(() => {
    if (!isBlogPostPage) return;

    const utterancesEl = containerRef.current.querySelector(utterancesSelector);

    const createUtterancesEl = () => {
      const script = document.createElement("script");

      script.src = "https://utteranc.es/client.js";
      script.setAttribute("repo", "greeng00se/greeng00se.github.io");
      script.setAttribute("issue-term", "pathname");
      script.setAttribute("label", "comment");
      script.setAttribute("theme", utterancesTheme);
      script.crossOrigin = "anonymous";
      script.async = true;

      containerRef.current.appendChild(script);
    };

    const postThemeMessage = () => {
      const message = {
        type: "set-theme",
        theme: utterancesTheme,
      };

      utterancesEl.contentWindow.postMessage(message, "https://utteranc.es");
    };

    utterancesEl ? postThemeMessage() : createUtterancesEl();
  }, [utterancesTheme]);

  return (
    <>
      <OriginalBlogPostItem {...props} />
      {isBlogPostPage && <div ref={containerRef} />}
    </>
  );
}

export default BlogPostItem;