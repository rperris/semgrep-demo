function createMarkup() {
  return { __html: "<img src=x onerror=alert(1)/>" };
}

function TestComponent() {
  return <div dangerouslySetInnerHTML={createMarkup()} />;
}
