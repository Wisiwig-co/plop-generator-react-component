import {NodePlopAPI} from "node-plop"
import component from "./component"
const fs = require('fs');
const path = require('path');


const generator = (plop: NodePlopAPI): void => {
    plop.setDefaultInclude({generators: true})
    plop.setActionType('genmulticomp', function (config) {
        let numComponents = parseInt((config as any).num);
        for (let i = 0; i < numComponents; i++) {
            fs.copyFile(path.join(__dirname + "/templates/component/{{ name }}.tsx.hbs"), path.join(__dirname + "/templates/component/{{ name }}-two.tsx.hbs"),
              err => {
                    if (err) {
                        console.log(err.message);
                    }
                });
        }
		return 'success status message';
	});
    plop.setGenerator("component", component)
}

export default generator
