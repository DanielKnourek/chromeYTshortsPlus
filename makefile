build: .clean
	yarn run build

.PHONY: clean
.clean:
	rm -r ./dist/*

.PHONY: copy
copy:
	cp -r ./dist/ /mnt/d/Projekty/IT-support/

.PHONY: all
all: build copy