mkdir -p test-results
semgrep --config p/golang --json --quiet |jq > ./test-results/golang.json
semgrep --config p/react --json --quiet |jq > ./test-results/react.json
semgrep --config p/javascript --json --quiet |jq > ./test-results/javascript.json
semgrep --config="r/python.jinja2.security.audit.autoescape-disabled.autoescape-disabled" --json --quiet |jq > ./test-results/jinja2.json
semgrep --config="r/javascript.express.security.audit.res-render-injection.res-render-injection"
semgrep --config="r/python"
