install: 
		npm install

start: 
		npm run babel-node -- src/bin/brain-calc.js

lint: 
		npm run eslint src

publish: 
		npm publish
