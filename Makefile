install: 
		npm install

start: 
		npm run babel-node -- src/bin/brain-balance.js

lint: 
		npm run eslint src

publish: 
		npm publish
