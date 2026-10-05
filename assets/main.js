/* Yohaku Loom — 控えめな演出のみ。JSが無効でも内容はすべて表示されます。 */
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

  if (!hasIO) return;

  /* スクロールに合わせて、要素をふわっと表示する */
  if (!reduceMotion) {
    var targets = document.querySelectorAll(
      ".section-head, .concerns > li, .change, .concerns-note, .plan, .maintenance," +
      " .case:not([hidden]), .flow > li, .profile-row, .contact-card"
    );
    var revealer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealer.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });

    targets.forEach(function (el) {
      var siblings = el.parentElement ? Array.prototype.indexOf.call(el.parentElement.children, el) : 0;
      el.style.transitionDelay = Math.min(siblings, 4) * 70 + "ms";
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
