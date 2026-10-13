/* Yohaku Loom — 控えめな演出とメニュー操作のみ。JSが無効でも内容はすべて表示されます。 */
(function () {
  "use strict";

  var header = document.querySelector(".site-header");
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var hasIO = "IntersectionObserver" in window;

  /* ヘッダー：スクロールしたら薄い影を付ける */
  if (header) {
    var onScroll = function () {
      header.classList.toggle("is-scrolled", window.scrollY > 8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* スマートフォン：メニューの開閉 */
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");
  if (toggle && nav) {
    var setOpen = function (open) {
      toggle.setAttribute("aria-expanded", String(open));
      nav.classList.toggle("is-open", open);
    };
    toggle.addEventListener("click", function () {
      setOpen(toggle.getAttribute("aria-expanded") !== "true");
    });
    nav.addEventListener("click", function (e) {
      if (e.target.closest("a")) setOpen(false);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && nav.classList.contains("is-open")) {
        setOpen(false);
        toggle.focus();
      }
    });
  }

  if (!hasIO) return;

  /* スクロールに合わせて、要素をふわっと表示する */
  if (!reduceMotion) {
    var targets = document.querySelectorAll(
      ".section-head, .worry, .callout, .service, .sample, .work, .factor, .assurance," +
      " .flow-step, .prepare, .about-main, .about-card, .faq, .contact"
    );
    var revealer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealer.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.04 });

    targets.forEach(function (el) {
      var siblings = el.parentElement ? Array.prototype.indexOf.call(el.parentElement.children, el) : 0;
      el.style.transitionDelay = Math.min(siblings, 4) * 60 + "ms";
      el.classList.add("reveal");
      revealer.observe(el);
    });
  }

  /* ナビ：いま見ているセクションを示す */
  var links = document.querySelectorAll('.site-nav a[href^="#"]');
  var map = {};
  links.forEach(function (a) {
    var section = document.querySelector(a.getAttribute("href"));
    if (section) map[section.id] = a;
  });
  var spy = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      var link = map[entry.target.id];
      if (link) link.classList.toggle("is-active", entry.isIntersecting);
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  Object.keys(map).forEach(function (id) {
    spy.observe(document.getElementById(id));
  });
})();
