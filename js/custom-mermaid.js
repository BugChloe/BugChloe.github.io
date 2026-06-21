document.addEventListener('DOMContentLoaded', function() {
  if (typeof mermaid !== 'undefined') {
    mermaid.initialize({
      startOnLoad: true,
      theme: 'default',
      fontSize: 10,
      flowchart: {
        useMaxWidth: false,
        htmlLabels: true,
        curve: 'linear'
      },
      width: 600,
      height: 400
    });
  }
});
