// StudySprint Android/Web backend configuration.
// In the Android app, 10.0.2.2 points to the host computer from the Android emulator.
// For a physical phone, use Server settings on the sign-in screen and enter your computer/server URL.
(() => {
  const saved = localStorage.getItem('ss_api_base') || '';
  const nativeFileApp = location.protocol === 'file:';
  window.STUDYSPRINT_NATIVE = nativeFileApp;
  window.STUDYSPRINT_API_BASE = saved || (nativeFileApp ? 'http://10.0.2.2:8080' : '');
})();
