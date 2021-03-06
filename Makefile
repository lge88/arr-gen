
SRC = $(wildcard lib/*.js)

UNAME := $(shell uname)

ifeq ($(UNAME), Linux)
	OPEN=gnome-open
endif
ifeq ($(UNAME), Darwin)
	OPEN=open
endif

build: components $(SRC) component.json
	@(node bin/build.js && touch components)

arr-gen.js: components
	@component build --standalone arrGen --name arr-gen --out .

components: component.json
	@(component install --dev && touch components)

clean:
	rm -fr build components template.js

component.json: $(SRC)
	@node bin/add-files.js

test:
	@NODE_PATH=.. mocha test

browser-test: build
	@$(OPEN) test/index.html

demo: build
	@$(OPEN) examples/index.html

.PHONY: clean arr-gen.js test
