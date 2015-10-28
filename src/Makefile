build: package.json
	cd /style && npm install &2>/dev/null && \
	cd /src && npm install &2>/dev/null && \
	npm install && \
	node_modules/.bin/gulp "${TASK}"

.PHONY: build
