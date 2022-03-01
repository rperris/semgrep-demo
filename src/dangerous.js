function createMarkup() {
  return { __html: "<img src=x onerror=alert(1)/>" };
}

function TestComponent() {
  // ruleid:react-dangerouslysetinnerhtml
  return <div dangerouslySetInnerHTML={createMarkup()} />;
}

function AnotherTestComponent() {
  // ruleid:react-dangerouslysetinnerhtml
  return <div dangerouslySetInnerHTML={createMarkup()} />;
}
