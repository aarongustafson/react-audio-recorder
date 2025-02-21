(function(){"use strict";(r=>{try{if(typeof window>"u")return;var e=document.createElement("style");e.appendChild(document.createTextNode(r)),document.head.appendChild(e)}catch(i){console.error("vite-plugin-css-injected-by-js",i)}})(".audio-recorder{background-color:#ebebeb;box-shadow:0 2px 5px #bebebe;border-radius:20px;box-sizing:border-box;color:#000;width:40px;display:flex;align-items:center;transition:all .2s ease-in;-webkit-tap-highlight-color:transparent}.audio-recorder button{box-sizing:content-box;background:transparent;border:none;color:#000;cursor:pointer;margin:0;padding:12px}.audio-recorder img{aspect-ratio:1/1;display:block}.audio-recorder .audio-recorder-mic{border-radius:50%}.audio-recorder.recording .audio-recorder-mic{border-radius:0}.audio-recorder-timer,.audio-recorder-status{color:#000;margin-left:10px;font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif;font-size:14px;font-weight:400;line-height:1}.audio-recorder-status{margin-left:15px;display:flex;align-items:baseline;flex-grow:1;animation-name:fading-ar-status;animation-duration:2s;animation-iteration-count:infinite}.audio-recorder-status-dot{background-color:#d00;border-radius:50%;height:10px;width:9px;margin-right:5px}.recording{border-radius:12px;padding-inline:10px;width:320px;width:min-content;transition:all .2s ease-out}.audio-recorder [hidden]{display:none}.audio-recorder-visualizer{margin-left:15px;flex-grow:1;align-self:center;display:flex;align-items:center}@keyframes fading-ar-status{0%{opacity:1}50%{opacity:0}to{opacity:1}}")})();
import { jsxs as p, jsx as a, Fragment as V } from "react/jsx-runtime";
import f, { useState as n, useCallback as y, useEffect as E, Suspense as P } from "react";
const G = (w, j, z) => {
  const [T, L] = n(!1), [r, g] = n(!1), [A, i] = n(0), [t, D] = n(), [u, I] = n(), [C, e] = n(), c = y(() => {
    const M = setInterval(() => {
      i((d) => d + 1);
    }, 1e3);
    I(M);
  }, [i, I]), N = y(() => {
    u != null && clearInterval(u), I(void 0);
  }, [u, I]), S = y(() => {
    u == null && navigator.mediaDevices.getUserMedia({ audio: w ?? !0 }).then((M) => {
      L(!0);
      const d = new MediaRecorder(
        M,
        z
      );
      D(d), d.start(), c(), d.addEventListener("dataavailable", (h) => {
        e(h.data), d.stream.getTracks().forEach((x) => x.stop()), D(void 0);
      });
    }).catch((M) => {
      console.log(M.name, M.message, M.cause), j == null || j(M);
    });
  }, [
    u,
    L,
    D,
    c,
    e,
    j,
    z
  ]), v = y(() => {
    t == null || t.stop(), N(), i(0), L(!1), g(!1);
  }, [
    t,
    i,
    L,
    g,
    N
  ]), k = y(() => {
    r ? (g(!1), t == null || t.resume(), c()) : (g(!0), N(), t == null || t.pause());
  }, [t, g, c, N]);
  return {
    startRecording: S,
    stopRecording: v,
    togglePauseResume: k,
    recordingBlob: C,
    isRecording: T,
    isPaused: r,
    recordingTime: A,
    mediaRecorder: t
  };
}, J = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiCgkgdmlld0JveD0iMCAwIDQ3MCA0NzAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ3MCA0NzA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KCTxnPgoJCTxwYXRoIGQ9Ik0yMzUsMzAyLjI5NmM0Ny4xNzcsMCw4NS40MjMtMzguMjQ1LDg1LjQyMy04NS40MjNWODUuNDIzQzMyMC40MjMsMzguMjQ1LDI4Mi4xNzcsMCwyMzUsMHMtODUuNDIzLDM4LjI0NS04NS40MjMsODUuNDIzCgkJCXYxMzEuNDUxQzE0OS41NzcsMjY0LjA1MSwxODcuODIzLDMwMi4yOTYsMjM1LDMwMi4yOTZ6Ii8+CgkJPHBhdGggZD0iTTM1MC40MjMsMTM2LjE0OHYzMGgxNXY1MC43MjZjMCw3MS45MTUtNTguNTA4LDEzMC40MjMtMTMwLjQyMywxMzAuNDIzcy0xMzAuNDIzLTU4LjUwNy0xMzAuNDIzLTEzMC40MjN2LTUwLjcyNmgxNXYtMzAKCQkJaC00NXY4MC43MjZDNzQuNTc3LDMwMC4yNzMsMTM4LjU1MSwzNjksMjIwLDM3Ni41ODlWNDQwaC05MC40NDR2MzBoMjEwLjg4OXYtMzBIMjUwdi02My40MTEKCQkJYzgxLjQ0OS03LjU4OSwxNDUuNDIzLTc2LjMxNywxNDUuNDIzLTE1OS43MTZ2LTgwLjcyNkgzNTAuNDIzeiIvPgoJPC9nPgo8L3N2Zz4K", H = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIKCSB2aWV3Qm94PSIwIDAgNDcuNjA3IDQ3LjYwNyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDcuNjA3IDQ3LjYwNzsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgoJPGc+CgkJPHBhdGggZD0iTTE3Ljk5MSw0MC45NzZjMCwzLjY2Mi0yLjk2OSw2LjYzMS02LjYzMSw2LjYzMWwwLDBjLTMuNjYyLDAtNi42MzEtMi45NjktNi42MzEtNi42MzFWNi42MzFDNC43MjksMi45NjksNy42OTgsMCwxMS4zNiwwCgkJCWwwLDBjMy42NjIsMCw2LjYzMSwyLjk2OSw2LjYzMSw2LjYzMVY0MC45NzZ6Ii8+CgkJPHBhdGggZD0iTTQyLjg3Nyw0MC45NzZjMCwzLjY2Mi0yLjk2OSw2LjYzMS02LjYzMSw2LjYzMWwwLDBjLTMuNjYyLDAtNi42MzEtMi45NjktNi42MzEtNi42MzFWNi42MzEKCQkJQzI5LjYxNiwyLjk2OSwzMi41ODUsMCwzNi4yNDYsMGwwLDBjMy42NjIsMCw2LjYzMSwyLjk2OSw2LjYzMSw2LjYzMVY0MC45NzZ6Ii8+Cgk8L2c+Cjwvc3ZnPgo=", U = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiCgkgdmlld0JveD0iMCAwIDQ5NC4xNDggNDk0LjE0OCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDk0LjE0OCA0OTQuMTQ4OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+Cgk8Zz4KCQk8Zz4KCQkJPHBhdGggZD0iTTQwNS4yODQsMjAxLjE4OEwxMzAuODA0LDEzLjI4QzExOC4xMjgsNC41OTYsMTA1LjM1NiwwLDk0Ljc0LDBDNzQuMjE2LDAsNjEuNTIsMTYuNDcyLDYxLjUyLDQ0LjA0NHY0MDYuMTI0CgkJCQljMCwyNy41NCwxMi42OCw0My45OCwzMy4xNTYsNDMuOThjMTAuNjMyLDAsMjMuMi00LjYsMzUuOTA0LTEzLjMwOGwyNzQuNjA4LTE4Ny45MDRjMTcuNjYtMTIuMTA0LDI3LjQ0LTI4LjM5MiwyNy40NC00NS44ODQKCQkJCUM0MzIuNjMyLDIyOS41NzIsNDIyLjk2NCwyMTMuMjg4LDQwNS4yODQsMjAxLjE4OHoiLz4KCQk8L2c+Cgk8L2c+Cjwvc3ZnPgo=", X = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIKCSB2aWV3Qm94PSIwIDAgNDYuNzM0IDQ2LjczNCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDYuNzM0IDQ2LjczNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8Zz4KCTxwYXRoIGQ9Ik00MS4zNDYsMEg1LjM4OEMyLjQxNywwLDAsMi40MTcsMCw1LjM4OHYzNS45NThjMCwyLjk3MSwyLjQxNyw1LjM4OCw1LjM4OCw1LjM4OGgzNS45NThjMi45NzEsMCw1LjM4OC0yLjQxNyw1LjM4OC01LjM4OAoJCVY1LjM4OEM0Ni43MzMsMi40MTcsNDQuMzE2LDAsNDEuMzQ2LDB6Ii8+CjwvZz4KPC9zdmc+Cg==", F = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTYgMjU2Ij4KICA8cGF0aCBkPSJNODggMzJoODBhOCA4IDAgMCAwIDAtMTZIODhhOCA4IDAgMCAwIDAgMTZabTEyOCAxNkg0MGE4IDggMCAwIDAgMCAxNmg4djE0NGExNi4wMiAxNi4wMiAwIDAgMCAxNiAxNmgxMjhhMTYuMDIgMTYuMDIgMCAwIDAgMTYtMTZWNjRoOGE4IDggMCAwIDAgMC0xNloiLz4KPC9zdmc+Cg==";
const K = f.lazy(async () => {
  const { LiveAudioVisualizer: w } = await import("./react-audio-visualize.es-35e44496.js");
  return { default: w };
}), ii = ({
  onRecordingComplete: w,
  onNotAllowedOrFound: j,
  recorderControls: z,
  audioTrackConstraints: T,
  downloadOnSavePress: L = !1,
  downloadFileExtension: r = "webm",
  showVisualizer: g = !1,
  mediaRecorderOptions: A,
  classes: i,
  disabled: t
}) => {
  const {
    startRecording: D,
    stopRecording: u,
    togglePauseResume: I,
    recordingBlob: C,
    isRecording: e,
    isPaused: c,
    recordingTime: N,
    mediaRecorder: S
  } = z ?? // eslint-disable-next-line react-hooks/rules-of-hooks
  G(
    T,
    j,
    A
  ), [v, k] = n(!1), M = (s = !0) => {
    k(s), u();
  }, d = (s) => {
    D();
    const l = s.target;
    l == null || l.focus();
  }, h = async (s) => {
    const m = (await import("./index-1c988149.js").then((R) => R.i)).createFFmpeg({ log: !1 });
    await m.load();
    const b = "input.webm", o = `output.${r}`;
    m.FS(
      "writeFile",
      b,
      new Uint8Array(await s.arrayBuffer())
    ), await m.run("-i", b, o);
    const Q = m.FS("readFile", o);
    return new Blob([Q.buffer], {
      type: `audio/${r}`
    });
  }, x = async (s) => {
    !crossOriginIsolated && r !== "webm" && console.warn(
      'This website is not "cross-origin isolated". Audio will be downloaded in webm format, since mp3/wav encoding requires cross origin isolation. Please visit https://web.dev/cross-origin-isolation-guide/ and https://web.dev/coop-coep/ for information on how to make your website "cross-origin isolated"'
    );
    const l = crossOriginIsolated ? await h(s) : s, m = crossOriginIsolated ? r : "webm", b = URL.createObjectURL(l), o = document.createElement("a");
    o.style.display = "none", o.href = b, o.download = `audio.${m}`, document.body.appendChild(o), o.click(), o.remove();
  };
  E(() => {
    (v || z) && C != null && w != null && (w(C), L && x(C));
  }, [C]);
  const Y = "Start recording", B = "Pause recording", O = "Stop recording", Z = "Resume recording", W = "Discard Recording";
  return /* @__PURE__ */ p(
    "div",
    {
      className: `audio-recorder ${e ? "recording" : ""} ${(i == null ? void 0 : i.AudioRecorderClass) ?? ""}`,
      "data-testid": "audio_recorder",
      children: [
        /* @__PURE__ */ a(
          "button",
          {
            className: `audio-recorder-mic ${(i == null ? void 0 : i.AudioRecorderStartSaveClass) ?? ""}`,
            "data-testid": "ar_mic",
            "aria-label": e ? O : Y,
            title: e ? O : Y,
            onClick: e ? () => M() : d,
            disabled: t,
            children: /* @__PURE__ */ a(
              "img",
              {
                src: e ? X : J,
                alt: e ? O : Y,
                width: 16,
                height: 16
              }
            )
          }
        ),
        /* @__PURE__ */ p(
          "span",
          {
            role: "timer",
            "aria-atomic": "true",
            hidden: !e,
            "aria-hidden": e ? "false" : "true",
            className: `audio-recorder-timer ${(i == null ? void 0 : i.AudioRecorderTimerClass) ?? ""}`,
            "data-testid": "ar_timer",
            children: [
              Math.floor(N / 60),
              ":",
              String(N % 60).padStart(2, "0")
            ]
          }
        ),
        g ? /* @__PURE__ */ a(
          "span",
          {
            hidden: !e,
            "aria-hidden": e ? "false" : "true",
            className: "audio-recorder-visualizer",
            children: S && /* @__PURE__ */ a(P, { fallback: /* @__PURE__ */ a(V, {}), children: /* @__PURE__ */ a(
              K,
              {
                mediaRecorder: S,
                barWidth: 2,
                gap: 2,
                width: 140,
                height: 30,
                fftSize: 512,
                maxDecibels: -10,
                minDecibels: -80,
                smoothingTimeConstant: 0.4
              }
            ) })
          }
        ) : /* @__PURE__ */ p(
          "span",
          {
            hidden: !e,
            "aria-hidden": e ? "false" : "true",
            className: `audio-recorder-status ${(i == null ? void 0 : i.AudioRecorderStatusClass) ?? ""}`,
            children: [
              /* @__PURE__ */ a("span", { className: "audio-recorder-status-dot" }),
              "Recording"
            ]
          }
        ),
        /* @__PURE__ */ a(
          "button",
          {
            hidden: !e,
            "aria-hidden": e ? "false" : "true",
            tabIndex: e ? 0 : -1,
            className: `audio-recorder-options ${(i == null ? void 0 : i.AudioRecorderPauseResumeClass) ?? ""}`,
            onClick: I,
            "aria-label": c ? Z : B,
            title: c ? Z : B,
            "data-testid": "ar_pause",
            children: /* @__PURE__ */ a(
              "img",
              {
                src: c ? U : H,
                alt: c ? Z : B,
                width: 16,
                height: 16
              }
            )
          }
        ),
        /* @__PURE__ */ a(
          "button",
          {
            hidden: !e,
            "aria-hidden": e ? "false" : "true",
            tabIndex: e ? 0 : -1,
            className: `audio-recorder-options ${(i == null ? void 0 : i.AudioRecorderDiscardClass) ?? ""}`,
            onClick: () => M(!1),
            "aria-label": W,
            title: W,
            "data-testid": "ar_cancel",
            children: /* @__PURE__ */ a("img", { src: F, width: 16, height: 16, alt: W })
          }
        )
      ]
    }
  );
};
export {
  ii as AudioRecorder,
  G as useAudioRecorder
};
