build: node_modules
	node_modules/.bin/gulp "${TASK}"

node_modules: package.json
	cd /style && npm install && npm link && \
	cd /src && npm link monera-style && \
	npm install

.PHONY: build
